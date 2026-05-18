// ── Aster Private Health — Centralized Demo Data ──

export const brand = {
	name: 'Aster Private Health',
	tagline: 'Personalized healthcare for patients who want more time, clarity, and continuity.',
	homeHref: '/demos/solo-practice',
	provider: 'Dr. Elena Marrow, FNP-C',
	location: 'Temecula, CA',
	locationLine: 'Private Primary Care & Wellness · Temecula, CA',
	availability: 'In-person and telehealth appointments available',
	disclaimer: 'This is a fictional demo website created by FutureSolutions for portfolio presentation. Aster Private Health is not a real practice.',
} as const;

export const announcement = 'Now accepting new patients for private primary care and wellness consultations.';

export const navItems = [
	{ label: 'About', href: '/demos/solo-practice/about' },
	{ label: 'Services', href: '/demos/solo-practice/services' },
	{ label: 'How It Works', href: '/demos/solo-practice/how-it-works' },
	{ label: 'Pricing', href: '/demos/solo-practice/pricing' },
	{ label: 'Resources', href: '/demos/solo-practice/resources' },
	{ label: 'New Patients', href: '/demos/solo-practice/new-patients' },
];

export const hero = {
	headline: 'Healthcare that gives you time to be heard.',
	lead: 'Personalized private care for patients who want longer visits, clearer answers, and a provider who understands the full picture of their health.',
	primaryCta: { text: 'Book a Consultation', href: '#pricing' },
	secondaryCta: { text: 'Learn How It Works', href: '#care-model' },
	trustStrip: [
		'Board-certified provider',
		'Longer appointment times',
		'Transparent pricing',
		'In-person + telehealth care',
	],
} as const;

export const patientFitCards = [
	{ text: 'You want longer visits and thoughtful follow-up' },
	{ text: 'You want a provider who knows your story' },
	{ text: 'You want help connecting symptoms, labs, and lifestyle' },
	{ text: 'You prefer transparent pricing over surprise billing' },
	{ text: 'You want prevention, not just reaction' },
	{ text: 'You want a care plan you can actually follow' },
];

export const careModelSteps = [
	{ step: '01', title: 'Start with a consultation', description: 'Share your health goals, history, concerns, and priorities.' },
	{ step: '02', title: 'Review the full picture', description: 'Your provider reviews symptoms, labs, lifestyle, medications, and care history.' },
	{ step: '03', title: 'Build your care plan', description: 'Receive a personalized plan with practical next steps and follow-up recommendations.' },
	{ step: '04', title: 'Stay supported', description: 'Continue with membership care, follow-up visits, secure messaging, and ongoing guidance.' },
];

export const provider = {
	name: 'Dr. Elena Marrow, FNP-C',
	title: 'Board-Certified Family Nurse Practitioner',
	initials: 'EM',
	bio: 'She founded Aster Private Health to give patients a calmer, more personal alternative to rushed appointments. Her approach combines clinical primary care, preventive health, lifestyle support, and thoughtful follow-up.',
	quote: 'My goal is to give patients the time, clarity, and partnership they often wish traditional healthcare had room for.',
	credentials: [
		'Board-Certified Family Nurse Practitioner',
		'12+ years in primary and preventive care',
		'Experience in women\'s health, metabolic health, and lifestyle medicine',
		'In-person and telehealth care',
	],
	cta: { text: 'Read Provider Story', href: '#care-model' },
} as const;

export const services = [
	{ title: 'Private Primary Care', description: 'Comprehensive primary care with longer visits, continuity, and a provider who knows your history.', bestFor: 'Patients who want a dedicated provider relationship', href: '#pricing' },
	{ title: 'Preventive Health', description: 'Proactive screenings, wellness assessments, and health planning tailored to your age, risk factors, and goals.', bestFor: 'Patients focused on long-term health', href: '#pricing' },
	{ title: 'Women\'s Wellness', description: 'Support for hormonal changes, reproductive health, perimenopause, and whole-person women\'s health.', bestFor: 'Women navigating health transitions', href: '#pricing' },
	{ title: 'Hormone Support', description: 'Evaluation and management of hormonal concerns including thyroid, adrenal, and sex hormone imbalances.', bestFor: 'Patients with fatigue, mood, or metabolic changes', href: '#pricing' },
	{ title: 'Weight & Metabolic Health', description: 'A clinical approach to sustainable weight management, metabolic testing, and lifestyle integration.', bestFor: 'Patients with weight resistance or metabolic concerns', href: '#pricing' },
	{ title: 'Functional Wellness', description: 'Root-cause investigation of chronic symptoms using advanced labs, nutrition, and lifestyle interventions.', bestFor: 'Patients seeking deeper answers', href: '#pricing' },
	{ title: 'Mental Wellness Support', description: 'Screening, support, and collaborative management for anxiety, mood, stress, and burnout.', bestFor: 'Patients who want mental health integrated into their care', href: '#pricing' },
	{ title: 'Telehealth Visits', description: 'Convenient virtual appointments for follow-ups, lab reviews, care coordination, and ongoing guidance.', bestFor: 'Patients who prefer remote access', href: '#pricing' },
];

export const conditions = [
	'Fatigue', 'Sleep issues', 'Stress and burnout', 'Hormone changes',
	'Weight resistance', 'Thyroid concerns', 'Digestive issues', 'Preventive care',
	'Perimenopause', 'Metabolic health', 'Brain fog', 'Anxiety and mood support',
];

export const pricingCards = [
	{
		name: 'New Patient Consultation',
		duration: '60–75 minutes',
		description: 'Comprehensive review, health goals, history, and first-step plan',
		price: '$225',
		priceNote: 'Starting at',
	},
	{
		name: 'Follow-Up Visit',
		duration: '30–45 minutes',
		description: 'Plan updates, lab review, medication support, and ongoing guidance',
		price: '$125',
		priceNote: 'Starting at',
	},
	{
		name: 'Private Care Membership',
		duration: 'Ongoing relationship-based care',
		description: 'Longer visits, secure messaging, care coordination, and continuity',
		price: '$149',
		priceNote: 'Starting at',
		priceSuffix: '/month',
		featured: true,
	},
];

export const pricingNote = 'Insurance is not billed directly. Patients may use HSA/FSA funds when eligible and can request superbills for possible reimbursement.';

export const testimonials = [
	{ quote: 'I finally felt heard. The visit wasn\'t rushed, and the care plan made sense for my actual life — not just a textbook.', attribution: 'Private care patient' },
	{ quote: 'I understood my labs and my options for the first time. No one had ever taken the time to explain things this clearly.', attribution: 'New patient consultation' },
	{ quote: 'The care plan felt realistic. It wasn\'t a list of 20 supplements — it was practical, prioritized, and easy to follow.', attribution: 'Membership patient' },
];

export const resources = [
	{ title: 'What to Expect at Your First Private Practice Visit', category: 'New Patients', excerpt: 'A clear guide to what happens during your initial consultation, what to bring, and how to prepare.', href: '#' },
	{ title: 'Cash-Pay Healthcare, Explained Simply', category: 'Pricing', excerpt: 'How direct-pay and membership-based care works, what it costs, and how it compares to insurance-based visits.', href: '#' },
	{ title: 'How Longer Visits Change the Care Experience', category: 'Care Model', excerpt: 'Why 60-minute appointments lead to better outcomes, stronger provider relationships, and more personalized care.', href: '#' },
];

export const faqs = [
	{ question: 'Do you take insurance?', answer: 'Aster Private Health is a direct-pay practice. Insurance is not billed directly, which allows us to offer longer visits and more personalized care. Patients may use HSA/FSA funds when eligible and can request superbills for possible reimbursement through their insurance.' },
	{ question: 'Can I use insurance for labs, imaging, or prescriptions?', answer: 'Yes. While office visits are direct-pay, labs and imaging are typically ordered through facilities that accept insurance. Prescriptions are sent to your pharmacy of choice where your insurance benefits apply as usual.' },
	{ question: 'Do you offer telehealth?', answer: 'Yes. Telehealth appointments are available for follow-up visits, lab reviews, care coordination, and ongoing guidance. Initial consultations are typically recommended in-person when possible.' },
	{ question: 'What happens during the first visit?', answer: 'Your initial consultation is 60–75 minutes. We review your health history, current concerns, medications, labs, lifestyle, and goals. You leave with a clear understanding of next steps and a care plan tailored to your situation.' },
	{ question: 'Is this a replacement for my primary care doctor?', answer: 'It can be. Many patients choose Aster Private Health as their primary care provider. Others use our services alongside their existing care team for specialized support in areas like hormones, weight, or functional wellness.' },
	{ question: 'How do I know which service to book?', answer: 'If you are a new patient, start with a New Patient Consultation. During that visit, we will determine which services and care pathways are the best fit for your goals and health needs.' },
	{ question: 'Can I use HSA or FSA funds?', answer: 'Yes. Our services are typically eligible for HSA and FSA payment. We provide detailed receipts that include the information needed for reimbursement or account processing.' },
	{ question: 'What if I need urgent or emergency care?', answer: 'Aster Private Health is not an urgent care or emergency facility. If you are experiencing a medical emergency, please call 911 or visit your nearest emergency room. For urgent non-emergency concerns, members can reach us through secure messaging during business hours.' },
];

export const footerNav = [
	{ label: 'About', href: '/demos/solo-practice/about' },
	{ label: 'Services', href: '/demos/solo-practice/services' },
	{ label: 'How It Works', href: '/demos/solo-practice/how-it-works' },
	{ label: 'Pricing', href: '/demos/solo-practice/pricing' },
	{ label: 'Resources', href: '/demos/solo-practice/resources' },
	{ label: 'New Patients', href: '/demos/solo-practice/new-patients' },
];

export const footerServices = [
	'Private Primary Care',
	'Preventive Health',
	'Women\'s Wellness',
	'Hormone Support',
	'Weight & Metabolic Health',
	'Telehealth Visits',
];
