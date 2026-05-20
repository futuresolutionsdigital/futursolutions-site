import type { APIRoute } from 'astro';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from '../../lib/chatbot-system-prompt';

export const prerender = false;

const MAX_MESSAGES = 30;
const MAX_MESSAGE_LENGTH = 1000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 12;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

let lastCleanup = Date.now();

function isRateLimited(ip: string): boolean {
	const now = Date.now();

	if (now - lastCleanup > 300_000) {
		for (const [key, entry] of rateLimitMap) {
			if (now > entry.resetAt) rateLimitMap.delete(key);
		}
		lastCleanup = now;
	}

	const entry = rateLimitMap.get(ip);

	if (!entry || now > entry.resetAt) {
		rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
		return false;
	}

	entry.count++;
	return entry.count > RATE_LIMIT_MAX;
}

interface ChatMessage {
	role: 'user' | 'assistant';
	content: string;
}

function validateMessages(body: unknown): ChatMessage[] | null {
	if (!body || typeof body !== 'object') return null;
	const { messages } = body as { messages?: unknown };
	if (!Array.isArray(messages)) return null;
	if (messages.length === 0 || messages.length > MAX_MESSAGES) return null;

	for (const msg of messages) {
		if (!msg || typeof msg !== 'object') return null;
		if (msg.role !== 'user' && msg.role !== 'assistant') return null;
		if (typeof msg.content !== 'string') return null;
		if (msg.content.length === 0 || msg.content.length > MAX_MESSAGE_LENGTH) return null;
	}

	const lastMsg = messages[messages.length - 1];
	if (lastMsg.role !== 'user') return null;

	return messages as ChatMessage[];
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	const apiKey = import.meta.env.OPENAI_API_KEY;
	if (!apiKey) {
		return new Response(JSON.stringify({ error: 'Server configuration error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const ip = clientAddress || 'unknown';
	if (isRateLimited(ip)) {
		return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }), {
			status: 429,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const messages = validateMessages(body);
	if (!messages) {
		return new Response(JSON.stringify({ error: 'Invalid messages format' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const openai = new OpenAI({ apiKey });

	try {
		const stream = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{ role: 'system', content: SYSTEM_PROMPT },
				...messages,
			],
			stream: true,
			max_tokens: 600,
			temperature: 0.7,
		});

		const encoder = new TextEncoder();
		const readable = new ReadableStream({
			async start(controller) {
				try {
					for await (const chunk of stream) {
						const delta = chunk.choices[0]?.delta?.content;
						if (delta) {
							controller.enqueue(encoder.encode(`data: ${JSON.stringify(delta)}\n\n`));
						}
					}
					controller.enqueue(encoder.encode('data: [DONE]\n\n'));
					controller.close();
				} catch {
					controller.enqueue(encoder.encode(`data: ${JSON.stringify('[ERROR]')}\n\n`));
					controller.close();
				}
			},
		});

		return new Response(readable, {
			status: 200,
			headers: {
				'Content-Type': 'text/event-stream',
				'Cache-Control': 'no-cache',
				Connection: 'keep-alive',
			},
		});
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Unknown error';
		console.error('OpenAI API error:', message);
		return new Response(JSON.stringify({ error: 'Failed to get response. Please try again.' }), {
			status: 502,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
