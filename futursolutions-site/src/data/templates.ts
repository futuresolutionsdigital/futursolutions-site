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
	/** Optional real screenshot for the homepage demo preview. When absent, the
	 *  CSS/browser wireframe placeholder is rendered as a fallback. */
	previewImage?: string;
	previewAlt?: string;
	/** Shorter, outcome-oriented description shown only on the homepage demo card
	 *  (keeps the fuller shortDescription for /templates and detail pages). */
	demoCardSummary?: string;
	/** Compact "best fit" cue shown on the homepage demo card for quick self-identification. */
	demoBestFit?: string;
	whyDifferent?: { title: string; text: string }[];
	/** Optional richer detail used by [slug].astro when present (migrated from per-template static pages). */
	audienceDetails?: { label: string; desc: string }[];
	strategicFeatures?: { title: string; desc: string }[];
	customizationOptions?: string[];
	salesFaqs?: { q: string; a: string }[];
	pageDetails?: { name: string; purpose: string }[];
	/** Compact above-the-fold summary used by FoundationAtAGlance after the hero. */
	atAGlance?: {
		bestFor: string;
		primaryGoal: string;
		includes: string;
		typicalPath: string;
	};
}

/**
 * Per-Foundation accent palette. Used by both the homepage demo library
 * preview and the Foundation detail hero so each Foundation reads as
 * its own product, not a copy of the others. Values are tints — never
 * fully saturated.
 */
export const foundationPalette: Record<string, { accent: string; tint: string; ink: string }> = {
	'med-spa': { accent: '#B97485', tint: '#F7EBEE', ink: '#7E4856' },
	'solo-practice': { accent: '#5F8F8B', tint: '#EAF2F1', ink: '#3F6764' },
	'association': { accent: '#4F7CAC', tint: '#EAF1F8', ink: '#325883' },
	'premium-wellness-clinic': { accent: '#C6996A', tint: '#F7EFE3', ink: '#8C6536' },
	'hormone-trt': { accent: '#C81E1E', tint: '#1A0F0F', ink: '#C81E1E' },
};

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
		demoCardSummary:
			'For aesthetic clinics that need treatment education, provider trust, and a clear consultation path.',
		demoBestFit: 'Aesthetic clinics and med spas',
		atAGlance: {
			bestFor: 'Med spas, injectables studios, laser clinics, and aesthetic dermatology practices.',
			primaryGoal: 'Educate on treatments responsibly and drive consultation bookings.',
			includes: '9 pages · Treatment menu · Concern guide · Results gallery · Provider trust · Membership · Booking flow.',
			typicalPath: 'Foundation → customize brand & services → connect booking and follow-up → launch.',
		},
		audienceDetails: [
			{ label: 'Med spas', desc: 'Full-service aesthetic practices offering injectables, lasers, skin treatments, and wellness.' },
			{ label: 'Injectables studios', desc: 'Built to explain Botox, fillers, and facial balancing with trust-first service pages.' },
			{ label: 'Aesthetic NPs and PAs', desc: 'Provider-led clinics that need to build personal credibility alongside treatment education.' },
			{ label: 'Skin clinics', desc: 'Practices focused on acne, rosacea, texture, and medical-grade skincare treatments.' },
			{ label: 'Laser treatment providers', desc: 'Structured to present device-based treatments, downtime, expectations, and candidacy clearly.' },
			{ label: 'Body contouring clinics', desc: 'Practices offering sculpting, tightening, and body treatments that need realistic expectation framing.' },
			{ label: 'Cosmetic dermatology practices', desc: 'Dermatology offices expanding into aesthetic services alongside medical care.' },
			{ label: 'Wellness-forward aesthetic clinics', desc: 'Clinics blending IV therapy, hormone optimization, weight management, and aesthetics.' },
		],
		pageDetails: [
			{ name: 'Homepage', purpose: 'Full-funnel brand, service, trust, results, and booking overview that guides visitors deeper.' },
			{ name: 'Treatments', purpose: 'Organized treatment menu grouped by injectables, lasers, skin, wellness, and more.' },
			{ name: 'Botox / Wrinkle Relaxers (detail)', purpose: 'Flagship treatment detail page with quick facts, candidacy, process, pricing language, safety, FAQs, and related treatments.' },
			{ name: 'Concerns', purpose: 'Guided visitor path for patients who know what they want to improve but do not know which treatment to choose.' },
			{ name: 'Results', purpose: 'Before/after-ready gallery with responsible disclaimers and category filters.' },
			{ name: 'Providers', purpose: 'Builds trust with provider profiles, specialties, credentials, and medical standards.' },
			{ name: 'Membership', purpose: 'Presents packages, plans, and payment flexibility without making the brand feel discount-driven.' },
			{ name: 'Contact / Consultation', purpose: 'Conversion endpoint with booking form, clinic details, what-happens-next section, and reassurance FAQ.' },
			{ name: 'About', purpose: 'Brand philosophy, trust positioning, and differentiators that make the clinic feel intentional.' },
		],
		strategicFeatures: [
			{ title: 'Concern-based treatment routing', desc: 'Visitors can start with "smooth lines," "restore volume," "improve texture," or "I am not sure yet" instead of guessing treatment names.' },
			{ title: 'Treatment menu architecture', desc: 'Services are grouped into clear categories so visitors can browse without feeling overwhelmed by a flat list.' },
			{ title: 'Flagship treatment detail page', desc: 'The Botox page demonstrates a reusable structure for fillers, Morpheus8, IPL, Hydrafacial, laser hair removal, weight loss, and more.' },
			{ title: 'Before/after-ready results gallery', desc: 'Filterable gallery structure designed for real result photos with responsible disclaimers and expectation framing.' },
			{ title: 'Provider trust system', desc: 'Provider cards and profile pages make the team visible, credible, and approachable.' },
			{ title: 'Consultation-first conversion flow', desc: 'The site emphasizes booking a consultation without pressuring visitors into a specific treatment decision.' },
			{ title: 'Membership and package presentation', desc: 'Plans and packages are presented as premium maintenance options, not cheap discounts.' },
			{ title: 'Local SEO-ready structure', desc: 'Location, services, FAQs, treatment categories, and content depth support local search expansion.' },
			{ title: 'Mobile booking path', desc: 'Sticky mobile actions and clear CTAs make calling, booking, and getting directions easy on any device.' },
		],
		customizationOptions: [
			'Replace the fictional clinic name, colors, logo, and branding.',
			'Add real provider headshots and team bios.',
			'Add real treatment photography and clinical imagery.',
			'Add real before/after galleries with responsible disclaimers.',
			'Customize treatment categories and service pages.',
			'Add detail pages for fillers, Morpheus8, IPL, Hydrafacial, laser hair removal, weight loss, and more.',
			'Connect forms to GoHighLevel, CRM, email, or online booking.',
			'Add location-specific SEO pages for additional service areas.',
			'Add memberships, packages, financing, and specials.',
			'Add blog and resource content for SEO and patient education.',
		],
		salesFaqs: [
			{ q: 'Is this a real med spa?', a: 'No — this is a fictional demo created by FutureSolutions to show how a real aesthetic clinic could look and function with this Foundation. All provider names, treatments, results, and testimonials are entirely invented.' },
			{ q: 'Can this be customized for my med spa?', a: 'Yes. Branding, colors, photography, provider bios, treatment pages, booking flow, and copy can all be replaced with your real clinic details. We handle the customization so you launch with a site that reflects your actual practice.' },
			{ q: 'Can you add more treatment pages?', a: 'Yes. The Botox page is the flagship example, and the same structure works for fillers, Morpheus8, IPL, Hydrafacial, laser hair removal, body contouring, medical weight loss, and any other service you offer. Each new page follows the same conversion-ready layout.' },
			{ q: 'Can this connect to online booking or GoHighLevel?', a: 'Yes. The consultation form and CTAs are structured to connect to GoHighLevel, scheduling tools like Jane App or Acuity, CRM systems, email notifications, or SMS follow-up workflows. We wire these during the Growth System phase.' },
			{ q: 'Can this support SEO?', a: 'Yes. Treatment pages, service categories, FAQs, location content, and blog-ready resource sections are all structured for organic search visibility. Each page includes proper heading hierarchy and local keyword patterns out of the box.' },
			{ q: 'Is this only for luxury med spas?', a: 'No. The visual direction is premium, but the Foundation adapts for boutique clinics, injectables studios, wellness-focused med spas, laser clinics, or cosmetic dermatology practices. Tone, imagery, and color all shift to match your brand.' },
		],
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
		demoCardSummary:
			'For solo NPs, private primary care, and concierge practices that need provider trust and clear service navigation.',
		demoBestFit: 'Solo NPs and private practices',
		atAGlance: {
			bestFor: 'Solo NPs, private primary care, DPC, concierge medicine, and cash-pay practices.',
			primaryGoal: 'Build provider trust and drive consultation bookings.',
			includes: '10 pages · Provider story · Care model walkthrough · Transparent pricing · Resource hub.',
			typicalPath: 'Foundation → customize provider & services → connect booking and CRM → launch.',
		},
		audienceDetails: [
			{ label: 'Solo nurse practitioners', desc: 'NPs building or scaling a private practice with a personal care model.' },
			{ label: 'Private primary care', desc: 'Physicians offering relationship-driven, non-insurance care.' },
			{ label: 'Concierge medicine', desc: 'Membership-based practices that need to explain the model clearly.' },
			{ label: 'Direct primary care (DPC)', desc: 'Flat-fee primary care practices communicating value and pricing.' },
			{ label: 'Cash-pay providers', desc: 'Providers who need transparent pricing and HSA/FSA language.' },
			{ label: "Women's health providers", desc: 'Specialists building trust around sensitive, ongoing care.' },
			{ label: 'Holistic and integrative NPs', desc: 'Providers combining conventional and integrative approaches.' },
			{ label: 'Practices replacing an outdated site', desc: 'Small practices that need a modern, conversion-ready upgrade.' },
		],
		pageDetails: [
			{ name: 'Homepage', purpose: 'Builds trust quickly and guides patients toward booking a consultation.' },
			{ name: 'About the Provider', purpose: 'Shares the provider\'s background, philosophy, and credentials in an editorial layout.' },
			{ name: 'Services Overview', purpose: 'Organizes care areas as a clear, navigable system rather than a treatment menu.' },
			{ name: 'Private Primary Care (detail)', purpose: 'Deep-dive into a single service with scope, included items, and who it\'s for.' },
			{ name: 'How It Works', purpose: 'Walks patients through the care model from first visit to ongoing support.' },
			{ name: 'Pricing & Membership', purpose: 'Explains private-pay care, HSA/FSA language, superbills, and what is or isn\'t included.' },
			{ name: 'Resources', purpose: 'Houses patient education articles and guides for organic search and credibility.' },
			{ name: 'New Patients', purpose: 'Reduces booking hesitation with a first-visit walkthrough, checklist, and intake form.' },
			{ name: 'Contact / Location', purpose: 'Provides clear contact methods, office hours, response expectations, and location presence.' },
			{ name: 'Patient Portal', purpose: 'Placeholder dashboard showing what a connected patient portal experience looks like.' },
		],
		strategicFeatures: [
			{ title: 'Provider-led homepage', desc: 'The homepage centers the provider\'s story and credentials, not a generic hero banner.' },
			{ title: 'Consultation-first conversion', desc: 'Every page routes toward booking a consultation, not a hard sell.' },
			{ title: 'Transparent pricing explanation', desc: 'Pricing cards, HSA/FSA language, and superbill guidance reduce cost confusion.' },
			{ title: 'Care model walkthrough', desc: 'A dedicated page explains how care works from first visit to ongoing support.' },
			{ title: 'Patient-fit self-identification', desc: 'Homepage cards help visitors recognize themselves before scrolling further.' },
			{ title: 'New patient onboarding flow', desc: 'Preparation checklist, booking form, and first-visit expectations reduce no-shows.' },
			{ title: 'Service detail depth', desc: 'Individual service pages include scope, included items, conditions, and who it\'s for.' },
			{ title: 'Resource and blog hub', desc: 'Article previews and guides support organic search and patient education.' },
			{ title: 'FAQ objection handling', desc: 'Accordion FAQs address insurance, telehealth, emergencies, and scope-of-practice concerns.' },
		],
		customizationOptions: [
			'Replace fictional provider name, bio, credentials, and branding.',
			'Add real photography to replace abstract editorial illustrations.',
			'Customize services, care areas, and condition lists.',
			'Add real booking or scheduling integration (Jane App, Calendly, etc.).',
			'Connect forms to GoHighLevel, CRM, or email follow-up sequences.',
			'Add location-specific SEO pages for additional service areas.',
			'Add blog and resource content for ongoing organic search growth.',
			'Adjust pricing tiers, membership options, and payment language.',
			'Add real patient portal links (Elation, Cerbo, Hint Health, etc.).',
			'Add HIPAA-conscious form routing and privacy disclaimers.',
		],
		salesFaqs: [
			{ q: 'Can this be customized for my practice?', a: 'Yes. The provider name, services, pricing tiers, branding, photography, and copy are all replaced with your real practice details. The demo is a starting point — not a finished product.' },
			{ q: 'Can this work for a solo NP or solo physician?', a: 'Absolutely. The Foundation was designed specifically for single-provider practices. The provider-led homepage, about page, and care model explainer all center one person\'s story, credentials, and expertise.' },
			{ q: 'Can you connect real booking and forms?', a: 'Yes. The placeholder forms are structured for easy connection to scheduling platforms like Jane App, Calendly, or Acuity. They can also route into GoHighLevel for CRM, follow-up, and patient pipeline tracking.' },
			{ q: 'Can the services and pricing be changed?', a: 'Completely. You can add, remove, or rename services and visit types. Pricing tiers, HSA/FSA language, superbill information, and bundled care packages are all customizable to match your fee schedule.' },
			{ q: 'Can this support SEO and blog content?', a: 'Yes. The resource hub, service pages, and condition grid are all structured for organic search visibility. Blog posts, condition explainers, and patient education content can be added over time for ongoing traffic growth.' },
			{ q: 'Is this a real clinic?', a: 'No. Aster Private Health is a fictional demo created by FutureSolutions. All provider names, testimonials, pricing, and patient data are entirely invented for illustration purposes.' },
		],
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
		demoCardSummary:
			'For associations that need to grow membership, promote events, activate advocacy, and organize resources.',
		demoBestFit: 'Associations and member organizations',
		atAGlance: {
			bestFor: 'Statewide or national professional associations in healthcare, nursing, or allied health.',
			primaryGoal: 'Grow membership, promote events, and activate advocacy.',
			includes: '14 pages · Membership · Events · Advocacy · Resources · Chapters · Career center.',
			typicalPath: 'Foundation → customize org & content model → connect CMS and member systems → launch.',
		},
		audienceDetails: [
			{ label: 'Nursing associations', desc: 'State or national organizations representing nurses, NPs, and advanced practice providers.' },
			{ label: 'Medical associations', desc: 'Physician-led organizations coordinating advocacy, education, and professional standards.' },
			{ label: 'Healthcare professional societies', desc: 'Specialty societies that organize research, credentials, and member networking.' },
			{ label: 'State-level professional associations', desc: 'Statewide organizations with chapters, advocacy, CE requirements, and legislative priorities.' },
			{ label: 'Nonprofit advocacy organizations', desc: 'Mission-driven organizations that need to mobilize members around policy and action.' },
			{ label: 'Continuing education providers', desc: 'Organizations that offer CE/CME programming alongside membership.' },
			{ label: 'Trade associations', desc: 'Industry organizations that serve employers, sponsors, and professional members.' },
			{ label: 'Membership-based professional communities', desc: 'Any organization where membership is the product and engagement is the metric.' },
		],
		pageDetails: [
			{ name: 'Homepage', purpose: 'A control-tower homepage that routes visitors to membership, events, advocacy, resources, chapters, and career support.' },
			{ name: 'Membership', purpose: 'Converts prospective members by explaining benefits, tiers, career-stage paths, and member value.' },
			{ name: 'Education & Events', purpose: 'Positions continuing education, webinars, and flagship events as an active learning ecosystem.' },
			{ name: 'Annual Conference', purpose: 'A flagship event landing page with registration tiers, agenda, speakers, CE info, sponsors, venue, deadlines, and FAQ.' },
			{ name: 'Advocacy', purpose: 'A policy and action command center with current alerts, priorities, legislative tracking, toolkits, and event promotion.' },
			{ name: 'Policy Issue Detail', purpose: 'A reusable issue page for explaining one advocacy priority, current status, member action, resources, and updates.' },
			{ name: 'Resources / CE Hub', purpose: 'A filterable content library for CE courses, webinars, toolkits, practice guides, policy briefs, and member-only materials.' },
			{ name: 'Resource Detail', purpose: 'A reusable CE/course/resource detail page with quick facts, learning objectives, course outline, CE info, and related resources.' },
			{ name: 'Chapters & Community', purpose: 'Makes local chapters, events, mentorship, leadership, and volunteer opportunities visible.' },
			{ name: 'Chapter Detail', purpose: 'A reusable local chapter page with events, leaders, priorities, resources, and announcements.' },
			{ name: 'Career Center', purpose: 'A career hub with job filtering, salary insights, mentorship, employer CTAs, and career resources.' },
			{ name: 'Job Detail', purpose: 'A reusable job detail page with role overview, requirements, benefits, process, and related jobs/resources.' },
			{ name: 'About', purpose: 'Builds institutional trust through mission, impact, governance, leadership, councils, partners, timeline, and recognition.' },
			{ name: 'Contact', purpose: 'Routes membership, events, advocacy, chapters, career, sponsor, and media inquiries to the right next step.' },
		],
		strategicFeatures: [
			{ title: 'Membership conversion architecture', desc: 'Tiered comparison, career-stage paths, and repeated value reminders turn prospects into members.' },
			{ title: 'Annual conference marketing system', desc: 'A flagship event page with registration tiers, agenda preview, speaker highlights, sponsors, and CE information.' },
			{ title: 'Advocacy action center', desc: 'Policy alerts, issue pages, legislative tracking, and toolkits make advocacy visible and actionable.' },
			{ title: 'Filterable resource and CE library', desc: 'Tag-based filtering across CE courses, webinars, toolkits, and guides so members find what they need.' },
			{ title: 'Chapter and community directory', desc: 'Local chapters with their own events, leadership, and resources feel connected to the parent organization.' },
			{ title: 'Career center and job board', desc: 'Job filtering, employer partnerships, salary context, and mentorship make career support a membership benefit.' },
			{ title: 'Search overlay and command palette', desc: 'A site-wide search overlay helps visitors find resources, events, chapters, jobs, and pages quickly.' },
			{ title: 'Institutional about and authority modules', desc: 'Mission, governance, leadership, councils, partners, and timeline modules build organizational credibility.' },
			{ title: 'CMS-ready content modeling', desc: 'Pages, resources, events, chapters, and jobs follow repeatable structures ready for Sanity or another CMS.' },
		],
		customizationOptions: [
			'Replace the fictional association brand with your real identity, mission, and history.',
			'Customize color palette and typography to match your organization.',
			'Add real leadership, board, staff, and committee data.',
			'Add real membership tiers, dues, and career-stage paths.',
			'Add real event and conference content with registration links.',
			'Add CE/CME course catalog structure and learning management links.',
			'Add real advocacy priorities, legislative tracking, and issue pages.',
			'Connect forms to CRM, AMS, or helpdesk workflows.',
			'Integrate job board or employer posting flow.',
			'Add sponsor and exhibitor pages with partnership opportunities.',
			'Add member login and dashboard links.',
			'Build SEO-focused resource, news, and advocacy content.',
		],
		salesFaqs: [
			{ q: 'Is this a real association?', a: 'No — this is a fictional demo created by FutureSolutions to show how a modern professional association Foundation could look and function. All organization names, events, policies, and member data are entirely invented.' },
			{ q: 'Can this be customized for my association?', a: 'Yes. The demo brand, page structure, navigation, content, membership tiers, events, resources, chapters, and CTAs can all be replaced with your real organization details. We handle customization so you launch with a site that matches your actual mission and programs.' },
			{ q: 'Can this connect to our AMS or CRM?', a: 'Yes. Membership forms and contact routing are structured for connection to association management platforms like MemberClicks, Wild Apricot, or custom AMS tools. CRM integrations can be wired through the Growth System phase.' },
			{ q: 'Can we add real events, CE, and a job board?', a: 'Absolutely. Event pages can route to Cvent, Eventbrite, or custom registration systems. The CE catalog structure is ready for LMS integration, and career center pages can connect to employer posting and applicant workflows.' },
			{ q: 'Does this support advocacy and policy work?', a: 'Yes. The advocacy landing, policy issue detail pages, and action alert patterns are built specifically for organizations that need to mobilize members around legislative and regulatory priorities. Call-to-action routing, talking points, and issue tracking are all included.' },
			{ q: 'Can this run on a CMS?', a: 'Yes. Resources, events, chapters, jobs, and issues follow structured content schemas that are ready for Sanity, Contentful, or similar headless CMS platforms. This makes ongoing content updates manageable without developer involvement.' },
		],
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
		salesFaqs: [
			{ q: 'Is this a real wellness clinic?', a: 'No — Lumen Health House is a fictional demo created by FutureSolutions to show how a multi-service wellness clinic Foundation works. All provider names, services, pricing, and testimonials are entirely invented.' },
			{ q: 'Can this be customized for my clinic?', a: 'Yes. Branding, service categories, provider bios, membership tiers, photography, and copy are all replaced with your real clinic details. We handle the customization so you launch with a site that reflects your actual programs and team.' },
			{ q: 'We offer more services than the demo shows. Can you add them?', a: 'Absolutely. The service category grid, individual service pages, and goal-based navigation can be expanded for any number of services — from IV drips and cryotherapy to functional lab testing and peptide protocols.' },
			{ q: 'Can this connect to booking and CRM tools?', a: 'Yes. The consultation form and booking CTAs are structured to connect to scheduling tools like Jane App, Acuity, or Calendly, as well as CRM platforms like GoHighLevel for lead capture and patient follow-up.' },
			{ q: 'Does this support memberships and packages?', a: 'Yes. The Foundation includes a membership comparison table and package bundling structure. Tiers, pricing, included services, and signup CTAs can all be customized to match your actual membership model.' },
			{ q: 'Can this support SEO for a multi-service clinic?', a: 'Yes. Each service page, the resource hub, and FAQ sections are structured for organic search visibility. Local keyword patterns and content hierarchy are built in, with room for blog and educational content expansion.' },
		],
		atAGlance: {
			bestFor: 'Premium wellness clinics offering IV, hormone, weight loss, and longevity programs.',
			primaryGoal: 'Present a calm premium brand and route visitors to the right service or program.',
			includes: '13 pages · Service category grid · Provider trust · Membership tiers · Resource hub.',
			typicalPath: 'Foundation → customize brand & programs → connect Growth System → launch.',
		},
	},
	{
		slug: 'hormone-trt',
		name: "VANTAGE Men's Health — Premium Hormone & TRT Clinic",
		category: "Men's Health / TRT",
		shortDescription:
			"A red/black sports-performance men's health website system for TRT, ED care, hormone optimization, medical weight loss, peptide therapy, and longevity clinics.",
		longDescription:
			"A conversion-focused Website Foundation for men's health clinics offering testosterone optimization, ED treatment, medical weight loss, peptide therapy, longevity medicine, lab-based care, and private consultation funnels. Built with a dark, masculine sports-performance design system and assessment-first patient routing.",
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
		demoCardSummary:
			"For men's health and TRT clinics that need a bold, direct-response path from assessment to consultation.",
		demoBestFit: "Men's health, TRT, and hormone clinics",
		salesFaqs: [
			{ q: 'Is this a real TRT clinic?', a: 'No — VANTAGE is a fictional demo created by FutureSolutions to demonstrate how a men\'s health clinic Foundation can look and function. All provider names, lab data, pricing, and patient references are entirely invented.' },
			{ q: 'Can this be customized for my clinic?', a: 'Yes. The brand, services, pricing tiers, provider bios, assessment flow, and copy are all replaced with your real clinic details. The dark design direction can also be adjusted to match your brand aesthetic.' },
			{ q: 'Does this handle sensitive topics like ED appropriately?', a: 'Yes. The ED, libido, and sexual wellness sections use direct but discreet language calibrated for how men actually search for and evaluate care. Page structure, headlines, and CTAs are all written to reduce stigma and encourage action.' },
			{ q: 'Can this connect to assessment tools and CRM?', a: 'Yes. The assessment intake form and consultation CTAs are structured to connect to GoHighLevel, intake platforms, or custom qualification workflows. Patient data can route into CRM pipelines for follow-up and scheduling.' },
			{ q: 'Can this support multiple locations or telehealth?', a: 'Yes. The page structure accommodates location-specific service pages and telehealth consultation flows. Pricing, provider assignments, and booking CTAs can be customized per location or delivery model.' },
			{ q: 'Does this support SEO for men\'s health keywords?', a: 'Yes. TRT, hormone optimization, ED treatment, and medical weight loss pages are structured with proper heading hierarchy, FAQ sections, and local keyword patterns. Each service page is designed to rank for condition-specific and location-based searches.' },
		],
		atAGlance: {
			bestFor: "Men's health clinics offering TRT, ED care, hormone optimization, and medical weight loss.",
			primaryGoal: 'Qualify visitors and route them through assessment to private consultation.',
			includes: 'Multi-page system · Assessment-first routing · Service depth · Pricing · Compliance-aware copy.',
			typicalPath: 'Foundation → customize brand & services → connect assessment and CRM → launch.',
		},
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
