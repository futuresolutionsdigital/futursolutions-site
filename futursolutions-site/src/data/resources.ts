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
		ctaLabel: 'Get a Website Audit',
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
		ctaLabel: 'Get a Website Audit',
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
		status: 'Published',
		article: {
			datePublished: '2026-02-04',
			readingTime: '6 min read',
			intro:
				'Your homepage carries more weight than any other page on your site. It\u2019s where most first-time visitors land, form an impression, and silently decide whether to keep going. A strong health and wellness homepage isn\u2019t about cramming everything in — it\u2019s about a deliberate order that builds trust, creates clarity, and points to a next step. Here\u2019s the structure that consistently works.',
			sections: [
				{
					heading: 'Open with trust, not a slideshow',
					paragraphs: [
						'The top of the page should answer the visitor\u2019s unspoken questions immediately: who you help, what you do, and why you\u2019re credible. A confident headline, a calm and professional first impression, and a clear primary action do far more than an auto-rotating image carousel that says nothing specific.',
						'Resist the urge to lead with a generic slogan. "Your health is our priority" tells a visitor nothing. "Hormone and weight-loss care for men in Austin, with same-week appointments" tells them everything.',
					],
				},
				{
					heading: 'Make what you do unmistakable',
					paragraphs: [
						'Within the first screen or two, a visitor should be able to repeat back what you offer and who it\u2019s for. If they have to scroll and decode, many simply leave. State your core services plainly and let specificity do the persuading.',
					],
				},
				{
					heading: 'Give every core service a door',
					paragraphs: [
						'The homepage isn\u2019t where you explain every service in depth — it\u2019s where you route people to the right place. A clean section that names your main services and links to a dedicated page for each helps visitors self-select and helps search engines understand your practice.',
					],
					list: [
						'Name each meaningful service clearly, not in marketing abstractions.',
						'Link each one to its own focused page.',
						'Order them by what most visitors are actually looking for.',
					],
				},
				{
					heading: 'Point to the next step — more than once',
					paragraphs: [
						'A homepage should make the next action obvious and repeat it. Whether that\u2019s booking a consult, requesting an appointment, or starting an audit, the path should appear in the header, after the key sections, and again at the bottom. Visitors decide to act at different moments; meet them wherever that happens.',
					],
				},
				{
					heading: 'Earn local relevance on the page itself',
					paragraphs: [
						'For most practices, patients are searching locally. Naming your city or region, your service area, and the specifics of how you work helps both human visitors and local search. It also reinforces that you\u2019re a real, established practice rooted in a place — another quiet trust signal.',
					],
				},
				{
					heading: 'A simple order that works',
					paragraphs: [
						'Put together, a reliable structure looks like this: a trust-building hero, a one-line statement of what you do, proof and credibility, a services overview that links out, a clear explanation of how to begin, local relevance, and a final call to action. It\u2019s not complicated — it\u2019s disciplined.',
					],
				},
			],
			keyTakeaways: [
				'Lead with specific trust signals, not a vague slogan or carousel.',
				'Make what you do and who it\u2019s for impossible to misread.',
				'Use the homepage to route visitors to dedicated service pages.',
				'Repeat a clear next step throughout the page.',
				'Name your location and service area to support local search.',
			],
		},
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
		ctaLabel: 'Get a Website Audit',
		ctaHref: '/audit',
		status: 'Published',
		article: {
			datePublished: '2026-02-11',
			readingTime: '6 min read',
			intro:
				'Local SEO can feel like a black box, but for most medical and wellness practices it comes down to a few unglamorous fundamentals done consistently. You don\u2019t need tricks or a giant content operation — you need structure, clarity, and relevance. Here are the basics that actually move local visibility, in the order they matter.',
			sections: [
				{
					heading: 'Local visibility starts with structure, not tricks',
					paragraphs: [
						'Search engines reward sites they can understand. A clear page architecture — a logical homepage, dedicated service pages, and location relevance — does more for local ranking than any clever shortcut. If a search engine can\u2019t tell what you offer and where, it can\u2019t confidently show you to nearby searchers.',
					],
				},
				{
					heading: 'Claim and complete your Google Business Profile',
					paragraphs: [
						'For local practices, your Google Business Profile is often the single highest-impact asset — it powers the map results and the panel many patients see first. Claim it, complete every field, choose accurate categories, and keep your hours, services, and photos current. This works hand in hand with your website, not instead of it.',
					],
				},
				{
					heading: 'Give each service and location its own page',
					paragraphs: [
						'A single page listing every service is hard for both patients and search engines to interpret. Dedicated pages let you target what people actually search for and demonstrate genuine depth on each topic.',
					],
					list: [
						'One focused page per meaningful service.',
						'A clear page for each location if you serve more than one.',
						'Plain-language explanations of what the service is and who it helps.',
						'Internal links between related services so the structure is navigable.',
					],
				},
				{
					heading: 'Write metadata humans and engines both read',
					paragraphs: [
						'Page titles and meta descriptions are the first thing a searcher sees in results. Write them for people first — specific, honest, and locally relevant — and they\u2019ll serve search engines well too. Generic titles like "Home" or "Services" waste your most valuable real estate.',
					],
				},
				{
					heading: 'Earn relevance with genuinely useful content',
					paragraphs: [
						'You don\u2019t need to publish constantly, but answering the real questions your patients ask — about treatments, process, cost, and what to expect — builds topical relevance and trust at the same time. Useful content is the rare thing that helps ranking and conversion together.',
					],
				},
				{
					heading: 'Stay consistent and let reviews compound',
					paragraphs: [
						'Keep your name, address, and phone number identical everywhere they appear, and make it easy for happy patients to leave honest reviews. Consistency signals legitimacy, and a steady stream of genuine reviews is one of the strongest local trust signals there is — within the privacy rules that govern healthcare.',
					],
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
		slug: 'service-pages-local-seo',
		title: 'Why Every Service Deserves Its Own Page',
		category: 'Local Visibility',
		audience: 'Service-based healthcare businesses',
		excerpt:
			'Dedicated service pages help visitors understand what you offer and help search engines understand your services.',
		relatedService: 'Local Visibility',
		ctaLabel: 'Get a Website Audit',
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
		ctaLabel: 'View Services',
		ctaHref: '/services',
		status: 'Published',
		article: {
			datePublished: '2026-02-18',
			readingTime: '5 min read',
			intro:
				'A new inquiry is the most valuable thing your website produces — and it\u2019s also the easiest thing to waste. Plenty of practices invest in design and traffic, then let hard-won leads land in an inbox where they\u2019re missed during a busy week. What happens in the minutes and days after someone hits "submit" often matters more than the form itself. Here\u2019s what a converting practice does next.',
			sections: [
				{
					heading: 'The moment most practices waste',
					paragraphs: [
						'For many sites, submitting a form does almost nothing: the visitor sees a vague "thank you," an email drops into a shared inbox, and that\u2019s it. No confirmation that sets expectations, no record beyond the email, and no system to make sure someone actually follows up. Every gap here is a prospect quietly lost.',
					],
				},
				{
					heading: 'Confirm instantly',
					paragraphs: [
						'The first thing a new lead needs is reassurance. An immediate confirmation — on-screen and by email — that their message was received, plus a clear note on when they\u2019ll hear back, prevents the anxious "did that go through?" feeling that pushes people to a competitor.',
					],
				},
				{
					heading: 'Capture, don\u2019t just notify',
					paragraphs: [
						'A notification email is not a system. Real lead capture means the inquiry is recorded somewhere durable — a CRM — with the details your team needs and a status you can track.',
					],
					list: [
						'Every inquiry stored with name, contact, and what they asked about.',
						'A clear owner responsible for responding.',
						'A visible status so nothing sits untouched.',
						'Context (which page, which service) carried along with the lead.',
					],
				},
				{
					heading: 'Follow up on a schedule, not a whim',
					paragraphs: [
						'Most people don\u2019t book on the first touch, and busy weeks make manual follow-up unreliable. A simple, scheduled sequence — a prompt first reply, then a thoughtful nudge or two — keeps interested patients engaged without depending on someone remembering. This is where a Growth System earns its keep.',
					],
				},
				{
					heading: 'Give one clear next step',
					paragraphs: [
						'Every follow-up should make the next action obvious: book a consult, confirm a time, or answer one quick question. Ending with a single, low-friction step removes the guesswork and turns interest into a scheduled appointment.',
						'The website earns the lead. The system behind it is what keeps the lead from slipping away.',
					],
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
		ctaLabel: 'Get a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
	},
];
