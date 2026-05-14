export interface ServiceOffering {
	slug: string;
	name: string;
	shortDescription: string;
	longDescription: string;
	bestFor: string;
	includes: string[];
	whyItMatters: string;
	ctaLabel: string;
	ctaHref: string;
}

export const serviceOfferings: ServiceOffering[] = [
	{
		slug: 'template-setup',
		name: 'Template Setup',
		shortDescription: 'A polished website system based on one of our healthcare-focused templates.',
		longDescription:
			'Template Setup turns a healthcare-focused website system into a polished, launch-ready foundation for your business.',
		bestFor: 'Practices that want to launch quickly with a professional foundation.',
		includes: ['Template customization', 'Core page setup', 'Basic SEO foundation', 'Trust and conversion sections', 'Launch support'],
		whyItMatters: 'You start from a healthcare-specific structure instead of a blank page or generic theme.',
		ctaLabel: 'Explore Templates',
		ctaHref: '/templates',
	},
	{
		slug: 'custom-website-system',
		name: 'Custom Website System',
		shortDescription: 'A custom website built around your brand, services, audience, and conversion goals.',
		longDescription:
			'Custom Website System creates a tailored digital presence shaped around your positioning, services, content, and conversion path.',
		bestFor: 'Businesses that need a tailored digital presence.',
		includes: [
			'Custom page strategy',
			'Brand-aligned design',
			'Service page structure',
			'CMS-ready content system',
			'Conversion-focused layout',
		],
		whyItMatters: 'Your site is structured around your actual business, not forced into a generic layout.',
		ctaLabel: 'Request a Website Audit',
		ctaHref: '/audit',
	},
	{
		slug: 'seo-local-visibility-foundation',
		name: 'SEO / Local Visibility Foundation',
		shortDescription:
			'A practical setup that helps search engines and visitors understand what your business offers and where it serves.',
		longDescription:
			'SEO / Local Visibility Foundation gives your website clearer service structure, metadata, and content pathways for local discovery.',
		bestFor: 'Health and wellness businesses that need better local discovery and clearer service structure.',
		includes: [
			'Service page structure',
			'Metadata',
			'Internal linking',
			'Local keyword targeting',
			'Google Business Profile alignment',
			'Blog/content foundation',
		],
		whyItMatters: 'Visibility starts with clear structure, useful pages, and search-aware content.',
		ctaLabel: 'Improve Local Visibility',
		ctaHref: '/audit',
	},
	{
		slug: 'backend-system-setup',
		name: 'Backend System Setup',
		shortDescription: 'A backend lead system that captures, organizes, and follows up with website inquiries.',
		longDescription:
			'Backend System Setup plans the operational path behind your website so inquiries can move from form submission to follow-up.',
		bestFor: 'Businesses that do not want leads disappearing after a form submission.',
		includes: ['Lead capture flow', 'Booking path', 'CRM contact creation', 'Follow-up sequence planning', 'Pipeline structure'],
		whyItMatters: 'Most websites collect leads. A real system manages them.',
		ctaLabel: 'Set Up Your Backend System',
		ctaHref: '/audit',
	},
	{
		slug: 'ongoing-optimization',
		name: 'Ongoing Optimization',
		shortDescription:
			'Monthly support to keep improving the website, content, SEO structure, and conversion flow after launch.',
		longDescription:
			'Ongoing Optimization keeps your website, service pages, content, SEO structure, and conversion path aligned after launch.',
		bestFor: 'Businesses that want the site to keep improving instead of going stale.',
		includes: ['Website updates', 'New pages', 'SEO improvements', 'Content publishing', 'Conversion refinements', 'Technical maintenance'],
		whyItMatters: 'Your website should evolve with your business, offers, and audience.',
		ctaLabel: 'View Optimization Options',
		ctaHref: '/audit',
	},
];
