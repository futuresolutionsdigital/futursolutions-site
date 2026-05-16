export interface TemplateSystem {
	slug: string;
	name: string;
	category: string;
	shortDescription: string;
	longDescription: string;
	audience: string;
	businessTypes: string[];
	goals: string[];
	features: string[];
	includedPages: string[];
	problemsSolved: string[];
	conversionFeatures: string[];
	seoFeatures: string[];
	backendFeatures: string[];
	complexity: string;
	detailUrl: string;
	demoUrl: string | null;
	auditUrl: string;
	quickViewSummary: string;
	featured: boolean;
}

/** Filter chip definitions for /templates browsing (exclude "all"; handled separately). */
export const templateBrowseFilterDefs = [
	{ id: 'med-spa', label: 'Med Spa' },
	{ id: 'solo-practice', label: 'Solo Practice' },
	{ id: 'association', label: 'Association' },
	{ id: 'booking', label: 'Booking' },
	{ id: 'local-seo', label: 'Local SEO' },
	{ id: 'backend-ready', label: 'Backend Ready' },
] as const;

const combinedTemplateTextBlob = (template: TemplateSystem) =>
	[
		template.category,
		template.name,
		template.shortDescription,
		template.quickViewSummary,
		...template.features,
		...template.goals,
		...template.backendFeatures,
		...template.seoFeatures,
		...template.conversionFeatures,
		...template.includedPages,
	]
		.join(' ')
		.toLowerCase();

/** Filter ids this template satisfies (always includes **all**). */
export function getTemplateMatchFilterIds(template: TemplateSystem): string[] {
	const ids = new Set<string>(['all']);

	if (template.slug === 'med-spa' || template.category.toLowerCase() === 'med spa') {
		ids.add('med-spa');
	}
	if (template.slug === 'solo-practice' || template.category.toLowerCase() === 'solo practice') {
		ids.add('solo-practice');
	}
	if (template.slug === 'association' || template.category.toLowerCase() === 'association') {
		ids.add('association');
	}

	const blob = combinedTemplateTextBlob(template);

	if (
		/\b(booking flow|booking|appointment request|appointment|schedule|scheduling)\b/i.test(blob) ||
		/\bcontact\s*\/?\s*book\b/i.test(blob)
	) {
		ids.add('booking');
	}

	if (/\blocal seo\b/i.test(blob) || template.seoFeatures.some((item) => /local/i.test(item))) {
		ids.add('local-seo');
	}

	const backendAndFeatureBlob = [...template.backendFeatures, ...template.features].join(' ').toLowerCase();
	if (
		/\b(crm|pipeline|gohighlevel|highlevel|routing|sequence|follow-up capture|capture|tag|booking request)\b/i.test(backendAndFeatureBlob)
	) {
		ids.add('backend-ready');
	}

	return Array.from(ids);
}

export const templateSystems: TemplateSystem[] = [
	{
		slug: 'med-spa',
		name: 'Med Spa Website System',
		category: 'Med Spa',
		shortDescription:
			'A premium website system for treatment-based health and wellness businesses that need clear services, trust-building sections, local visibility, and a direct booking path.',
		longDescription:
			'A premium website system for treatment-based health and wellness businesses that need clear treatment education, trust-building sections, local visibility, lead capture, and a direct path toward consultation or booking.',
		audience:
			'Treatment-based health and wellness practices that need to explain services clearly and convert qualified visitors into inquiries.',
		businessTypes: [
			'Med spas',
			'Aesthetic clinics',
			'Weight loss clinics',
			'Hormone therapy clinics',
			'IV therapy clinics',
			'Wellness clinics',
		],
		goals: ['Clarify services', 'Build treatment trust', 'Capture leads', 'Support local visibility'],
		features: ['Treatment Pages', 'Booking Flow', 'Local SEO', 'Lead Capture', 'GoHighLevel Ready'],
		includedPages: ['Homepage', 'Treatments Overview', 'Individual Treatment Page', 'About', 'Contact / Book', 'FAQ', 'Resources'],
		problemsSolved: [
			'Service menus that are hard to understand',
			'Treatment pages that do not build enough trust',
			'Weak booking paths from service pages',
			'Local search pages without enough structure',
		],
		conversionFeatures: ['Clear treatment pathways', 'Consultation-focused CTA areas', 'Trust and proof sections', 'Lead capture-ready forms'],
		seoFeatures: ['Treatment page structure', 'Local keyword targeting', 'Metadata patterns', 'Internal links between related services'],
		backendFeatures: ['Inquiry capture', 'Booking request routing', 'CRM-ready contact fields', 'Follow-up sequence readiness'],
		complexity: 'Growth',
		detailUrl: '/templates/med-spa',
		demoUrl: '/demos/med-spa',
		auditUrl: '/audit?template=med-spa',
		quickViewSummary:
			'Treatment-centered pages, calm trust framing, consultation prompts, local visibility structure, and paths ready for a future CRM or booking backend.',
		featured: true,
	},
	{
		slug: 'solo-practice',
		name: 'Solo Practice Website System',
		category: 'Solo Practice',
		shortDescription:
			'A calm, professional website system for independent providers and boutique healthcare practices that need trust, service clarity, and a simple inquiry path.',
		longDescription:
			'A calm, professional website system for independent providers and boutique healthcare practices that need to establish authority, explain services clearly, educate patients, and guide visitors toward a simple inquiry path.',
		audience:
			'Independent providers and boutique practices that need a credible digital foundation without unnecessary complexity.',
		businessTypes: [
			'Nurse practitioners',
			'Functional medicine providers',
			'Wellness consultants',
			'Hormone clinics',
			'Boutique healthcare providers',
		],
		goals: ['Build provider trust', 'Explain services', 'Educate patients', 'Generate inquiries'],
		features: ['Provider Trust', 'Service Clarity', 'Patient Education', 'Lead Capture', 'Local SEO'],
		includedPages: ['Homepage', 'Services', 'About Provider', 'New Patients', 'Resources', 'Contact / Book'],
		problemsSolved: [
			'Visitors do not understand the provider’s approach',
			'Services feel vague or disconnected',
			'Patient education is scattered',
			'Inquiry paths are buried or unclear',
		],
		conversionFeatures: ['Provider credibility sections', 'New patient pathways', 'Simple contact prompts', 'Service clarity blocks'],
		seoFeatures: ['Service page metadata', 'Local provider positioning', 'Patient education structure', 'Internal resource links'],
		backendFeatures: ['Contact form readiness', 'Inquiry qualification fields', 'CRM-ready intake path', 'Follow-up readiness'],
		complexity: 'Starter / Growth',
		detailUrl: '/templates/solo-practice',
		demoUrl: '/demos/solo-practice',
		auditUrl: '/audit?template=solo-practice',
		quickViewSummary:
			'Provider-led credibility, clearer services and new-patient framing, structured education prompts, local SEO scaffolding, and intake-friendly inquiry routing.',
		featured: true,
	},
	{
		slug: 'association',
		name: 'Medical Association Website System',
		category: 'Association',
		shortDescription:
			'A structured website system for healthcare associations, professional organizations, education groups, and advocacy communities.',
		longDescription:
			'A structured website system for healthcare associations, professional organizations, education groups, and advocacy communities that need to organize members, resources, events, and advocacy content with clarity.',
		audience:
			'Healthcare organizations and member communities that need a clear content architecture and trustworthy public presence.',
		businessTypes: ['Professional associations', 'Healthcare education groups', 'Membership organizations', 'Advocacy organizations'],
		goals: ['Organize resources', 'Support member navigation', 'Promote events', 'Clarify advocacy priorities'],
		features: ['Events', 'Resources', 'Member Navigation', 'Advocacy Pages', 'CMS Ready'],
		includedPages: ['Homepage', 'Membership', 'Events', 'Advocacy', 'Resources', 'About', 'Contact'],
		problemsSolved: [
			'Important resources are difficult to find',
			'Member navigation is unclear',
			'Events and advocacy content compete for attention',
			'Content-heavy sites feel disorganized',
		],
		conversionFeatures: ['Member-focused pathways', 'Event promotion areas', 'Resource calls-to-action', 'Contact and inquiry prompts'],
		seoFeatures: ['Resource content structure', 'Event metadata readiness', 'Internal resource navigation', 'Organization schema-friendly layout'],
		backendFeatures: ['Contact capture readiness', 'Member inquiry routing', 'Event interest tracking', 'CMS-ready content structure'],
		complexity: 'Advanced / Content-Heavy',
		detailUrl: '/templates/association',
		demoUrl: null,
		auditUrl: '/audit?template=association',
		quickViewSummary:
			'Heavy content layout for members, advocacy, resources, and events—with inquiry capture patterns and scalable page structure for evolving programs.',
		featured: true,
	},
];

export function getTemplateBySlug(slug: string) {
	return templateSystems.find((template) => template.slug === slug);
}

export const auditTemplateSlugToName: Record<string, string> = Object.fromEntries(
	templateSystems.map((t) => [t.slug, t.name]),
);
