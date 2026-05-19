// ── VANTAGE Men's Health — Centralized Demo Data ──

export const brand = {
	name: "VANTAGE Men's Health",
	tagline: "Hormone, sexual health, and performance medicine for men who want answers — not guesswork.",
	homeHref: '/demos/hormone-trt',
	location: '4820 Executive Drive, Suite 200, San Diego, CA 92121',
	locationShort: 'San Diego, CA',
	phone: '(858) 555-0247',
	email: 'consult@vantagemenshealth.com',
	hours: 'Monday–Friday 7am–6pm · Saturday 8am–1pm · Sunday Closed',
	disclaimer: 'This is a fictional demo website created by Future Solutions for portfolio presentation. VANTAGE Men\'s Health is not a real clinic. All provider names, testimonials, services, and pricing are entirely fictional. Content is illustrative and not a substitute for professional medical advice.',
} as const;

export const navItems = [
	{ label: 'Problems', href: '/demos/hormone-trt#problems' },
	{ label: 'Treatments', href: '/demos/hormone-trt#treatments' },
	{ label: 'Game Plan', href: '/demos/hormone-trt/how-it-works' },
	{ label: 'Pricing', href: '/demos/hormone-trt/pricing' },
	{ label: 'Assessment', href: '/demos/hormone-trt/assessment' },
];

export const footerTreatments = [
	'Testosterone Optimization',
	'ED & Sexual Wellness',
	'Medical Weight Loss',
	'Peptide Therapy',
	'Advanced Lab Testing',
	'Longevity Medicine',
];

export const footerConditions = [
	'Low Testosterone',
	'Erectile Dysfunction',
	'Low Energy & Fatigue',
	'Weight Gain & Metabolism',
	'Brain Fog & Mood',
	'Poor Recovery',
];

export const footerCompany = [
	{ label: 'How It Works', href: '/demos/hormone-trt/how-it-works' },
	{ label: 'Pricing', href: '/demos/hormone-trt/pricing' },
	{ label: 'Providers', href: '/demos/hormone-trt#providers' },
	{ label: 'FAQ', href: '/demos/hormone-trt#faq' },
	{ label: 'Book Consultation', href: '/demos/hormone-trt/book-consultation' },
	{ label: 'Take Assessment', href: '/demos/hormone-trt/assessment' },
];

export const performanceStandard = [
	{ num: '01', title: 'Test First', description: 'Labs before any recommendation. Not assumptions.' },
	{ num: '02', title: 'Prescribe Carefully', description: 'Treatment only when data supports it.' },
	{ num: '03', title: 'Track Progress', description: 'Quarterly labs. Ongoing monitoring.' },
	{ num: '04', title: 'Adjust Over Time', description: 'Protocols evolve with your results.' },
];

export const performanceBreakdown = [
	{ signal: 'Energy', issue: 'Persistent fatigue, afternoon crashes, low motivation despite adequate sleep.', pathway: 'Hormone & metabolic evaluation', href: '/demos/hormone-trt/testosterone-optimization' },
	{ signal: 'Sex Drive', issue: 'Reduced libido, erectile difficulty, performance anxiety, confidence changes.', pathway: 'Sexual health evaluation', href: '/demos/hormone-trt/ed-sexual-wellness' },
	{ signal: 'Strength & Recovery', issue: 'Muscle loss, slow recovery, diminishing returns from consistent training.', pathway: 'Hormone & peptide evaluation', href: '/demos/hormone-trt/testosterone-optimization' },
	{ signal: 'Weight', issue: 'Stubborn belly fat, weight gain despite discipline, metabolic resistance.', pathway: 'Metabolic & GLP-1 evaluation', href: '/demos/hormone-trt/medical-weight-loss' },
	{ signal: 'Focus', issue: 'Brain fog, poor concentration, difficulty recalling words, mental fatigue.', pathway: 'Comprehensive lab panel', href: '/demos/hormone-trt/how-it-works' },
	{ signal: 'Sleep', issue: 'Difficulty staying asleep, waking unrefreshed, poor sleep quality.', pathway: 'Hormone & thyroid evaluation', href: '/demos/hormone-trt/how-it-works' },
];

export const gamePlanTracks = [
	{
		num: '01',
		title: 'Energy Reset',
		signs: ['Chronic fatigue', 'Brain fog', 'Poor sleep', 'Low motivation'],
		evaluates: ['Testosterone & Free T', 'Thyroid panel', 'Metabolic markers', 'Inflammation'],
		treatments: ['Hormone optimization', 'Sleep support', 'Recovery protocols'],
		firstStep: 'Start with assessment + labs',
		href: '/demos/hormone-trt/testosterone-optimization',
	},
	{
		num: '02',
		title: 'Sexual Performance',
		signs: ['Erectile difficulty', 'Low libido', 'Performance anxiety', 'Reduced confidence'],
		evaluates: ['Testosterone & estradiol', 'Vascular markers', 'SHBG', 'Metabolic panel'],
		treatments: ['ED treatment', 'Hormone optimization', 'Provider-guided care'],
		firstStep: 'Private assessment + labs',
		href: '/demos/hormone-trt/ed-sexual-wellness',
	},
	{
		num: '03',
		title: 'Body Composition',
		signs: ['Stubborn weight gain', 'Belly fat', 'Muscle loss', 'Metabolic plateau'],
		evaluates: ['Insulin & A1C', 'Hormones', 'Thyroid', 'Inflammation'],
		treatments: ['Medical weight loss', 'GLP-1 evaluation', 'Hormone support'],
		firstStep: 'Metabolic assessment + labs',
		href: '/demos/hormone-trt/medical-weight-loss',
	},
	{
		num: '04',
		title: 'Longevity & Recovery',
		signs: ['Proactive optimization', 'Slow recovery', 'Aging concerns', 'Prevention focus'],
		evaluates: ['Full biomarker panel', 'Hormones', 'Recovery markers', 'Nutrient status'],
		treatments: ['Peptides', 'NAD+', 'Biomarker tracking', 'Age management'],
		firstStep: 'Comprehensive baseline labs',
		href: '/demos/hormone-trt/how-it-works',
	},
];

export const gameplan = [
	{ step: '01', label: 'Assessment', description: 'Private 2-minute questionnaire — symptoms, goals, history.' },
	{ step: '02', label: 'Labs', description: 'Comprehensive bloodwork — hormones, metabolic, thyroid, lipids.' },
	{ step: '03', label: 'Provider Review', description: 'Your provider explains what the numbers mean.' },
	{ step: '04', label: 'Treatment Plan', description: 'A protocol built around your data and goals.' },
	{ step: '05', label: 'Follow-Up', description: 'Check-ins, adjustments, and ongoing support.' },
	{ step: '06', label: 'Optimization', description: 'Quarterly labs and refinement over time.' },
];

export const treatmentStack = [
	{ category: 'Hormone Performance', items: [
		{ title: 'Testosterone Optimization', href: '/demos/hormone-trt/testosterone-optimization' },
		{ title: 'Hormone Panel & Monitoring', href: '/demos/hormone-trt/how-it-works' },
	]},
	{ category: 'Sexual Health', items: [
		{ title: 'ED Treatment', href: '/demos/hormone-trt/ed-sexual-wellness' },
		{ title: 'Libido & Performance', href: '/demos/hormone-trt/ed-sexual-wellness' },
	]},
	{ category: 'Metabolic Health', items: [
		{ title: 'Medical Weight Loss', href: '/demos/hormone-trt/medical-weight-loss' },
		{ title: 'GLP-1 Evaluation', href: '/demos/hormone-trt/medical-weight-loss' },
	]},
	{ category: 'Recovery & Longevity', items: [
		{ title: 'Peptide Protocols', href: '/demos/hormone-trt/how-it-works' },
		{ title: 'NAD+ & Vitamin Support', href: '/demos/hormone-trt/how-it-works' },
		{ title: 'Hair Loss Support', href: '/demos/hormone-trt/how-it-works' },
		{ title: 'Longevity Medicine', href: '/demos/hormone-trt/how-it-works' },
	]},
];

export const labCategories = [
	{ name: 'Testosterone / Free T', group: 'Hormones' },
	{ name: 'Estradiol / SHBG', group: 'Hormones' },
	{ name: 'CBC', group: 'Blood' },
	{ name: 'Lipids', group: 'Metabolic' },
	{ name: 'A1C / Insulin', group: 'Metabolic' },
	{ name: 'Thyroid (TSH, T3, T4)', group: 'Thyroid' },
	{ name: 'Liver / Kidney', group: 'Organ' },
	{ name: 'CRP / Inflammation', group: 'Recovery' },
];

export const providers = [
	{
		name: 'Dr. Marcus Hale, MD',
		role: 'Medical Director',
		initials: 'MH',
		credentials: 'Board-certified Internal Medicine · Endocrinology Fellowship',
		specialties: ['Testosterone optimization', 'Metabolic health', 'Longevity medicine', 'Male sexual health'],
		bio: 'Founded VANTAGE to provide men with thorough, lab-based evaluations and personalized care plans that most traditional practices cannot deliver.',
	},
	{
		name: 'Ryan Caldwell, PA-C',
		role: 'Physician Assistant',
		initials: 'RC',
		credentials: 'NCCPA Certified · Men\'s Health & Performance Medicine',
		specialties: ['Medical weight loss', 'GLP-1 protocols', 'Body composition', 'Peptide therapy'],
		bio: 'Focused on weight management, body composition optimization, and helping patients build sustainable, medically guided performance plans.',
	},
];

export const pricingTiers = [
	{
		name: 'Initial Evaluation',
		tagline: 'For new patients who want answers.',
		price: 'Starting at $295',
		includes: ['Private consultation (45–60 min)', 'Comprehensive lab panel', 'Goal and symptom review', 'Treatment recommendations', 'Follow-up plan outline'],
		cta: 'Book Your Evaluation',
		featured: false,
	},
	{
		name: 'Optimization Membership',
		tagline: 'For ongoing hormone and performance care.',
		price: 'Starting at $199/mo',
		includes: ['Follow-up visits (in-person or telehealth)', 'Lab monitoring (quarterly)', 'Plan adjustments', 'Provider messaging', 'Priority scheduling'],
		cta: 'Learn More',
		featured: true,
	},
	{
		name: 'Advanced Protocols',
		tagline: 'For patients adding specific treatments.',
		price: 'Pricing after evaluation',
		includes: ['ED treatment protocols', 'Medical weight loss / GLP-1', 'Peptide protocols', 'NAD+ / vitamin therapy', 'Hair loss support'],
		cta: 'Discuss With Provider',
		featured: false,
	},
];

export const patientWins = [
	{ num: '01', concern: 'Low energy + poor recovery', result: 'Clearer plan, better consistency, ongoing monitoring', quote: 'I finally understood what my labs meant and why I had been feeling off for two years.', author: 'Patient, age 42' },
	{ num: '02', concern: 'Uncertain about TRT', result: 'Proper evaluation, no-pressure consultation, data-driven decision', quote: 'The process felt private and professional. No pressure, no sales pitch — just a clear plan based on my results.', author: 'Patient, age 51' },
	{ num: '03', concern: 'Weight + low drive', result: 'Structured plan addressing hormones and metabolism together', quote: 'I had more energy, better sleep, and consistency after getting a real plan instead of guessing.', author: 'Patient, age 38' },
	{ num: '04', concern: 'ED + confidence', result: 'Private evaluation, labs-first approach, provider-led care', quote: 'I appreciated that they did not push treatment before testing. They explained what the numbers meant and let me decide.', author: 'Patient, age 46' },
];

export const faqs = [
	{ q: 'Do I need labs before starting treatment?', a: 'Yes. Lab testing is required before any treatment begins. Your provider uses lab results alongside your symptoms and health history to determine whether treatment is appropriate and to establish a safe baseline for monitoring.', group: 'Assessment' },
	{ q: 'Is TRT right for every man with symptoms?', a: 'No. Symptoms like fatigue, low libido, and weight gain can have many causes. Lab testing helps identify whether hormone levels are contributing. Your provider will only recommend testosterone optimization if your labs, symptoms, and health history support it.', group: 'TRT' },
	{ q: 'What if I want to preserve fertility?', a: 'Fertility preservation is discussed before any hormone protocol begins. Your provider will review options including HCG and other supportive therapies if fertility is a priority. This is a routine part of responsible TRT management.', group: 'Fertility' },
	{ q: 'Is ED treatment private?', a: 'Yes. All consultations, prescriptions, and follow-ups are handled privately between you and your provider. Your sexual health care is treated with the same discretion as any other medical concern.', group: 'ED' },
	{ q: 'Do you offer telehealth?', a: 'Yes. Most follow-up visits, medication adjustments, and lab reviews can be conducted via secure telehealth. Initial evaluations may require an in-person visit depending on your location and treatment needs.', group: 'Telehealth' },
	{ q: 'How often are labs monitored?', a: 'Typically every 90 days during the first year of treatment, then every 6–12 months once stable. Your provider adjusts the monitoring frequency based on your protocol and response.', group: 'Assessment' },
	{ q: 'What does membership include?', a: 'The Optimization Membership includes regular follow-up visits, quarterly lab monitoring, treatment adjustments, provider messaging, and priority scheduling. Medications and labs are billed separately and explained before treatment.', group: 'Cost' },
	{ q: 'What if I am not a candidate?', a: 'Not every patient qualifies for every treatment. If your labs and evaluation do not support a specific protocol, your provider will explain why, discuss alternatives, and refer you if needed. The goal is appropriate care, not maximum prescriptions.', group: 'Assessment' },
];
