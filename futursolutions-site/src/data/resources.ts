export interface ArticleSection {
	heading: string;
	paragraphs?: string[];
	list?: string[];
}

export interface ArticleBody {
	datePublished: string;
	readingTime: string;
	intro: string;
	sections: ArticleSection[];
	keyTakeaways: string[];
}

export interface ResourceEntry {
	slug: string;
	title: string;
	category: string;
	audience: string;
	excerpt: string;
	relatedService: string;
	ctaLabel: string;
	ctaHref: string;
	status: 'Planned' | 'Published';
	article?: ArticleBody;
}

export const publishedResources = (): ResourceEntry[] =>
	resources.filter((r) => r.status === 'Published' && r.article);

export const resources: ResourceEntry[] = [
	{
		slug: 'healthcare-website-trust',
		title: 'What Makes a Healthcare Website Feel Trustworthy?',
		category: 'Website Strategy',
		audience: 'Health and wellness businesses',
		excerpt:
			'A patient often forms an opinion about your practice before they read a full paragraph. Learn how design, structure, clarity, and navigation influence trust.',
		relatedService: 'Signature Custom Websites',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Published',
		article: {
			datePublished: '2026-01-21',
			readingTime: '5 min read',
			intro:
				'Trust is the currency of healthcare marketing. A visitor forms an impression of your practice in seconds — often before reading a full sentence — and that impression decides whether they keep reading or close the tab. Trust isn\u2019t one element; it\u2019s the cumulative effect of many small, deliberate signals. Here\u2019s what actually moves it.',
			sections: [
				{
					heading: 'Visual calm signals competence',
					paragraphs: [
						'Cluttered, dated, or chaotic design reads as disorganization — and patients quietly extend that judgment to the care itself. Generous spacing, a restrained color palette, consistent typography, and high-quality imagery communicate that you\u2019re careful and established. The goal isn\u2019t flashy; it\u2019s calm and confident.',
					],
				},
				{
					heading: 'Real proof beats adjectives',
					paragraphs: [
						'Saying you\u2019re "trusted" and "caring" means little. Showing it means everything. The most persuasive trust signals are concrete and verifiable.',
					],
					list: [
						'Provider credentials, training, and licensing.',
						'Real photography of the team and space, not generic stock.',
						'Genuine patient reviews and outcomes (within privacy rules).',
						'Affiliations, certifications, and association memberships.',
						'Clear, transparent information about process and pricing where appropriate.',
					],
				},
				{
					heading: 'Clarity is a form of respect',
					paragraphs: [
						'When visitors instantly understand what you offer, who it\u2019s for, and how to begin, they feel respected — and respected visitors convert. Confusing navigation, jargon, and vague service descriptions create friction that erodes trust even when the practice is excellent.',
						'Write the way you\u2019d explain something to a patient in the room: direct, warm, and free of insider language.',
					],
				},
				{
					heading: 'Consistency makes you feel established',
					paragraphs: [
						'A site where the logo, colors, tone, and quality hold steady from page to page feels like a real, stable organization. Inconsistency — a polished homepage followed by a neglected services page — signals the opposite, and patients notice.',
					],
				},
				{
					heading: 'Speed and security are silent trust signals',
					paragraphs: [
						'A site that loads instantly, runs on HTTPS, and behaves flawlessly on mobile earns trust before a word is read. A slow or broken experience does the reverse, no matter how good the content is. For healthcare, handling any sensitive information with visible care is non-negotiable.',
					],
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
		category: 'Conversion',
		audience: 'Healthcare practices',
		excerpt:
			'Many healthcare websites look fine but lose visitors through unclear messaging, buried calls-to-action, weak service pages, or no follow-up system.',
		relatedService: 'Website Audit',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Published',
		article: {
			datePublished: '2026-01-14',
			readingTime: '6 min read',
			intro:
				'A practice website can look polished and still quietly fail at its one real job: turning an interested visitor into a booked patient. Most sites don\u2019t lose people because they\u2019re ugly — they lose them because the path from "interested" to "booked" is unclear. Here are the most common reasons practice websites underperform, and what to do about each.',
			sections: [
				{
					heading: '1. The first impression doesn\u2019t establish trust fast enough',
					paragraphs: [
						'In healthcare, the decision is emotional before it\u2019s logical. A visitor is deciding whether they trust you with their body, their time, and often their insurance. If the homepage opens with vague slogans instead of clear signals — who you help, what you treat, why you\u2019re credible — people hesitate, and hesitation is where you lose them.',
						'Strong sites answer three questions within the first screen: What do you do? Who is it for? Why should I believe you? Photography, credentials, and plain-language service descriptions do more work here than clever taglines.',
					],
				},
				{
					heading: '2. The next step is buried',
					paragraphs: [
						'Many sites hide the most important action — booking or contacting — behind a small link in the corner, or bury it at the bottom of a long page. Visitors should never have to hunt for how to take the next step.',
						'A clear, repeated call-to-action (book a consult, request an appointment, call the office) should appear in the header, after key sections, and at the end of every page. Repetition isn\u2019t pushy; it\u2019s helpful.',
					],
				},
				{
					heading: '3. Services are described in one undifferentiated blur',
					paragraphs: [
						'When every service is crammed onto a single page, both patients and search engines struggle to understand what you actually offer. A visitor researching a specific treatment can\u2019t tell whether you specialize in it or just mention it in passing.',
					],
					list: [
						'Give meaningful services their own dedicated page.',
						'Explain what the service is, who it\u2019s for, and what to expect.',
						'Address the common questions and concerns patients actually have.',
						'End each service page with a clear way to book or ask a question.',
					],
				},
				{
					heading: '4. Nothing happens after the form is submitted',
					paragraphs: [
						'This is the most expensive gap, because it wastes the leads you already earned. A contact form that drops into an inbox — with no confirmation, no follow-up, and no system to track who needs a reply — means real prospects slip through during a busy week.',
						'A converting website connects to a follow-up system: an immediate confirmation, a record of the inquiry, and a clear process for who responds and when. The website earns the lead; the system keeps it.',
					],
				},
				{
					heading: '5. The site fights the visitor on mobile',
					paragraphs: [
						'Most healthcare searches happen on phones. If buttons are hard to tap, text is cramped, or the booking flow breaks on a small screen, you lose people who were ready to act. Mobile isn\u2019t a smaller version of the site — for most practices, it\u2019s the primary one.',
					],
				},
			],
			keyTakeaways: [
				'Trust signals belong above the fold — say who you help and why you\u2019re credible.',
				'Make the next step obvious and repeat it throughout the page.',
				'Give important services their own clear, structured pages.',
				'Connect forms to a real follow-up system so no lead is lost.',
				'Design for mobile first, since that\u2019s where most patients arrive.',
			],
		},
	},
	{
		slug: 'health-wellness-homepage-structure',
		title: 'The Homepage Structure Every Health and Wellness Business Needs',
		category: 'Website Strategy',
		audience: 'Health and wellness businesses',
		excerpt:
			'A clear homepage should build trust quickly, explain services clearly, guide visitors toward the next step, and support local visibility.',
		relatedService: 'Website Foundations',
		ctaLabel: 'Explore Live Demos',
		ctaHref: '/templates',
		status: 'Planned',
	},
	{
		slug: 'med-spa-website-bookings',
		title: 'What Every Med Spa Website Needs to Drive Bookings',
		category: 'Med Spa Websites',
		audience: 'Med spas and treatment-based clinics',
		excerpt:
			'Med spa websites need premium visual trust, clear treatment education, repeated booking prompts, and local service pages.',
		relatedService: 'Med Spa Website Foundation',
		ctaLabel: 'View Med Spa Demo',
		ctaHref: '/templates/med-spa',
		status: 'Planned',
	},
	{
		slug: 'solo-practice-trust-online',
		title: 'How Solo Practices Can Build Trust Online',
		category: 'Solo Practices',
		audience: 'Independent providers',
		excerpt:
			'Independent providers need personal credibility, clear services, patient education, and a simple inquiry path.',
		relatedService: 'Solo Practice Website Foundation',
		ctaLabel: 'View Solo Practice Demo',
		ctaHref: '/templates/solo-practice',
		status: 'Planned',
	},
	{
		slug: 'local-seo-basics-medical-wellness',
		title: 'Local SEO Basics for Medical and Wellness Practices',
		category: 'Local Visibility',
		audience: 'Medical and wellness practices',
		excerpt:
			'Local visibility starts with structured service pages, metadata, internal links, location relevance, and useful content.',
		relatedService: 'Local Visibility',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
	},
	{
		slug: 'service-pages-local-seo',
		title: 'Why Every Service Deserves Its Own Page',
		category: 'Local Visibility',
		audience: 'Service-based healthcare businesses',
		excerpt:
			'Dedicated service pages help visitors understand what you offer and help search engines understand your services.',
		relatedService: 'Local Visibility',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
	},
	{
		slug: 'after-contact-form-submission',
		title: 'What Happens After Someone Fills Out Your Contact Form?',
		category: 'Growth Systems',
		audience: 'Practices with inquiry forms',
		excerpt:
			'A website conversion is not complete until the lead is captured, organized, followed up with, and given a clear next step.',
		relatedService: 'Growth System Setup',
		ctaLabel: 'Explore Services',
		ctaHref: '/services',
		status: 'Planned',
	},
	{
		slug: 'template-vs-custom-website',
		title: 'Website Foundation vs Signature Custom: Which Is Right for Your Practice?',
		category: 'Foundations',
		audience: 'Growing healthcare practices',
		excerpt:
			'A Website Foundation helps you launch faster, while a Signature Custom Website gives you deeper strategy and flexibility.',
		relatedService: 'Website Foundations / Signature Custom Website',
		ctaLabel: 'Explore Live Demos',
		ctaHref: '/templates',
		status: 'Published',
		article: {
			datePublished: '2026-01-28',
			readingTime: '6 min read',
			intro:
				'One of the first decisions a growing practice faces is how to build its website: start from a proven Foundation, or commission a fully custom build. Neither is "better" in the abstract — they solve different problems at different stages. This guide breaks down what each is, when it fits, and how to choose without overspending or under-building.',
			sections: [
				{
					heading: 'What a Website Foundation actually is',
					paragraphs: [
						'A Website Foundation is not a generic template you fill in yourself. It\u2019s a healthcare-specific system — structure, page architecture, trust sections, and conversion flow already planned — that gets customized around your brand, services, and story.',
						'Because the hardest strategic decisions are already made, a Foundation launches faster and costs less than a bespoke build, while still looking and behaving like a site built for you.',
					],
				},
				{
					heading: 'When a Foundation is the right call',
					list: [
						'You need a credible, professional site live sooner rather than later.',
						'Your services map cleanly to a known model (med spa, solo practice, wellness clinic, etc.).',
						'You want to control budget and reduce decision fatigue.',
						'You\u2019d rather launch strong now and refine over time than wait months for perfect.',
					],
				},
				{
					heading: 'What a Signature Custom Website adds',
					paragraphs: [
						'A custom build starts from your specific brand, content model, and operational workflow rather than an existing structure. It\u2019s the right investment when your practice has nuances a Foundation can\u2019t elegantly absorb.',
					],
					list: [
						'An unusual or complex service mix that doesn\u2019t fit standard patterns.',
						'A distinctive brand that needs a bespoke visual identity.',
						'Custom functionality, integrations, or content workflows.',
						'A larger or multi-location organization with deeper requirements.',
					],
				},
				{
					heading: 'How to decide',
					paragraphs: [
						'The honest answer for most practices is to start with a Foundation. It gets you a strong, converting site quickly, and you can layer on Local Visibility, a Growth System, or ongoing optimization as you grow. A custom build makes sense when your needs clearly outgrow what a Foundation can express.',
						'If you\u2019re genuinely unsure, that\u2019s exactly what a Website and Systems Audit is for — we\u2019ll look at your situation and tell you which path fits, with no obligation either way.',
					],
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
	{
		slug: 'website-lead-booking-system',
		title: 'How to Turn Your Website Into a Lead and Booking System',
		category: 'Growth Systems',
		audience: 'Healthcare and high-trust service businesses',
		excerpt:
			'A stronger website connects trust, service clarity, lead capture, booking flow, and follow-up into one practical system.',
		relatedService: 'Growth System Setup',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
	},
];
