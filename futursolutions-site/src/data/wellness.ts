// ── Lumen Health House — Centralized Demo Data ──

export const brand = {
	name: 'Lumen Health House',
	tagline: 'Premium wellness and recovery. Provider-guided. Personalized around your goals.',
	homeHref: '/demos/premium-wellness-clinic',
	location: '1248 Meridian Avenue, Temecula, CA 92591',
	locationShort: 'Temecula, CA',
	phone: '(951) 555-0192',
	email: 'hello@lumenhealthhouse.com',
	hours: 'Monday–Friday 8am–6pm · Saturday 9am–2pm · Sunday Closed',
	parking: 'Free parking on-site with reserved spaces near the main entrance.',
	disclaimer: 'This is a fictional demo website created by Future Solutions for portfolio presentation. Lumen Health House is not a real clinic. All provider names, testimonials, services, and pricing are entirely fictional.',
} as const;

export const announcement = 'Now accepting new clients · Same-week wellness consultations available';

export const navItems = [
	{ label: 'Services', href: '/demos/premium-wellness-clinic/services' },
	{ label: 'Memberships', href: '/demos/premium-wellness-clinic/memberships' },
	{ label: 'New Clients', href: '/demos/premium-wellness-clinic/new-clients' },
	{ label: 'Providers', href: '/demos/premium-wellness-clinic/providers' },
	{ label: 'Resources', href: '/demos/premium-wellness-clinic/resources' },
	{ label: 'Location', href: '/demos/premium-wellness-clinic/contact' },
];

export const footerNav = [
	{ label: 'Home', href: '/demos/premium-wellness-clinic' },
	{ label: 'Services', href: '/demos/premium-wellness-clinic/services' },
	{ label: 'Memberships', href: '/demos/premium-wellness-clinic/memberships' },
	{ label: 'New Clients', href: '/demos/premium-wellness-clinic/new-clients' },
	{ label: 'Providers', href: '/demos/premium-wellness-clinic/providers' },
	{ label: 'Resources', href: '/demos/premium-wellness-clinic/resources' },
	{ label: 'Reviews', href: '/demos/premium-wellness-clinic/reviews' },
	{ label: 'Location', href: '/demos/premium-wellness-clinic/contact' },
];

export const footerServices = [
	'IV Therapy',
	'Contrast Therapy',
	'Medical Weight Loss',
	'Hormone Optimization',
	'Body Composition Scan',
	'Infrared Sauna',
	'Cold Plunge',
	'NAD+',
];

export const hero = {
	headline: 'Feel Better Now. Build Better Health for the Long Run.',
	lead: 'Lumen Health House is a premium wellness and recovery clinic for energy, metabolism, hormones, recovery, and long-term health — guided by real providers and personalized around your goals.',
	primaryCta: { text: 'Book a Consultation', href: '/demos/premium-wellness-clinic/new-clients' },
	secondaryCta: { text: 'Explore Services', href: '/demos/premium-wellness-clinic/services' },
	trustStrip: [
		'Provider-guided care',
		'Advanced body scans',
		'Same-week appointments',
		'Wellness memberships',
		'Personalized plans',
	],
} as const;

export const trustBar = [
	{ title: 'Provider-guided protocols', desc: 'Every plan starts with a wellness consultation and provider review.' },
	{ title: 'Advanced body composition', desc: 'InBody-style scans to track real progress beyond the scale.' },
	{ title: 'Same-week appointments', desc: 'Most services can be booked within the same week.' },
	{ title: 'Memberships and packages', desc: 'Monthly credits, priority booking, and discounted add-ons.' },
	{ title: 'Personalized wellness plans', desc: 'Your provider builds a plan around your goals, labs, and progress.' },
];

export const goalCards = [
	{ title: 'More Energy', desc: 'IV therapy, vitamin support, metabolic assessment, and recovery therapies.', href: '/demos/premium-wellness-clinic/services#iv-cellular' },
	{ title: 'Better Recovery', desc: 'Contrast therapy, sauna, cold plunge, compression, and red light.', href: '/demos/premium-wellness-clinic/services#recovery' },
	{ title: 'Weight & Metabolism', desc: 'Medical weight loss, GLP-1 support, body scans, and nutrition guidance.', href: '/demos/premium-wellness-clinic/services#weight' },
	{ title: 'Hormone Balance', desc: 'Hormone optimization, testosterone therapy, labs, and peptide support.', href: '/demos/premium-wellness-clinic/services#hormones' },
	{ title: 'Longevity & Prevention', desc: 'Baseline diagnostics, NAD+, wellness planning, and progress tracking.', href: '/demos/premium-wellness-clinic/services#diagnostics' },
	{ title: 'Body Composition', desc: 'InBody scans, progress tracking, and metabolic baseline assessment.', href: '/demos/premium-wellness-clinic/services#diagnostics' },
	{ title: 'Sleep, Stress & Resilience', desc: 'Functional health consultation, recovery therapies, and lifestyle coaching.', href: '/demos/premium-wellness-clinic/services#functional' },
];

export interface ServiceCategory {
	id: string;
	title: string;
	description: string;
	services: ServiceItem[];
}

export interface ServiceItem {
	title: string;
	slug: string;
	description: string;
	quickFacts: { duration: string; bestFor: string; consultRequired: string; priceFrom: string; frequency: string };
	href: string;
	hasPage: boolean;
}

export const serviceCategories: ServiceCategory[] = [
	{
		id: 'weight',
		title: 'Weight & Metabolic Health',
		description: 'Provider-guided weight management, metabolic assessment, and body composition support.',
		services: [
			{ title: 'Medical Weight Loss', slug: 'medical-weight-loss', description: 'Personalized medical weight management with labs, body scans, provider oversight, and ongoing support.', quickFacts: { duration: '45–60 min initial', bestFor: 'Sustainable weight management', consultRequired: 'Yes', priceFrom: '$295', frequency: 'Monthly check-ins' }, href: '/demos/premium-wellness-clinic/services/medical-weight-loss', hasPage: true },
			{ title: 'GLP-1 Support', slug: 'glp-1-support', description: 'Provider-supervised GLP-1 medication support with eligibility screening, labs, and ongoing monitoring.', quickFacts: { duration: '30 min follow-up', bestFor: 'Metabolic weight support', consultRequired: 'Yes', priceFrom: '$195/mo', frequency: 'Monthly' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Body Composition Scan', slug: 'body-composition-scan', description: 'InBody-style body composition analysis tracking muscle, fat, water balance, and metabolic rate.', quickFacts: { duration: '15–20 min', bestFor: 'Progress tracking', consultRequired: 'No', priceFrom: '$75', frequency: 'Monthly or quarterly' }, href: '/demos/premium-wellness-clinic/services/body-composition-scan', hasPage: true },
		],
	},
	{
		id: 'hormones',
		title: 'Hormones & Vitality',
		description: 'Lab-based hormone assessment, optimization protocols, and vitality support.',
		services: [
			{ title: 'Hormone Optimization', slug: 'hormone-optimization', description: 'Comprehensive hormone panel, clinical interpretation, and personalized optimization plan with ongoing provider guidance.', quickFacts: { duration: '45–60 min initial', bestFor: 'Fatigue, mood, libido, metabolism', consultRequired: 'Yes', priceFrom: '$350', frequency: 'Quarterly labs + follow-ups' }, href: '/demos/premium-wellness-clinic/services/hormone-optimization', hasPage: true },
			{ title: 'Testosterone Therapy', slug: 'testosterone-therapy', description: 'Provider-supervised testosterone replacement with labs, eligibility review, and regular monitoring.', quickFacts: { duration: '30 min follow-up', bestFor: 'Low-T symptoms in men and women', consultRequired: 'Yes', priceFrom: '$195/mo', frequency: 'Monthly' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Peptide Therapy', slug: 'peptide-therapy', description: 'Targeted peptide protocols for recovery, body composition, sleep, and cellular health.', quickFacts: { duration: '30 min consult', bestFor: 'Recovery, sleep, body composition', consultRequired: 'Yes', priceFrom: '$250/mo', frequency: 'Monthly' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
		],
	},
	{
		id: 'iv-cellular',
		title: 'IV & Cellular Wellness',
		description: 'IV hydration, nutrient delivery, and cellular recovery therapies.',
		services: [
			{ title: 'IV Therapy', slug: 'iv-therapy', description: 'Customized IV drips for hydration, energy, recovery, immune support, and wellness maintenance.', quickFacts: { duration: '30–60 min', bestFor: 'Energy, recovery, hydration', consultRequired: 'No', priceFrom: '$175', frequency: 'Weekly to monthly' }, href: '/demos/premium-wellness-clinic/services/iv-therapy', hasPage: true },
			{ title: 'NAD+', slug: 'nad-plus', description: 'NAD+ IV therapy for cellular repair, mental clarity, energy, and anti-aging support.', quickFacts: { duration: '2–4 hours', bestFor: 'Cellular health, mental clarity', consultRequired: 'Recommended', priceFrom: '$350', frequency: 'Monthly or as recommended' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Vitamin Injections', slug: 'vitamin-injections', description: 'Targeted vitamin and nutrient injections including B12, glutathione, and custom blends.', quickFacts: { duration: '5–15 min', bestFor: 'Quick energy and nutrient boost', consultRequired: 'No', priceFrom: '$35', frequency: 'Weekly to monthly' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
		],
	},
	{
		id: 'recovery',
		title: 'Recovery & Performance',
		description: 'Science-backed recovery therapies for athletes, professionals, and anyone who wants to feel better.',
		services: [
			{ title: 'Contrast Therapy', slug: 'contrast-therapy', description: 'Alternating infrared sauna and cold plunge sessions for circulation, recovery, and stress resilience.', quickFacts: { duration: '45–60 min', bestFor: 'Recovery, inflammation, stress', consultRequired: 'No', priceFrom: '$85', frequency: '1–3x per week' }, href: '/demos/premium-wellness-clinic/services/contrast-therapy', hasPage: true },
			{ title: 'Infrared Sauna', slug: 'infrared-sauna', description: 'Full-spectrum infrared sauna sessions for detoxification, relaxation, and recovery.', quickFacts: { duration: '30–45 min', bestFor: 'Relaxation, recovery, detox', consultRequired: 'No', priceFrom: '$55', frequency: '2–4x per week' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Cold Plunge', slug: 'cold-plunge', description: 'Cold water immersion therapy for inflammation reduction, mood, and resilience.', quickFacts: { duration: '10–15 min', bestFor: 'Inflammation, mood, focus', consultRequired: 'No', priceFrom: '$45', frequency: '2–4x per week' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Red Light Therapy', slug: 'red-light-therapy', description: 'Full-body red and near-infrared light therapy for skin, recovery, and cellular energy.', quickFacts: { duration: '15–20 min', bestFor: 'Skin, recovery, wellness', consultRequired: 'No', priceFrom: '$35', frequency: '3–5x per week' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Compression Therapy', slug: 'compression-therapy', description: 'Pneumatic compression for circulation, lymphatic drainage, and muscle recovery.', quickFacts: { duration: '30 min', bestFor: 'Circulation, recovery', consultRequired: 'No', priceFrom: '$45', frequency: '2–3x per week' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
		],
	},
	{
		id: 'diagnostics',
		title: 'Diagnostics & Body Composition',
		description: 'Baseline testing, body scans, and progress tracking to guide your wellness plan.',
		services: [
			{ title: 'Body Composition Scan', slug: 'body-composition-scan-diag', description: 'InBody-style scan measuring muscle mass, body fat percentage, water balance, and metabolic rate.', quickFacts: { duration: '15–20 min', bestFor: 'Progress tracking', consultRequired: 'No', priceFrom: '$75', frequency: 'Monthly or quarterly' }, href: '/demos/premium-wellness-clinic/services/body-composition-scan', hasPage: true },
			{ title: 'Wellness Baseline', slug: 'wellness-baseline', description: 'Comprehensive wellness assessment with body scan, labs, and provider consultation.', quickFacts: { duration: '60–90 min', bestFor: 'New clients, health reset', consultRequired: 'Included', priceFrom: '$495', frequency: 'Annually or as needed' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Progress Tracking', slug: 'progress-tracking', description: 'Follow-up scans and lab reviews to measure changes and adjust your plan.', quickFacts: { duration: '30 min', bestFor: 'Ongoing optimization', consultRequired: 'No', priceFrom: '$95', frequency: 'Monthly or quarterly' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
		],
	},
	{
		id: 'functional',
		title: 'Functional Health',
		description: 'Provider-guided consultations, lab review, and personalized wellness planning.',
		services: [
			{ title: 'Wellness Consultation', slug: 'wellness-consultation', description: 'A comprehensive first visit to review your goals, health history, and build a personalized plan.', quickFacts: { duration: '45–60 min', bestFor: 'First-time clients, goal planning', consultRequired: 'This is the consultation', priceFrom: '$195', frequency: 'Initial + follow-ups' }, href: '/demos/premium-wellness-clinic/new-clients', hasPage: false },
			{ title: 'Lab Review', slug: 'lab-review', description: 'Detailed provider review and interpretation of lab results with clinical recommendations.', quickFacts: { duration: '30 min', bestFor: 'Lab interpretation, next steps', consultRequired: 'Recommended', priceFrom: '$150', frequency: 'As needed' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
			{ title: 'Personalized Health Plan', slug: 'health-plan', description: 'A written wellness plan combining diagnostics, services, and lifestyle guidance tailored to your goals.', quickFacts: { duration: '45 min consult', bestFor: 'Long-term wellness strategy', consultRequired: 'Yes', priceFrom: '$295', frequency: 'Quarterly review' }, href: '/demos/premium-wellness-clinic/services', hasPage: false },
		],
	},
];

export const signaturePrograms = [
	{ title: 'Energy Reset', forWho: 'People dealing with fatigue, brain fog, or burnout.', includes: 'IV Therapy, Vitamin Injections, Body Scan, Wellness Consultation', href: '/demos/premium-wellness-clinic/services' },
	{ title: 'Metabolic Momentum', forWho: 'People working on weight, metabolism, or body composition goals.', includes: 'Medical Weight Loss Consult, Body Scan, GLP-1 Evaluation, Monthly Follow-Ups', href: '/demos/premium-wellness-clinic/services' },
	{ title: 'Recovery Ritual', forWho: 'Athletes, active professionals, or anyone who needs better recovery.', includes: 'Contrast Therapy, Infrared Sauna, Cold Plunge, Compression, Red Light', href: '/demos/premium-wellness-clinic/services' },
	{ title: 'Hormone & Vitality Pathway', forWho: 'People experiencing fatigue, mood shifts, low libido, or metabolic changes.', includes: 'Full Hormone Panel, Provider Consult, Optimization Protocol, Quarterly Labs', href: '/demos/premium-wellness-clinic/services' },
	{ title: 'Longevity Baseline', forWho: 'People who want a clear picture of their current health and a plan forward.', includes: 'Body Scan, Comprehensive Labs, Wellness Consultation, Written Health Plan', href: '/demos/premium-wellness-clinic/services' },
];

export const providers = [
	{
		name: 'Dr. Elise Morgan, MD',
		role: 'Medical Director',
		specialties: 'Metabolic health, hormone optimization, medical weight loss, preventive medicine',
		bio: 'Board-certified in internal medicine with a focus on metabolic health and longevity. Dr. Morgan oversees all medical protocols and provider-guided wellness plans at Lumen.',
		initials: 'EM',
	},
	{
		name: 'Jordan Vale, FNP-C',
		role: 'Wellness & Hormone Care',
		specialties: 'Hormone optimization, peptide therapy, IV therapy, functional wellness',
		bio: 'A family nurse practitioner with a background in functional and regenerative health. Jordan works with clients on hormone balance, energy, and long-term vitality.',
		initials: 'JV',
	},
	{
		name: 'Mara Chen, RD',
		role: 'Metabolic Health & Lifestyle Coach',
		specialties: 'Nutrition, metabolic health, weight management, wellness planning',
		bio: 'A registered dietitian focused on metabolic health and sustainable lifestyle change. Mara helps clients build nutrition and wellness habits that support their clinical goals.',
		initials: 'MC',
	},
];

export const memberships = [
	{
		name: 'Recover',
		price: '$149/mo',
		bestFor: 'Recovery-focused clients who want regular access to sauna, cold plunge, contrast, red light, and compression.',
		includes: [
			'8 recovery therapy credits per month',
			'10% off IV therapy and vitamin injections',
			'1 body composition scan per quarter',
			'Priority scheduling',
		],
	},
	{
		name: 'Optimize',
		price: '$279/mo',
		bestFor: 'Clients who want IV therapy, body scans, vitamin support, and monthly wellness guidance.',
		includes: [
			'2 IV therapy sessions per month',
			'4 recovery therapy credits per month',
			'1 body composition scan per month',
			'1 wellness check-in per quarter',
			'15% off additional services',
			'Guest pass (1 per quarter)',
		],
	},
	{
		name: 'Longevity',
		price: '$495/mo',
		bestFor: 'Clients pursuing diagnostics, hormone care, metabolic health, and comprehensive provider-guided optimization.',
		includes: [
			'Monthly provider consultation',
			'Quarterly comprehensive labs',
			'2 IV therapy sessions per month',
			'Unlimited recovery therapy access',
			'Monthly body composition scan',
			'20% off additional services',
			'Priority booking and guest passes',
		],
	},
];

export const packages = [
	{ title: 'Weight Loss Starter', includes: 'Wellness Consultation + Body Scan + Medical Weight Loss Intake', price: '$495' },
	{ title: 'Recovery Reset', includes: '5-pack: Contrast Therapy + Sauna + Cold Plunge', price: '$349' },
	{ title: 'Energy Optimization', includes: '3 IV Therapy sessions + Vitamin B12 Injection', price: '$495' },
	{ title: 'Hormone Baseline', includes: 'Comprehensive Hormone Panel + Provider Consult + Follow-Up', price: '$595' },
	{ title: 'Body Scan + Wellness Review', includes: 'Body Composition Scan + 30-Min Provider Review', price: '$195' },
];

export const testimonials = [
	{ text: 'The consultation was the first time a provider actually sat with me, reviewed everything, and built a plan that made sense. No rushing, no generic advice.', author: 'Sarah M.', context: 'Wellness consultation client' },
	{ text: 'I came for weight loss and expected another diet pitch. Instead, I got labs, a body scan, and a provider who explained what was actually happening with my metabolism.', author: 'David R.', context: 'Medical weight loss client' },
	{ text: 'The contrast therapy has become part of my weekly routine. I sleep better, recover faster, and the staff makes the whole experience feel easy and calm.', author: 'Alex T.', context: 'Recovery membership member' },
	{ text: 'I was skeptical about IV therapy, but they explained exactly what was in the drip, why, and what I should realistically expect. That honesty made me trust them.', author: 'Maya L.', context: 'IV therapy client' },
	{ text: 'The body composition scan gave me real numbers instead of guessing. My provider used those numbers to adjust my plan. That level of detail made a huge difference.', author: 'Chris W.', context: 'Body composition and weight loss client' },
	{ text: 'I appreciate that they told me what required a consultation and what I could book directly. Everything felt transparent from the start.', author: 'Lauren K.', context: 'New client' },
];

export const resources = [
	{ title: 'What to Expect at Your First IV Therapy Visit', category: 'IV Therapy', href: '/demos/premium-wellness-clinic/resources' },
	{ title: 'Sauna vs Cold Plunge vs Contrast Therapy', category: 'Recovery & Performance', href: '/demos/premium-wellness-clinic/resources' },
	{ title: 'How Body Composition Scans Support Weight Loss', category: 'Body Composition', href: '/demos/premium-wellness-clinic/resources' },
	{ title: 'Is Medical Weight Loss Right for Me?', category: 'Weight & Metabolism', href: '/demos/premium-wellness-clinic/resources' },
	{ title: 'Which Wellness Services Require a Consultation?', category: 'New Client Guides', href: '/demos/premium-wellness-clinic/resources' },
	{ title: 'How Often Should You Use Recovery Therapies?', category: 'Recovery & Performance', href: '/demos/premium-wellness-clinic/resources' },
	{ title: 'What to Know Before Hormone Optimization', category: 'Hormones & Vitality', href: '/demos/premium-wellness-clinic/resources' },
	{ title: 'How Wellness Memberships Work', category: 'New Client Guides', href: '/demos/premium-wellness-clinic/resources' },
];

export const homepageFaqs = [
	{ q: 'Do I need to know which service I want before booking?', a: 'No. If you are unsure where to start, book a wellness consultation. Your provider will review your goals, health history, and any relevant labs, then recommend the right path.' },
	{ q: 'Which services require a consultation?', a: 'Medical weight loss, hormone optimization, GLP-1 support, testosterone therapy, and peptide therapy require a consultation, health history review, and potentially lab work before starting. Recovery therapies, IV therapy, vitamin injections, and body scans can typically be booked directly.' },
	{ q: 'Do you offer memberships?', a: 'Yes. We offer three membership tiers — Recover, Optimize, and Longevity — with monthly credits, priority booking, discounted services, and provider access. You do not need to be a member to visit.' },
	{ q: 'How soon can I book?', a: 'Most services can be scheduled within the same week. Consultation availability varies by provider.' },
	{ q: 'Are treatments medically supervised?', a: 'Services that involve prescriptions, injections, hormones, or medical protocols are overseen by licensed providers. Recovery therapies are administered by trained wellness staff under clinical guidelines.' },
	{ q: 'Do you show pricing?', a: 'Yes. Service pages include starting prices and common session pricing. Exact costs may vary based on your plan, labs, and provider recommendations.' },
	{ q: 'What should I expect at my first visit?', a: 'For consultations: a thorough goal review, health history, optional body scan or labs, and a provider-built plan. For direct-book services like IV therapy or recovery: a brief intake, your session, and aftercare guidance.' },
];
