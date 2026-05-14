export interface ResourceEntry {
	slug: string;
	title: string;
	category: string;
	audience: string;
	excerpt: string;
	relatedService: string;
	ctaLabel: string;
	ctaHref: string;
	status: 'Planned';
}

export const resources: ResourceEntry[] = [
	{
		slug: 'healthcare-website-trust',
		title: 'What Makes a Healthcare Website Feel Trustworthy?',
		category: 'Website Strategy',
		audience: 'Health and wellness businesses',
		excerpt:
			'A patient often forms an opinion about your practice before they read a full paragraph. Learn how design, structure, clarity, and navigation influence trust.',
		relatedService: 'Custom Website System',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
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
		status: 'Planned',
	},
	{
		slug: 'health-wellness-homepage-structure',
		title: 'The Homepage Structure Every Health and Wellness Business Needs',
		category: 'Website Strategy',
		audience: 'Health and wellness businesses',
		excerpt:
			'A clear homepage should build trust quickly, explain services clearly, guide visitors toward the next step, and support local visibility.',
		relatedService: 'Template Setup',
		ctaLabel: 'View Templates',
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
		relatedService: 'Med Spa Website System',
		ctaLabel: 'View Med Spa Template',
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
		relatedService: 'Solo Practice Website System',
		ctaLabel: 'View Solo Practice Template',
		ctaHref: '/templates/solo-practice',
		status: 'Planned',
	},
	{
		slug: 'local-seo-basics-medical-wellness',
		title: 'Local SEO Basics for Medical and Wellness Practices',
		category: 'Local SEO',
		audience: 'Medical and wellness practices',
		excerpt:
			'Local visibility starts with structured service pages, metadata, internal links, location relevance, and useful content.',
		relatedService: 'SEO / Local Visibility Foundation',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
	},
	{
		slug: 'service-pages-local-seo',
		title: 'Why Every Service Deserves Its Own Page',
		category: 'Local SEO',
		audience: 'Service-based healthcare businesses',
		excerpt:
			'Dedicated service pages help visitors understand what you offer and help search engines understand your services.',
		relatedService: 'SEO / Local Visibility Foundation',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
	},
	{
		slug: 'after-contact-form-submission',
		title: 'What Happens After Someone Fills Out Your Contact Form?',
		category: 'Backend Systems',
		audience: 'Practices with inquiry forms',
		excerpt:
			'A website conversion is not complete until the lead is captured, organized, followed up with, and given a clear next step.',
		relatedService: 'Backend System Setup',
		ctaLabel: 'Explore Services',
		ctaHref: '/services',
		status: 'Planned',
	},
	{
		slug: 'template-vs-custom-website',
		title: 'Website Template vs Custom Website: Which Is Right for Your Practice?',
		category: 'Templates',
		audience: 'Growing healthcare practices',
		excerpt:
			'A template system can help you launch faster, while a custom website gives you deeper strategy and flexibility.',
		relatedService: 'Template Setup / Custom Website System',
		ctaLabel: 'View Templates',
		ctaHref: '/templates',
		status: 'Planned',
	},
	{
		slug: 'website-lead-booking-system',
		title: 'How to Turn Your Website Into a Lead and Booking System',
		category: 'Backend Systems',
		audience: 'Health and wellness businesses',
		excerpt:
			'A stronger website connects trust, service clarity, lead capture, booking flow, and follow-up into one practical system.',
		relatedService: 'Backend System Setup',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
		status: 'Planned',
	},
];
