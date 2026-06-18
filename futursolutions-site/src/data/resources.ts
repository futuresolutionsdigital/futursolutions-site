// Resource library content model.
//
// Every resource is a block-based document so the renderer can express far more
// than stacked paragraphs: callouts, step flows, checklists, stat rows,
// comparisons, copy-paste scripts, and figures. Prose strings use backticks so
// apostrophes and quotes need no escaping.

export type ResourceLane = 'foundation' | 'custom' | 'growth' | 'audit' | 'care';
export type ResourceType = 'guide' | 'playbook' | 'checklist' | 'toolkit';

export interface ContentBlock {
	kind:
		| 'heading'
		| 'paragraph'
		| 'list'
		| 'callout'
		| 'steps'
		| 'checklist'
		| 'stats'
		| 'compare'
		| 'doDont'
		| 'quote'
		| 'script'
		| 'figure'
		| 'faq';
	// heading
	id?: string;
	text?: string;
	// list
	ordered?: boolean;
	items?: string[];
	// callout
	tone?: 'tip' | 'warning' | 'insight';
	title?: string;
	// steps
	steps?: { title: string; text: string }[];
	// stats
	stats?: { value: string; label: string }[];
	// compare / table
	columns?: { label: string; points: string[] }[];
	// doDont
	doItems?: string[];
	dontItems?: string[];
	// quote
	attribution?: string;
	// script
	channel?: 'Email' | 'SMS';
	body?: string;
	// figure
	caption?: string;
	image?: string;
	// faq
	faqs?: { q: string; a: string }[];
}

export interface ResourceBody {
	intro: string;
	blocks: ContentBlock[];
	keyTakeaways: string[];
}

export interface ResourceEntry {
	slug: string;
	title: string;
	type: ResourceType;
	category: string;
	lane: ResourceLane;
	audience: string;
	excerpt: string;
	subtitle?: string;
	outcomes?: string[];
	forWho?: string;
	timeToImplement?: string;
	datePublished?: string;
	lastUpdated?: string;
	readingTime?: string;
	relatedService: string;
	ctaLabel: string;
	ctaHref: string;
	status: 'Planned' | 'Published';
	featured?: boolean;
	body?: ResourceBody;
}

export const RESOURCE_TYPE_META: Record<
	ResourceType,
	{ label: string; plural: string; blurb: string }
> = {
	guide: {
		label: 'Guide',
		plural: 'Guides',
		blurb: 'Strategic reads on what actually moves a healthcare website.',
	},
	playbook: {
		label: 'Playbook',
		plural: 'Playbooks',
		blurb: 'Step-by-step operating procedures your team can run.',
	},
	checklist: {
		label: 'Checklist',
		plural: 'Checklists',
		blurb: 'Scannable, self-scoring audits you can act on today.',
	},
	toolkit: {
		label: 'Toolkit',
		plural: 'Toolkits',
		blurb: 'Copy-paste assets, scripts, and templates.',
	},
};

export type PublishedResource = ResourceEntry & { body: ResourceBody };

export const publishedResources = (): PublishedResource[] =>
	resources.filter((r): r is PublishedResource => r.status === 'Published' && !!r.body);

export const featuredResource = (): PublishedResource | undefined =>
	publishedResources().find((r) => r.featured) ?? publishedResources()[0];

export const resources: ResourceEntry[] = [
	// ─── Flagship: Playbook / SOP ──────────────────────────────────────
	{
		slug: 'new-patient-followup-sop',
		title: 'The New Patient Inquiry Follow-Up SOP',
		type: 'playbook',
		category: 'Growth Systems',
		lane: 'growth',
		audience: 'Front-desk teams and practice owners',
		excerpt:
			'A step-by-step operating procedure for turning website inquiries into booked appointments, with response-time targets, owners, and copy-paste scripts.',
		subtitle:
			'A repeatable procedure for turning website inquiries into booked appointments, without relying on anyone to remember.',
		outcomes: [
			'A clear owner and response-time target for every inquiry',
			'Copy-paste email and SMS scripts for the first week',
			'A cadence you can run with or without a CRM',
		],
		forWho: 'Front-desk teams, coordinators, practice managers, and owners',
		timeToImplement: 'About 1 hour to set up',
		datePublished: '2026-03-04',
		lastUpdated: '2026-03-04',
		readingTime: '8 min read',
		relatedService: 'Growth System Setup',
		ctaLabel: 'Explore Growth Systems',
		ctaHref: '/services/growth-systems',
		status: 'Published',
		body: {
			intro:
				'The most expensive gap in most practices is not traffic or design. It is the silence after someone fills out a form. Inquiries land in an inbox, the day gets busy, and a ready-to-book patient quietly books somewhere else. This SOP removes the guesswork: who responds, how fast, and exactly what they say, for the first week after an inquiry.',
			blocks: [
				{ kind: 'heading', id: 'why-speed', text: 'Why speed-to-lead decides the outcome' },
				{
					kind: 'stats',
					stats: [
						{ value: '5 min', label: 'The response window where a lead is most likely to engage. After that, interest drops fast.' },
						{ value: '~78%', label: 'of buyers choose the provider that responds first, not necessarily the cheapest.' },
						{ value: '< 1 hr', label: 'The reply window patients quietly expect from a healthcare provider.' },
					],
				},
				{
					kind: 'paragraph',
					text: 'These are general benchmarks, but the pattern holds everywhere: the first practice to respond, in a human and helpful way, usually wins the appointment. The goal of this SOP is to make a fast, consistent response automatic instead of dependent on who is at the desk.',
				},
				{
					kind: 'callout',
					tone: 'tip',
					title: 'Speed beats polish',
					text: 'A short, warm reply in five minutes outperforms a perfect reply in five hours. Aim for fast and human first; refine the wording over time.',
				},
				{ kind: 'heading', id: 'cadence', text: 'The follow-up cadence at a glance' },
				{
					kind: 'steps',
					steps: [
						{ title: 'Minute 0 — Auto-confirm', text: 'An automatic email and on-screen message confirms the inquiry was received and sets expectations for when they will hear back.' },
						{ title: 'Minute 5 — Personal reply', text: 'A real person sends a short, personal text or email answering their question and offering two times to talk or book.' },
						{ title: 'Hour 1 — Call attempt', text: 'If the inquiry included a phone number and warranted a call, attempt one call and leave a brief, friendly voicemail.' },
						{ title: 'Day 1 — Value follow-up', text: 'Send one genuinely helpful message: what to expect, pricing clarity, or an answer to a common concern for their service.' },
						{ title: 'Day 3 — Gentle nudge', text: 'A light check-in that makes booking the obvious next step and removes any small barrier in the way.' },
						{ title: 'Day 7 — Final touch', text: 'A final, no-pressure message leaving the door open and pointing to an easy way to reconnect later.' },
					],
				},
				{ kind: 'heading', id: 'owners', text: 'Who owns each step' },
				{
					kind: 'paragraph',
					text: 'A cadence only works if every step has a name attached. Assign each role before you turn anything on.',
				},
				{
					kind: 'compare',
					columns: [
						{ label: 'Front desk / coordinator', points: ['Sends the 5-minute personal reply', 'Makes the Hour 1 call attempt', 'Books or routes the appointment', 'Logs the inquiry status'] },
						{ label: 'Provider / clinical', points: ['Answers clinical questions when needed', 'Confirms fit for the requested service', 'Reviews flagged or complex inquiries'] },
						{ label: 'Owner / manager', points: ['Owns the response-time target (SLA)', 'Reviews missed or slow follow-ups weekly', 'Adjusts scripts based on what converts'] },
					],
				},
				{ kind: 'heading', id: 'scripts', text: 'Copy-paste scripts' },
				{
					kind: 'paragraph',
					text: 'Adapt these to your voice and services. Keep them short, specific, and free of clinical detail in unsecured channels.',
				},
				{
					kind: 'script',
					channel: 'Email',
					title: 'Minute 0 — Instant confirmation (automated)',
					body: 'Subject: We received your message\n\nHi [First name],\n\nThanks for reaching out to [Practice]. We have your request and a team member will personally follow up within [one business hour]. If it is urgent, you can reach us at [phone].\n\nTalk soon,\n[Practice] team',
				},
				{
					kind: 'script',
					channel: 'SMS',
					title: 'Minute 5 — Personal text',
					body: 'Hi [First name], this is [Name] at [Practice]. Thanks for reaching out about [service]. Happy to help you get started. Would [day/time] or [day/time] work for a quick call, or would you prefer I book you in?',
				},
				{
					kind: 'script',
					channel: 'Email',
					title: 'Day 1 — Value follow-up',
					body: 'Subject: A little more on [service]\n\nHi [First name],\n\nWanted to make the next step easy. Here is what a first visit for [service] usually looks like, and roughly what to expect on cost and timing: [1-2 lines].\n\nIf you would like, you can book here: [link]. Or just reply with a question, I am glad to help.\n\n[Name]',
				},
				{
					kind: 'script',
					channel: 'SMS',
					title: 'Day 3 — Gentle nudge',
					body: 'Hi [First name], just checking in. We have a couple of openings this week for [service] if you would like one. Want me to hold one for you?',
				},
				{
					kind: 'callout',
					tone: 'warning',
					title: 'Keep it compliant',
					text: 'Do not include diagnoses, treatment details, or other protected health information in standard email or SMS. Confirm receipt and logistics in those channels, and move clinical specifics to a secure, compliant method.',
				},
				{ kind: 'heading', id: 'setup', text: 'Implementation checklist' },
				{
					kind: 'checklist',
					title: 'Stand this up in about an hour',
					items: [
						'Turn on an automatic confirmation email and on-screen message',
						'Name the person responsible for the 5-minute reply (and a backup)',
						'Set and write down your response-time target',
						'Save the four scripts above where the team can reach them',
						'Add a simple way to track each inquiry and its status',
						'Put a 15-minute weekly follow-up review on the calendar',
					],
				},
				{ kind: 'heading', id: 'with-without-crm', text: 'Running it with and without a CRM' },
				{
					kind: 'doDont',
					doItems: [
						'Start manual if you must, a shared sheet and saved templates beat nothing',
						'Automate the instant confirmation first, it is the easiest win',
						'Track every inquiry with an owner and a status',
						'Review what converts and refine the scripts monthly',
					],
					dontItems: [
						'Let inquiries live only in an inbox where they get buried',
						'Depend on memory or "whoever sees it first"',
						'Send the same generic auto-reply and call it follow-up',
						'Skip the weekly review, that is where leaks get caught',
					],
				},
				{
					kind: 'paragraph',
					text: 'A CRM and a Growth System make this effortless: confirmations, reminders, and cadences run automatically, and nothing depends on a busy front desk. But the procedure matters more than the tool. Get the cadence right on paper first, then let a system run it for you.',
				},
			],
			keyTakeaways: [
				'The silence after a form is where most leads are lost, not the form itself.',
				'Respond in minutes with a human message, then follow a set cadence.',
				'Give every step a named owner and a written response-time target.',
				'Keep PHI out of standard email and SMS; confirm logistics only.',
				'Get the procedure right first, then let a Growth System automate it.',
			],
		},
	},

	// ─── Flagship: Checklist / Toolkit ─────────────────────────────────
	{
		slug: 'website-trust-conversion-checklist',
		title: 'The Website Trust & Conversion Audit Checklist',
		type: 'checklist',
		category: 'Conversion',
		lane: 'audit',
		audience: 'Owners and marketers with an existing site',
		excerpt:
			'A 40-point self-audit across the five things that decide whether a health and wellness website earns inquiries: trust, clarity, conversion, local visibility, and follow-up.',
		subtitle:
			'A 40-point self-audit across the five things that decide whether a health and wellness website earns inquiries.',
		outcomes: [
			'A clear read on where your site loses trust or leads',
			'Section-by-section scoring you can act on',
			'A prioritized starting point for fixes',
		],
		forWho: 'Owners and marketers evaluating an existing site',
		timeToImplement: 'About 30 minutes',
		datePublished: '2026-03-11',
		lastUpdated: '2026-03-11',
		readingTime: '7 min read',
		relatedService: 'Free Website & Lead Flow Snapshot',
		ctaLabel: 'Get My Free Snapshot',
		ctaHref: '/audit',
		status: 'Published',
		featured: true,
		body: {
			intro:
				'Most healthcare websites do not fail because they are ugly. They fail because of small, fixable gaps in trust, clarity, and follow-up that quietly cost inquiries. This checklist walks the same five areas we review in a Snapshot, so you can see where your site is strong and where it is leaking before you change a thing.',
			blocks: [
				{ kind: 'heading', id: 'how-to-use', text: 'How to use this checklist' },
				{
					kind: 'paragraph',
					text: 'Open your site on a phone and a laptop, then work through each section as if you were a first-time patient. Check every item you can honestly say is true today. Be strict, a "sort of" is a no.',
				},
				{
					kind: 'callout',
					tone: 'insight',
					title: 'Scoring',
					text: 'Each checked box is one point, for 40 possible. Add up your total at the end. The score bands at the bottom tell you where to focus first.',
				},
				{ kind: 'heading', id: 'trust', text: '1. Trust and credibility' },
				{
					kind: 'checklist',
					items: [
						'Real photography of the team or space, not generic stock',
						'Provider names, credentials, and licensing are visible',
						'Genuine reviews or outcomes appear on the page',
						'The design feels calm, current, and consistent',
						'Affiliations or certifications are shown where relevant',
						'The site loads fast and runs on HTTPS',
						'It looks and behaves flawlessly on a phone',
						'Contact details and location are easy to find',
					],
				},
				{ kind: 'heading', id: 'clarity', text: '2. Clarity and messaging' },
				{
					kind: 'checklist',
					items: [
						'Within seconds, a visitor can tell what you do and who it is for',
						'The homepage leads with specifics, not a vague slogan',
						'Services are named in plain language, not jargon',
						'Each meaningful service has its own page',
						'Pricing or "what to expect" is addressed honestly',
						'The location and service area are stated on the page',
					],
				},
				{ kind: 'heading', id: 'conversion', text: '3. Conversion and booking path' },
				{
					kind: 'checklist',
					items: [
						'A clear primary action appears in the header',
						'The next step is repeated after key sections and at the bottom',
						'Booking or contacting takes one obvious tap, no hunting',
						'Forms are short and ask only for what you need',
						'Buttons are easy to tap on mobile',
						'There is a clear path for both "book now" and "just asking"',
					],
				},
				{ kind: 'heading', id: 'local', text: '4. Local visibility' },
				{
					kind: 'checklist',
					items: [
						'A complete, claimed Google Business Profile',
						'Name, address, and phone match everywhere they appear',
						'Page titles and descriptions are specific and local',
						'Dedicated pages exist for each location you serve',
						'Service pages answer the questions patients actually search',
						'A steady, genuine review flow is in place',
					],
				},
				{ kind: 'heading', id: 'followup', text: '5. Follow-up and systems' },
				{
					kind: 'checklist',
					items: [
						'Submitting a form triggers an instant confirmation',
						'Every inquiry is captured somewhere durable, not just an inbox',
						'A named person is responsible for responding',
						'There is a written response-time target',
						'A follow-up sequence runs even on busy weeks',
						'You can see how many inquiries became appointments',
					],
				},
				{ kind: 'heading', id: 'score', text: 'Reading your score' },
				{
					kind: 'compare',
					columns: [
						{ label: '0–20 — Leaking', points: ['Real inquiries are being lost', 'Trust and follow-up are the fastest wins', 'A rebuild or Foundation likely pays for itself'] },
						{ label: '21–32 — Solid', points: ['The basics are working', 'Targeted fixes can lift conversion', 'Focus on the lowest-scoring section first'] },
						{ label: '33–40 — Strong', points: ['Your site is doing its job', 'Refine and protect what works', 'A Growth System can compound results'] },
					],
				},
				{
					kind: 'callout',
					tone: 'tip',
					title: 'Want a second set of eyes?',
					text: 'A free Website and Lead Flow Snapshot turns this self-audit into a specific, prioritized plan, with a short Loom walking through exactly what to fix first.',
				},
			],
			keyTakeaways: [
				'Most sites lose inquiries to small trust, clarity, and follow-up gaps.',
				'Score honestly across all five areas, not just design.',
				'Fix the lowest-scoring section first for the biggest lift.',
				'Follow-up is the most common, and most expensive, gap.',
				'A Snapshot turns this checklist into a prioritized plan.',
			],
		},
	},

	// ─── Guides (upgraded existing articles) ───────────────────────────
	{
		slug: 'healthcare-website-trust',
		title: 'What Makes a Healthcare Website Feel Trustworthy?',
		type: 'guide',
		category: 'Website Strategy',
		lane: 'custom',
		audience: 'Health and wellness businesses',
		excerpt:
			'A patient often forms an opinion about your practice before they read a full paragraph. Learn how design, structure, clarity, and navigation influence trust.',
		forWho: 'Health and wellness businesses',
		datePublished: '2026-01-21',
		lastUpdated: '2026-01-21',
		readingTime: '5 min read',
		relatedService: 'Signature Custom Websites',
		ctaLabel: 'Get My Free Snapshot',
		ctaHref: '/audit',
		status: 'Published',
		body: {
			intro:
				'Trust is the currency of healthcare marketing. A visitor forms an impression of your practice in seconds, often before reading a full sentence, and that impression decides whether they keep reading or close the tab. Trust is not one element; it is the cumulative effect of many small, deliberate signals. Here is what actually moves it.',
			blocks: [
				{ kind: 'heading', id: 'visual-calm', text: 'Visual calm signals competence' },
				{
					kind: 'paragraph',
					text: 'Cluttered, dated, or chaotic design reads as disorganization, and patients quietly extend that judgment to the care itself. Generous spacing, a restrained color palette, consistent typography, and high-quality imagery communicate that you are careful and established. The goal is not flashy; it is calm and confident.',
				},
				{ kind: 'heading', id: 'real-proof', text: 'Real proof beats adjectives' },
				{
					kind: 'paragraph',
					text: 'Saying you are "trusted" and "caring" means little. Showing it means everything. The most persuasive trust signals are concrete and verifiable.',
				},
				{
					kind: 'list',
					items: [
						'Provider credentials, training, and licensing.',
						'Real photography of the team and space, not generic stock.',
						'Genuine patient reviews and outcomes (within privacy rules).',
						'Affiliations, certifications, and association memberships.',
						'Clear, transparent information about process and pricing where appropriate.',
					],
				},
				{
					kind: 'doDont',
					doItems: [
						'Show real faces, names, and credentials',
						'Quote specific, verifiable outcomes',
						'Name your affiliations and certifications',
					],
					dontItems: [
						'Lean on adjectives like "trusted" and "caring"',
						'Use obvious stock photography',
						'Hide who actually provides the care',
					],
				},
				{ kind: 'heading', id: 'clarity-respect', text: 'Clarity is a form of respect' },
				{
					kind: 'paragraph',
					text: 'When visitors instantly understand what you offer, who it is for, and how to begin, they feel respected, and respected visitors convert. Confusing navigation, jargon, and vague service descriptions create friction that erodes trust even when the practice is excellent.',
				},
				{
					kind: 'callout',
					tone: 'tip',
					title: 'Write like you talk',
					text: 'Explain things the way you would to a patient in the room: direct, warm, and free of insider language.',
				},
				{ kind: 'heading', id: 'consistency', text: 'Consistency makes you feel established' },
				{
					kind: 'paragraph',
					text: 'A site where the logo, colors, tone, and quality hold steady from page to page feels like a real, stable organization. Inconsistency, a polished homepage followed by a neglected services page, signals the opposite, and patients notice.',
				},
				{ kind: 'heading', id: 'speed-security', text: 'Speed and security are silent trust signals' },
				{
					kind: 'paragraph',
					text: 'A site that loads instantly, runs on HTTPS, and behaves flawlessly on mobile earns trust before a word is read. A slow or broken experience does the reverse, no matter how good the content is. For healthcare, handling any sensitive information with visible care is non-negotiable.',
				},
			],
			keyTakeaways: [
				'Calm, consistent design reads as competence and stability.',
				'Replace trust adjectives with concrete, verifiable proof.',
				'Clear language and navigation respect the visitor and reduce friction.',
				'Fast, secure, mobile-flawless performance is a trust signal in itself.',
			],
		},
	},
	{
		slug: 'practice-websites-do-not-convert',
		title: 'Why Most Practice Websites Do Not Convert',
		type: 'guide',
		category: 'Conversion',
		lane: 'audit',
		audience: 'Healthcare practices',
		excerpt:
			'Many healthcare websites look fine but lose visitors through unclear messaging, buried calls-to-action, weak service pages, or no follow-up system.',
		forWho: 'Healthcare practices',
		datePublished: '2026-01-14',
		lastUpdated: '2026-01-14',
		readingTime: '6 min read',
		relatedService: 'Website Audit',
		ctaLabel: 'Get My Free Snapshot',
		ctaHref: '/audit',
		status: 'Published',
		body: {
			intro:
				'A practice website can look polished and still quietly fail at its one real job: turning an interested visitor into a booked patient. Most sites do not lose people because they are ugly, they lose them because the path from "interested" to "booked" is unclear. Here are the most common reasons practice websites underperform, and what to do about each.',
			blocks: [
				{ kind: 'heading', id: 'first-impression', text: '1. The first impression does not establish trust fast enough' },
				{
					kind: 'paragraph',
					text: 'In healthcare, the decision is emotional before it is logical. A visitor is deciding whether they trust you with their body, their time, and often their insurance. If the homepage opens with vague slogans instead of clear signals, who you help, what you treat, why you are credible, people hesitate, and hesitation is where you lose them.',
				},
				{
					kind: 'callout',
					tone: 'insight',
					title: 'Answer three questions above the fold',
					text: 'What do you do? Who is it for? Why should I believe you? Photography, credentials, and plain-language service descriptions do more work here than clever taglines.',
				},
				{ kind: 'heading', id: 'buried-step', text: '2. The next step is buried' },
				{
					kind: 'paragraph',
					text: 'Many sites hide the most important action, booking or contacting, behind a small link in the corner, or bury it at the bottom of a long page. Visitors should never have to hunt for how to take the next step. A clear, repeated call-to-action should appear in the header, after key sections, and at the end of every page. Repetition is not pushy; it is helpful.',
				},
				{ kind: 'heading', id: 'service-blur', text: '3. Services are described in one undifferentiated blur' },
				{
					kind: 'paragraph',
					text: 'When every service is crammed onto a single page, both patients and search engines struggle to understand what you actually offer. A visitor researching a specific treatment cannot tell whether you specialize in it or just mention it in passing.',
				},
				{
					kind: 'list',
					items: [
						'Give meaningful services their own dedicated page.',
						'Explain what the service is, who it is for, and what to expect.',
						'Address the common questions and concerns patients actually have.',
						'End each service page with a clear way to book or ask a question.',
					],
				},
				{ kind: 'heading', id: 'after-form', text: '4. Nothing happens after the form is submitted' },
				{
					kind: 'paragraph',
					text: 'This is the most expensive gap, because it wastes the leads you already earned. A contact form that drops into an inbox, with no confirmation, no follow-up, and no system to track who needs a reply, means real prospects slip through during a busy week. A converting website connects to a follow-up system: an immediate confirmation, a record of the inquiry, and a clear process for who responds and when.',
				},
				{
					kind: 'callout',
					tone: 'tip',
					title: 'Go deeper',
					text: 'See the full procedure in The New Patient Inquiry Follow-Up SOP, including response targets and copy-paste scripts.',
				},
				{ kind: 'heading', id: 'mobile', text: '5. The site fights the visitor on mobile' },
				{
					kind: 'paragraph',
					text: 'Most healthcare searches happen on phones. If buttons are hard to tap, text is cramped, or the booking flow breaks on a small screen, you lose people who were ready to act. Mobile is not a smaller version of the site, for most practices, it is the primary one.',
				},
			],
			keyTakeaways: [
				'Trust signals belong above the fold, say who you help and why you are credible.',
				'Make the next step obvious and repeat it throughout the page.',
				'Give important services their own clear, structured pages.',
				'Connect forms to a real follow-up system so no lead is lost.',
				'Design for mobile first, since that is where most patients arrive.',
			],
		},
	},
	{
		slug: 'health-wellness-homepage-structure',
		title: 'The Homepage Structure Every Health and Wellness Business Needs',
		type: 'guide',
		category: 'Website Strategy',
		lane: 'custom',
		audience: 'Health and wellness businesses',
		excerpt:
			'A clear homepage should build trust quickly, explain services clearly, guide visitors toward the next step, and support local visibility.',
		forWho: 'Health and wellness businesses',
		datePublished: '2026-02-04',
		lastUpdated: '2026-02-04',
		readingTime: '6 min read',
		relatedService: 'Website Foundations',
		ctaLabel: 'Explore Live Demos',
		ctaHref: '/templates',
		status: 'Published',
		body: {
			intro:
				'Your homepage carries more weight than any other page on your site. It is where most first-time visitors land, form an impression, and silently decide whether to keep going. A strong health and wellness homepage is not about cramming everything in, it is about a deliberate order that builds trust, creates clarity, and points to a next step. Here is the structure that consistently works.',
			blocks: [
				{ kind: 'heading', id: 'open-trust', text: 'Open with trust, not a slideshow' },
				{
					kind: 'paragraph',
					text: 'The top of the page should answer the visitor unspoken questions immediately: who you help, what you do, and why you are credible. A confident headline, a calm and professional first impression, and a clear primary action do far more than an auto-rotating image carousel that says nothing specific.',
				},
				{
					kind: 'doDont',
					doItems: [
						'"Hormone and weight-loss care for men in Austin, with same-week appointments"',
						'Lead with a confident, specific headline',
						'Show one clear primary action',
					],
					dontItems: [
						'"Your health is our priority"',
						'Open with an auto-rotating carousel',
						'Make visitors guess what you do',
					],
				},
				{ kind: 'heading', id: 'unmistakable', text: 'Make what you do unmistakable' },
				{
					kind: 'paragraph',
					text: 'Within the first screen or two, a visitor should be able to repeat back what you offer and who it is for. If they have to scroll and decode, many simply leave. State your core services plainly and let specificity do the persuading.',
				},
				{ kind: 'heading', id: 'service-doors', text: 'Give every core service a door' },
				{
					kind: 'paragraph',
					text: 'The homepage is not where you explain every service in depth, it is where you route people to the right place. A clean section that names your main services and links to a dedicated page for each helps visitors self-select and helps search engines understand your practice.',
				},
				{
					kind: 'list',
					items: [
						'Name each meaningful service clearly, not in marketing abstractions.',
						'Link each one to its own focused page.',
						'Order them by what most visitors are actually looking for.',
					],
				},
				{ kind: 'heading', id: 'next-step', text: 'Point to the next step, more than once' },
				{
					kind: 'paragraph',
					text: 'A homepage should make the next action obvious and repeat it. Whether that is booking a consult, requesting an appointment, or starting an audit, the path should appear in the header, after the key sections, and again at the bottom. Visitors decide to act at different moments; meet them wherever that happens.',
				},
				{ kind: 'heading', id: 'local-relevance', text: 'Earn local relevance on the page itself' },
				{
					kind: 'paragraph',
					text: 'For most practices, patients are searching locally. Naming your city or region, your service area, and the specifics of how you work helps both human visitors and local search. It also reinforces that you are a real, established practice rooted in a place, another quiet trust signal.',
				},
				{ kind: 'heading', id: 'order', text: 'A simple order that works' },
				{
					kind: 'steps',
					steps: [
						{ title: 'Trust-building hero', text: 'Who you help, what you do, why you are credible, with one clear action.' },
						{ title: 'What you do, in one line', text: 'A plain statement a visitor can repeat back.' },
						{ title: 'Proof and credibility', text: 'Credentials, reviews, real photography, affiliations.' },
						{ title: 'Services overview', text: 'Name each service and link to its own page.' },
						{ title: 'How to begin', text: 'A clear, low-friction explanation of the next step.' },
						{ title: 'Local relevance', text: 'City, region, and service area named on the page.' },
						{ title: 'Final call to action', text: 'One more obvious way to take the next step.' },
					],
				},
			],
			keyTakeaways: [
				'Lead with specific trust signals, not a vague slogan or carousel.',
				'Make what you do and who it is for impossible to misread.',
				'Use the homepage to route visitors to dedicated service pages.',
				'Repeat a clear next step throughout the page.',
				'Name your location and service area to support local search.',
			],
		},
	},
	{
		slug: 'local-seo-basics-medical-wellness',
		title: 'Local SEO Basics for Medical and Wellness Practices',
		type: 'guide',
		category: 'Local Visibility',
		lane: 'foundation',
		audience: 'Medical and wellness practices',
		excerpt:
			'Local visibility starts with structured service pages, metadata, internal links, location relevance, and useful content.',
		forWho: 'Medical and wellness practices',
		datePublished: '2026-02-11',
		lastUpdated: '2026-02-11',
		readingTime: '6 min read',
		relatedService: 'Local Visibility',
		ctaLabel: 'Get My Free Snapshot',
		ctaHref: '/audit',
		status: 'Published',
		body: {
			intro:
				'Local SEO can feel like a black box, but for most medical and wellness practices it comes down to a few unglamorous fundamentals done consistently. You do not need tricks or a giant content operation, you need structure, clarity, and relevance. Here are the basics that actually move local visibility, in the order they matter.',
			blocks: [
				{ kind: 'heading', id: 'structure', text: 'Local visibility starts with structure, not tricks' },
				{
					kind: 'paragraph',
					text: 'Search engines reward sites they can understand. A clear page architecture, a logical homepage, dedicated service pages, and location relevance, does more for local ranking than any clever shortcut. If a search engine cannot tell what you offer and where, it cannot confidently show you to nearby searchers.',
				},
				{ kind: 'heading', id: 'gbp', text: 'Claim and complete your Google Business Profile' },
				{
					kind: 'paragraph',
					text: 'For local practices, your Google Business Profile is often the single highest-impact asset, it powers the map results and the panel many patients see first. Claim it, complete every field, choose accurate categories, and keep your hours, services, and photos current. This works hand in hand with your website, not instead of it.',
				},
				{
					kind: 'callout',
					tone: 'tip',
					title: 'Start here if you do nothing else',
					text: 'A complete, accurate Google Business Profile is usually the fastest local-visibility win available to a practice.',
				},
				{ kind: 'heading', id: 'pages', text: 'Give each service and location its own page' },
				{
					kind: 'paragraph',
					text: 'A single page listing every service is hard for both patients and search engines to interpret. Dedicated pages let you target what people actually search for and demonstrate genuine depth on each topic.',
				},
				{
					kind: 'list',
					items: [
						'One focused page per meaningful service.',
						'A clear page for each location if you serve more than one.',
						'Plain-language explanations of what the service is and who it helps.',
						'Internal links between related services so the structure is navigable.',
					],
				},
				{ kind: 'heading', id: 'metadata', text: 'Write metadata humans and engines both read' },
				{
					kind: 'paragraph',
					text: 'Page titles and meta descriptions are the first thing a searcher sees in results. Write them for people first, specific, honest, and locally relevant, and they will serve search engines well too. Generic titles like "Home" or "Services" waste your most valuable real estate.',
				},
				{ kind: 'heading', id: 'content', text: 'Earn relevance with genuinely useful content' },
				{
					kind: 'paragraph',
					text: 'You do not need to publish constantly, but answering the real questions your patients ask, about treatments, process, cost, and what to expect, builds topical relevance and trust at the same time. Useful content is the rare thing that helps ranking and conversion together.',
				},
				{ kind: 'heading', id: 'consistency', text: 'Stay consistent and let reviews compound' },
				{
					kind: 'paragraph',
					text: 'Keep your name, address, and phone number identical everywhere they appear, and make it easy for happy patients to leave honest reviews. Consistency signals legitimacy, and a steady stream of genuine reviews is one of the strongest local trust signals there is, within the privacy rules that govern healthcare.',
				},
			],
			keyTakeaways: [
				'Clear site structure beats shortcuts for local ranking.',
				'A complete Google Business Profile is often the highest-impact step.',
				'Dedicated service and location pages target real searches.',
				'Write specific, locally relevant titles and descriptions.',
				'Useful content and consistent, genuine reviews compound over time.',
			],
		},
	},
	{
		slug: 'after-contact-form-submission',
		title: 'What Happens After Someone Fills Out Your Contact Form?',
		type: 'guide',
		category: 'Growth Systems',
		lane: 'growth',
		audience: 'Practices with inquiry forms',
		excerpt:
			'A website conversion is not complete until the lead is captured, organized, followed up with, and given a clear next step.',
		forWho: 'Practices with inquiry forms',
		datePublished: '2026-02-18',
		lastUpdated: '2026-02-18',
		readingTime: '5 min read',
		relatedService: 'Growth System Setup',
		ctaLabel: 'Explore Growth Systems',
		ctaHref: '/services/growth-systems',
		status: 'Published',
		body: {
			intro:
				'A new inquiry is the most valuable thing your website produces, and it is also the easiest thing to waste. Plenty of practices invest in design and traffic, then let hard-won leads land in an inbox where they are missed during a busy week. What happens in the minutes and days after someone hits submit often matters more than the form itself. Here is what a converting practice does next.',
			blocks: [
				{ kind: 'heading', id: 'wasted-moment', text: 'The moment most practices waste' },
				{
					kind: 'paragraph',
					text: 'For many sites, submitting a form does almost nothing: the visitor sees a vague "thank you," an email drops into a shared inbox, and that is it. No confirmation that sets expectations, no record beyond the email, and no system to make sure someone actually follows up. Every gap here is a prospect quietly lost.',
				},
				{ kind: 'heading', id: 'confirm', text: 'Confirm instantly' },
				{
					kind: 'paragraph',
					text: 'The first thing a new lead needs is reassurance. An immediate confirmation, on-screen and by email, that their message was received, plus a clear note on when they will hear back, prevents the anxious "did that go through?" feeling that pushes people to a competitor.',
				},
				{ kind: 'heading', id: 'capture', text: 'Capture, do not just notify' },
				{
					kind: 'paragraph',
					text: 'A notification email is not a system. Real lead capture means the inquiry is recorded somewhere durable, a CRM, with the details your team needs and a status you can track.',
				},
				{
					kind: 'list',
					items: [
						'Every inquiry stored with name, contact, and what they asked about.',
						'A clear owner responsible for responding.',
						'A visible status so nothing sits untouched.',
						'Context (which page, which service) carried along with the lead.',
					],
				},
				{ kind: 'heading', id: 'schedule', text: 'Follow up on a schedule, not a whim' },
				{
					kind: 'paragraph',
					text: 'Most people do not book on the first touch, and busy weeks make manual follow-up unreliable. A simple, scheduled sequence, a prompt first reply, then a thoughtful nudge or two, keeps interested patients engaged without depending on someone remembering. This is where a Growth System earns its keep.',
				},
				{
					kind: 'callout',
					tone: 'tip',
					title: 'The exact cadence',
					text: 'The New Patient Inquiry Follow-Up SOP lays out the full sequence, owners, and scripts you can copy.',
				},
				{ kind: 'heading', id: 'next-step', text: 'Give one clear next step' },
				{
					kind: 'paragraph',
					text: 'Every follow-up should make the next action obvious: book a consult, confirm a time, or answer one quick question. Ending with a single, low-friction step removes the guesswork and turns interest into a scheduled appointment. The website earns the lead. The system behind it is what keeps the lead from slipping away.',
				},
			],
			keyTakeaways: [
				'What happens after the form often matters more than the form.',
				'Confirm receipt instantly and set expectations for a reply.',
				'Capture leads into a CRM with an owner and a status, not just an inbox.',
				'Use a scheduled follow-up sequence so no lead depends on memory.',
				'End every follow-up with one clear, low-friction next step.',
			],
		},
	},
	{
		slug: 'template-vs-custom-website',
		title: 'Website Foundation vs Signature Custom: Which Is Right for Your Practice?',
		type: 'guide',
		category: 'Foundations',
		lane: 'foundation',
		audience: 'Growing healthcare practices',
		excerpt:
			'A Website Foundation helps you launch faster, while a Signature Custom Website gives you deeper strategy and flexibility.',
		forWho: 'Growing healthcare practices',
		datePublished: '2026-01-28',
		lastUpdated: '2026-01-28',
		readingTime: '6 min read',
		relatedService: 'Website Foundations / Signature Custom Website',
		ctaLabel: 'Explore Live Demos',
		ctaHref: '/templates',
		status: 'Published',
		body: {
			intro:
				'One of the first decisions a growing practice faces is how to build its website: start from a proven Foundation, or commission a fully custom build. Neither is "better" in the abstract, they solve different problems at different stages. This guide breaks down what each is, when it fits, and how to choose without overspending or under-building.',
			blocks: [
				{ kind: 'heading', id: 'what-foundation', text: 'What a Website Foundation actually is' },
				{
					kind: 'paragraph',
					text: 'A Website Foundation is not a generic template you fill in yourself. It is a healthcare-specific system, structure, page architecture, trust sections, and conversion flow already planned, that gets customized around your brand, services, and story. Because the hardest strategic decisions are already made, a Foundation launches faster and costs less than a bespoke build, while still looking and behaving like a site built for you.',
				},
				{ kind: 'heading', id: 'side-by-side', text: 'Side by side' },
				{
					kind: 'compare',
					columns: [
						{ label: 'Website Foundation', points: ['Faster path to launch', 'Lower starting investment', 'Starts from a proven framework', 'Best for common service-business needs'] },
						{ label: 'Signature Custom', points: ['Fully custom strategy and design', 'Higher investment', 'Custom architecture and integrations', 'Best for complex or unique organizations'] },
					],
				},
				{ kind: 'heading', id: 'when-foundation', text: 'When a Foundation is the right call' },
				{
					kind: 'list',
					items: [
						'You need a credible, professional site live sooner rather than later.',
						'Your services map cleanly to a known model (med spa, solo practice, wellness clinic, etc.).',
						'You want to control budget and reduce decision fatigue.',
						'You would rather launch strong now and refine over time than wait months for perfect.',
					],
				},
				{ kind: 'heading', id: 'what-custom', text: 'What a Signature Custom Website adds' },
				{
					kind: 'paragraph',
					text: 'A custom build starts from your specific brand, content model, and operational workflow rather than an existing structure. It is the right investment when your practice has nuances a Foundation cannot elegantly absorb.',
				},
				{
					kind: 'list',
					items: [
						'An unusual or complex service mix that does not fit standard patterns.',
						'A distinctive brand that needs a bespoke visual identity.',
						'Custom functionality, integrations, or content workflows.',
						'A larger or multi-location organization with deeper requirements.',
					],
				},
				{ kind: 'heading', id: 'how-decide', text: 'How to decide' },
				{
					kind: 'paragraph',
					text: 'The honest answer for most practices is to start with a Foundation. It gets you a strong, converting site quickly, and you can layer on Local Visibility, a Growth System, or ongoing optimization as you grow. A custom build makes sense when your needs clearly outgrow what a Foundation can express.',
				},
				{
					kind: 'callout',
					tone: 'insight',
					title: 'Not sure which fits?',
					text: 'That is exactly what a Website and Lead Flow Snapshot is for. We will look at your situation and tell you which path fits, with no obligation either way.',
				},
			],
			keyTakeaways: [
				'A Foundation is a healthcare-specific system, not a fill-in-the-blank template.',
				'Foundations win on speed, budget, and reduced decision fatigue.',
				'Custom builds win on complexity, distinctiveness, and special requirements.',
				'Most practices should start with a Foundation and expand over time.',
			],
		},
	},

	// ─── Toolkit ───────────────────────────────────────────────────────
	{
		slug: 'healthcare-homepage-wireframe',
		title: 'The Healthcare Homepage Wireframe & Section Outline',
		type: 'toolkit',
		category: 'Website Strategy',
		lane: 'custom',
		audience: 'Owners and marketers planning a site',
		excerpt:
			'A copy-ready, section-by-section homepage outline: what each block should say, in what order, to build trust and drive the next step.',
		subtitle:
			'A section-by-section homepage blueprint built around how health and wellness visitors actually decide.',
		outcomes: [
			'A proven homepage section order you can hand to a designer',
			'A prompt for what every section must answer',
			'A built-in trust and conversion check before you publish',
		],
		forWho: 'Owners and marketers planning or rebuilding a site',
		timeToImplement: 'About 45 minutes to draft',
		datePublished: '2026-03-18',
		lastUpdated: '2026-03-18',
		readingTime: '7 min read',
		relatedService: 'Website Foundations',
		ctaLabel: 'Explore Live Demos',
		ctaHref: '/templates',
		status: 'Published',
		body: {
			intro:
				'A homepage does not need more sections, it needs the right sections in the right order. This outline is the structure we build healthcare homepages on: each block has one job, and together they move a first-time visitor from "who is this?" to "I should reach out." Copy it into a doc and draft your own homepage section by section.',
			blocks: [
				{ kind: 'heading', id: 'how-to-use', text: 'How to use this outline' },
				{
					kind: 'paragraph',
					text: 'Work top to bottom. For each section, write one or two sentences answering the prompt. If you cannot answer it clearly, that is exactly the spot most visitors get confused too.',
				},
				{
					kind: 'callout',
					tone: 'insight',
					title: 'One job per section',
					text: 'If a section is trying to do three things, split it. Clarity comes from each block doing one thing well.',
				},
				{ kind: 'heading', id: 'section-order', text: 'The section order' },
				{
					kind: 'steps',
					steps: [
						{ title: 'Hero', text: 'Who you help, what you do, and one clear action. Specific beats clever.' },
						{ title: 'Trust bar', text: 'Credentials, affiliations, years, or a line of proof, immediately under the hero.' },
						{ title: 'What you do', text: 'A plain statement of your core offer a visitor can repeat back.' },
						{ title: 'Services overview', text: 'Name each meaningful service and link it to its own page.' },
						{ title: 'How to begin', text: 'A simple, low-friction explanation of the first step (book, call, or inquire).' },
						{ title: 'Proof', text: 'Reviews, outcomes, real photography, or recognizable affiliations.' },
						{ title: 'Local relevance', text: 'City, region, and service area named on the page.' },
						{ title: 'FAQ', text: 'Answer the three or four questions that quietly stop people from acting.' },
						{ title: 'Final call to action', text: 'One more obvious, repeated way to take the next step.' },
					],
				},
				{ kind: 'heading', id: 'hero-prompts', text: 'Getting the hero right' },
				{
					kind: 'doDont',
					doItems: [
						'"Hormone and weight-loss care for men in Austin, with same-week visits"',
						'State who it is for and what they get',
						'Pair it with one clear primary action',
					],
					dontItems: [
						'"Your health is our priority"',
						'Open with a rotating carousel of stock photos',
						'Bury the action below the fold',
					],
				},
				{ kind: 'heading', id: 'before-publish', text: 'Before you publish' },
				{
					kind: 'checklist',
					title: 'Quick homepage gut-check',
					items: [
						'A stranger can tell what you do within five seconds',
						'The primary action appears above the fold and repeats lower down',
						'Every named service links to its own page',
						'There is real proof, not just adjectives',
						'Your city or service area is stated on the page',
						'It reads cleanly on a phone first',
					],
				},
			],
			keyTakeaways: [
				'Order matters more than adding sections.',
				'Each section should answer one clear question.',
				'Lead with a specific hero, not a slogan or carousel.',
				'Route to dedicated service pages instead of explaining everything.',
				'Gut-check trust, clarity, and the next step before launch.',
			],
		},
	},

	// ─── Checklist ──────────────────────────────────────────────────────
	{
		slug: 'website-launch-readiness-checklist',
		title: 'The New Website Launch Readiness Checklist',
		type: 'checklist',
		category: 'Foundations',
		lane: 'foundation',
		audience: 'Anyone about to launch or relaunch a site',
		excerpt:
			'Everything to verify before a healthcare website goes live: content, trust, conversion, technical, local, and follow-up.',
		subtitle:
			'A pre-launch checklist so nothing important is missed the day your new site goes live.',
		outcomes: [
			'Confidence that the essentials are covered before launch',
			'A shared list your team and developer can work from',
			'Fewer "we forgot to test that" moments on day one',
		],
		forWho: 'Owners, marketers, and developers shipping a site',
		timeToImplement: 'About 30 minutes',
		datePublished: '2026-03-21',
		lastUpdated: '2026-03-21',
		readingTime: '6 min read',
		relatedService: 'Website Foundations',
		ctaLabel: 'Explore Live Demos',
		ctaHref: '/templates',
		status: 'Published',
		body: {
			intro:
				'Launch day is the worst time to discover a broken form or a missing page. This checklist walks the six areas that decide whether a new healthcare site is actually ready, not just visually finished. Run it before you flip the switch, and again the morning after.',
			blocks: [
				{ kind: 'heading', id: 'content', text: '1. Content and pages' },
				{
					kind: 'checklist',
					items: [
						'Homepage, services overview, and individual service pages are complete',
						'About / provider page with real names and credentials',
						'Contact or booking page with correct details',
						'Trust and FAQ sections are filled in, not placeholder text',
						'Every page has a specific, human title and meta description',
					],
				},
				{ kind: 'heading', id: 'trust', text: '2. Trust and proof' },
				{
					kind: 'checklist',
					items: [
						'Real photography, not obvious stock',
						'Credentials, licensing, and affiliations are visible',
						'Genuine reviews or outcomes appear where it matters',
						'Branding is consistent from page to page',
					],
				},
				{ kind: 'heading', id: 'conversion', text: '3. Conversion and forms' },
				{
					kind: 'checklist',
					items: [
						'A clear primary action in the header and repeated on long pages',
						'Every form submits successfully and shows a confirmation',
						'Form notifications reach the right person',
						'Phone numbers and emails are tap-to-act on mobile',
					],
				},
				{
					kind: 'callout',
					tone: 'warning',
					title: 'Actually test the form',
					text: 'Submit a real test inquiry from a phone and confirm the notification, the on-screen message, and where the lead lands. This is the most commonly broken thing at launch.',
				},
				{ kind: 'heading', id: 'technical', text: '4. Technical and performance' },
				{
					kind: 'checklist',
					items: [
						'HTTPS is active and there are no mixed-content warnings',
						'Pages load fast on a phone on cellular data',
						'No broken links or images',
						'Favicon, social share image, and 404 page are set',
						'Analytics and tag manager are installed and firing',
					],
				},
				{ kind: 'heading', id: 'local', text: '5. Local and SEO' },
				{
					kind: 'checklist',
					items: [
						'Name, address, and phone match your Google Business Profile',
						'Each location has its own page if you serve more than one',
						'A sitemap is generated and submitted to Search Console',
						'Important pages are indexable (no stray noindex)',
					],
				},
				{ kind: 'heading', id: 'followup', text: '6. Follow-up and tracking' },
				{
					kind: 'checklist',
					items: [
						'An instant confirmation fires on form submission',
						'Leads are captured somewhere durable, not just an inbox',
						'A named owner and response-time target are set',
						'You can measure how many inquiries the site produces',
					],
				},
			],
			keyTakeaways: [
				'A site can look finished and still not be launch-ready.',
				'Test every form with a real submission from a phone.',
				'Confirm HTTPS, speed, indexing, and analytics before launch.',
				'Match your details to your Google Business Profile.',
				'Have follow-up and tracking live on day one.',
			],
		},
	},

	// ─── Playbook ─────────────────────────────────────────────────────
	{
		slug: 'google-business-profile-sop',
		title: 'The Google Business Profile Setup & Optimization SOP',
		type: 'playbook',
		category: 'Local Visibility',
		lane: 'foundation',
		audience: 'Local and appointment-based practices',
		excerpt:
			'A step-by-step SOP to claim, complete, and optimize your Google Business Profile, the highest-impact local visibility asset for most practices.',
		subtitle:
			'A repeatable procedure to claim, complete, and optimize the local asset most patients see before your website.',
		outcomes: [
			'A fully completed, optimized profile',
			'A simple routine to keep it fresh',
			'A steady, compliant review flow',
		],
		forWho: 'Practice owners and office managers',
		timeToImplement: 'About 1 to 2 hours',
		datePublished: '2026-03-24',
		lastUpdated: '2026-03-24',
		readingTime: '8 min read',
		relatedService: 'Local Visibility',
		ctaLabel: 'Explore Local Visibility',
		ctaHref: '/services/local-visibility',
		status: 'Published',
		body: {
			intro:
				'For most local practices, the Google Business Profile is the single highest-impact visibility asset, and it is free. It powers the map results and the panel many patients see before they ever reach your website. This SOP takes you from claiming the profile to keeping it optimized, in order.',
			blocks: [
				{ kind: 'heading', id: 'why', text: 'Why the profile comes first' },
				{
					kind: 'stats',
					stats: [
						{ value: 'Map pack', label: 'Most local searches surface a short map result set before any website. Your profile decides whether you appear in it.' },
						{ value: 'Free', label: 'A Google Business Profile costs nothing and is usually the fastest local-visibility win available.' },
						{ value: 'NAP', label: 'Consistent name, address, and phone across the web is a core local ranking signal.' },
					],
				},
				{ kind: 'heading', id: 'steps', text: 'The setup and optimization steps' },
				{
					kind: 'steps',
					steps: [
						{ title: 'Claim and verify', text: 'Find or create your profile and complete Google verification. You cannot edit much until you do.' },
						{ title: 'Complete every field', text: 'Name, address, phone, website, hours, and a thorough description. Empty fields cost you.' },
						{ title: 'Choose categories carefully', text: 'Set the most accurate primary category, then add relevant secondary categories. This strongly affects what you rank for.' },
						{ title: 'Add services and descriptions', text: 'List your services with short, plain-language descriptions that match what patients search for.' },
						{ title: 'Upload real photos', text: 'Exterior, interior, team, and treatment spaces. Real photography builds trust and engagement.' },
						{ title: 'Turn on a review routine', text: 'Make it easy for happy patients to leave honest reviews, and respond to them within privacy rules.' },
						{ title: 'Post and maintain', text: 'Use updates and posts occasionally, and review the profile quarterly so hours and services stay current.' },
					],
				},
				{ kind: 'heading', id: 'consistency', text: 'Keep your details consistent' },
				{
					kind: 'doDont',
					doItems: [
						'Match name, address, and phone exactly across your site and listings',
						'Use a local phone number where possible',
						'Keep hours updated around holidays',
					],
					dontItems: [
						'Vary your business name between listings',
						'Stuff keywords into the business name field',
						'Let the address or hours drift out of date',
					],
				},
				{
					kind: 'callout',
					tone: 'warning',
					title: 'Do not keyword-stuff the name',
					text: 'Adding keywords to your business name violates Google guidelines and can get the profile suspended. Put keywords in the description, services, and categories instead.',
				},
				{ kind: 'heading', id: 'completeness', text: 'Profile completeness check' },
				{
					kind: 'checklist',
					title: 'Confirm before you call it done',
					items: [
						'Profile is claimed and verified',
						'Primary and secondary categories are accurate',
						'Hours, phone, and website are correct',
						'At least a handful of real photos are uploaded',
						'Services are listed with descriptions',
						'A review request routine is in place',
					],
				},
			],
			keyTakeaways: [
				'The profile is often seen before your website, optimize it first.',
				'Complete every field and choose categories with care.',
				'Keep name, address, and phone identical everywhere.',
				'Never keyword-stuff the business name.',
				'Reviews and quarterly upkeep compound over time.',
			],
		},
	},

	// ─── Toolkit ───────────────────────────────────────────────────────
	{
		slug: 'lead-followup-templates',
		title: 'First-5-Touches Follow-Up Templates',
		type: 'toolkit',
		category: 'Growth Systems',
		lane: 'growth',
		audience: 'Front-desk teams and practice owners',
		excerpt:
			'Copy-paste email and SMS templates for the first five touches after an inquiry, ready to adapt to your practice.',
		subtitle:
			'Copy-paste email and SMS templates for the first five touches after a new inquiry.',
		outcomes: [
			'Five ready-to-send templates for the first week',
			'A consistent voice for every responder',
			'A faster, more human first response',
		],
		forWho: 'Front-desk teams, coordinators, and owners',
		timeToImplement: 'About 30 minutes to adapt',
		datePublished: '2026-03-27',
		lastUpdated: '2026-03-27',
		readingTime: '6 min read',
		relatedService: 'Growth System Setup',
		ctaLabel: 'Explore Growth Systems',
		ctaHref: '/services/growth-systems',
		status: 'Published',
		body: {
			intro:
				'These are the templates behind the New Patient Inquiry Follow-Up SOP. Drop them into your inbox, CRM, or phone, swap the brackets for your details, and you have a consistent, human first week of follow-up that does not depend on who is at the desk. Keep them short and personal.',
			blocks: [
				{ kind: 'heading', id: 'how-to-use', text: 'How to use these' },
				{
					kind: 'callout',
					tone: 'insight',
					title: 'Adapt, do not copy blindly',
					text: 'Replace every bracket, match your voice, and confirm logistics only. Keep clinical detail out of standard email and SMS.',
				},
				{ kind: 'heading', id: 'touches', text: 'The five touches' },
				{
					kind: 'steps',
					steps: [
						{ title: 'Touch 1 — Instant confirmation', text: 'Automated, the moment the form is submitted.' },
						{ title: 'Touch 2 — Personal reply', text: 'Within about five minutes, from a real person.' },
						{ title: 'Touch 3 — Value follow-up', text: 'Day 1, something genuinely helpful about their service.' },
						{ title: 'Touch 4 — Gentle nudge', text: 'Day 3, a light, easy reason to book.' },
						{ title: 'Touch 5 — Final touch', text: 'Day 7, a no-pressure door left open.' },
					],
				},
				{ kind: 'heading', id: 'templates', text: 'The templates' },
				{
					kind: 'script',
					channel: 'Email',
					title: 'Touch 1 — Instant confirmation (automated)',
					body: 'Subject: We received your message\n\nHi [First name],\n\nThanks for reaching out to [Practice]. We have your request and a team member will personally follow up within [one business hour]. If it is urgent, call us at [phone].\n\nTalk soon,\n[Practice] team',
				},
				{
					kind: 'script',
					channel: 'SMS',
					title: 'Touch 2 — Personal reply',
					body: 'Hi [First name], this is [Name] at [Practice]. Thanks for reaching out about [service]. Would [day/time] or [day/time] work for a quick call, or would you like me to book you in?',
				},
				{
					kind: 'script',
					channel: 'Email',
					title: 'Touch 3 — Day 1 value follow-up',
					body: 'Subject: A little more on [service]\n\nHi [First name],\n\nHere is what a first visit for [service] usually looks like, and what to expect on timing and cost: [1-2 lines].\n\nWhenever you are ready, you can book here: [link]. Or just reply with any question.\n\n[Name]',
				},
				{
					kind: 'script',
					channel: 'SMS',
					title: 'Touch 4 — Day 3 gentle nudge',
					body: 'Hi [First name], just checking in. We have a couple of openings this week for [service] if you would like one. Want me to hold a spot?',
				},
				{
					kind: 'script',
					channel: 'Email',
					title: 'Touch 5 — Day 7 final touch',
					body: 'Subject: Still here when you are ready\n\nHi [First name],\n\nNo pressure at all, I just wanted to leave the door open. If [service] is still on your mind, we would be glad to help, and you can reach us any time at [phone] or [link].\n\nWishing you well,\n[Name]',
				},
				{
					kind: 'callout',
					tone: 'warning',
					title: 'Keep it compliant',
					text: 'Use these channels to confirm receipt and logistics only. Keep diagnoses and treatment details out of standard email and SMS.',
				},
				{ kind: 'heading', id: 'make-yours', text: 'Make them yours' },
				{
					kind: 'checklist',
					title: 'Before you send',
					items: [
						'Every bracket is replaced with your real details',
						'The tone matches how your team actually talks',
						'A booking link or clear next step is included',
						'An owner is assigned to each touch',
						'No clinical detail in email or SMS',
					],
				},
			],
			keyTakeaways: [
				'A consistent first week of follow-up should not depend on memory.',
				'Fast and human beats slow and polished.',
				'Replace every bracket and keep your real voice.',
				'End each message with one clear next step.',
				'Confirm logistics only; keep PHI out of email and SMS.',
			],
		},
	},

	// ─── Guide ──────────────────────────────────────────────────────────
	{
		slug: 'med-spa-website-bookings',
		title: 'What Every Med Spa Website Needs to Drive Bookings',
		type: 'guide',
		category: 'Med Spa Websites',
		lane: 'custom',
		audience: 'Med spas and treatment-based clinics',
		excerpt:
			'Med spa websites need premium visual trust, clear treatment education, repeated booking prompts, and local service pages.',
		forWho: 'Med spas and aesthetic clinics',
		datePublished: '2026-03-30',
		lastUpdated: '2026-03-30',
		readingTime: '6 min read',
		relatedService: 'Med Spa Website Foundation',
		ctaLabel: 'View Med Spa Demo',
		ctaHref: '/templates/med-spa',
		status: 'Published',
		body: {
			intro:
				'A med spa sells a premium, often discretionary experience, and the website has to feel like the result the patient is hoping for. Beauty alone does not book appointments, though. The sites that convert pair a premium feel with clear treatment education and an obvious, repeated path to consultation. Here is what every med spa website needs.',
			blocks: [
				{ kind: 'heading', id: 'visual-trust', text: 'Premium visual trust' },
				{
					kind: 'paragraph',
					text: 'Aesthetic patients judge results by what they see. A calm, polished design with real photography of your space, team, and (compliant) results signals the quality of care far better than stock imagery ever will. The look of the site is itself a sample of your work.',
				},
				{ kind: 'heading', id: 'education', text: 'Treatment education that reassures' },
				{
					kind: 'paragraph',
					text: 'Most prospective patients are uncertain: what does the treatment do, will it hurt, what is the downtime, is it right for me? Each meaningful treatment deserves its own page that answers those questions honestly. Education lowers anxiety, and lower anxiety books more consultations.',
				},
				{
					kind: 'list',
					items: [
						'What the treatment is and the concern it addresses.',
						'What to expect during and after, including downtime.',
						'Who it is and is not a good fit for.',
						'A clear path to a consultation, not a hard sell.',
					],
				},
				{ kind: 'heading', id: 'booking', text: 'Repeated, low-pressure booking prompts' },
				{
					kind: 'paragraph',
					text: 'Med spa decisions are emotional and often happen over multiple visits to the site. A consultation call-to-action should appear in the header, after each treatment explanation, and at the end of every page. The framing matters: "book a consultation" feels safer than "buy now."',
				},
				{
					kind: 'doDont',
					doItems: [
						'Lead treatment pages with education, then invite a consult',
						'Show real, compliant before-and-after proof',
						'Make booking a consultation effortless on mobile',
					],
					dontItems: [
						'Bury pricing and process behind vague language',
						'Use only stock imagery of models',
						'Rely on a single contact link in the footer',
					],
				},
				{ kind: 'heading', id: 'local', text: 'Local service pages' },
				{
					kind: 'paragraph',
					text: 'Aesthetic patients search locally and by treatment. Dedicated, well-structured treatment pages that name your area help you show up for those searches and let patients self-select before they ever call. This is where local visibility and conversion reinforce each other.',
				},
				{
					kind: 'callout',
					tone: 'tip',
					title: 'See it in a live build',
					text: 'The Med Spa Website Foundation demo shows this structure in action, treatment education, trust, and a clear consultation path.',
				},
			],
			keyTakeaways: [
				'The site itself is a sample of your work, make it feel premium.',
				'Give each treatment its own honest, reassuring page.',
				'Frame the action as a consultation and repeat it throughout.',
				'Use real, compliant photography over stock models.',
				'Structured local treatment pages drive both visibility and bookings.',
			],
		},
	},

	// ─── Planned (roadmap stubs) ───────────────────────────────────────
	{
		slug: 'solo-practice-trust-online',
		title: 'How Solo Practices Can Build Trust Online',
		type: 'guide',
		category: 'Solo Practices',
		lane: 'custom',
		audience: 'Independent providers',
		excerpt:
			'Independent providers need personal credibility, clear services, patient education, and a simple inquiry path.',
		relatedService: 'Solo Practice Website Foundation',
		ctaLabel: 'View Solo Practice Demo',
		ctaHref: '/templates/solo-practice',
		status: 'Planned',
	},
	{
		slug: 'service-pages-local-seo',
		title: 'Why Every Service Deserves Its Own Page',
		type: 'guide',
		category: 'Local Visibility',
		lane: 'foundation',
		audience: 'Service-based healthcare businesses',
		excerpt:
			'Dedicated service pages help visitors understand what you offer and help search engines understand your services.',
		relatedService: 'Local Visibility',
		ctaLabel: 'Get My Free Snapshot',
		ctaHref: '/audit',
		status: 'Planned',
	},
	{
		slug: 'website-lead-booking-system',
		title: 'How to Turn Your Website Into a Lead and Booking System',
		type: 'playbook',
		category: 'Growth Systems',
		lane: 'growth',
		audience: 'Healthcare and high-trust service businesses',
		excerpt:
			'A stronger website connects trust, service clarity, lead capture, booking flow, and follow-up into one practical system.',
		relatedService: 'Growth System Setup',
		ctaLabel: 'Get My Free Snapshot',
		ctaHref: '/audit',
		status: 'Planned',
	},
];
