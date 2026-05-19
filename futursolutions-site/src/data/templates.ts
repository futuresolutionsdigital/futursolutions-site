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
	featured: boolean;
	whyDifferent?: { title: string; text: string }[];
}

/** Filter chip definitions for /templates browsing (exclude "all"; handled separately). */
export const templateBrowseFilterDefs = [
	{ id: 'med-spa', label: 'Med Spa' },
	{ id: 'solo-practice', label: 'Solo Practice' },
	{ id: 'wellness-clinic', label: 'Wellness Clinic' },
	{ id: 'association', label: 'Association' },
	{ id: 'mens-health', label: "Men's Health" },
	{ id: 'booking', label: 'Booking' },
	{ id: 'local-seo', label: 'Local SEO' },
	{ id: 'backend-ready', label: 'Backend Ready' },
] as const;

const combinedTemplateTextBlob = (template: TemplateSystem) =>
	[
		template.category,
		template.name,
		template.shortDescription,
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

	if (template.slug === 'med-spa' || template.category.toLowerCase().includes('med spa') || template.category.toLowerCase().includes('aesthetics')) {
		ids.add('med-spa');
	}
	if (template.slug === 'solo-practice' || template.category.toLowerCase().includes('solo practice')) {
		ids.add('solo-practice');
	}
	if (template.slug === 'association' || template.category.toLowerCase().includes('association')) {
		ids.add('association');
	}
	if (template.slug === 'premium-wellness-clinic' || template.category.toLowerCase().includes('wellness clinic')) {
		ids.add('wellness-clinic');
	}
	if (template.slug === 'hormone-trt' || template.category.toLowerCase().includes("men's health") || template.category.toLowerCase().includes('trt')) {
		ids.add('mens-health');
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
		category: 'Medical Aesthetics',
		shortDescription:
			'A premium med spa website system for aesthetic clinics that need treatment education, provider trust, results galleries, memberships, and consultation-focused booking.',
		longDescription:
			'A complete med spa website system built around treatment discovery, concern-based guidance, provider trust, responsible results presentation, membership and package promotion, and a consultation-first booking flow. Designed for med spas, injectables studios, laser clinics, skin clinics, and modern aesthetic practices.',
		audience:
			'Med spas, aesthetic clinics, injectables studios, laser providers, skin clinics, cosmetic dermatology practices, and wellness-forward aesthetic businesses.',
		businessTypes: [
			'Med spas',
			'Aesthetic clinics',
			'Injectables studios',
			'Laser treatment providers',
			'Skin clinics',
			'Cosmetic dermatology practices',
			'Body contouring clinics',
			'Wellness-forward aesthetic clinics',
		],
		goals: ['Educate on treatments', 'Build provider trust', 'Present results responsibly', 'Drive consultation bookings', 'Promote memberships', 'Support local visibility'],
		features: ['Treatment Menu', 'Concern Guide', 'Results Gallery', 'Provider Profiles', 'Botox Detail Page', 'Membership-Ready', 'Booking Flow', 'Local SEO', 'Lead Capture', 'GoHighLevel Ready'],
		includedPages: ['Homepage', 'Treatments', 'Botox / Wrinkle Relaxers (Detail)', 'Concerns', 'Results', 'Providers', 'Membership', 'Contact / Consultation', 'About'],
		problemsSolved: [
			'Treatments listed without context or education',
			'Visitors unsure which treatment fits their concern',
			'Provider credentials hidden or underdeveloped',
			'Before/after galleries lacking responsible framing',
			'Booking paths scattered or too aggressive',
			'Memberships feel discount-driven instead of value-driven',
		],
		conversionFeatures: ['Concern-based treatment routing', 'Consultation-first CTA flow', 'Treatment quick facts and candidacy sections', 'Provider trust system', 'Before/after-ready gallery', 'Membership and package presentation', 'FAQ objection handling'],
		seoFeatures: ['Treatment page structure', 'Local keyword targeting', 'Concern-based content architecture', 'FAQ-rich service pages', 'Metadata patterns'],
		backendFeatures: ['Inquiry capture', 'Booking request routing', 'CRM-ready contact fields', 'GoHighLevel-compatible form fields', 'Follow-up sequence readiness'],
		complexity: 'Growth',
		detailUrl: '/templates/med-spa',
		demoUrl: '/demos/med-spa',
		auditUrl: '/audit?template=med-spa',
		featured: true,
	},
	{
		slug: 'solo-practice',
		name: 'Aster Private Health — Solo Practice Website',
		category: 'Solo Practice / NP Practice',
		shortDescription:
			'A warm editorial website system for solo NPs, private primary care, concierge-style care, and cash-pay healthcare providers.',
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
		featured: true,
	},
	{
		slug: 'association',
		name: 'Professional Association Website System',
		category: 'Healthcare / Association',
		shortDescription:
			'A premium association website system for organizations that need to grow membership, promote events, activate advocacy, organize resources, and centralize member value.',
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
		featured: true,
	},
	{
		slug: 'premium-wellness-clinic',
		name: 'Lumen Health House — Premium Wellness Clinic Website',
		category: 'Wellness Clinic',
		shortDescription:
			'A premium wellness clinic website system for cash-pay clinics offering IV therapy, recovery, medical weight loss, hormone optimization, body scans, memberships, and provider-guided care.',
		longDescription:
			'A complete wellness clinic website system built around service discovery, goal-based navigation, provider trust, medical safety language, membership and package promotion, and a consultation-first booking flow. Designed for modern cash-pay wellness, longevity, IV therapy, recovery, hormone, and metabolic health clinics.',
		audience:
			'Cash-pay wellness clinics, IV therapy clinics, longevity clinics, recovery and performance centers, hormone optimization clinics, medical weight loss practices, and functional health practices.',
		businessTypes: [
			'Cash-pay wellness clinics',
			'IV therapy clinics',
			'Longevity and anti-aging clinics',
			'Recovery and performance centers',
			'Hormone optimization clinics',
			'Medical weight loss practices',
			'Functional health practices',
			'Integrative wellness centers',
		],
		goals: ['Organize many services clearly', 'Build provider trust', 'Guide uncertain visitors toward consultation', 'Allow confident visitors to book directly', 'Support memberships', 'Support local SEO'],
		features: ['Goal-Based Navigation', 'Service Category Grid', 'Quick Facts Strips', 'Provider Cards', 'Membership Tiers', 'Comparison Table', 'Signature Programs', 'Booking Flow', 'Safety Language System', 'Testimonials', 'FAQ Accordion', 'Local SEO', 'Sticky Mobile CTA', 'Resource Hub'],
		includedPages: ['Homepage', 'Services Hub', 'IV Therapy', 'Contrast Therapy', 'Medical Weight Loss', 'Hormone Optimization', 'Body Composition Scan', 'Memberships & Packages', 'New Clients / Start Here', 'Providers', 'Reviews', 'Resources', 'Location / Contact'],
		problemsSolved: [
			'Too many services with no clear organization',
			'Visitors unsure which service to book first',
			'Provider credentials hidden or underdeveloped',
			'Memberships feel confusing instead of valuable',
			'Medical safety language missing or inconsistent',
			'Booking paths scattered or unclear',
		],
		conversionFeatures: ['Goal-based service routing', 'Consultation-first CTA flow', 'Quick facts on every service page', 'Provider trust cards', 'Membership comparison table', 'Package bundles for common goals', 'FAQ objection handling', 'Dual-path CTAs (book session vs. consultation)'],
		seoFeatures: ['Service page structure', 'Local keyword targeting', 'Goal-based content architecture', 'FAQ-rich service pages', 'Resource hub for educational content', 'Metadata patterns'],
		backendFeatures: ['Consultation booking readiness', 'Contact form with service interest fields', 'CRM-ready intake path', 'GoHighLevel-compatible form fields', 'Membership inquiry routing'],
		complexity: 'Growth',
		detailUrl: '/templates/premium-wellness-clinic',
		demoUrl: '/demos/premium-wellness-clinic',
		auditUrl: '/audit?template=premium-wellness-clinic',
		featured: true,
	},
	{
		slug: 'hormone-trt',
		name: "VANTAGE Men's Health — Premium Hormone & TRT Clinic",
		category: "Men's Health / TRT",
		shortDescription:
			"A red/black sports-performance men's health website system for TRT, ED care, hormone optimization, medical weight loss, peptide therapy, and longevity clinics.",
		longDescription:
			"A conversion-focused website template for men's health clinics offering testosterone optimization, ED treatment, medical weight loss, peptide therapy, longevity medicine, lab-based care, and private consultation funnels. Built with a dark, masculine sports-performance design system and assessment-first patient routing.",
		audience:
			"Men's health clinics, TRT clinics, hormone optimization practices, ED treatment providers, medical weight loss clinics targeting men, peptide therapy clinics, and male longevity/performance medicine practices.",
		businessTypes: [
			"Men's health clinics",
			'TRT / testosterone clinics',
			'Hormone optimization practices',
			'ED treatment providers',
			"Men's medical weight loss clinics",
			'Peptide therapy clinics',
			'Male longevity / performance medicine',
			'Telehealth men\'s health platforms',
		],
		goals: ['Route patients by symptoms not just services', 'Build trust with lab-based credibility', 'Funnel uncertain visitors to private assessment', 'Support ongoing optimization memberships', 'Handle sensitive topics (ED, libido) with discretion', 'Demonstrate medical responsibility'],
		features: ['Sports-Performance Brand', 'Assessment Funnel', 'TRT / Hormone Optimization', 'ED & Men\'s Health', 'Medical Weight Loss', 'Pricing Transparency', 'Dark Premium Design', 'Lab-Based Credibility', 'Provider Trust System', 'Diagnostic Dashboard', 'Sticky Mobile CTA', 'Medical Safety Language'],
		includedPages: ['Homepage', 'Testosterone Optimization', 'ED & Sexual Wellness', 'Medical Weight Loss', 'How It Works', 'Pricing & Memberships', 'Assessment', 'Book Consultation'],
		problemsSolved: [
			'Generic TRT sites that feel scammy or untrustworthy',
			'Service menus with no clear patient pathway',
			'Weak explanation of labs, monitoring, and medical oversight',
			'Sensitive ED/libido topics handled awkwardly',
			'Pricing and membership confusion',
			'No assessment-first funnel',
			'No differentiation from med spas or wellness clinics',
		],
		conversionFeatures: ['Assessment-first CTA strategy', 'Symptom and goal-based routing', 'Sports-performance positioning', 'Lab-based trust sections', 'Provider oversight sections', 'Pricing and membership clarity', 'ED/privacy reassurance language', 'Medical disclaimer and safety-oriented copy', 'Booking and consultation flow'],
		seoFeatures: ['TRT / testosterone service page structure', 'ED treatment service page structure', 'Medical weight loss page structure', 'Hormone optimization content hierarchy', 'Local clinic conversion sections', 'FAQ-ready page architecture', 'Internal linking between services, pricing, assessment, and consultation'],
		backendFeatures: ['Assessment form capture', 'Consultation request form', 'CRM-ready lead flow', 'Booking request flow', 'Follow-up pipeline', 'Patient qualification path', 'Future GHL/SMS/email automation compatibility'],
		complexity: 'Growth',
		detailUrl: '/templates/hormone-trt',
		demoUrl: '/demos/hormone-trt',
		auditUrl: '/audit?template=hormone-trt',
		featured: true,
		whyDifferent: [
			{ title: 'Built around male patient psychology', text: 'Sensitive topics like ED, libido, fatigue, and weight gain are handled directly but discreetly — with language calibrated for how men actually seek care.' },
			{ title: 'Sports-performance brand positioning', text: 'The design avoids generic wellness softness and cheap TRT hype by positioning care like a premium performance medicine system.' },
			{ title: 'Assessment-first conversion flow', text: 'Visitors are guided toward qualification and private evaluation before being pushed into booking — reducing friction for uncertain patients.' },
			{ title: 'Medical credibility baked in', text: 'Labs, provider oversight, safety monitoring, and candidacy language are built into the page structure — not bolted on as an afterthought.' },
			{ title: 'Cash-pay clinic ready', text: 'Pricing, memberships, recurring care, and add-on protocols are organized for private-pay men\'s health practices that need transparent, scannable pricing.' },
		],
	},
];

export function getTemplateBySlug(slug: string) {
	return templateSystems.find((template) => template.slug === slug);
}

export const auditTemplateSlugToName: Record<string, string> = Object.fromEntries(
	templateSystems.map((t) => [t.slug, t.name]),
);
