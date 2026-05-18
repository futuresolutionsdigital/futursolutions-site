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
		name: 'Aster Private Health — Solo Practice Website',
		category: 'Solo Practice',
		shortDescription:
			'A warm editorial website demo for solo NPs, private primary care providers, concierge-style practices, and cash-pay healthcare providers.',
		longDescription:
			'A premium, provider-led website system for solo healthcare practices. Features a warm editorial design, transparent pricing, care model explainer, patient onboarding flow, resource hub, patient portal placeholder, and service detail pages — all designed to build trust and drive consultation bookings.',
		audience:
			'Solo nurse practitioners, private physicians, concierge care practices, direct primary care providers, holistic NP practices, and small cash-pay healthcare practices.',
		businessTypes: [
			'Solo nurse practitioner practices',
			'Private physician practices',
			'Concierge care practices',
			'Direct primary care (DPC)',
			'Holistic NP practices',
			'Cash-pay healthcare practices',
			'Relationship-driven private practices',
		],
		goals: ['Build provider trust', 'Explain care model', 'Show transparent pricing', 'Support patient self-identification', 'Drive consultation bookings', 'Educate patients'],
		features: ['Provider-Led Homepage', 'Care Model Clarity', 'Transparent Pricing', 'Service Pathways', 'Patient Fit Section', 'FAQ Accordion', 'Testimonials', 'Patient Resources Hub', 'Consultation Booking Path', 'Patient Portal Placeholder', 'Service Detail Page', 'Editorial Design', 'Local SEO'],
		includedPages: ['Homepage (Long-Form)', 'About Provider', 'Services Overview', 'Service Detail (Private Primary Care)', 'How It Works', 'Pricing / Membership', 'New Patients / Book', 'Patient Resources', 'Contact / Location', 'Patient Portal'],
		problemsSolved: [
			'Visitors do not understand the provider’s approach',
			'Services feel vague or disconnected',
			'Patient education is scattered',
			'Inquiry paths are buried or unclear',
		],
		conversionFeatures: ['Patient-fit cards for self-identification', 'Care model walkthrough', 'Provider trust block with credentials and quote', 'Transparent pricing cards', 'Consultation-focused CTA throughout', 'FAQ that reduces booking hesitation'],
		seoFeatures: ['Service keyword targeting', 'Local provider positioning', 'Condition/concern grid for organic reach', 'Patient education content structure', 'Metadata and schema readiness'],
		backendFeatures: ['Consultation booking readiness', 'Contact form with qualification fields', 'CRM-ready intake path', 'GoHighLevel-compatible form fields', 'Patient portal link placement'],
		complexity: 'Growth',
		detailUrl: '/templates/solo-practice',
		demoUrl: '/demos/solo-practice',
		auditUrl: '/audit?template=solo-practice',
		quickViewSummary:
			'A warm editorial mini-site with 10 pages: provider-led homepage, about, services, service detail, how it works, transparent pricing, new patient onboarding, patient resources, contact, and patient portal — all in a calm, premium, clinically credible design.',
		featured: true,
	},
	{
		slug: 'association',
		name: 'Professional Association Website System',
		category: 'Association',
		shortDescription:
			'A premium professional association website system for membership growth, advocacy, continuing education, flagship events, resources, chapters, and career support.',
		longDescription:
			'A complete fictional association website system built around member conversion, policy engagement, CE/event promotion, chapter community, resource discovery, career advancement, institutional credibility, and support routing.',
		audience:
			'Statewide or national professional associations in healthcare, nursing, public health, or allied health that need membership, advocacy, events, CE, chapters, and career support.',
		businessTypes: [
			'Nursing associations',
			'Medical associations',
			'Healthcare professional organizations',
			'Nonprofit advocacy associations',
			'Trade associations',
			'Continuing education organizations',
			'Membership-based professional societies',
		],
		goals: ['Drive membership conversion', 'Coordinate advocacy', 'Promote flagship events', 'Organize CE/resources', 'Support local chapters', 'Power career services'],
		features: ['Membership', 'Advocacy', 'Events', 'CE / Education', 'Resources', 'Chapters', 'Career Center', 'Filterable Libraries'],
		includedPages: ['Homepage', 'Membership', 'Events Index', 'Annual Conference', 'Advocacy Landing', 'Policy Issue Detail', 'Resource Library', 'Resource Detail', 'Chapters Landing', 'Chapter Detail', 'Career Center', 'Job Detail', 'About', 'Contact'],
		problemsSolved: [
			'Membership value is unclear to prospects',
			'Advocacy priorities are buried or scattered',
			'Events and CE content lack promotion structure',
			'Resources are hard to discover and filter',
			'Chapter communities feel disconnected from the parent organization',
			'Career services lack a professional job board experience',
		],
		conversionFeatures: ['Tiered membership comparison', 'Event registration pathways', 'Advocacy action alerts', 'Resource/CE enrollment prompts', 'Career center employer partnerships', 'Chapter engagement CTAs'],
		seoFeatures: ['Resource content structure', 'Event metadata readiness', 'Internal resource navigation', 'Organization schema-friendly layout', 'CE course detail pages', 'Job listing structure'],
		backendFeatures: ['Contact capture readiness', 'Member inquiry routing', 'Event interest tracking', 'CMS-ready content structure', 'Job board data architecture', 'Filterable library patterns'],
		complexity: 'Advanced / Content-Heavy',
		detailUrl: '/templates/association',
		demoUrl: '/demos/association',
		auditUrl: '/audit?template=association',
		quickViewSummary:
			'A complete fictional association website system built around member conversion, policy engagement, CE/event promotion, chapter community, resource discovery, and career advancement — with filterable libraries, detail pages, and institutional credibility sections.',
		featured: true,
	},
];

export function getTemplateBySlug(slug: string) {
	return templateSystems.find((template) => template.slug === slug);
}

export const auditTemplateSlugToName: Record<string, string> = Object.fromEntries(
	templateSystems.map((t) => [t.slug, t.name]),
);
