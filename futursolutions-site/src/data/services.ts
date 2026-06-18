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
		name: 'Foundation Setup',
		shortDescription: 'A polished, launch-ready website built on one of our industry-specific Website Foundations.',
		longDescription:
			'A FutureSolutions Website Foundation turns a healthcare-specific website system into a polished, launch-ready foundation for your practice — shipped in days, not months.',
		bestFor: 'Practices that want to launch quickly on a strong, healthcare-specific foundation.',
		includes: ['Foundation customization', 'Core page setup', 'Basic SEO foundation', 'Trust and conversion sections', 'Launch support'],
		whyItMatters: 'You start from a healthcare-specific structure instead of a blank page or generic theme.',
		ctaLabel: 'See Foundation Details',
		ctaHref: '/services/template-setup',
	},
	{
		slug: 'custom-website-system',
		name: 'Signature Custom Websites',
		shortDescription: 'A custom website built around your brand, services, audience, and conversion goals.',
		longDescription:
			'A Signature Custom Website is a fully custom site shaped around your positioning, services, content, and conversion path.',
		bestFor: 'Businesses that need a tailored digital presence.',
		includes: [
			'Custom page strategy',
			'Brand-aligned design',
			'Service page structure',
			'CMS-ready content system',
			'Conversion-focused layout',
		],
		whyItMatters: 'Your site is structured around your actual business, not forced into a generic layout.',
		ctaLabel: 'See Custom Website service',
		ctaHref: '/services/custom-healthcare-websites',
	},
	{
		slug: 'seo-local-visibility-foundation',
		name: 'Local Visibility',
		shortDescription:
			'A practical setup that helps search engines and visitors understand what your business offers and where it serves.',
		longDescription:
			'Local Visibility gives your website clearer service structure, metadata, and content pathways for local discovery.',
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
		ctaHref: '/services/local-visibility',
	},
	{
		slug: 'backend-system-setup',
		name: 'Growth System Setup',
		shortDescription: 'A Growth System that captures, organizes, and follows up with website inquiries.',
		longDescription:
			'Growth System Setup plans and wires the operational path behind your website so inquiries move from form submission to booked consult — automatically.',
		bestFor: 'Businesses that do not want leads disappearing after a form submission.',
		includes: ['Lead capture flow', 'Booking path', 'CRM contact creation', 'Follow-up sequence planning', 'Pipeline and reporting structure'],
		whyItMatters: 'Most websites collect leads. A Growth System manages them — captured, routed, followed up with, and tracked.',
		ctaLabel: 'See how a Growth System works',
		ctaHref: '/services/growth-systems',
	},
	{
		slug: 'ongoing-optimization',
		name: 'Care and Optimization',
		shortDescription:
			'Monthly support to keep improving the website, content, visibility structure, and conversion flow after launch.',
		longDescription:
			'Care and Optimization keeps your website, service pages, content, visibility structure, and conversion path aligned after launch.',
		bestFor: 'Businesses that want the site to keep improving instead of going stale.',
		includes: ['Website updates', 'New pages', 'Visibility improvements', 'Content publishing', 'Conversion refinements', 'Technical maintenance'],
		whyItMatters: 'Your website should evolve with your business, offers, and audience.',
		ctaLabel: 'View Care plan options',
		ctaHref: '/services/ongoing-optimization',
	},
];
