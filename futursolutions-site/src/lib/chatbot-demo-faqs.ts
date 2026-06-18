/**
 * Per-demo concierge knowledge: realistic, operational "sample" requests a real
 * visitor/patient/member would ask (booking, billing, membership, account,
 * care, support), answered in-character as the brand's concierge. This feeds two
 * things:
 *   1. The demo system prompt (via buildConciergeFaqBlock) so the bot can answer
 *      these accurately and point to the right demo page.
 *   2. The widget's "Things you can ask" menu (via getDemoSuggestionGroups).
 *
 * Answer guidance is intentionally concrete but never invents specific prices —
 * billing/cost questions route to the demo's pricing/membership page.
 */

export interface ConciergeFaq {
	/** Grouping label shown in the suggestion menu. */
	category: string;
	/** Sample question (also used as a tappable suggestion chip). */
	q: string;
	/** Concise, in-character answer guidance for the model. */
	a: string;
	/** Primary demo page to point to (rendered as a tappable card). */
	path?: string;
}

export interface SuggestionGroup {
	category: string;
	questions: string[];
}

const FS_AUDIT = '/audit';

export const demoConciergeFaqs: Record<string, ConciergeFaq[]> = {
	'med-spa': [
		// Booking & visits
		{
			category: 'Booking & visits',
			q: 'How do I book a consultation?',
			a: 'Book through the consultation form on the contact page — pick your treatment interest and preferred times and the team confirms by text or email.',
			path: '/demos/med-spa/contact',
		},
		{
			category: 'Booking & visits',
			q: 'Can I reschedule or cancel my appointment?',
			a: 'Yes — reply to your confirmation text/email or use the contact page to request a new time; please give at least 24 hours notice when you can.',
			path: '/demos/med-spa/contact',
		},
		{
			category: 'Booking & visits',
			q: "What's your cancellation or no-show policy?",
			a: 'Consultations are easy to reschedule with 24 hours notice; late cancellations or no-shows on booked treatments may forfeit a deposit. The front desk can confirm specifics.',
			path: '/demos/med-spa/contact',
		},
		{
			category: 'Booking & visits',
			q: 'How should I prep for Botox, and what is the aftercare?',
			a: 'Generally avoid blood thinners and alcohol for 24h beforehand if your provider clears it; afterward stay upright and skip strenuous exercise and facials that day. Your provider reviews full prep and aftercare at the visit.',
			path: '/demos/med-spa/treatments/botox',
		},
		{
			category: 'Booking & visits',
			q: 'Do you offer virtual consultations?',
			a: 'Yes — request a virtual consult on the contact form and note you would prefer video; it is a great first step for treatment planning.',
			path: '/demos/med-spa/contact',
		},
		// Billing & payments
		{
			category: 'Billing & payments',
			q: 'How do I change or cancel my payment information?',
			a: 'Update the card on file from your account/billing profile, or ask the front desk to update it securely. Never share full card numbers over chat.',
			path: '/demos/med-spa/contact',
		},
		{
			category: 'Billing & payments',
			q: 'Can I get a receipt or itemized invoice?',
			a: 'Yes — receipts are emailed after each visit; ask the front desk for a copy or an itemized invoice anytime.',
			path: '/demos/med-spa/contact',
		},
		{
			category: 'Billing & payments',
			q: 'Do you offer financing or payment plans?',
			a: 'Memberships and packages help spread treatment costs, and financing partners may be available. See the membership page or ask the team for current options.',
			path: '/demos/med-spa/membership',
		},
		{
			category: 'Billing & payments',
			q: 'Do you take HSA or FSA cards?',
			a: 'Many medical-aesthetic services can be paid with HSA/FSA. Check the membership page or ask the front desk which services qualify.',
			path: '/demos/med-spa/membership',
		},
		{
			category: 'Billing & payments',
			q: 'Do you sell gift cards?',
			a: 'Yes — gift cards are available to purchase or redeem; the front desk can set that up for you.',
			path: '/demos/med-spa/contact',
		},
		// Membership & packages
		{
			category: 'Membership & packages',
			q: "What's included in a membership?",
			a: 'Memberships bundle recurring treatments, member pricing, and perks. The membership page breaks down each tier.',
			path: '/demos/med-spa/membership',
		},
		{
			category: 'Membership & packages',
			q: 'How do I cancel or pause my membership?',
			a: 'Manage your plan from your account or ask the front desk to pause or cancel; changes usually apply to the next billing cycle.',
			path: '/demos/med-spa/membership',
		},
		{
			category: 'Membership & packages',
			q: 'How do I use my package or membership credits?',
			a: 'Credits apply automatically at checkout for eligible treatments; the front desk can confirm your current balance.',
			path: '/demos/med-spa/membership',
		},
		// Services & care
		{
			category: 'Services & care',
			q: 'Which treatment is right for my concern?',
			a: 'Start from the concerns guide — choose what you would like to improve and it routes you to matching treatments; a consult confirms the plan.',
			path: '/demos/med-spa/concerns',
		},
		{
			category: 'Services & care',
			q: 'Am I a candidate for Botox?',
			a: 'Most healthy adults wanting to soften dynamic lines are candidates; pregnancy and certain conditions are exceptions. A provider confirms candidacy at your consult.',
			path: '/demos/med-spa/treatments/botox',
		},
		{
			category: 'Services & care',
			q: 'How long do results last and is there downtime?',
			a: 'It varies by treatment — Botox typically lasts 3-4 months with minimal downtime. The results and treatment pages outline what to expect.',
			path: '/demos/med-spa/results',
		},
		// About this demo
		{
			category: 'About this demo',
			q: 'Is this a real clinic?',
			a: 'No — Auréa is a fictional demo built by FutureSolutions to show what an aesthetic clinic site can do. Names, treatments, and results are illustrative.',
			path: '/templates/med-spa',
		},
		{
			category: 'About this demo',
			q: 'How was this site built?',
			a: 'It is a FutureSolutions Website Foundation — a premium, conversion-focused starting point customized per clinic. Here is the Foundation behind it.',
			path: '/templates/med-spa',
		},
		{
			category: 'About this demo',
			q: 'Can I get a site like this for my clinic?',
			a: 'Yes — start with a free snapshot and FutureSolutions can build the same kind of site plus the booking and follow-up system behind it.',
			path: FS_AUDIT,
		},
	],

	'solo-practice': [
		// Becoming a patient
		{
			category: 'Becoming a patient',
			q: 'How do I become a patient?',
			a: 'Start on the New Patients page — submit the inquiry form and the practice follows up to schedule a meet-and-greet or first visit.',
			path: '/demos/solo-practice/new-patients',
		},
		{
			category: 'Becoming a patient',
			q: 'What happens at the first visit?',
			a: 'Expect an unhurried intake: history review, your goals, and a care plan. The New Patients page has the full walkthrough and a prep checklist.',
			path: '/demos/solo-practice/new-patients',
		},
		{
			category: 'Becoming a patient',
			q: 'Are you accepting new patients or is there a waitlist?',
			a: 'The panel is intentionally small. If it is full, you can join a waitlist from the New Patients form and you will be notified when a spot opens.',
			path: '/demos/solo-practice/new-patients',
		},
		{
			category: 'Becoming a patient',
			q: 'Can I reschedule or cancel a visit?',
			a: 'Yes — message the practice or use the contact page; please give 24 hours notice when possible.',
			path: '/demos/solo-practice/contact',
		},
		// Billing & membership
		{
			category: 'Billing & membership',
			q: 'How do I update my card on file?',
			a: 'Update billing from the patient portal, or ask the office to update it securely. Do not share card numbers in chat.',
			path: '/demos/solo-practice/patient-portal',
		},
		{
			category: 'Billing & membership',
			q: 'How do I cancel or pause my membership?',
			a: 'Manage your membership from the portal or contact the office; changes typically take effect the next billing cycle.',
			path: '/demos/solo-practice/pricing',
		},
		{
			category: 'Billing & membership',
			q: 'Do you take insurance, and can I get a superbill?',
			a: 'This is a private-pay / direct primary care model. You can request a superbill to submit to your insurer for possible out-of-network reimbursement. The pricing page has details.',
			path: '/demos/solo-practice/pricing',
		},
		{
			category: 'Billing & membership',
			q: 'Can I use HSA or FSA?',
			a: 'Yes — membership and visit fees are commonly HSA/FSA eligible. The pricing page covers payment options.',
			path: '/demos/solo-practice/pricing',
		},
		{
			category: 'Billing & membership',
			q: "How does the monthly membership work and what's included?",
			a: 'A flat monthly fee covers defined primary-care access — visits, messaging, and more. The pricing page lists exactly what is included.',
			path: '/demos/solo-practice/pricing',
		},
		// Care & access
		{
			category: 'Care & access',
			q: 'How do I request a prescription refill?',
			a: 'Message the practice through the portal with your medication and pharmacy; refills are handled during business hours.',
			path: '/demos/solo-practice/patient-portal',
		},
		{
			category: 'Care & access',
			q: 'How do I message my provider, and what is the response time?',
			a: 'Use secure messaging in the patient portal; non-urgent replies usually come within one business day.',
			path: '/demos/solo-practice/patient-portal',
		},
		{
			category: 'Care & access',
			q: 'Do you offer telehealth?',
			a: 'Yes — many visits can be done by video. Request a telehealth visit when you book. The How It Works page explains the care model.',
			path: '/demos/solo-practice/how-it-works',
		},
		{
			category: 'Care & access',
			q: 'What should I do after hours or for an urgent issue?',
			a: 'For emergencies, call 911. For urgent non-emergencies, use the portal or the after-hours line listed on the contact page.',
			path: '/demos/solo-practice/contact',
		},
		// Account & records
		{
			category: 'Account & records',
			q: 'How do I log into the patient portal?',
			a: 'Use the portal link with the email you registered; first-time users get an invite to set a password.',
			path: '/demos/solo-practice/patient-portal',
		},
		{
			category: 'Account & records',
			q: 'How do I get or transfer my medical records?',
			a: 'Request records through the portal or office; with your consent we can send records to, or receive them from, prior providers.',
			path: '/demos/solo-practice/patient-portal',
		},
		// About this demo
		{
			category: 'About this demo',
			q: 'Is this a real practice?',
			a: 'No — Aster Private Health is a fictional FutureSolutions demo. The provider, pricing, and testimonials are illustrative.',
			path: '/templates/solo-practice',
		},
		{
			category: 'About this demo',
			q: 'How was this built?',
			a: 'It is a FutureSolutions Website Foundation for solo and DPC practices, customized per provider. Here is the Foundation.',
			path: '/templates/solo-practice',
		},
		{
			category: 'About this demo',
			q: 'Can I get a site like this?',
			a: 'Yes — grab a free snapshot and FutureSolutions can build your practice site plus the intake and CRM flow behind it.',
			path: FS_AUDIT,
		},
	],

	'premium-wellness-clinic': [
		// Booking & visits
		{
			category: 'Booking & visits',
			q: "Where do I start? I'm new here.",
			a: 'Begin on the Start Here page — it routes new clients by goal and points you to the right first step.',
			path: '/demos/premium-wellness-clinic/new-clients',
		},
		{
			category: 'Booking & visits',
			q: 'Can I walk in or do I need an appointment?',
			a: 'Some services take walk-ins when slots are open, but booking guarantees your time. Reserve on the contact page.',
			path: '/demos/premium-wellness-clinic/contact',
		},
		{
			category: 'Booking & visits',
			q: 'Can I reschedule or cancel?',
			a: 'Yes — use the contact page or your confirmation message; 24 hours notice is appreciated.',
			path: '/demos/premium-wellness-clinic/contact',
		},
		// Services & care
		{
			category: 'Services & care',
			q: 'Which service or program fits my goal?',
			a: 'Use goal-based navigation on the services hub — pick energy, recovery, weight, or hormones and it suggests the right service.',
			path: '/demos/premium-wellness-clinic/services',
		},
		{
			category: 'Services & care',
			q: 'What is in an IV therapy session and how often should I go?',
			a: 'Sessions are provider-guided drips matched to your goal; cadence ranges from weekly to monthly. See the IV therapy page for details.',
			path: '/demos/premium-wellness-clinic/services/iv-therapy',
		},
		{
			category: 'Services & care',
			q: 'Do I need a consult before medical weight loss or hormones?',
			a: 'Yes — these are medically supervised and start with a consultation and labs. The service pages explain the process.',
			path: '/demos/premium-wellness-clinic/services/medical-weight-loss',
		},
		// Billing & membership
		{
			category: 'Billing & membership',
			q: 'How do I change my payment method?',
			a: 'Update your card from your account/billing profile or ask the front desk. Keep full card numbers off chat.',
			path: '/demos/premium-wellness-clinic/memberships',
		},
		{
			category: 'Billing & membership',
			q: 'How do I freeze or cancel my membership?',
			a: 'Memberships can be paused or canceled from your account or via the front desk; changes apply the next cycle.',
			path: '/demos/premium-wellness-clinic/memberships',
		},
		{
			category: 'Billing & membership',
			q: 'What is included in each membership tier?',
			a: 'Tiers bundle monthly services, member pricing, and perks. Compare them on the memberships page.',
			path: '/demos/premium-wellness-clinic/memberships',
		},
		{
			category: 'Billing & membership',
			q: 'Do you offer packages or bundle pricing?',
			a: 'Yes — goal-based bundles group common services together. The memberships page outlines the options.',
			path: '/demos/premium-wellness-clinic/memberships',
		},
		{
			category: 'Billing & membership',
			q: 'Do you take HSA or FSA?',
			a: 'Many medical services qualify for HSA/FSA. Ask the front desk which of your services are eligible.',
			path: '/demos/premium-wellness-clinic/memberships',
		},
		// Account
		{
			category: 'Account',
			q: 'Can I get a receipt or fill out intake forms ahead of time?',
			a: 'Receipts are emailed after visits, and intake forms can be completed before you arrive — request them on the contact page.',
			path: '/demos/premium-wellness-clinic/contact',
		},
		// About this demo
		{
			category: 'About this demo',
			q: 'Is this real?',
			a: 'No — Lumen Health House is a fictional FutureSolutions demo. Providers, services, and pricing are illustrative.',
			path: '/templates/premium-wellness-clinic',
		},
		{
			category: 'About this demo',
			q: 'How was this built?',
			a: 'It is a FutureSolutions Website Foundation for multi-service wellness clinics, customized per clinic. Here is the Foundation.',
			path: '/templates/premium-wellness-clinic',
		},
		{
			category: 'About this demo',
			q: 'Can I get a site like this?',
			a: 'Yes — start with a free snapshot and FutureSolutions can build the same kind of site and Growth System for your clinic.',
			path: FS_AUDIT,
		},
	],

	'hormone-trt': [
		// Getting started
		{
			category: 'Getting started',
			q: 'How do I get started?',
			a: 'Take the short assessment — it captures your symptoms and goals, then routes you to the right next step.',
			path: '/demos/hormone-trt/assessment',
		},
		{
			category: 'Getting started',
			q: 'How does TRT work and what is the process?',
			a: 'Assessment, then labs, then provider review, then a personalized protocol with ongoing monitoring. The How It Works page lays out each step.',
			path: '/demos/hormone-trt/how-it-works',
		},
		{
			category: 'Getting started',
			q: 'Do I need labs first, and where do I get them drawn?',
			a: 'Yes — baseline labs guide treatment. You can use a local lab or partner draw site; specifics come after your assessment.',
			path: '/demos/hormone-trt/how-it-works',
		},
		{
			category: 'Getting started',
			q: 'Is this discreet? I have questions about ED.',
			a: 'Completely — ED and sexual wellness care is handled privately and without judgment. See the ED page or note it on your assessment.',
			path: '/demos/hormone-trt/ed-sexual-wellness',
		},
		{
			category: 'Getting started',
			q: 'Do you offer telehealth?',
			a: 'Yes — much of the program runs by telehealth with labs done locally. Note your preference at consultation.',
			path: '/demos/hormone-trt/how-it-works',
		},
		// Booking
		{
			category: 'Booking',
			q: 'How do I book a consultation?',
			a: 'Request a private consult on the booking page, after or instead of the assessment.',
			path: '/demos/hormone-trt/book-consultation',
		},
		{
			category: 'Booking',
			q: 'Can I reschedule or cancel?',
			a: 'Yes — use your confirmation message or the booking page; give 24 hours notice when possible.',
			path: '/demos/hormone-trt/book-consultation',
		},
		// Billing & membership
		{
			category: 'Billing & membership',
			q: 'How do I update or cancel my payment method?',
			a: 'Manage your card from your account/billing or ask the team. Do not send card details in chat.',
			path: '/demos/hormone-trt/pricing',
		},
		{
			category: 'Billing & membership',
			q: 'How do I cancel or pause my membership?',
			a: 'Optimization memberships can be paused or canceled from your account or via the team; changes apply the next cycle.',
			path: '/demos/hormone-trt/pricing',
		},
		{
			category: 'Billing & membership',
			q: 'What does it cost and what is included?',
			a: 'Pricing and membership tiers — covering labs, medication, and monitoring — are on the pricing page, with no surprise fees.',
			path: '/demos/hormone-trt/pricing',
		},
		// Care
		{
			category: 'Care',
			q: 'How do refills and ongoing optimization work?',
			a: 'Once you are on a protocol, refills and dose adjustments are managed with periodic labs and check-ins, included in your membership.',
			path: '/demos/hormone-trt/pricing',
		},
		// About this demo
		{
			category: 'About this demo',
			q: 'Is this real?',
			a: 'No — VANTAGE is a fictional FutureSolutions demo. Providers, labs, and pricing are illustrative.',
			path: '/templates/hormone-trt',
		},
		{
			category: 'About this demo',
			q: 'How was this built?',
			a: "It is a FutureSolutions Website Foundation for men's health and TRT clinics, customized per clinic. Here is the Foundation.",
			path: '/templates/hormone-trt',
		},
		{
			category: 'About this demo',
			q: 'Can I get a site like this?',
			a: 'Yes — start with a free snapshot and FutureSolutions can build the same assessment-to-consult system for your clinic.',
			path: FS_AUDIT,
		},
	],

	association: [
		// Membership
		{
			category: 'Membership',
			q: 'How do I join and what are the tiers?',
			a: 'Compare member tiers and benefits on the membership page, then submit the join form for your career stage.',
			path: '/demos/association/membership',
		},
		{
			category: 'Membership',
			q: 'How do I renew my membership?',
			a: 'Renew from the member portal or the membership page; you will get reminders before your term ends.',
			path: '/demos/association/membership',
		},
		{
			category: 'Membership',
			q: 'How do I update my member profile or contact info?',
			a: 'Sign into the member portal and edit your profile; changes save right away.',
			path: '/demos/association/portal',
		},
		{
			category: 'Membership',
			q: 'How do I cancel my membership or update billing?',
			a: 'Manage renewal, auto-pay, and billing from the portal, or contact the membership team.',
			path: '/demos/association/portal',
		},
		{
			category: 'Membership',
			q: 'Where do I find my dues invoice or receipt?',
			a: 'Invoices and receipts live in your portal billing history; the membership team can resend one if needed.',
			path: '/demos/association/portal',
		},
		// Events & CE
		{
			category: 'Events & CE',
			q: 'How do I register for the annual conference?',
			a: 'Register on the annual conference page — choose your tier and add CE sessions.',
			path: '/demos/association/events/annual-conference',
		},
		{
			category: 'Events & CE',
			q: 'Can I cancel or transfer my event registration?',
			a: 'Yes — registrations can be transferred or refunded per the event policy; request it through the events or contact page.',
			path: '/demos/association/events',
		},
		{
			category: 'Events & CE',
			q: 'How do I get my CE certificate?',
			a: 'CE certificates are issued in your member portal after you complete a course or session.',
			path: '/demos/association/portal',
		},
		// Career & chapters
		{
			category: 'Career & chapters',
			q: 'How do I post a job or find jobs?',
			a: 'Browse and filter roles in the career center; employers can post via the employer call-to-action there.',
			path: '/demos/association/career-center',
		},
		{
			category: 'Career & chapters',
			q: 'How do I get involved with my local chapter or volunteer?',
			a: "Find your chapter's events, leaders, and volunteer roles on the chapters page.",
			path: '/demos/association/chapters',
		},
		// Account
		{
			category: 'Account',
			q: 'How do I log into the member portal?',
			a: 'Use the portal link with your member email; first-time users set a password from the welcome invite.',
			path: '/demos/association/portal',
		},
		// About this demo
		{
			category: 'About this demo',
			q: 'Is this a real association?',
			a: 'No — Meridian Health Professionals Association is a fictional FutureSolutions demo. The organization, events, and data are illustrative.',
			path: '/templates/association',
		},
		{
			category: 'About this demo',
			q: 'How was this built?',
			a: 'It is a FutureSolutions Website Foundation for professional associations, customized per organization. Here is the Foundation.',
			path: '/templates/association',
		},
		{
			category: 'About this demo',
			q: 'Can we get a site like this?',
			a: 'Yes — start with a free snapshot and FutureSolutions can build the same membership, events, and resource system for your organization.',
			path: FS_AUDIT,
		},
	],
};

/** Formatted concierge FAQ block injected into the demo system prompt. */
export function buildConciergeFaqBlock(slug: string): string {
	const faqs = demoConciergeFaqs[slug];
	if (!faqs || faqs.length === 0) return '';

	const byCategory = new Map<string, ConciergeFaq[]>();
	for (const faq of faqs) {
		const list = byCategory.get(faq.category) ?? [];
		list.push(faq);
		byCategory.set(faq.category, list);
	}

	const sections: string[] = [];
	for (const [category, list] of byCategory) {
		const lines = list.map((faq) => {
			const pathPart = faq.path ? ` (point to: ${faq.path})` : '';
			return `- "${faq.q}" -> ${faq.a}${pathPart}`;
		});
		sections.push(`${category}\n${lines.join('\n')}`);
	}

	return sections.join('\n\n');
}

/** Grouped sample questions for the widget's "Things you can ask" menu. */
export function getDemoSuggestionGroups(slug: string): SuggestionGroup[] {
	const faqs = demoConciergeFaqs[slug];
	if (!faqs || faqs.length === 0) return [];

	const groups: SuggestionGroup[] = [];
	const indexByCategory = new Map<string, number>();
	for (const faq of faqs) {
		let idx = indexByCategory.get(faq.category);
		if (idx === undefined) {
			idx = groups.length;
			indexByCategory.set(faq.category, idx);
			groups.push({ category: faq.category, questions: [] });
		}
		groups[idx].questions.push(faq.q);
	}
	return groups;
}
