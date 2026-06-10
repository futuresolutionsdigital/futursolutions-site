interface Message {
	role: 'user' | 'assistant';
	content: string;
}

const widget = document.querySelector<HTMLElement>('[data-chat-widget]');

if (widget) {
	initChatWidget(widget);
}

function initChatWidget(widget: HTMLElement) {
	const toggleBtn = widget.querySelector<HTMLButtonElement>('[data-chat-toggle]')!;
	const closeBtn = widget.querySelector<HTMLButtonElement>('[data-chat-close]')!;
	const muteBtn = widget.querySelector<HTMLButtonElement>('[data-chat-mute]')!;
	const messagesEl = widget.querySelector<HTMLElement>('[data-chat-messages]')!;
	const quickEl = widget.querySelector<HTMLElement>('[data-chat-quick]')!;
	const form = widget.querySelector<HTMLFormElement>('[data-chat-form]')!;
	const input = widget.querySelector<HTMLInputElement>('[data-chat-input]')!;
	const sendBtn = widget.querySelector<HTMLButtonElement>('[data-chat-send]')!;
	const panel = widget.querySelector<HTMLElement>('[data-chat-panel]')!;
	const nudge = widget.querySelector<HTMLElement>('[data-chat-nudge]');
	const nudgeOpen = widget.querySelector<HTMLButtonElement>('[data-chat-nudge-open]');
	const nudgeClose = widget.querySelector<HTMLButtonElement>('[data-chat-nudge-close]');

	const context = widget.dataset.context || 'base';
	const greeting = widget.dataset.greeting || 'Hi! How can I help?';
	let quickReplies: string[] = [];
	try {
		quickReplies = JSON.parse(widget.dataset.quickReplies || '[]');
	} catch {
		quickReplies = [];
	}

	const STORE_KEY = `fs-chat-msgs-${context}`;
	const NUDGE_KEY = `fs-chat-nudged-${context}`;
	const MUTE_KEY = 'fs-chat-muted';
	const STREAM_RENDER_INTERVAL = 55;

	const messages: Message[] = loadMessages();
	let isStreaming = false;
	let hasRendered = false;
	let audioCtx: AudioContext | null = null;
	let audioReady = false;
	let nudgeTimer: number | undefined;

	let muted = localStorage.getItem(MUTE_KEY) === '1';
	if (muted) widget.classList.add('is-muted');

	/* ── Persistence ───────────────────────────────── */
	function loadMessages(): Message[] {
		try {
			const raw = sessionStorage.getItem(STORE_KEY);
			if (!raw) return [];
			const parsed = JSON.parse(raw);
			return Array.isArray(parsed) ? parsed : [];
		} catch {
			return [];
		}
	}

	function saveMessages() {
		try {
			sessionStorage.setItem(STORE_KEY, JSON.stringify(messages.slice(-30)));
		} catch {
			/* storage may be unavailable */
		}
	}

	/* ── Open / close ──────────────────────────────── */
	function open() {
		if (widget.classList.contains('is-open')) return;
		if (nudgeTimer) window.clearTimeout(nudgeTimer);
		widget.classList.add('is-open');
		widget.classList.remove('has-unread');
		toggleBtn.setAttribute('aria-expanded', 'true');
		hideNudge(true);

		if (!hasRendered) {
			hasRendered = true;
			if (messages.length > 0) {
				messages.forEach((m) => renderMessage(m.role, m.content));
			} else {
				renderMessage('assistant', greeting);
				showNextSuggestions(4);
			}
		}
		window.setTimeout(() => input.focus(), 60);
		scrollToBottom();
	}

	function close() {
		widget.classList.remove('is-open');
		toggleBtn.setAttribute('aria-expanded', 'false');
		toggleBtn.focus();
	}

	function toggle() {
		widget.classList.contains('is-open') ? close() : open();
	}

	toggleBtn.addEventListener('click', toggle);
	closeBtn.addEventListener('click', close);

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && widget.classList.contains('is-open')) close();
	});

	/* ── Mute ──────────────────────────────────────── */
	muteBtn.addEventListener('click', () => {
		muted = !muted;
		widget.classList.toggle('is-muted', muted);
		localStorage.setItem(MUTE_KEY, muted ? '1' : '0');
		muteBtn.setAttribute('aria-label', muted ? 'Unmute notification sound' : 'Mute notification sound');
	});

	/* ── Quick replies (revealed in batches for depth) ─ */
	let suggestionIndex = 0;

	function showNextSuggestions(count: number) {
		if (suggestionIndex >= quickReplies.length) {
			clearSuggestions();
			return;
		}
		const batch = quickReplies.slice(suggestionIndex, suggestionIndex + count);
		suggestionIndex += batch.length;
		if (!batch.length) {
			clearSuggestions();
			return;
		}
		quickEl.innerHTML = '';
		batch.forEach((q) => {
			const chip = document.createElement('button');
			chip.type = 'button';
			chip.className = 'chat-widget__quick-chip';
			chip.textContent = q;
			chip.addEventListener('click', () => {
				clearSuggestions();
				sendMessage(q);
			});
			quickEl.appendChild(chip);
		});
		quickEl.hidden = false;
	}

	function clearSuggestions() {
		quickEl.innerHTML = '';
		quickEl.hidden = true;
	}

	/* ── Rendering ─────────────────────────────────── */
	function escapeHtml(text: string): string {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	function linkLabel(path: string): string {
		const clean = path.split('?')[0];
		const map: Record<string, string> = {
			'/audit': 'Free Website Audit',
			'/templates': 'Browse live demos',
			'/services': 'View services',
			'/services/growth-systems': 'Growth Systems',
			'/services/custom-healthcare-websites': 'Custom Websites',
			'/services/local-visibility': 'Local Visibility',
			'/services/template-setup': 'Website Foundations',
			'/services/ongoing-optimization': 'Care & Optimization',
			'/resources': 'Resources',
			'/contact': 'Contact',
			'/about': 'About',
		};
		if (map[clean]) return map[clean];
		const seg = clean.split('/').filter(Boolean);
		if (seg[0] === 'templates' && seg[1]) return `${titleize(seg[1])} Foundation`;
		if (seg[0] === 'demos' && seg[1]) return seg[2] ? titleize(seg[2]) : `${titleize(seg[1])} demo`;
		if (seg.length) return titleize(seg[seg.length - 1]);
		return clean;
	}

	function titleize(s: string): string {
		return s
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (c) => c.toUpperCase());
	}

	const ROUTE_SRC =
		'\\/(?:audit|templates|services|resources|seo|backend|demos|contact|about|industries)(?:\\/[a-z0-9-]+)*(?:\\?[a-z0-9=&-]+)?';
	const inlineRoute = new RegExp(`(${ROUTE_SRC})`, 'gi');
	const standaloneRoute = new RegExp(`^(${ROUTE_SRC})[.!]?$`, 'i');

	function linkSub(path: string): string {
		const clean = path.split('?')[0];
		const map: Record<string, string> = {
			'/audit': 'Free, no-obligation review of your site & systems',
			'/templates': 'Explore every live demo build',
			'/services': 'See all the ways we can help',
			'/services/growth-systems': 'Website + CRM, forms, follow-up & reporting',
			'/services/custom-healthcare-websites': 'A premium, fully custom build',
			'/services/local-visibility': 'Get found in local search',
			'/services/template-setup': 'Launch on a strategic Foundation',
			'/services/ongoing-optimization': 'Care, updates & ongoing improvements',
			'/resources': 'Guides on websites, trust & conversion',
			'/contact': 'Get in touch with the team',
			'/about': 'Who we are',
		};
		if (map[clean]) return map[clean];
		const seg = clean.split('/').filter(Boolean);
		if (seg[0] === 'templates') return 'Explore the live demo & details';
		if (seg[0] === 'demos') return 'Open the live demo';
		return 'Open page';
	}

	function cardIcon(path: string): string {
		const seg = path.split('?')[0].split('/').filter(Boolean);
		const a = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
		if (seg[0] === 'audit') return `${a}<path d="M9 4h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1z"/><path d="M9 13l2 2 4-4"/></svg>`;
		if (seg[0] === 'templates' || seg[0] === 'demos') return `${a}<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>`;
		if (seg[0] === 'services') return `${a}<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`;
		if (seg[0] === 'resources') return `${a}<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h12"/></svg>`;
		return `${a}<path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
	}

	function renderCard(path: string): string {
		return `<a class="chat-msg__card" href="${path}"><span class="chat-msg__card-icon" aria-hidden="true">${cardIcon(path)}</span><span class="chat-msg__card-text"><span class="chat-msg__card-title">${escapeHtml(linkLabel(path))}</span><span class="chat-msg__card-sub">${escapeHtml(linkSub(path))}</span></span><span class="chat-msg__card-arrow" aria-hidden="true">→</span></a>`;
	}

	function formatBlock(block: string): string {
		let html = escapeHtml(block);
		html = html.replace(
			inlineRoute,
			(m) => `<a href="${m}" class="chat-msg__link">${escapeHtml(linkLabel(m))}</a>`,
		);
		html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

		if (/^[-•]\s+/m.test(html)) {
			const items = html
				.split('\n')
				.map((l) => l.replace(/^[-•]\s+(.+)$/, '<li>$1</li>'))
				.join('');
			return `<ul>${items}</ul>`;
		}

		return `<p>${html.replace(/\n/g, '<br>')}</p>`;
	}

	function formatContent(raw: string): string {
		return raw
			.split('\n\n')
			.map((p) => p.trim())
			.filter(Boolean)
			.map((block) => {
				const single = block.match(standaloneRoute);
				return single ? renderCard(single[1]) : formatBlock(block);
			})
			.join('');
	}

	function renderMessage(role: Message['role'], content: string, el?: HTMLElement) {
		const bubble = el || document.createElement('div');
		bubble.className = `chat-msg chat-msg--${role}`;
		bubble.innerHTML = `<div class="chat-msg__body">${formatContent(content)}</div>`;
		if (!el) messagesEl.appendChild(bubble);
		scrollToBottom();
	}

	function appendMessage(role: Message['role'], content: string) {
		messages.push({ role, content });
		saveMessages();
		renderMessage(role, content);
	}

	function scrollToBottom() {
		messagesEl.scrollTop = messagesEl.scrollHeight;
	}

	function setLoading(loading: boolean) {
		isStreaming = loading;
		sendBtn.disabled = loading;
		input.disabled = loading;
	}

	/* ── Send ──────────────────────────────────────── */
	async function sendMessage(text: string) {
		appendMessage('user', text);
		setLoading(true);

		const streamBubble = document.createElement('div');
		streamBubble.className = 'chat-msg chat-msg--assistant chat-msg--streaming';
		streamBubble.innerHTML =
			'<div class="chat-msg__body"><span class="chat-msg__typing"><span></span><span></span><span></span></span></div>';
		messagesEl.appendChild(streamBubble);
		scrollToBottom();

		let fullResponse = '';
		let renderQueued = false;
		let lastRender = 0;

		function queueStreamRender() {
			if (renderQueued) return;
			const now = performance.now();
			const wait = Math.max(0, STREAM_RENDER_INTERVAL - (now - lastRender));
			renderQueued = true;
			setTimeout(() => {
				renderQueued = false;
				lastRender = performance.now();
				streamBubble.innerHTML = `<div class="chat-msg__body">${escapeHtml(fullResponse)}</div>`;
				scrollToBottom();
			}, wait);
		}

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					context,
					messages: messages.map((m) => ({ role: m.role, content: m.content })),
				}),
			});

			if (!res.ok) {
				const err = await res.json().catch(() => ({ error: 'Something went wrong.' }));
				streamBubble.classList.remove('chat-msg--streaming');
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
				for (const line of chunk.split('\n')) {
					if (!line.startsWith('data: ')) continue;
					const payload = line.slice(6);
					if (payload === '[DONE]') break;
					try {
						const t = JSON.parse(payload) as string;
						if (t === '[ERROR]') {
							streamBubble.classList.remove('chat-msg--streaming');
							streamBubble.innerHTML =
								'<div class="chat-msg__body"><p>Something went wrong. Please try again.</p></div>';
							setLoading(false);
							return;
						}
						fullResponse += t;
						queueStreamRender();
					} catch {
						/* skip malformed chunk */
					}
				}
			}

			streamBubble.classList.remove('chat-msg--streaming');
			if (fullResponse) {
				renderMessage('assistant', fullResponse, streamBubble);
				messages.push({ role: 'assistant', content: fullResponse });
				saveMessages();
				showNextSuggestions(3);
			}
		} catch {
			streamBubble.classList.remove('chat-msg--streaming');
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
		clearSuggestions();
		sendMessage(text);
	});

	/* ── Proactive nudge + soft ping ───────────────── */
	function primeAudio() {
		if (audioReady) return;
		try {
			const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
			audioCtx = new Ctor();
			audioReady = true;
		} catch {
			audioReady = false;
		}
	}

	window.addEventListener('pointerdown', primeAudio, { once: true });
	window.addEventListener('keydown', primeAudio, { once: true });

	function playPing() {
		if (muted || !audioCtx) return;
		try {
			if (audioCtx.state === 'suspended') void audioCtx.resume();
			const now = audioCtx.currentTime;
			const notes = [660, 880];
			notes.forEach((freq, i) => {
				const osc = audioCtx!.createOscillator();
				const gain = audioCtx!.createGain();
				osc.type = 'sine';
				osc.frequency.value = freq;
				const start = now + i * 0.09;
				gain.gain.setValueAtTime(0, start);
				gain.gain.linearRampToValueAtTime(0.05, start + 0.02);
				gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);
				osc.connect(gain);
				gain.connect(audioCtx!.destination);
				osc.start(start);
				osc.stop(start + 0.32);
			});
		} catch {
			/* ignore audio errors */
		}
	}

	function showNudge() {
		if (!nudge) return;
		if (widget.classList.contains('is-open')) return;
		if (sessionStorage.getItem(NUDGE_KEY) === '1') return;
		sessionStorage.setItem(NUDGE_KEY, '1');
		nudge.hidden = false;
		// allow the element to register before transitioning
		requestAnimationFrame(() => {
			nudge.classList.add('is-visible');
			widget.classList.add('has-unread');
			playPing();
		});
	}

	function hideNudge(immediate = false) {
		if (!nudge) return;
		nudge.classList.remove('is-visible');
		if (immediate) {
			nudge.hidden = true;
		} else {
			window.setTimeout(() => {
				nudge.hidden = true;
			}, 300);
		}
	}

	nudgeOpen?.addEventListener('click', open);
	nudgeClose?.addEventListener('click', (e) => {
		e.stopPropagation();
		hideNudge();
	});

	if (nudge && sessionStorage.getItem(NUDGE_KEY) !== '1') {
		nudgeTimer = window.setTimeout(showNudge, 9000);
	}
}
