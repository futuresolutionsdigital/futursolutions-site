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

export const announcement = 'Now accepting new patients · Private telehealth + in-person evaluations available';

export const navItems = [
	{ label: 'Problems', href: '/demos/hormone-trt#conditions' },
	{ label: 'Treatments', href: '/demos/hormone-trt#treatments' },
	{ label: 'Process', href: '/demos/hormone-trt/how-it-works' },
	{ label: 'Pricing', href: '/demos/hormone-trt/pricing' },
	{ label: 'FAQ', href: '/demos/hormone-trt#faq' },
	{ label: 'Providers', href: '/demos/hormone-trt#providers' },
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
	{ label: 'About', href: '/demos/hormone-trt#providers' },
	{ label: 'FAQ', href: '/demos/hormone-trt#faq' },
	{ label: 'Book Consultation', href: '/demos/hormone-trt/book-consultation' },
	{ label: 'Take Assessment', href: '/demos/hormone-trt/assessment' },
];

export const trustBar = [
	'Licensed medical providers',
	'Advanced lab testing',
	'Private sexual health care',
	'Personalized treatment plans',
	'In-person + telehealth options',
];

export const symptoms = [
	{ title: 'Low energy', description: 'Persistent fatigue that sleep and caffeine can\'t fix — even when your schedule hasn\'t changed.' },
	{ title: 'Low libido', description: 'Reduced interest in intimacy that feels out of character or disconnected from your relationship.' },
	{ title: 'Erectile dysfunction', description: 'Difficulty achieving or maintaining erections — a medical issue, not a personal failure.' },
	{ title: 'Brain fog', description: 'Trouble focusing, recalling words, or staying sharp at work — beyond normal distraction.' },
	{ title: 'Stubborn weight gain', description: 'Gaining body fat despite training and dietary discipline — especially around the midsection.' },
	{ title: 'Poor workout recovery', description: 'Slower recovery, reduced strength, and diminishing returns from consistent exercise.' },
	{ title: 'Mood changes', description: 'Irritability, low motivation, or a subtle but persistent feeling that something is off.' },
	{ title: 'Sleep issues', description: 'Poor sleep quality, difficulty staying asleep, or waking up unrefreshed despite enough hours.' },
];

export const pathways = [
	{
		title: 'Energy & Drive',
		description: 'For fatigue, low motivation, brain fog, poor sleep, and burnout.',
		services: ['Testosterone evaluation', 'Hormone optimization', 'Advanced labs', 'Sleep & recovery support'],
		href: '/demos/hormone-trt/testosterone-optimization',
	},
	{
		title: 'Sexual Health',
		description: 'For ED, low libido, performance anxiety, and confidence.',
		services: ['ED treatment', 'Testosterone evaluation', 'Sexual wellness consults', 'Discreet provider-led care'],
		href: '/demos/hormone-trt/ed-sexual-wellness',
	},
	{
		title: 'Body Composition',
		description: 'For weight gain, belly fat, muscle loss, and poor recovery.',
		services: ['Medical weight loss', 'GLP-1 evaluation', 'Body composition support', 'Hormone evaluation'],
		href: '/demos/hormone-trt/medical-weight-loss',
	},
	{
		title: 'Longevity & Performance',
		description: 'For men who want proactive health optimization — not reactive sick care.',
		services: ['Biomarker testing', 'Peptide protocols', 'NAD+ therapy', 'Age-management care'],
		href: '/demos/hormone-trt/how-it-works',
	},
];

export const howItWorks = [
	{ step: '01', title: 'Take the assessment', description: 'A private 2-minute questionnaire about your symptoms, goals, and health history.' },
	{ step: '02', title: 'Complete labs', description: 'Comprehensive bloodwork ordered by your provider — at a local lab or in our clinic.' },
	{ step: '03', title: 'Meet with a provider', description: 'A private consultation to review your results, discuss options, and answer questions.' },
	{ step: '04', title: 'Review your personalized plan', description: 'Your provider builds a treatment plan grounded in your labs, symptoms, and goals.' },
	{ step: '05', title: 'Optimize over time', description: 'Ongoing monitoring, lab follow-ups, and plan adjustments to keep your care on track.' },
];

export const treatments = [
	{ title: 'Testosterone Optimization', description: 'Lab-guided testosterone replacement and optimization for men with clinically low or suboptimal levels.', bestFor: 'Fatigue, low drive, mood changes, body composition', href: '/demos/hormone-trt/testosterone-optimization' },
	{ title: 'ED & Sexual Wellness', description: 'Private, provider-led treatment for erectile dysfunction, performance concerns, and sexual health.', bestFor: 'ED, libido, confidence, intimacy', href: '/demos/hormone-trt/ed-sexual-wellness' },
	{ title: 'Medical Weight Loss', description: 'Structured weight management with labs, provider oversight, GLP-1 evaluation, and metabolic support.', bestFor: 'Weight gain, belly fat, metabolic health', href: '/demos/hormone-trt/medical-weight-loss' },
	{ title: 'Peptide Therapy', description: 'Targeted peptide protocols for recovery, body composition, sleep, and cellular health.', bestFor: 'Recovery, sleep, body composition, vitality', href: '/demos/hormone-trt/how-it-works' },
	{ title: 'Advanced Lab Testing', description: 'Comprehensive panels covering hormones, metabolic markers, thyroid, lipids, inflammation, and nutrient status.', bestFor: 'Baseline assessment, monitoring, optimization', href: '/demos/hormone-trt/how-it-works' },
	{ title: 'Hair Loss Support', description: 'Provider-guided evaluation and treatment options for male pattern hair loss and thinning.', bestFor: 'Hair thinning, prevention, treatment options', href: '/demos/hormone-trt/how-it-works' },
	{ title: 'Vitamin & NAD+ Therapy', description: 'IV and injection-based nutrient delivery for energy, recovery, immune support, and cellular health.', bestFor: 'Energy, recovery, immune health, longevity', href: '/demos/hormone-trt/how-it-works' },
	{ title: 'Longevity Medicine', description: 'Proactive health optimization through biomarker tracking, preventive labs, and age-management protocols.', bestFor: 'Prevention, optimization, long-term vitality', href: '/demos/hormone-trt/how-it-works' },
];

export const labCategories = [
	'Hormones (Testosterone, Free T, Estradiol, SHBG, DHEA)',
	'Metabolic Health (Fasting glucose, HbA1c, Insulin)',
	'Thyroid Markers (TSH, Free T3, Free T4)',
	'Lipids (Total cholesterol, LDL, HDL, Triglycerides)',
	'Blood Count (CBC with differential)',
	'Liver & Kidney (AST, ALT, BUN, Creatinine, GFR)',
	'Inflammation & Recovery (CRP, Homocysteine, Ferritin)',
	'Nutrient Status (Vitamin D, B12, Magnesium, Zinc)',
];

export const providers = [
	{
		name: 'Dr. Marcus Hale, MD',
		role: 'Medical Director — Men\'s Health & Hormone Medicine',
		initials: 'MH',
		specialties: 'Testosterone optimization, metabolic health, longevity medicine, male sexual health',
		bio: 'Board-certified in internal medicine with a fellowship in endocrinology. Dr. Hale founded VANTAGE to provide men with the thorough, lab-based evaluations and personalized care plans that most traditional practices do not have time to deliver.',
	},
	{
		name: 'Ryan Caldwell, PA-C',
		role: 'Physician Assistant — Performance & Weight Management',
		initials: 'RC',
		specialties: 'Medical weight loss, GLP-1 protocols, body composition, peptide therapy',
		bio: 'Experienced in men\'s health and performance medicine. Ryan focuses on weight management, body composition optimization, and helping patients build sustainable, medically guided plans.',
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
		name: 'Advanced Add-Ons',
		tagline: 'For patients adding specific protocols.',
		price: 'Pricing after evaluation',
		includes: ['ED treatment protocols', 'Medical weight loss / GLP-1', 'Peptide protocols', 'NAD+ / vitamin therapy', 'Hair loss support'],
		cta: 'Discuss With Provider',
		featured: false,
	},
];

export const testimonials = [
	{ text: 'I finally understood what my labs meant and why I had been feeling off for two years.', author: 'Patient, age 42', context: 'Testosterone optimization' },
	{ text: 'The process felt private and professional. No pressure, no sales pitch — just a clear plan based on my results.', author: 'Patient, age 51', context: 'Initial evaluation' },
	{ text: 'I had more energy, better sleep, and consistency after getting a real plan instead of guessing.', author: 'Patient, age 38', context: 'Hormone & weight management' },
	{ text: 'I appreciated that they did not push treatment before testing. They explained what the numbers meant and let me decide.', author: 'Patient, age 46', context: 'ED & sexual wellness' },
];

export const symptomCategories = [
	{ category: 'Energy', items: ['Persistent fatigue', 'Afternoon crashes', 'Poor sleep quality', 'Low motivation'] },
	{ category: 'Sexual Health', items: ['Erectile difficulty', 'Low libido', 'Reduced performance', 'Confidence changes'] },
	{ category: 'Body', items: ['Stubborn weight gain', 'Muscle loss', 'Slow recovery', 'Belly fat accumulation'] },
	{ category: 'Mood & Focus', items: ['Brain fog', 'Irritability', 'Low drive', 'Poor concentration'] },
];

export const protocol = [
	{ step: '01', label: 'Intake', description: 'Private symptom assessment and health history review', status: 'active' },
	{ step: '02', label: 'Labs', description: 'Comprehensive bloodwork — hormones, metabolic, thyroid, lipids', status: 'pending' },
	{ step: '03', label: 'Review', description: 'Provider interprets results in context of your symptoms and goals', status: 'pending' },
	{ step: '04', label: 'Plan', description: 'Personalized protocol built around your data and objectives', status: 'pending' },
	{ step: '05', label: 'Monitor', description: 'Quarterly labs, follow-up visits, and plan adjustments', status: 'pending' },
	{ step: '06', label: 'Optimize', description: 'Ongoing refinement for sustained results over time', status: 'pending' },
];

export const treatmentMatrix = [
	{ category: 'Hormones', items: [
		{ title: 'Testosterone Optimization', href: '/demos/hormone-trt/testosterone-optimization' },
		{ title: 'Hormone Panel & Monitoring', href: '/demos/hormone-trt/how-it-works' },
	]},
	{ category: 'Sexual Health', items: [
		{ title: 'ED Treatment', href: '/demos/hormone-trt/ed-sexual-wellness' },
		{ title: 'Libido & Performance', href: '/demos/hormone-trt/ed-sexual-wellness' },
	]},
	{ category: 'Metabolic', items: [
		{ title: 'Medical Weight Loss', href: '/demos/hormone-trt/medical-weight-loss' },
		{ title: 'GLP-1 Evaluation', href: '/demos/hormone-trt/medical-weight-loss' },
	]},
	{ category: 'Recovery & Longevity', items: [
		{ title: 'Peptide Protocols', href: '/demos/hormone-trt/how-it-works' },
		{ title: 'NAD+ & Vitamin Therapy', href: '/demos/hormone-trt/how-it-works' },
		{ title: 'Hair Loss Support', href: '/demos/hormone-trt/how-it-works' },
		{ title: 'Longevity Medicine', href: '/demos/hormone-trt/how-it-works' },
	]},
];

export const pillars = [
	{ num: '01', title: 'Assess', description: 'Private symptom questionnaire and health history before any recommendation.' },
	{ num: '02', title: 'Test', description: 'Comprehensive labs — not a basic panel. Hormones, metabolic, thyroid, inflammation.' },
	{ num: '03', title: 'Prescribe Carefully', description: 'Treatment only when labs, symptoms, and history support it. Not everyone needs TRT.' },
	{ num: '04', title: 'Optimize Over Time', description: 'Ongoing monitoring, quarterly labs, and plan adjustments. This is not a one-visit clinic.' },
];

export const faqs = [
	{ q: 'Do I need labs before starting treatment?', a: 'Yes. Lab testing is required before any treatment begins. Your provider uses lab results alongside your symptoms and health history to determine whether treatment is appropriate and to establish a safe baseline for monitoring.' },
	{ q: 'Is TRT right for every man with symptoms?', a: 'No. Symptoms like fatigue, low libido, and weight gain can have many causes. Lab testing helps identify whether hormone levels are contributing. Your provider will only recommend testosterone optimization if your labs, symptoms, and health history support it.' },
	{ q: 'What if I want to preserve fertility?', a: 'Fertility preservation is discussed before any hormone protocol begins. Your provider will review options including HCG and other supportive therapies if fertility is a priority. This is a routine part of responsible TRT management.' },
	{ q: 'Is ED treatment private?', a: 'Yes. All consultations, prescriptions, and follow-ups are handled privately between you and your provider. Your sexual health care is treated with the same discretion as any other medical concern.' },
	{ q: 'Do you offer telehealth?', a: 'Yes. Most follow-up visits, medication adjustments, and lab reviews can be conducted via secure telehealth. Initial evaluations may require an in-person visit depending on your location and treatment needs.' },
	{ q: 'How often are labs monitored?', a: 'Typically every 90 days during the first year of treatment, then every 6–12 months once stable. Your provider adjusts the monitoring frequency based on your protocol and response.' },
	{ q: 'What does membership include?', a: 'The Optimization Membership includes regular follow-up visits, quarterly lab monitoring, treatment adjustments, provider messaging, and priority scheduling. Medications and labs are billed separately and explained before treatment.' },
	{ q: 'What if I am not a candidate?', a: 'Not every patient qualifies for every treatment. If your labs and evaluation do not support a specific protocol, your provider will explain why, discuss alternatives, and refer you if needed. The goal is appropriate care, not maximum prescriptions.' },
];
