export const SITE_URL = 'https://futursolutions.io';
export const ORG_NAME = 'FutureSolutions';

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: ORG_NAME,
	url: SITE_URL,
	logo: `${SITE_URL}/favicon.svg`,
	description:
		'Premium websites, customizable Website Foundations, and CRM-connected Growth Systems for clinics, wellness brands, associations, and high-trust service businesses.',
	areaServed: 'US',
	knowsAbout: [
		'Healthcare website design',
		'Medical practice marketing',
		'Local SEO for healthcare',
		'Lead capture and CRM systems',
		'Conversion optimization',
	],
};

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: ORG_NAME,
	url: SITE_URL,
};

export function serviceSchema(input: {
	name: string;
	description: string;
	path: string;
	serviceType?: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: input.name,
		description: input.description,
		serviceType: input.serviceType ?? input.name,
		url: `${SITE_URL}${input.path}`,
		provider: { '@type': 'Organization', name: ORG_NAME, url: SITE_URL },
		areaServed: 'US',
	};
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.question,
			acceptedAnswer: { '@type': 'Answer', text: f.answer },
		})),
	};
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: `${SITE_URL}${item.path}`,
		})),
	};
}

export function articleSchema(input: {
	title: string;
	description: string;
	path: string;
	datePublished: string;
	dateModified?: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: input.title,
		description: input.description,
		url: `${SITE_URL}${input.path}`,
		datePublished: input.datePublished,
		dateModified: input.dateModified ?? input.datePublished,
		author: { '@type': 'Organization', name: ORG_NAME, url: SITE_URL },
		publisher: {
			'@type': 'Organization',
			name: ORG_NAME,
			logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
		},
	};
}
