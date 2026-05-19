export interface ServiceLink {
	label: string;
	href: string;
}

export interface ServiceFAQ {
	question: string;
	answer: string;
}

export interface ServiceDetail {
	slug: string;
	title: string;
	description: string;
	canonicalPath: string;
	eyebrow: string;
	heading: string;
	supportingCopy: string;
	primaryCta: ServiceLink;
	secondaryCta: ServiceLink;
	problemHeading: string;
	problems: string[];
	solutionHeading: string;
	solutionCopy: string;
	included: string[];
	whoItsFor: string[];
	relatedServices: ServiceLink[];
	faqs: ServiceFAQ[];
	finalHeading: string;
	finalCopy: string;
	finalPrimaryCta: ServiceLink;
	finalSecondaryCta: ServiceLink;
}

export const serviceDetails: Record<string, ServiceDetail> = {
	'template-setup': {
		slug: 'template-setup',
		title: 'Industry Website Foundation Setup | FutureSolutions',
		description:
			'Launch faster with a healthcare-specific Website Foundation customized around your services, trust signals, conversion flow, and local visibility.',
		canonicalPath: '/services/template-setup',
		eyebrow: 'Industry Website Foundation',
		heading: 'Launch faster on a healthcare website system built around trust and conversion.',
		supportingCopy:
			'FutureSolutions Website Foundations give health and wellness businesses a polished starting point — with the structure, pages, and conversion flow already planned.',
		primaryCta: { label: 'Get a Foundation Customized', href: '/audit' },
		secondaryCta: { label: 'Explore Live Demos', href: '/templates' },
		problemHeading: 'Starting from scratch slows everything down.',
		problems: [
			'Generic themes miss healthcare trust signals.',
			'Business owners get stuck deciding what pages they need.',
			'Service information becomes scattered or unclear.',
			'A nice layout does not automatically create a conversion path.',
		],
		solutionHeading: 'A polished foundation built for your niche.',
		solutionCopy:
			'Instead of beginning with a blank page, you start with a healthcare-focused structure designed around service clarity, trust, local visibility, and lead capture.',
		included: [
			'Foundation customization',
			'Homepage',
			'Services overview page',
			'Individual service pages',
			'About/provider page',
			'Contact or booking page',
			'Basic SEO setup',
			'Mobile optimization',
			'Launch support',
			'Optional backend system integration',
		],
		whoItsFor: ['Med spas', 'Solo practices', 'Wellness clinics', 'Functional medicine providers', 'New health brands'],
		relatedServices: [
			{ label: 'SEO / Local Visibility', href: '/seo' },
			{ label: 'Backend System Setup', href: '/backend' },
			{ label: 'Ongoing Optimization', href: '/services/ongoing-optimization' },
		],
		faqs: [
			{
				question: 'Is this just a generic website template?',
				answer: 'No. A Website Foundation starts from a healthcare-specific structure built around trust, services, conversion flow, and local visibility.',
			},
			{
				question: 'Can the Foundation be customized to my brand?',
				answer: 'Yes. The structure stays strategic, while colors, content, services, images, and page details can be tailored to your business.',
			},
			{
				question: 'Can this connect to booking or lead capture later?',
				answer: 'Yes. The page structure can support booking paths, contact forms, and later backend system connections when those tools are ready.',
			},
			{
				question: 'Is this a good fit if I need to launch quickly?',
				answer: 'Yes. Foundation setup is designed for practices that need a professional starting point without building from a blank page.',
			},
		],
		finalHeading: 'Want a faster path to a professional healthcare website?',
		finalCopy:
			'Start on a healthcare-focused Website Foundation and customize it around your brand, services, and goals.',
		finalPrimaryCta: { label: 'Get This Foundation Customized', href: '/audit' },
		finalSecondaryCta: { label: 'Explore Live Demos', href: '/templates' },
	},
	'custom-healthcare-websites': {
		slug: 'custom-healthcare-websites',
		title: 'Signature Custom Healthcare Websites | FutureSolutions',
		description:
			'FutureSolutions builds Signature Custom Websites for healthcare and high-trust service businesses — designed around trust, service clarity, local visibility, and lead conversion.',
		canonicalPath: '/services/custom-healthcare-websites',
		eyebrow: 'Signature Custom Website',
		heading: 'Signature custom healthcare websites built around trust, visibility, and conversion.',
		supportingCopy:
			'FutureSolutions builds custom websites for health and wellness businesses that need a tailored digital presence, clear service structure, and a connected path from visitor to lead.',
		primaryCta: { label: 'Book a Strategy Call', href: '/audit' },
		secondaryCta: { label: 'Get a Website and Systems Audit', href: '/audit' },
		problemHeading: 'Generic websites rarely fit serious healthcare brands.',
		problems: [
			'The design may look fine but not reflect the business.',
			'Services are hard to understand.',
			'Important trust signals are missing.',
			'Pages are not structured for local visibility.',
			'Conversion paths are unclear.',
		],
		solutionHeading: 'A tailored site built around how your visitors decide.',
		solutionCopy:
			'We structure the site around first impression, service clarity, credibility, local discoverability, and the next action visitors should take.',
		included: [
			'Site strategy',
			'Custom page design',
			'Astro frontend development',
			'Sanity CMS setup',
			'Service page structure',
			'Conversion-focused CTAs',
			'SEO metadata foundation',
			'Responsive development',
			'Performance optimization',
			'Launch support',
			'Optional GoHighLevel integration',
		],
		whoItsFor: [
			'Established practices',
			'Premium wellness brands',
			'Med spas with multiple services',
			'Healthcare organizations',
			'Providers with complex offers',
		],
		relatedServices: [
			{ label: 'SEO / Local Visibility', href: '/seo' },
			{ label: 'Backend System Setup', href: '/backend' },
			{ label: 'Care and Optimization', href: '/services/ongoing-optimization' },
			{ label: 'Industry Website Foundation', href: '/services/template-setup' },
		],
		faqs: [
			{
				question: 'How is this different from an Industry Website Foundation?',
				answer: 'A Signature Custom Website is planned around your specific positioning, content, services, and conversion goals — instead of starting from a predefined healthcare-specific Foundation. Both ship the same level of polish; Custom is for practices that need a deeper, brand-led system.',
			},
			{
				question: 'Can you help organize my services and content?',
				answer: 'Yes. Service structure, page hierarchy, and content priorities are part of the strategy before design and development.',
			},
			{
				question: 'Can the site use Sanity CMS?',
				answer: 'Yes. A custom build can include a CMS-ready content system when ongoing editing or publishing is useful.',
			},
			{
				question: 'Can the site connect to a CRM later?',
				answer: 'Yes. The website can be structured to support future CRM, booking, follow-up, and pipeline connections when the backend account is ready.',
			},
		],
		finalHeading: 'Need a site built around your actual business?',
		finalCopy:
			'Request a Website and Systems Audit and get a clear recommendation for whether your business needs a Signature Custom site, an Industry Website Foundation, an SEO Foundation, or a Growth System.',
		finalPrimaryCta: { label: 'Get a Website and Systems Audit', href: '/audit' },
		finalSecondaryCta: { label: 'View Services', href: '/services' },
	},
	'ongoing-optimization': {
		slug: 'ongoing-optimization',
		title: 'Care and Optimization for Health & Wellness Websites | FutureSolutions',
		description:
			'Keep your healthcare website updated and improving with Care and Optimization — ongoing support for content, SEO, landing pages, conversion, and technical maintenance.',
		canonicalPath: '/services/ongoing-optimization',
		eyebrow: 'Care and Optimization',
		heading: 'Keep your website improving after launch.',
		supportingCopy:
			'FutureSolutions provides ongoing Care and Optimization — site updates, SEO improvements, content publishing, landing pages, and conversion refinements — so your digital presence does not go stale.',
		primaryCta: { label: 'Keep Improving Your Website', href: '/audit' },
		secondaryCta: { label: 'Book a Strategy Call', href: '/audit' },
		problemHeading: 'Most websites slowly go stale after launch.',
		problems: [
			'Services change but the website does not.',
			'SEO needs consistency.',
			'Blog and content ideas never get published.',
			'Booking and CTA improvements are ignored.',
			'Technical issues accumulate.',
			'No one reviews what could be improved.',
		],
		solutionHeading: 'Monthly improvements that keep the system useful.',
		solutionCopy:
			'Care and Optimization keeps your site aligned with your business through updates, content, SEO refinements, and conversion improvements.',
		included: [
			'Site updates',
			'New pages or landing pages',
			'SEO refinements',
			'Blog/content publishing',
			'Conversion adjustments',
			'Technical maintenance',
			'Analytics review',
			'Backend workflow refinements',
		],
		whoItsFor: [
			'Practices that need regular updates',
			'Businesses adding new services',
			'Clients who want SEO/content improvements',
			'Clients who want continued support after launch',
			'Businesses that want conversion improvements over time',
		],
		relatedServices: [
			{ label: 'SEO / Local Visibility', href: '/seo' },
			{ label: 'Backend System Setup', href: '/backend' },
			{ label: 'Signature Custom Website', href: '/services/custom-healthcare-websites' },
			{ label: 'Industry Website Foundation', href: '/services/template-setup' },
		],
		faqs: [
			{
				question: 'Is this just website maintenance?',
				answer: 'No. Maintenance can be part of it, but Care and Optimization also covers content, SEO, new pages, conversion refinements, and practical improvements.',
			},
			{
				question: 'Can this include new content or service pages?',
				answer: 'Yes. Care and Optimization can support new pages, service updates, resource content, and landing pages as the business evolves.',
			},
			{
				question: 'Can you improve SEO over time?',
				answer: 'Yes. SEO improvements can include page structure, internal links, metadata, content publishing, and ongoing refinements.',
			},
			{
				question: 'Can this include backend workflow refinements?',
				answer: 'Yes. Once backend systems are ready, ongoing support can include refinements to lead capture, follow-up, and pipeline workflows.',
			},
		],
		finalHeading: 'Want your website to keep improving?',
		finalCopy:
			'Request a Website and Systems Audit and get a recommendation for the highest-impact improvements to make next.',
		finalPrimaryCta: { label: 'Get a Website and Systems Audit', href: '/audit' },
		finalSecondaryCta: { label: 'View Services', href: '/services' },
	},
};
