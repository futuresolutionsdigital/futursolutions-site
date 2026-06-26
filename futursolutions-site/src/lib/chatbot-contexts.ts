/**
 * Single source of truth for the chat assistant across the base site and every
 * demo. Each context defines the persona (used server-side to build the system
 * prompt) and the presentation (used client-side for greeting, quick replies,
 * and theming). The base site uses 'base'; each demo layout passes its own key
 * so the widget both *looks* like that demo and *acts* as its concierge.
 */

export type ChatScheme = 'light' | 'dark';

export interface ChatTheme {
	scheme: ChatScheme;
	/** Primary brand accent — FAB, send button, user bubble, primary links. */
	accent: string;
	/** Readable text/icon color on top of `accent`. */
	accentInk: string;
	/** Link color used inside assistant bubbles. */
	link: string;
	/** Panel background. */
	surface: string;
	/** Header + composer background. */
	surface2: string;
	/** Primary text color. */
	text: string;
	/** Secondary text color. */
	muted: string;
	/** Hairline border color. */
	border: string;
	/** Assistant bubble background. */
	bubble: string;
	/** Assistant bubble text color. */
	bubbleInk: string;
	/** Floating action button background. */
	fab: string;
	/** Floating action button icon color. */
	fabInk: string;
	/** Base font stack for the widget body. */
	font: string;
	/** Optional display font for the brand title (falls back to `font`). */
	fontDisplay?: string;
	/** Panel corner radius in px. */
	radius: number;
}

export interface ChatbotContext {
	key: string;
	/** Demo template slug, or null for the base site. */
	demoSlug: string | null;
	/** Brand the assistant speaks for. */
	brandName: string;
	/** The assistant's display name. */
	assistantName: string;
	/** Tiny line under the assistant name in the header. */
	tagline: string;
	/** First message shown when the panel opens. */
	greeting: string;
	/** One-line teaser shown in the proactive nudge bubble. */
	nudge: string;
	/** Suggested starter prompts (kept short). */
	quickReplies: string[];
	theme: ChatTheme;
}

const INTER =
	"Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export const chatbotContexts: Record<string, ChatbotContext> = {
	base: {
		key: 'base',
		demoSlug: null,
		brandName: 'FutureSolutions',
		assistantName: 'Fit Assistant',
		tagline: 'FutureSolutions',
		greeting:
			"Hey — I can help you find the right website path for your practice, or point you to a live demo to explore. What kind of business are you working with?",
		nudge: 'Not sure which option fits? I can help in a few questions.',
		quickReplies: [
			'What do you build?',
			'Which option fits me?',
			'Show me a live demo',
			"What's the free audit?",
			'Foundation vs custom?',
			'Can you connect a CRM?',
			'How do I get started?',
		],
		theme: {
			scheme: 'light',
			accent: '#5F8F8B',
			accentInk: '#FFFFFF',
			link: '#3D6B67',
			surface: '#FFFFFF',
			surface2: '#F7F8FA',
			text: '#1A2332',
			muted: '#5B6573',
			border: 'rgba(15, 23, 42, 0.10)',
			bubble: '#F0F2F5',
			bubbleInk: '#1A2332',
			fab: '#1F2937',
			fabInk: '#FFFFFF',
			font: INTER,
			radius: 18,
		},
	},

	'med-spa': {
		key: 'med-spa',
		demoSlug: 'med-spa',
		brandName: 'Auréa Skin & Aesthetics',
		assistantName: 'Auréa Concierge',
		tagline: 'Med spa concierge',
		greeting:
			"Welcome to Auréa. I'm your concierge — I can help with booking, treatments, memberships, billing, and account questions, or show how this demo was built. What do you need?",
		nudge: 'Need to book, change billing, or ask about a treatment? I can help.',
		quickReplies: [
			'Book a consultation',
			'Reschedule or cancel',
			'Change payment info',
			'Membership options',
			'Which treatment for my concern?',
			'Is this a real clinic?',
			'Get a site like this',
		],
		theme: {
			scheme: 'light',
			accent: '#C7A978',
			accentInk: '#242321',
			link: '#8A6A39',
			surface: '#FFFFFF',
			surface2: '#F7F2EA',
			text: '#242321',
			muted: '#7A756D',
			border: 'rgba(36, 35, 33, 0.12)',
			bubble: '#F3EDE4',
			bubbleInk: '#242321',
			fab: '#242321',
			fabInk: '#FFFFFF',
			font: INTER,
			fontDisplay: "'Playfair Display', Georgia, 'Times New Roman', serif",
			radius: 16,
		},
	},

	'solo-practice': {
		key: 'solo-practice',
		demoSlug: 'solo-practice',
		brandName: 'Aster Private Health',
		assistantName: 'Aster Assistant',
		tagline: 'Primary care concierge',
		greeting:
			"Hi! I'm the Aster concierge — I can help with becoming a patient, the patient portal, billing and membership, refills, and visits, or explain how this demo was built. What can I do?",
		nudge: 'Questions about becoming a patient, billing, or the portal? Ask away.',
		quickReplies: [
			'Become a patient',
			'Update card on file',
			'Cancel or pause membership',
			'Request a refill',
			'Patient portal login',
			'Is this a real practice?',
			'Get a site like this',
		],
		theme: {
			scheme: 'light',
			accent: '#A7684D',
			accentInk: '#FFFFFF',
			link: '#8B5239',
			surface: '#FFFFFF',
			surface2: '#FBF7EF',
			text: '#20201D',
			muted: '#746F66',
			border: '#DED3C4',
			bubble: '#F4ECDF',
			bubbleInk: '#20201D',
			fab: '#20201D',
			fabInk: '#FFFFFF',
			font: INTER,
			radius: 10,
		},
	},

	'premium-wellness-clinic': {
		key: 'premium-wellness-clinic',
		demoSlug: 'premium-wellness-clinic',
		brandName: 'Lumen Health House',
		assistantName: 'Lumen Concierge',
		tagline: 'Wellness concierge',
		greeting:
			"Welcome to Lumen Health House. I'm your concierge — I can help with where to start, booking, programs, memberships, and billing, or show how this demo was built. How can I help?",
		nudge: 'Want help booking, picking a program, or managing billing? I am here.',
		quickReplies: [
			'Where do I start?',
			'Book or reschedule',
			'Change payment method',
			'Membership tiers',
			'Which program fits me?',
			'Is this real?',
			'Get a site like this',
		],
		theme: {
			scheme: 'light',
			accent: '#6B8F7B',
			accentInk: '#FFFFFF',
			link: '#4F6E5E',
			surface: '#FFFFFF',
			surface2: '#F2EDE5',
			text: '#1A1F1D',
			muted: '#7A8580',
			border: 'rgba(26, 31, 29, 0.12)',
			bubble: '#E8F0EB',
			bubbleInk: '#1A1F1D',
			fab: '#1A1F1D',
			fabInk: '#FFFFFF',
			font: INTER,
			radius: 8,
		},
	},

	'hormone-trt': {
		key: 'hormone-trt',
		demoSlug: 'hormone-trt',
		brandName: "VANTAGE Men's Health",
		assistantName: 'Vantage Assistant',
		tagline: "Men's health assistant",
		greeting:
			"Welcome to Vantage. I'm your assistant — I can walk you through getting started, how TRT works, booking, pricing, and account questions, or show how this demo was built. What's on your mind?",
		nudge: 'Questions about getting started, pricing, or booking? I can help.',
		quickReplies: [
			'Get started / assessment',
			'How TRT works',
			'Book a consultation',
			'Update payment method',
			'Pricing & membership',
			'Is this real?',
			'Get a site like this',
		],
		theme: {
			scheme: 'dark',
			accent: '#D71920',
			accentInk: '#FFFFFF',
			link: '#FF8A8E',
			surface: '#141414',
			surface2: '#1C1C1C',
			text: '#F4EFE7',
			muted: '#C7CED3',
			border: 'rgba(255, 255, 255, 0.12)',
			bubble: '#222222',
			bubbleInk: '#F4EFE7',
			fab: '#D71920',
			fabInk: '#FFFFFF',
			font: INTER,
			radius: 4,
		},
	},

	association: {
		key: 'association',
		demoSlug: 'association',
		brandName: 'Meridian Health Professionals Association',
		assistantName: 'Meridian Assistant',
		tagline: 'Member assistant',
		greeting:
			"Hi! I'm the Meridian assistant — I can help with joining, renewals, the member portal, events and CE, the career center, and chapters, or explain how this demo was built. What are you looking for?",
		nudge: 'Need help with membership, events, or the member portal? Ask me.',
		quickReplies: [
			'Join / membership tiers',
			'Renew membership',
			'Update my profile',
			'Register for the conference',
			'Member portal login',
			'Is this real?',
			'Get a site like this',
		],
		theme: {
			scheme: 'light',
			accent: '#155E66',
			accentInk: '#FFFFFF',
			link: '#155059',
			surface: '#FFFFFF',
			surface2: '#FAFBFC',
			text: '#102A43',
			muted: '#6B7B8D',
			border: '#E7EDF0',
			bubble: '#E6F2F3',
			bubbleInk: '#102A43',
			fab: '#102A43',
			fabInk: '#FFFFFF',
			font: INTER,
			radius: 12,
		},
	},
};

export function getChatbotContext(key: string | null | undefined): ChatbotContext {
	if (key && chatbotContexts[key]) return chatbotContexts[key];
	return chatbotContexts.base;
}

/** CSS custom properties consumed by ChatWidget for theming. */
export function themeToCssVars(theme: ChatTheme): Record<string, string> {
	return {
		'--chat-accent': theme.accent,
		'--chat-accent-ink': theme.accentInk,
		'--chat-link': theme.link,
		'--chat-surface': theme.surface,
		'--chat-surface-2': theme.surface2,
		'--chat-text': theme.text,
		'--chat-muted': theme.muted,
		'--chat-border': theme.border,
		'--chat-bubble': theme.bubble,
		'--chat-bubble-ink': theme.bubbleInk,
		'--chat-fab': theme.fab,
		'--chat-fab-ink': theme.fabInk,
		'--chat-font': theme.font,
		'--chat-font-display': theme.fontDisplay ?? theme.font,
		'--chat-radius': `${theme.radius}px`,
	};
}
