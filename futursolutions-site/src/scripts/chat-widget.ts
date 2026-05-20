interface Message {
	role: 'user' | 'assistant';
	content: string;
}

const GREETING =
	"Hi — I'm the FutureSolutions Fit Assistant. I can help you figure out which website path fits your business best. What kind of business are you building for?";

const widget = document.querySelector<HTMLElement>('[data-chat-widget]')!;
const toggleBtn = document.querySelector<HTMLButtonElement>('[data-chat-toggle]')!;
const closeBtn = document.querySelector<HTMLButtonElement>('[data-chat-close]')!;
const messagesEl = document.querySelector<HTMLElement>('[data-chat-messages]')!;
const form = document.querySelector<HTMLFormElement>('[data-chat-form]')!;
const input = document.querySelector<HTMLInputElement>('[data-chat-input]')!;
const sendBtn = document.querySelector<HTMLButtonElement>('[data-chat-send]')!;

const messages: Message[] = [];
let isStreaming = false;
let hasOpened = false;

function toggleOpen() {
	const opening = !widget.classList.contains('is-open');
	widget.classList.toggle('is-open');
	toggleBtn.setAttribute('aria-expanded', String(opening));

	if (opening) {
		if (!hasOpened) {
			hasOpened = true;
			appendMessage('assistant', GREETING);
		}
		input.focus();
	}
}

toggleBtn.addEventListener('click', toggleOpen);
closeBtn.addEventListener('click', () => {
	widget.classList.remove('is-open');
	toggleBtn.setAttribute('aria-expanded', 'false');
});

function escapeHtml(text: string): string {
	const div = document.createElement('div');
	div.textContent = text;
	return div.innerHTML;
}

function formatContent(raw: string): string {
	let html = escapeHtml(raw);

	// Convert markdown-style links or plain paths to clickable links
	html = html.replace(
		/(\/(?:audit|templates|services|resources|seo|backend)(?:\/[a-z0-9-]+)?(?:\?[a-z0-9=&-]+)?)/g,
		'<a href="$1" class="chat-msg__link">$1</a>',
	);

	// Convert **bold** to <strong>
	html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

	// Convert bullet lines
	html = html.replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>');
	html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

	// Paragraphs
	html = html
		.split('\n\n')
		.filter((p) => p.trim())
		.map((p) => {
			if (p.includes('<ul>') || p.includes('<li>')) return p;
			return `<p>${p}</p>`;
		})
		.join('');

	return html;
}

function appendMessage(role: Message['role'], content: string) {
	messages.push({ role, content });
	renderMessage(role, content);
}

function renderMessage(role: Message['role'], content: string, el?: HTMLElement) {
	const bubble = el || document.createElement('div');
	bubble.className = `chat-msg chat-msg--${role}`;
	bubble.innerHTML = `<div class="chat-msg__body">${formatContent(content)}</div>`;

	if (!el) {
		messagesEl.appendChild(bubble);
	}

	scrollToBottom();
}

function scrollToBottom() {
	messagesEl.scrollTop = messagesEl.scrollHeight;
}

function setLoading(loading: boolean) {
	isStreaming = loading;
	sendBtn.disabled = loading;
	input.disabled = loading;
}

async function sendMessage(text: string) {
	appendMessage('user', text);
	setLoading(true);

	const streamBubble = document.createElement('div');
	streamBubble.className = 'chat-msg chat-msg--assistant';
	streamBubble.innerHTML = '<div class="chat-msg__body"><span class="chat-msg__typing">...</span></div>';
	messagesEl.appendChild(streamBubble);
	scrollToBottom();

	let fullResponse = '';

	try {
		const res = await fetch('/api/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				messages: messages.map((m) => ({ role: m.role, content: m.content })),
			}),
		});

		if (!res.ok) {
			const err = await res.json().catch(() => ({ error: 'Something went wrong.' }));
			streamBubble.innerHTML = `<div class="chat-msg__body"><p>${escapeHtml(err.error || 'Something went wrong. Please try again.')}</p></div>`;
			setLoading(false);
			return;
		}

		const reader = res.body?.getReader();
		if (!reader) throw new Error('No stream');

		const decoder = new TextDecoder();

		while (true) {
			const { done, value } = await reader.read();
			if (done) break;

			const chunk = decoder.decode(value, { stream: true });
			const lines = chunk.split('\n');

			for (const line of lines) {
				if (!line.startsWith('data: ')) continue;
				const payload = line.slice(6);

				if (payload === '[DONE]') break;

				try {
					const text = JSON.parse(payload) as string;
					if (text === '[ERROR]') {
						streamBubble.innerHTML =
							'<div class="chat-msg__body"><p>Something went wrong. Please try again.</p></div>';
						setLoading(false);
						return;
					}
					fullResponse += text;
					renderMessage('assistant', fullResponse, streamBubble);
				} catch {
					// skip malformed chunks
				}
			}
		}

		if (fullResponse) {
			messages.push({ role: 'assistant', content: fullResponse });
		}
	} catch {
		streamBubble.innerHTML =
			'<div class="chat-msg__body"><p>Connection error. Please check your internet and try again.</p></div>';
	}

	setLoading(false);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value.trim();
	if (!text || isStreaming) return;
	input.value = '';
	sendMessage(text);
});

// Inject message bubble styles
const style = document.createElement('style');
style.textContent = `
	.chat-msg {
		display: flex;
		max-width: 88%;
	}
	.chat-msg--user {
		align-self: flex-end;
	}
	.chat-msg--assistant {
		align-self: flex-start;
	}
	.chat-msg__body {
		padding: 0.6rem 0.85rem;
		border-radius: 14px;
		font-size: 0.86rem;
		line-height: 1.55;
		word-break: break-word;
	}
	.chat-msg--user .chat-msg__body {
		background: #0F172A;
		color: #fff;
		border-bottom-right-radius: 4px;
	}
	.chat-msg--assistant .chat-msg__body {
		background: #F5F7F9;
		color: #0F172A;
		border-bottom-left-radius: 4px;
	}
	.chat-msg__body p {
		margin: 0 0 0.4rem;
	}
	.chat-msg__body p:last-child {
		margin-bottom: 0;
	}
	.chat-msg__body ul {
		margin: 0.3rem 0;
		padding-left: 1.1rem;
	}
	.chat-msg__body li {
		margin-bottom: 0.2rem;
	}
	.chat-msg__body strong {
		font-weight: 650;
	}
	.chat-msg__link {
		color: #4C7370;
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	.chat-msg--user .chat-msg__link {
		color: #B0D4D1;
	}
	.chat-msg__typing {
		display: inline-block;
		color: #4F5B6B;
		animation: typingPulse 1s ease-in-out infinite;
	}
	@keyframes typingPulse {
		0%, 100% { opacity: 0.4; }
		50% { opacity: 1; }
	}
`;
document.head.appendChild(style);
