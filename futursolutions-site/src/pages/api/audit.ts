import type { APIRoute } from 'astro';

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 6;
const MAX_FIELD_LENGTH = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

function clean(value: unknown): string {
	if (typeof value !== 'string') return '';
	return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function json(status: number, body: Record<string, unknown>): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	const ip = clientAddress ?? 'unknown';
	if (isRateLimited(ip)) {
		return json(429, { ok: false, message: 'Too many requests. Please try again in a minute.' });
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return json(400, { ok: false, message: 'Invalid request.' });
	}

	// Honeypot — a real user never fills this hidden field. Silently accept to deny bots feedback.
	if (clean(body['company_website'])) {
		return json(200, { ok: true });
	}

	const name = clean(body['name']);
	const email = clean(body['email']);

	const errors: Record<string, string> = {};
	if (!name) errors.name = 'Please enter your name.';
	if (!email) errors.email = 'Please enter your email.';
	else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';

	if (Object.keys(errors).length > 0) {
		return json(422, { ok: false, errors });
	}

	const lead = {
		name,
		email,
		businessName: clean(body['business-name']),
		websiteUrl: clean(body['website-url']),
		businessType: clean(body['business-type']),
		location: clean(body['location']),
		primaryGoal: clean(body['primary-goal']),
		paymentModel: clean(body['payment-model']),
		biggestIssue: clean(body['biggest-website-issue']),
		schedulingSystem: clean(body['scheduling-system']),
		servicesOfInterest: Array.isArray(body['services-of-interest'])
			? (body['services-of-interest'] as unknown[]).map(clean).filter(Boolean)
			: [],
		preferredNextStep: clean(body['preferred-next-step']),
		templateInterest: clean(body['templateInterest']),
		templateName: clean(body['templateName']),
		templateCategory: clean(body['templateCategory']),
		source: clean(body['source']) || 'Website Audit Page',
		leadType: clean(body['leadType']) || 'Website Audit Request',
		inquiryType: clean(body['inquiryType']) || 'website_audit',
		submittedAt: new Date().toISOString(),
	};

	// Forward to GoHighLevel (or any inbound webhook) when configured.
	// Set GHL_WEBHOOK_URL in the Vercel project env to activate delivery.
	const webhookUrl = process.env.GHL_WEBHOOK_URL;
	if (webhookUrl) {
		try {
			const res = await fetch(webhookUrl, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(lead),
			});
			if (!res.ok) {
				console.error('Audit webhook responded with', res.status);
				return json(502, { ok: false, message: 'We could not submit your request. Please try again or email us directly.' });
			}
		} catch (err) {
			console.error('Audit webhook error:', err);
			return json(502, { ok: false, message: 'We could not submit your request. Please try again or email us directly.' });
		}
	} else {
		// No delivery target configured yet — log so the submission is not lost in preview/dev.
		console.log('Audit lead (no GHL_WEBHOOK_URL configured):', JSON.stringify(lead));
	}

	return json(200, { ok: true });
};

export const ALL: APIRoute = () => json(405, { ok: false, message: 'Method not allowed.' });
