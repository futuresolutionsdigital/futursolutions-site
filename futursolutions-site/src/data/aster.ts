// ── Aster Private Health — Centralized Demo Data ──

export const brand = {
	name: 'Aster Private Health',
	tagline: 'Private primary care with longer visits and a provider who knows your name.',
	homeHref: '/demos/solo-practice',
	provider: 'Dr. Elena Marrow, FNP-C',
	location: 'Temecula, CA',
	locationLine: 'Private Primary Care & Wellness · Temecula, CA',
	availability: 'In-person and telehealth appointments available',
	disclaimer: 'This is a fictional demo website created by FutureSolutions for portfolio presentation. Aster Private Health is not a real practice.',
} as const;

export const announcement = 'Now accepting new patients — book a 60–75 minute consultation.';

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
	lead: 'Longer appointments. A provider who reviews your history, labs, and concerns before recommending a plan. Direct-pay pricing you understand before you book.',
	primaryCta: { text: 'Book a Consultation', href: '/demos/solo-practice/new-patients' },
	secondaryCta: { text: 'Learn How It Works', href: '/demos/solo-practice/how-it-works' },
	trustStrip: [
		'Board-certified provider',
		'Longer appointment times',
		'Transparent pricing',
		'In-person + telehealth care',
	],
} as const;

export const patientFitCards = [
	{ text: 'You leave appointments feeling rushed and unheard' },
	{ text: 'You see a different provider every time and have to re-explain your history' },
	{ text: 'You have questions about your labs, medications, or symptoms that never get fully answered' },
	{ text: 'You are tired of surprise bills and insurance-driven time limits' },
	{ text: 'You want a provider who helps you stay well, not just treats you when something is wrong' },
	{ text: 'You want a realistic plan with clear next steps, not a generic handout' },
];

export const careModelSteps = [
	{ step: '01', title: 'Book a consultation', description: 'Schedule a 60–75 minute New Patient Consultation. Come with your questions, concerns, and any recent labs or records you have.' },
	{ step: '02', title: 'Get a thorough review', description: 'Your provider looks at symptoms, medications, lab history, lifestyle factors, and prior care — not just the reason for today\'s visit.' },
	{ step: '03', title: 'Leave with a plan', description: 'You receive a written care plan with prioritized recommendations, any lab orders, and a clear follow-up timeline.' },
	{ step: '04', title: 'Follow up on your terms', description: 'Return for follow-up visits, lab reviews, or ongoing membership care. Members can message their provider between visits.' },
];

export const provider = {
	name: 'Dr. Elena Marrow, FNP-C',
	title: 'Board-Certified Family Nurse Practitioner',
	initials: 'EM',
	bio: 'After more than a decade in traditional healthcare settings, she started Aster to offer the kind of visits she wished her patients could have had — unhurried, thorough, and focused on what actually matters to each person.',
	quote: 'Most of my patients do not need more specialists. They need one provider who has time to listen, review the full picture, and explain things clearly.',
	credentials: [
		'Board-Certified Family Nurse Practitioner',
		'12+ years in primary care, preventive health, and women\'s wellness',
		'Clinical focus: thyroid, metabolic health, hormone evaluation, and lifestyle medicine',
		'In-person and telehealth appointments · Temecula, CA',
	],
	cta: { text: 'Meet Your Provider', href: '/demos/solo-practice/about' },
} as const;

export const services = [
	{ title: 'Private Primary Care', description: 'Annual exams, sick visits, medication management, lab interpretation, and ongoing health monitoring — with visits long enough to actually address your questions.', bestFor: 'Patients who want one provider for their day-to-day health', href: '/demos/solo-practice/services/private-primary-care' },
	{ title: 'Preventive Health', description: 'Age-appropriate screenings, cardiovascular risk assessment, metabolic panels, and health planning based on your personal and family history.', bestFor: 'Patients who want to catch problems early', href: '/demos/solo-practice/new-patients' },
	{ title: 'Women\'s Wellness', description: 'Clinical support for perimenopause symptoms, hormonal shifts, menstrual concerns, and health planning for women in their 30s through 60s.', bestFor: 'Women experiencing hormonal or life-stage changes', href: '/demos/solo-practice/new-patients' },
	{ title: 'Hormone Support', description: 'Thyroid evaluation, adrenal assessment, and hormone panel review with clinical interpretation — not cookie-cutter protocols.', bestFor: 'Patients with unexplained fatigue, mood changes, or weight shifts', href: '/demos/solo-practice/new-patients' },
	{ title: 'Weight & Metabolic Health', description: 'Lab-based metabolic evaluation, nutrition guidance, and realistic lifestyle planning. No fads, no guaranteed outcomes — just clinical support.', bestFor: 'Patients who want a medical perspective on weight management', href: '/demos/solo-practice/new-patients' },
	{ title: 'Integrative Wellness', description: 'Thorough lab work and clinical evaluation for persistent symptoms like fatigue, digestive issues, or brain fog — looking at contributing factors that may have been overlooked.', bestFor: 'Patients with ongoing symptoms that have not been fully evaluated', href: '/demos/solo-practice/new-patients' },
	{ title: 'Mental Wellness Support', description: 'Screening for anxiety, depression, and stress-related symptoms. Coordination with therapists or psychiatrists when appropriate. This is not a standalone mental health practice.', bestFor: 'Patients who want mental health considered as part of their primary care', href: '/demos/solo-practice/new-patients' },
	{ title: 'Telehealth Visits', description: 'Virtual follow-ups for lab review, care plan check-ins, medication questions, and ongoing guidance — available for established patients.', bestFor: 'Established patients who prefer a virtual visit for follow-up', href: '/demos/solo-practice/new-patients' },
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
		description: 'Full health review, medical history, current concerns, and initial care plan',
		price: '$225',
		priceNote: 'Starting at',
	},
	{
		name: 'Follow-Up Visit',
		duration: '30–45 minutes',
		description: 'Lab results review, care plan updates, medication adjustments, and check-ins',
		price: '$125',
		priceNote: 'Starting at',
	},
	{
		name: 'Private Care Membership',
		duration: 'Ongoing relationship-based care',
		description: 'Dedicated provider relationship with longer visits, between-visit messaging, and coordinated follow-up',
		price: '$149',
		priceNote: 'Starting at',
		priceSuffix: '/month',
		featured: true,
	},
];

export const pricingNote = 'Aster does not bill insurance directly. HSA/FSA funds may be used when eligible. Superbills may be available for possible reimbursement — coverage depends on your plan.';

export const testimonials = [
	{ quote: 'My first visit was over an hour. She asked about my sleep, my stress, my medications — things no one had asked about in years. I left with three clear next steps instead of a vague "let\'s keep an eye on it."', attribution: 'Private care patient' },
	{ quote: 'I had been to three different providers in two years and no one could explain why my thyroid labs kept changing. Dr. Marrow sat down, walked me through every number, and actually made a plan.', attribution: 'New patient consultation' },
	{ quote: 'I was nervous about paying out of pocket, but the visit was more thorough than anything I\'d gotten through insurance. The plan was four things I could actually do — not a list of 15 supplements.', attribution: 'Membership patient' },
];

export const resources = [
	{ title: 'What to Expect at Your First Private Practice Visit', category: 'New Patients', excerpt: 'A step-by-step walkthrough of your first 60–75 minute consultation — from intake forms to leaving with a care plan.', href: '/demos/solo-practice/new-patients' },
	{ title: 'Cash-Pay Healthcare, Explained Simply', category: 'Pricing', excerpt: 'What "direct-pay" actually means, how it compares to insurance-based visits, and when HSA/FSA funds may apply.', href: '/demos/solo-practice/pricing' },
	{ title: 'How Longer Visits Change the Care Experience', category: 'Care Model', excerpt: 'What your provider can cover in 60 minutes that rarely fits into a 12-minute appointment — and why it matters for ongoing care.', href: '/demos/solo-practice/how-it-works' },
];

export const faqs = [
	{ question: 'Do you take insurance?', answer: 'No. Aster is a direct-pay practice — we do not bill insurance for office visits. This is what allows us to spend 60–75 minutes with new patients instead of 10–15. You may use HSA/FSA funds when eligible, and we can provide superbills you may submit to your insurer for possible reimbursement. Reimbursement is not guaranteed and depends on your plan.' },
	{ question: 'Can I use insurance for labs, imaging, or prescriptions?', answer: 'In most cases, yes. Labs and imaging are ordered through outside facilities that typically accept insurance. Prescriptions go to your pharmacy of choice, where your insurance applies as usual. Coverage for those services depends on your specific plan.' },
	{ question: 'Do you offer telehealth?', answer: 'Yes, for established patients. Telehealth is available for follow-up visits, lab reviews, and care plan check-ins. First visits are recommended in-person when possible so your provider can do a more thorough evaluation.' },
	{ question: 'What happens during the first visit?', answer: 'Your New Patient Consultation is 60–75 minutes. Your provider reviews your medical history, current medications, symptoms, relevant lab work, and lifestyle factors. You leave with a written care plan that includes prioritized next steps and a follow-up timeline.' },
	{ question: 'Is this a replacement for my primary care doctor?', answer: 'It can be. Many patients use Aster as their primary care provider. Others keep their existing PCP and come to Aster for more time, a second perspective, or focused support in a specific area. Either arrangement works.' },
	{ question: 'How do I know which service to book?', answer: 'Start with a New Patient Consultation. Your provider will help you determine which care areas are relevant during that visit. You do not need to pick the right service before your first appointment.' },
	{ question: 'Can I use HSA or FSA funds?', answer: 'Our services are generally eligible for HSA and FSA payment, but eligibility depends on your specific account and plan rules. We provide itemized receipts with the information typically needed for account processing.' },
	{ question: 'What if I need urgent or emergency care?', answer: 'Aster is not an urgent care or emergency facility. If you are experiencing a medical emergency, call 911 or go to your nearest emergency room. For non-emergency concerns between visits, membership patients can use secure messaging during business hours.' },
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
	'Integrative Wellness',
	'Telehealth Visits',
];
