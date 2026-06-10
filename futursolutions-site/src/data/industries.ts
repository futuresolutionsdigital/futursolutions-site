export interface IndustryFAQ {
	question: string;
	answer: string;
}

export interface IndustryLink {
	label: string;
	href: string;
}

export interface Industry {
	slug: string;
	name: string;
	navLabel: string;
	lane: 'foundation' | 'custom' | 'growth' | 'audit' | 'care';
	eyebrow: string;
	cardSummary: string;
	heading: string;
	intro: string;
	painsHeading: string;
	pains: string[];
	approachHeading: string;
	approach: { title: string; text: string }[];
	priorities: string[];
	demo?: IndustryLink;
	relatedServices: IndustryLink[];
	faqs: IndustryFAQ[];
	metaTitle: string;
	metaDescription: string;
}

export const industries: Industry[] = [
	{
		slug: 'med-spas',
		name: 'Med Spas & Aesthetics',
		navLabel: 'Med Spas',
		lane: 'custom',
		eyebrow: 'Med Spas & Aesthetics',
		cardSummary:
			'Premium visual trust, clear treatment education, and booking prompts that turn browsers into consults.',
		heading: 'Websites that make a med spa feel as premium as the results.',
		intro:
			'Aesthetic patients buy with their eyes and their trust. Your website has to look as polished as your space, explain treatments clearly, and make booking effortless — across every device.',
		painsHeading: 'Where most med spa websites fall short.',
		pains: [
			'The design looks generic and undercuts a premium, high-touch brand.',
			'Treatments are listed without enough education to build confidence.',
			'Booking and consultation prompts are easy to miss or hard to reach.',
			'Before/after, pricing, and membership details are unclear or buried.',
		],
		approachHeading: 'How we build for med spas.',
		approach: [
			{
				title: 'Premium, trust-first design',
				text: 'A polished aesthetic that signals quality, with photography and proof that reflect the experience you deliver.',
			},
			{
				title: 'Treatment clarity',
				text: 'Dedicated pages that explain each treatment, who it\u2019s for, and what to expect — reducing hesitation before the consult.',
			},
			{
				title: 'Booking at every step',
				text: 'Repeated, obvious paths to book a consultation or appointment, wired into your scheduling and follow-up.',
			},
		],
		priorities: [
			'Treatment & service pages',
			'Membership / package clarity',
			'Consultation booking flow',
			'Local visibility for "near me" searches',
			'Follow-up for non-booked leads',
		],
		demo: { label: 'View the Med Spa demo', href: '/templates/med-spa' },
		relatedServices: [
			{ label: 'Website Foundations', href: '/services/template-setup' },
			{ label: 'Signature Custom Websites', href: '/services/custom-healthcare-websites' },
			{ label: 'Growth Systems', href: '/services/growth-systems' },
			{ label: 'Local Visibility', href: '/services/local-visibility' },
		],
		faqs: [
			{
				question: 'Can you match our brand and the premium feel of our space?',
				answer:
					'Yes. Whether you start from a Foundation or a custom build, we design around your brand so the site reflects the same quality patients experience in person.',
			},
			{
				question: 'Can the site handle memberships and packages?',
				answer:
					'We structure clear pages for memberships, packages, and pricing models so patients understand their options and self-select before they ever reach out.',
			},
			{
				question: 'Will it connect to our booking system?',
				answer:
					'In most cases, yes. We connect your consultation and booking flow to your scheduler and CRM so inquiries are captured and followed up — not lost in an inbox.',
			},
		],
		metaTitle: 'Med Spa Websites | FutureSolutions',
		metaDescription:
			'Premium med spa and aesthetics websites with treatment education, clear membership options, and booking flows that turn visitors into consultations.',
	},
	{
		slug: 'solo-practices',
		name: 'Solo & Private Practices',
		navLabel: 'Solo Practices',
		lane: 'foundation',
		eyebrow: 'Solo & Private Practices',
		cardSummary:
			'Personal credibility, clear services, and a simple inquiry path for independent providers.',
		heading: 'A credible online presence for independent providers.',
		intro:
			'When you are the practice, the website is your introduction. It should build personal trust, explain your services plainly, and give new patients an easy way to reach you.',
		painsHeading: 'What holds solo practice websites back.',
		pains: [
			'The provider\u2019s credibility and personal story aren\u2019t communicated well.',
			'Services and who they help aren\u2019t clearly explained.',
			'There\u2019s no simple, obvious way for new patients to inquire.',
			'The site feels dated, which makes the practice feel less established.',
		],
		approachHeading: 'How we build for solo practices.',
		approach: [
			{
				title: 'Personal credibility',
				text: 'Lead with your background, approach, and the patients you serve, so trust forms before the first call.',
			},
			{
				title: 'Clear, focused services',
				text: 'Plain-language service pages that help the right patients recognize they\u2019re in the right place.',
			},
			{
				title: 'A simple inquiry path',
				text: 'One obvious, low-friction way to get in touch or request an appointment, with confirmation and follow-up built in.',
			},
		],
		priorities: [
			'Provider story & credentials',
			'Core service pages',
			'New-patient inquiry flow',
			'Local visibility',
			'Fast, mobile-first experience',
		],
		demo: { label: 'View the Solo Practice demo', href: '/templates/solo-practice' },
		relatedServices: [
			{ label: 'Website Foundations', href: '/services/template-setup' },
			{ label: 'Local Visibility', href: '/services/local-visibility' },
			{ label: 'Growth Systems', href: '/services/growth-systems' },
			{ label: 'Care and Optimization', href: '/services/ongoing-optimization' },
		],
		faqs: [
			{
				question: 'I\u2019m a solo provider — is a full website overkill?',
				answer:
					'Not at all. A focused Website Foundation gives you a credible, professional presence without the cost or complexity of a large custom build, and it can grow with you.',
			},
			{
				question: 'How fast can I launch?',
				answer:
					'Starting from a Foundation is the fastest path to a strong site. We map a realistic timeline during the audit and strategy step so you know what to expect.',
			},
			{
				question: 'Can patients book or inquire directly?',
				answer:
					'Yes. We set up a simple inquiry or booking path connected to confirmation and follow-up, so no new-patient request slips through.',
			},
		],
		metaTitle: 'Solo & Private Practice Websites | FutureSolutions',
		metaDescription:
			'Professional websites for solo and private practices — personal credibility, clear services, and a simple new-patient inquiry path that builds trust online.',
	},
	{
		slug: 'wellness-functional-medicine',
		name: 'Wellness & Functional Medicine',
		navLabel: 'Wellness',
		lane: 'custom',
		eyebrow: 'Wellness & Functional Medicine',
		cardSummary:
			'Education-rich sites that explain complex, membership-based care and guide patients to consults.',
		heading: 'Help patients understand care that doesn\u2019t fit a simple box.',
		intro:
			'Wellness and functional medicine often involve memberships, programs, and a different model of care. Your website has to educate, build trust in your approach, and guide motivated patients toward the right starting point.',
		painsHeading: 'The challenge for wellness websites.',
		pains: [
			'The model of care (memberships, programs, panels) is hard to explain.',
			'Patients don\u2019t understand what to expect or how to begin.',
			'Services and pricing are complex and poorly structured online.',
			'There\u2019s no clear path from "interested" to "consultation booked."',
		],
		approachHeading: 'How we build for wellness & functional medicine.',
		approach: [
			{
				title: 'Education-first structure',
				text: 'Content that explains your philosophy, programs, and process so patients arrive at the consult already informed.',
			},
			{
				title: 'Clear program & membership pages',
				text: 'We make complex offerings legible — what\u2019s included, who it\u2019s for, and how to start.',
			},
			{
				title: 'Guided next steps',
				text: 'A clear path toward a consultation or membership inquiry, supported by follow-up that keeps motivated patients engaged.',
			},
		],
		priorities: [
			'Program & membership clarity',
			'Patient education content',
			'Consultation booking flow',
			'Local & condition-based visibility',
			'Nurture for longer decision cycles',
		],
		demo: { label: 'View the Wellness Clinic demo', href: '/templates/premium-wellness-clinic' },
		relatedServices: [
			{ label: 'Signature Custom Websites', href: '/services/custom-healthcare-websites' },
			{ label: 'Growth Systems', href: '/services/growth-systems' },
			{ label: 'Local Visibility', href: '/services/local-visibility' },
			{ label: 'Care and Optimization', href: '/services/ongoing-optimization' },
		],
		faqs: [
			{
				question: 'Our care model is complicated — can a website really explain it?',
				answer:
					'That\u2019s exactly where good structure earns its keep. We organize education, programs, and memberships so patients understand your approach and feel confident taking the next step.',
			},
			{
				question: 'Can you support membership and program enrollment?',
				answer:
					'We build clear pages for each program and membership tier and connect inquiries to a follow-up system, so interested patients aren\u2019t left to figure it out alone.',
			},
			{
				question: 'Do you handle the longer decision cycle these patients have?',
				answer:
					'Yes. A Growth System adds nurture and follow-up so motivated-but-not-ready patients stay engaged until they\u2019re ready to begin.',
			},
		],
		metaTitle: 'Wellness & Functional Medicine Websites | FutureSolutions',
		metaDescription:
			'Education-rich websites for wellness and functional medicine practices — clear programs and memberships, patient education, and guided consultation booking.',
	},
	{
		slug: 'hormone-trt-clinics',
		name: 'Hormone & TRT Clinics',
		navLabel: 'Hormone / TRT',
		lane: 'growth',
		eyebrow: 'Hormone & TRT Clinics',
		cardSummary:
			'Discreet, education-forward sites with strong qualification and follow-up for high-intent patients.',
		heading: 'Convert high-intent hormone and TRT patients with clarity and discretion.',
		intro:
			'Hormone and TRT patients are often motivated and ready — if they trust you. Your website needs to educate, qualify, and route patients into a smooth intake and follow-up process while handling sensitive topics with care.',
		painsHeading: 'What slows hormone & TRT websites down.',
		pains: [
			'The process (labs, consults, protocols) isn\u2019t explained clearly.',
			'Sensitive topics aren\u2019t handled with the right tone and discretion.',
			'High-intent inquiries aren\u2019t qualified or followed up consistently.',
			'There\u2019s no system to move a patient from inquiry to first appointment.',
		],
		approachHeading: 'How we build for hormone & TRT clinics.',
		approach: [
			{
				title: 'Education that builds confidence',
				text: 'Clear, discreet explanations of your process, labs, and protocols so patients feel informed before they reach out.',
			},
			{
				title: 'Qualification & intake',
				text: 'Forms and flows that gather the right information and route serious patients into a smooth intake process.',
			},
			{
				title: 'Consistent follow-up',
				text: 'A Growth System ensures every high-intent inquiry is captured, tracked, and followed up — not lost on a busy day.',
			},
		],
		priorities: [
			'Process & protocol education',
			'Qualification-focused intake forms',
			'Lead capture & CRM follow-up',
			'Discreet, trust-first design',
			'Local & search visibility',
		],
		demo: { label: 'View the Hormone / TRT demo', href: '/templates/hormone-trt' },
		relatedServices: [
			{ label: 'Growth Systems', href: '/services/growth-systems' },
			{ label: 'Signature Custom Websites', href: '/services/custom-healthcare-websites' },
			{ label: 'Local Visibility', href: '/services/local-visibility' },
			{ label: 'Website Foundations', href: '/services/template-setup' },
		],
		faqs: [
			{
				question: 'How do you handle sensitive subject matter?',
				answer:
					'With a discreet, professional tone and clear education. The goal is to make patients feel informed and respected, which is what builds the trust needed to book.',
			},
			{
				question: 'Can the site qualify leads before they reach my team?',
				answer:
					'Yes. We design intake forms and flows that gather key information up front, so your team spends time on serious, well-matched inquiries.',
			},
			{
				question: 'What happens to inquiries after they come in?',
				answer:
					'With a Growth System, every inquiry is captured into your CRM with follow-up and reminders, so high-intent patients are guided to their first appointment.',
			},
		],
		metaTitle: 'Hormone & TRT Clinic Websites | FutureSolutions',
		metaDescription:
			'Discreet, education-forward websites for hormone and TRT clinics with patient qualification, intake forms, and CRM follow-up that converts high-intent leads.',
	},
	{
		slug: 'healthcare-associations',
		name: 'Healthcare Associations',
		navLabel: 'Associations',
		lane: 'care',
		eyebrow: 'Healthcare Associations',
		cardSummary:
			'Member-first sites with events, resources, chapters, and portals that serve a whole community.',
		heading: 'Serve members, chapters, and events from one clear platform.',
		intro:
			'Associations balance many audiences — members, prospects, chapter leaders, and event attendees. Your website should make membership compelling, surface resources and events clearly, and support the people who run the organization.',
		painsHeading: 'What associations struggle with online.',
		pains: [
			'Membership value isn\u2019t communicated clearly to prospects.',
			'Events, resources, and education are hard to find or navigate.',
			'Chapter leaders lack simple tools to run their regions.',
			'There\u2019s no clear member experience after someone joins.',
		],
		approachHeading: 'How we build for associations.',
		approach: [
			{
				title: 'Membership that sells itself',
				text: 'Clear pages that articulate value, benefits, and how to join — so prospects understand why membership matters.',
			},
			{
				title: 'Events & resources, organized',
				text: 'Structured, easy-to-navigate event listings, resources, and continuing education that members actually use.',
			},
			{
				title: 'Member & chapter experience',
				text: 'Portals and tools that serve members and give chapter leaders a practical way to run events and engage their community.',
			},
		],
		priorities: [
			'Membership value & enrollment',
			'Events & registration',
			'Resource & education library',
			'Chapter & member portals',
			'Ongoing content & engagement',
		],
		demo: { label: 'View the Association demo', href: '/templates/association' },
		relatedServices: [
			{ label: 'Signature Custom Websites', href: '/services/custom-healthcare-websites' },
			{ label: 'Growth Systems', href: '/services/growth-systems' },
			{ label: 'Care and Optimization', href: '/services/ongoing-optimization' },
			{ label: 'Local Visibility', href: '/services/local-visibility' },
		],
		faqs: [
			{
				question: 'Can you build member and chapter portals?',
				answer:
					'Yes. Our association demo includes a working preview of member dashboards and chapter leader tools, and we scope real portals around your membership model.',
			},
			{
				question: 'Can the site manage events and resources?',
				answer:
					'We structure clear, navigable event listings and a resource/education library so members can find and use what you publish.',
			},
			{
				question: 'How do we communicate membership value to prospects?',
				answer:
					'We design membership pages that make benefits, tiers, and the join process obvious — turning interested visitors into members.',
			},
		],
		metaTitle: 'Healthcare Association Websites | FutureSolutions',
		metaDescription:
			'Member-first websites for healthcare associations — membership enrollment, events, resource libraries, and member and chapter portals on one clear platform.',
	},
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
