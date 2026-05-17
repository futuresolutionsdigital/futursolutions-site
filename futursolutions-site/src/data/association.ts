// ── Meridian Health Professionals Association ──
// Fictional demo data for the FutureSolutions association website template.

export interface NavItem {
	label: string;
	href: string;
}

export interface UtilityLink extends NavItem {
	accent?: boolean;
}

// ── Brand ──

export const assocBrand = {
	name: 'Meridian Health Professionals Association',
	shortName: 'MHPA',
	tagline: 'Advancing practice. Elevating professionals. Shaping the future of care.',
	disclaimer:
		'Meridian Health Professionals Association is a fictional demo website created by FutureSolutions to showcase a modern professional association website system.',
	homeHref: '/demos/association',
} as const;

// ── Utility Nav ──

export const utilityLinks: UtilityLink[] = [
	{ label: 'Join', href: '/demos/association/membership', accent: true },
	{ label: 'Renew', href: '/demos/association/membership' },
	{ label: 'Member Login', href: '/demos/association/membership' },
	{ label: 'Career Center', href: '/demos/association/career-center' },
	{ label: 'Donate / PAC', href: '/demos/association/advocacy' },
];

// ── Primary Nav ──

export const primaryNav: NavItem[] = [
	{ label: 'Membership', href: '/demos/association/membership' },
	{ label: 'Education & Events', href: '/demos/association/events' },
	{ label: 'Advocacy', href: '/demos/association/advocacy' },
	{ label: 'Resources', href: '/demos/association/resources' },
	{ label: 'Chapters', href: '/demos/association/chapters' },
	{ label: 'Career Center', href: '/demos/association/career-center' },
	{ label: 'About', href: '/demos/association/about' },
];

// ── Homepage Hero ──

export const homepageHero = {
	headline: 'The professional home for healthcare leaders shaping what comes next.',
	subheadline:
		'Join a modern association built around advocacy, continuing education, practical resources, career growth, and local connection.',
	primaryCta: { text: 'Join the Association', href: '/demos/association/membership' },
	secondaryCta: { text: 'Explore Annual Conference', href: '/demos/association/events/annual-conference' },
	tertiaryLink: { text: 'Take Action on Current Issues →', href: '/demos/association/advocacy' },
} as const;

// ── Proof Stats ──

export const proofStats = [
	{ value: '8,200+', label: 'members represented' },
	{ value: '24', label: 'local chapters' },
	{ value: '120+', label: 'annual CE hours' },
	{ value: '36', label: 'policy updates tracked' },
	{ value: '1', label: 'flagship annual conference' },
];

// ── Top Tasks ──

export const topTasks = [
	{
		title: 'Join or Renew',
		description: 'Start or continue your membership with benefits that support every stage of your career.',
		href: '/demos/association/membership',
		icon: 'membership',
	},
	{
		title: 'Earn CE Credits',
		description: 'Access accredited continuing education courses, webinars, and self-paced learning modules.',
		href: '/demos/association/events',
		icon: 'education',
	},
	{
		title: 'Register for Conference',
		description: 'Join 1,200+ professionals at the Annual Clinical Leadership Conference this October.',
		href: '/demos/association/events/annual-conference',
		icon: 'event',
	},
	{
		title: 'Take Advocacy Action',
		description: 'Respond to active legislative alerts and help shape the policies that affect your practice.',
		href: '/demos/association/advocacy',
		icon: 'advocacy',
	},
	{
		title: 'Find Your Chapter',
		description: 'Connect with peers in your region through one of 24 local chapters across the state.',
		href: '/demos/association/chapters',
		icon: 'chapters',
	},
	{
		title: 'Browse Career Resources',
		description: 'Search the job board, explore salary data, build your CV, and plan your next career move.',
		href: '/demos/association/career-center',
		icon: 'career',
	},
];

// ── Value Pillars ──

export const valuePillars = [
	{
		title: 'Advocacy that protects your practice',
		description:
			'We track legislation, mobilize members, and give healthcare professionals a unified voice at every level of government.',
		stats: '36 active policy issues',
		href: '/demos/association/advocacy',
		linkText: 'View Policy Priorities',
	},
	{
		title: 'Education that keeps you current',
		description:
			'Accredited CE programs, an annual conference, specialty webinars, and clinical updates — designed by and for working professionals.',
		stats: '120+ CE hours annually',
		href: '/demos/association/events',
		linkText: 'Explore Education',
	},
	{
		title: 'Community that connects you locally',
		description:
			'24 chapters, regional meetups, mentorship networks, and peer groups that keep you connected beyond the workplace.',
		stats: '24 local chapters',
		href: '/demos/association/chapters',
		linkText: 'Find Your Chapter',
	},
	{
		title: 'Resources that save time in the real world',
		description:
			'Practice toolkits, clinical guidelines, salary benchmarks, career development tools, and member-exclusive discounts.',
		stats: '200+ resources',
		href: '/demos/association/resources',
		linkText: 'Browse Resources',
	},
];

// ── Featured Conference ──

export const featuredConference = {
	eyebrow: 'Annual Conference',
	title: 'Clinical Leadership Conference 2026',
	date: 'October 15–17, 2026',
	location: 'Sacramento Convention Center, CA',
	description:
		'Three days of keynotes, clinical workshops, advocacy briefings, networking, and career development — designed for healthcare professionals at every level.',
	highlights: [
		'40+ breakout sessions across 8 specialty tracks',
		'Keynote: The Future of Team-Based Healthcare',
		'Advocacy day with direct legislator access',
		'Career fair with 50+ healthcare employers',
		'Poster presentations and research showcase',
	],
	primaryCta: { text: 'Register Now', href: '/demos/association/events/annual-conference' },
	secondaryCta: { text: 'View Full Program', href: '/demos/association/events/annual-conference' },
	attendees: '1,200+ expected attendees',
} as const;

// ── Advocacy Alert ──

export const advocacyAlert = {
	eyebrow: 'Action Needed',
	title: 'Support SB-1247: Expanding Scope of Practice',
	description:
		'SB-1247 would update scope-of-practice regulations to better reflect current clinical training standards. Your voice matters — send a message to your legislator today.',
	cta: { text: 'Take Action Now', href: '/demos/association/advocacy' },
	secondaryLink: { text: 'View All Policy Priorities', href: '/demos/association/advocacy' },
	urgency: 'Senate vote expected June 2026',
} as const;

// ── Resource / Education Preview ──

export const resourcePreview = [
	{
		category: 'CE Course',
		title: 'Pharmacology Update: 2026 Guidelines',
		description: 'Self-paced module covering the latest prescribing updates and clinical decision frameworks.',
		meta: '3.0 CE credits · Self-paced',
		href: '/demos/association/events',
	},
	{
		category: 'Toolkit',
		title: 'Practice Management Essentials',
		description: 'Templates, checklists, and reference documents for running an efficient clinical practice.',
		meta: 'Member-exclusive',
		href: '/demos/association/resources',
	},
	{
		category: 'Webinar',
		title: 'Legislative Update: What Passed in 2025',
		description: 'A 60-minute overview of the legislative actions that affect your practice this year.',
		meta: '1.0 CE credit · On-demand',
		href: '/demos/association/events',
	},
	{
		category: 'Guide',
		title: 'Salary & Compensation Benchmarks',
		description: 'Regional salary data, benefits comparison, and negotiation strategies for healthcare professionals.',
		meta: '2026 edition · Free for members',
		href: '/demos/association/resources',
	},
];

// ── Chapters / Community Preview ──

export const chapterPreview = {
	title: 'Your local chapter is where membership comes to life.',
	description:
		'24 chapters across the state host meetups, CE dinners, mentorship circles, and advocacy events. Find your region and connect with peers who understand your work.',
	regions: [
		{ name: 'Northern California', chapters: 6, members: '1,800+' },
		{ name: 'Central Valley', chapters: 4, members: '950+' },
		{ name: 'Southern California', chapters: 8, members: '3,200+' },
		{ name: 'Inland Empire & Desert', chapters: 3, members: '720+' },
		{ name: 'Bay Area', chapters: 3, members: '1,530+' },
	],
	cta: { text: 'Find Your Chapter', href: '/demos/association/chapters' },
} as const;

// ── Career Center Preview ──

export const careerCenterPreview = {
	title: 'Your next career move starts here.',
	description:
		'Whether you\'re exploring options, ready to negotiate, or mentoring the next generation, the MHPA Career Center has the tools to support your professional path.',
	features: [
		{ title: 'Job Board', description: 'Curated healthcare positions from vetted employers across the state.', href: '/demos/association/career-center' },
		{ title: 'Salary Data', description: 'Regional compensation benchmarks to help you negotiate from a position of strength.', href: '/demos/association/career-center' },
		{ title: 'CV Builder', description: 'Professional resume templates and builder tools designed for clinical professionals.', href: '/demos/association/career-center' },
		{ title: 'Mentorship', description: 'Connect with experienced professionals who can help guide your next step.', href: '/demos/association/career-center' },
	],
	cta: { text: 'Explore Career Center', href: '/demos/association/career-center' },
} as const;

// ── Member Impact Stories ──

export const memberStories = [
	{
		quote: 'The advocacy alerts made it easy to contact my legislator during the scope-of-practice debate. I felt like my voice actually mattered.',
		name: 'Dr. Priya Nair, DNP',
		role: 'Family Nurse Practitioner · Bay Area Chapter',
	},
	{
		quote: 'I earned all my CE credits through MHPA last year. The clinical webinars are genuinely useful — not just checkbox education.',
		name: 'Marcus Chen, PA-C',
		role: 'Emergency Medicine PA · Sacramento Chapter',
	},
	{
		quote: 'The mentorship program connected me with a clinician who helped me transition from hospital to private practice. Invaluable.',
		name: 'Leah Thompson, RN, BSN',
		role: 'Clinical Educator · Southern California Chapter',
	},
];

// ── Latest Updates / News ──

export const latestUpdates = [
	{
		date: 'May 12, 2026',
		title: 'MHPA Testifies on Workforce Pipeline Legislation',
		excerpt: 'Association leaders presented testimony supporting increased funding for clinical training programs.',
		href: '/demos/association/advocacy',
	},
	{
		date: 'May 8, 2026',
		title: 'Early Bird Registration Open for Annual Conference',
		excerpt: 'Save $150 on registration for the 2026 Clinical Leadership Conference in Sacramento.',
		href: '/demos/association/events/annual-conference',
	},
	{
		date: 'April 29, 2026',
		title: 'New CE Course: Telehealth Best Practices',
		excerpt: 'A 2.0-credit self-paced course covering regulatory, clinical, and documentation standards.',
		href: '/demos/association/events',
	},
	{
		date: 'April 22, 2026',
		title: 'Chapter Spotlight: Bay Area Clinical Meetup Series',
		excerpt: 'The Bay Area chapter is piloting a monthly in-person clinical discussion series for members.',
		href: '/demos/association/chapters',
	},
];

// ── Partners / Sponsors ──

export const partners = [
	'Pacific Health Systems',
	'Valley Medical Group',
	'Coastal Clinical Partners',
	'Sierra Health Network',
	'Golden State University',
	'Meridian Insurance Solutions',
];

// ── Footer Link Groups ──

export const footerNavGroups = [
	{
		title: 'Membership',
		links: [
			{ label: 'Join', href: '/demos/association/membership' },
			{ label: 'Renew', href: '/demos/association/membership' },
			{ label: 'Member Benefits', href: '/demos/association/membership' },
			{ label: 'Member Login', href: '/demos/association/membership' },
		],
	},
	{
		title: 'Education & Events',
		links: [
			{ label: 'CE Courses', href: '/demos/association/events' },
			{ label: 'Webinars', href: '/demos/association/events' },
			{ label: 'Annual Conference', href: '/demos/association/events/annual-conference' },
			{ label: 'Resources', href: '/demos/association/resources' },
		],
	},
	{
		title: 'Advocacy',
		links: [
			{ label: 'Policy Priorities', href: '/demos/association/advocacy' },
			{ label: 'Take Action', href: '/demos/association/advocacy' },
			{ label: 'Donate / PAC', href: '/demos/association/advocacy' },
		],
	},
	{
		title: 'Community',
		links: [
			{ label: 'Find a Chapter', href: '/demos/association/chapters' },
			{ label: 'Career Center', href: '/demos/association/career-center' },
			{ label: 'Mentorship', href: '/demos/association/career-center' },
		],
	},
	{
		title: 'About',
		links: [
			{ label: 'About MHPA', href: '/demos/association/about' },
			{ label: 'Leadership', href: '/demos/association/about' },
			{ label: 'Contact', href: '/demos/association/contact' },
		],
	},
];

// ── Membership: Audience Segments ──

export const membershipAudience = [
	{
		title: 'Student',
		summary: 'Build your professional foundation early with discounted membership, mentorship, and learning access.',
		cta: { text: 'Explore Student Membership', href: '#tiers' },
		icon: 'student',
	},
	{
		title: 'New Professional',
		summary: 'Get practical guidance, CE, career tools, and local connections as you begin practice.',
		cta: { text: 'Start Your First Year', href: '#tiers' },
		icon: 'new-pro',
	},
	{
		title: 'Practicing Professional',
		summary: 'Stay current, protected, connected, and represented through every stage of your career.',
		cta: { text: 'Join as a Professional', href: '#tiers' },
		icon: 'professional',
	},
	{
		title: 'Clinical Leader',
		summary: 'Access leadership resources, policy updates, team education, and professional visibility.',
		cta: { text: 'Explore Leadership Benefits', href: '#tiers' },
		icon: 'leader',
	},
	{
		title: 'Employer / Partner',
		summary: 'Reach qualified professionals, post opportunities, sponsor events, and support the profession.',
		cta: { text: 'Partner With MHPA', href: '/demos/association/contact' },
		icon: 'employer',
	},
	{
		title: 'Retired / Emeritus',
		summary: 'Stay connected to the profession, support advocacy, and mentor the next generation.',
		cta: { text: 'Stay Connected', href: '#tiers' },
		icon: 'retired',
	},
];

// ── Membership: Benefit Pillars ──

export const membershipBenefitPillars = [
	{
		title: 'Advocacy Representation',
		description: 'A unified voice on the policy issues that shape practice, access, and professional opportunity.',
		href: '/demos/association/advocacy',
	},
	{
		title: 'Continuing Education',
		description: 'Live webinars, CE activities, conference programming, and practical learning pathways.',
		href: '/demos/association/events',
	},
	{
		title: 'Local Chapters',
		description: 'Regional networks for connection, leadership, mentorship, and local events.',
		href: '/demos/association/chapters',
	},
	{
		title: 'Career Support',
		description: 'Job opportunities, salary tools, mentoring resources, leadership development, and employer visibility.',
		href: '/demos/association/career-center',
	},
	{
		title: 'Practice Resources',
		description: 'Toolkits, clinical guides, policy briefs, templates, and member-only professional materials.',
		href: '/demos/association/resources',
	},
	{
		title: 'Member Savings',
		description: 'Discounted event registration, preferred pricing on education, and access to exclusive resources.',
		href: '/demos/association/membership',
	},
];

// ── Membership: Tiers ──

export const membershipTiers = [
	{
		name: 'Student Member',
		price: '$75',
		period: '/year',
		bestFor: 'Students preparing for professional practice',
		featured: false,
		includes: [
			'Discounted student rate',
			'Student-focused webinars',
			'Local chapter access',
			'Mentorship opportunities',
			'Career preparation resources',
		],
		cta: { text: 'Join as Student', href: '/demos/association/contact' },
	},
	{
		name: 'Professional Member',
		price: '$245',
		period: '/year',
		bestFor: 'Licensed or practicing healthcare professionals',
		featured: true,
		includes: [
			'Full advocacy representation',
			'CE and webinar access',
			'Member resource library',
			'Chapter participation',
			'Career center access',
			'Conference member pricing',
		],
		cta: { text: 'Join as Professional', href: '/demos/association/contact' },
	},
	{
		name: 'Leadership Member',
		price: '$345',
		period: '/year',
		bestFor: 'Clinical leaders, educators, and advanced professionals',
		featured: false,
		includes: [
			'Everything in Professional',
			'Leadership roundtables',
			'Policy briefing access',
			'Speaker/volunteer opportunities',
			'Recognition and leadership pathways',
		],
		cta: { text: 'Explore Leadership', href: '/demos/association/contact' },
	},
	{
		name: 'Retired / Emeritus',
		price: '$95',
		period: '/year',
		bestFor: 'Retired professionals who want to stay connected',
		featured: false,
		includes: [
			'Chapter access',
			'Advocacy updates',
			'Mentorship opportunities',
			'Select event discounts',
			'Community participation',
		],
		cta: { text: 'Stay Connected', href: '/demos/association/contact' },
	},
];

// ── Membership: Comparison Table ──

export const membershipComparisonRows = [
	{ feature: 'Advocacy representation', student: 'Included', professional: 'Included', leadership: 'Included', retired: 'Included' },
	{ feature: 'Local chapter access', student: 'Included', professional: 'Included', leadership: 'Included', retired: 'Included' },
	{ feature: 'Resource library', student: 'Limited', professional: 'Full access', leadership: 'Full access', retired: 'Limited' },
	{ feature: 'CE and webinar access', student: 'Student track', professional: 'Full access', leadership: 'Full access', retired: 'Select' },
	{ feature: 'Conference member pricing', student: 'Student rate', professional: 'Member rate', leadership: 'Member rate', retired: 'Discounted' },
	{ feature: 'Career center access', student: 'Included', professional: 'Included', leadership: 'Included', retired: '—' },
	{ feature: 'Mentorship opportunities', student: 'As mentee', professional: 'Both roles', leadership: 'Both roles', retired: 'As mentor' },
	{ feature: 'Leadership opportunities', student: '—', professional: 'Committee access', leadership: 'Full access', retired: 'Advisory' },
	{ feature: 'Policy briefings', student: '—', professional: 'Summary', leadership: 'Full access', retired: 'Summary' },
	{ feature: 'Employer visibility', student: '—', professional: '—', leadership: 'Directory listing', retired: '—' },
];

// ── Membership: Outcome Blocks ──

export const membershipOutcomes = [
	{
		title: 'Keep your practice current',
		description: 'Access CE courses, clinical guidelines, and webinars that reflect the latest in evidence-based practice — not just checkbox education.',
		linkText: 'Explore Education',
		href: '/demos/association/events',
	},
	{
		title: 'Understand policy changes before they affect you',
		description: 'Get clear, actionable advocacy alerts and legislative summaries so you can respond to changes that affect your scope, your patients, and your livelihood.',
		linkText: 'View Policy Priorities',
		href: '/demos/association/advocacy',
	},
	{
		title: 'Find your local professional network',
		description: 'Join one of 24 chapters for meetups, CE dinners, mentorship circles, and regional events that connect you with peers who understand your day-to-day reality.',
		linkText: 'Find Your Chapter',
		href: '/demos/association/chapters',
	},
	{
		title: 'Advance your career with credible support',
		description: 'Use the job board, salary benchmarks, CV builder, and mentorship program to make confident career moves — whether you\'re starting out or stepping into leadership.',
		linkText: 'Explore Career Center',
		href: '/demos/association/career-center',
	},
];

// ── Membership: Advocacy Value ──

export const membershipAdvocacy = {
	headline: 'Your membership strengthens the voice of the profession.',
	description: 'Every MHPA member adds weight to the collective voice that shapes policy, protects practice, and expands professional opportunity.',
	points: [
		{
			title: 'Track legislation in real time',
			description: 'MHPA monitors state and federal policy developments and keeps members informed through clear legislative summaries.',
		},
		{
			title: 'Mobilize when it matters',
			description: 'When key votes approach, MHPA activates its member network with targeted action alerts and direct legislator contact tools.',
		},
		{
			title: 'Support long-term professional influence',
			description: 'Member dues fund sustained advocacy, public awareness campaigns, and long-term relationship building with legislators who affect your profession.',
		},
	],
	cta: { text: 'View Advocacy Priorities', href: '/demos/association/advocacy' },
} as const;

// ── Membership: Education & Savings ──

export const membershipEducation = {
	headline: 'Learn more, attend more, save more.',
	description: 'Your membership includes access to education and events that keep you clinically current, professionally engaged, and financially ahead.',
	benefits: [
		{ title: 'CE Course Access', detail: '120+ annual hours across specialty tracks' },
		{ title: 'Live Webinars', detail: 'Monthly sessions with expert faculty' },
		{ title: 'Conference Pricing', detail: 'Save up to $150 on annual conference registration' },
		{ title: 'On-Demand Library', detail: 'Self-paced modules available year-round' },
		{ title: 'Professional Development', detail: 'Leadership workshops and career webinars' },
	],
	cta: { text: 'Explore Education & Events', href: '/demos/association/events' },
} as const;

// ── Membership: Community / Chapters ──

export const membershipCommunity = {
	headline: 'A statewide network that feels local.',
	description: 'MHPA membership connects you to a professional community that extends far beyond your workplace — and meets you where you live.',
	benefits: [
		'Access to 24 local chapters across the state',
		'Regional meetups, CE dinners, and advocacy events',
		'Mentorship matching with experienced professionals',
		'Volunteer and chapter leadership opportunities',
		'Online community forums and peer groups',
	],
	cta: { text: 'Find Your Chapter', href: '/demos/association/chapters' },
} as const;

// ── Membership: Stories ──

export const membershipStories = [
	{
		quote: 'Joining MHPA helped me find a local chapter, understand the policy issues affecting my work, and feel connected to a profession bigger than my own workplace.',
		name: 'Sarah Kimura, NP',
		role: 'Primary Care · Bay Area Chapter',
	},
	{
		quote: 'The leadership member benefits gave me access to policy briefings and a network of clinical leaders I never would have found on my own.',
		name: 'David Okonkwo, DNP, APRN',
		role: 'Clinical Director · Central Valley Chapter',
	},
	{
		quote: 'As a student member, I got mentorship, career prep, and CE access at a price I could afford. It made the transition to practice so much smoother.',
		name: 'Elena Reyes, BSN Student',
		role: 'Nursing Student · Southern California Chapter',
	},
];

// ── Membership: FAQ ──

export const membershipFaqs = [
	{
		question: 'Who can join MHPA?',
		answer: 'MHPA membership is open to licensed healthcare professionals, students enrolled in accredited healthcare programs, retired practitioners, clinical educators, and organizational partners across the state.',
	},
	{
		question: 'Is there a student membership option?',
		answer: 'Yes. Student membership is available at a reduced rate of $75/year and includes chapter access, mentorship, career resources, student-focused webinars, and discounted conference registration.',
	},
	{
		question: 'What is included with professional membership?',
		answer: 'Professional membership ($245/year) includes full advocacy representation, CE and webinar access, the member resource library, chapter participation, career center access, and conference member pricing.',
	},
	{
		question: 'Do members receive event and conference discounts?',
		answer: 'Yes. All members receive preferred pricing on the Annual Clinical Leadership Conference and select CE events. Savings vary by tier and can total $150 or more per year.',
	},
	{
		question: 'Can employers or organizations partner with MHPA?',
		answer: 'Yes. Employers and organizations can partner with MHPA through sponsorship, job board access, event participation, and group membership options. Contact us for partnership details.',
	},
	{
		question: 'How do renewals work?',
		answer: 'Memberships renew annually. Members receive renewal reminders via email 60 and 30 days before expiration. Online renewal takes less than two minutes through the member portal.',
	},
	{
		question: 'Are practice resources member-only?',
		answer: 'Most toolkits, clinical guides, salary data, and templates are exclusive to members. Select public resources are available to non-members for preview purposes.',
	},
	{
		question: 'Can I participate in advocacy as a member?',
		answer: 'Absolutely. All members can respond to action alerts, contact legislators through MHPA tools, attend advocacy events, and support the political action committee. Leadership members receive additional policy briefing access.',
	},
];

// ── Annual Conference: Hero ──

export const annualConferenceHero = {
	eyebrow: 'Annual Conference',
	headline: 'Clinical Leadership Conference 2026',
	lead: 'Three days of clinical education, policy briefings, leadership development, local chapter connection, and career growth for healthcare professionals.',
	date: 'October 15–17, 2026',
	location: 'Sacramento, CA',
	ceHours: '18 CE hours available',
	attendees: '1,200+ expected attendees',
	primaryCta: { text: 'Register Now', href: '#register' },
	secondaryCta: { text: 'View Full Program', href: '#program' },
	tertiaryLink: { text: 'Sponsor or Exhibit →', href: '#sponsor' },
} as const;

// ── Annual Conference: Stats ──

export const annualConferenceStats = [
	{ value: '3', label: 'days' },
	{ value: '18', label: 'CE hours' },
	{ value: '42', label: 'sessions' },
	{ value: '65', label: 'speakers' },
	{ value: '30+', label: 'sponsors & exhibitors' },
];

// ── Annual Conference: Why Attend ──

export const annualConferenceReasons = [
	{
		title: 'Stay clinically current',
		description: 'Attend sessions on the latest evidence-based practice, prescribing updates, and emerging clinical technologies — led by experts who understand your day-to-day reality.',
		linkText: 'View CE Sessions',
		href: '#program',
	},
	{
		title: 'Understand policy changes',
		description: 'Get direct legislative briefings, meet advocacy leaders, and leave prepared to navigate the regulatory environment that shapes your scope and your livelihood.',
		linkText: 'View Advocacy Track',
		href: '#program',
	},
	{
		title: 'Build your professional network',
		description: 'Connect with 1,200+ professionals across chapters, specialties, and career stages through receptions, mentorship events, and local chapter meetups.',
		linkText: 'Explore Networking',
		href: '#agenda',
	},
	{
		title: 'Bring practical tools back to your team',
		description: 'Leave with actionable frameworks, practice templates, leadership strategies, and resources you can implement the following Monday.',
		linkText: 'View All Tracks',
		href: '#program',
	},
];

// ── Annual Conference: Registration Tiers ──

export const annualConferenceRegistration = [
	{
		name: 'Member Early Rate',
		price: '$395',
		badge: 'Best Value',
		description: 'Full conference access for current MHPA members who register before August 30.',
		includes: [
			'All sessions and keynotes',
			'18 CE hours',
			'Networking reception',
			'Resource library access',
			'Sponsor showcase access',
		],
		cta: { text: 'Register as Member', href: '/demos/association/contact' },
		featured: true,
	},
	{
		name: 'Non-Member Rate',
		price: '$545',
		badge: '',
		description: 'Full conference access for non-members. Includes all programming and CE.',
		includes: [
			'All sessions and keynotes',
			'18 CE hours',
			'Networking reception',
			'Resource library access',
			'Sponsor showcase access',
		],
		cta: { text: 'Register as Non-Member', href: '/demos/association/contact' },
		featured: false,
	},
	{
		name: 'Student Rate',
		price: '$145',
		badge: '',
		description: 'Designed for students in accredited healthcare programs.',
		includes: [
			'Student-track sessions',
			'Career fair and mentorship reception',
			'Select CE sessions',
			'Networking access',
		],
		cta: { text: 'Register as Student', href: '/demos/association/contact' },
		featured: false,
	},
	{
		name: 'Sponsor / Exhibitor',
		price: 'Custom',
		badge: '',
		description: 'Reach 1,200+ healthcare decision-makers through exhibitor and sponsor options.',
		includes: [
			'Exhibitor booth options',
			'Sponsor visibility packages',
			'Attendee list access',
			'Recruiting and career exposure',
		],
		cta: { text: 'View Sponsor Options', href: '#sponsor' },
		featured: false,
	},
];

// ── Annual Conference: Program Tracks ──

export const annualConferenceTracks = [
	{
		title: 'Clinical Practice Updates',
		description: 'Evidence-based sessions on prescribing, diagnostics, specialty practice, and emerging clinical technologies.',
		sessions: 12,
		color: 'teal',
	},
	{
		title: 'Leadership & Operations',
		description: 'Practical strategies for team leadership, practice management, quality improvement, and organizational resilience.',
		sessions: 8,
		color: 'navy',
	},
	{
		title: 'Policy & Advocacy',
		description: 'Legislative updates, regulatory analysis, scope-of-practice strategy, and grassroots advocacy training.',
		sessions: 6,
		color: 'coral',
	},
	{
		title: 'Education & Preceptorship',
		description: 'Best practices in clinical education, student mentorship, preceptor development, and academic partnerships.',
		sessions: 5,
		color: 'slate',
	},
	{
		title: 'Career Growth',
		description: 'CV workshops, salary negotiation, leadership pipelines, career transitions, and professional branding.',
		sessions: 6,
		color: 'teal',
	},
	{
		title: 'Community & Chapter Leadership',
		description: 'Chapter operations, membership engagement, volunteer leadership, and regional network development.',
		sessions: 5,
		color: 'navy',
	},
];

// ── Annual Conference: Agenda ──

export const annualConferenceAgenda = [
	{
		day: 'Day 1',
		date: 'Thursday, October 15',
		items: [
			{ time: '7:30 AM', title: 'Registration & Chapter Breakfast', type: 'networking' },
			{ time: '9:00 AM', title: 'Opening Keynote: The Future of Team-Based Care', type: 'keynote' },
			{ time: '10:30 AM', title: 'Clinical Practice Update Sessions (Tracks 1–3)', type: 'sessions' },
			{ time: '12:00 PM', title: 'Lunch & Sponsor Showcase', type: 'networking' },
			{ time: '1:30 PM', title: 'Afternoon Breakout Sessions', type: 'sessions' },
			{ time: '5:00 PM', title: 'Welcome Reception & Chapter Meetups', type: 'networking' },
		],
	},
	{
		day: 'Day 2',
		date: 'Friday, October 16',
		items: [
			{ time: '7:30 AM', title: 'Policy Briefing Breakfast', type: 'advocacy' },
			{ time: '9:00 AM', title: 'Advocacy & Legislative Strategy Panel', type: 'advocacy' },
			{ time: '10:30 AM', title: 'Morning Breakout Sessions by Track', type: 'sessions' },
			{ time: '12:00 PM', title: 'Lunch & Career Fair', type: 'networking' },
			{ time: '1:30 PM', title: 'Afternoon Workshops & Poster Presentations', type: 'sessions' },
			{ time: '5:30 PM', title: 'Awards & Recognition Reception', type: 'networking' },
		],
	},
	{
		day: 'Day 3',
		date: 'Saturday, October 17',
		items: [
			{ time: '8:00 AM', title: 'Leadership Roundtables', type: 'sessions' },
			{ time: '9:30 AM', title: 'Career Development Workshops', type: 'sessions' },
			{ time: '11:00 AM', title: 'CE Claiming Lab & Evaluations', type: 'ce' },
			{ time: '12:00 PM', title: 'Closing Keynote: Leading Change from the Inside', type: 'keynote' },
			{ time: '1:00 PM', title: 'Conference Adjourns', type: 'networking' },
		],
	},
];

// ── Annual Conference: Speakers ──

export const annualConferenceSpeakers = [
	{
		name: 'Dr. Elena Marquez',
		credentials: 'DNP, APRN, FAANP',
		role: 'Clinical Leadership Keynote',
		topic: 'The Future of Team-Based Care',
		track: 'Keynote',
		initials: 'EM',
	},
	{
		name: 'Jordan Ellis',
		credentials: 'MPH, JD',
		role: 'Director, Health Policy Institute',
		topic: 'Navigating Scope-of-Practice Reform',
		track: 'Policy & Advocacy',
		initials: 'JE',
	},
	{
		name: 'Priya Raman',
		credentials: 'DNP, FNP-C',
		role: 'Innovation & Practice Lead',
		topic: 'Integrating AI-Assisted Decision Support',
		track: 'Clinical Practice',
		initials: 'PR',
	},
	{
		name: 'Marcus Chen',
		credentials: 'PhD, RN',
		role: 'Workforce Research Fellow',
		topic: 'Retention, Resilience, and the Burnout Crisis',
		track: 'Leadership',
		initials: 'MC',
	},
	{
		name: 'Lena Torres',
		credentials: 'MSN, CNE',
		role: 'Clinical Education Director',
		topic: 'Building Preceptor Programs That Work',
		track: 'Education',
		initials: 'LT',
	},
	{
		name: 'Devon Walker',
		credentials: 'MPA',
		role: 'MHPA Advocacy Director',
		topic: 'From Grassroots to Governance',
		track: 'Community',
		initials: 'DW',
	},
];

// ── Annual Conference: CE ──

export const annualConferenceCE = {
	headline: 'Earn CE while building practical skill.',
	hours: '18',
	description: 'The Clinical Leadership Conference offers up to 18 contact hours of accredited continuing education across clinical, policy, leadership, and career development tracks.',
	details: [
		'Live session attendance tracking via conference app',
		'On-demand session access for 90 days post-conference',
		'Evaluation and certificate available online within 48 hours',
		'Pharmacology and clinical CE hours included in select tracks',
		'Student CE hours available in designated sessions',
	],
	disclaimer: 'Credit language is sample content for this fictional demo and would be reviewed by the appropriate accrediting body for a real association.',
	cta: { text: 'View CE Information', href: '/demos/association/events' },
} as const;

// ── Annual Conference: Sponsors ──

export const annualConferenceSponsors = {
	headline: 'Connect your organization with healthcare decision-makers.',
	description: 'Sponsoring the Clinical Leadership Conference puts your organization in front of 1,200+ healthcare professionals, clinical leaders, and employers across the state.',
	packages: [
		{
			name: 'Exhibitor',
			price: 'From $1,500',
			includes: ['6×8 booth space', 'Attendee list access', 'Logo on event materials', 'Two exhibitor passes'],
		},
		{
			name: 'Supporting Sponsor',
			price: 'From $5,000',
			includes: ['Premium booth location', 'Session sponsorship option', 'Logo on signage and app', 'Four attendee passes', 'Newsletter feature'],
		},
		{
			name: 'Premier Partner',
			price: 'From $15,000',
			includes: ['Keynote or reception naming', 'Premier booth placement', 'Full attendee list', 'Six attendee passes', 'Year-round brand visibility', 'Custom activation opportunity'],
		},
	],
	cta: { text: 'Explore Sponsor Options', href: '/demos/association/contact' },
} as const;

// ── Annual Conference: Venue ──

export const annualConferenceVenue = {
	name: 'Sacramento Convention Center',
	address: '1400 J Street, Sacramento, CA 95814',
	hotelBlock: 'Discounted room blocks available at the Hyatt Regency Sacramento and Sheraton Grand Sacramento through September 15.',
	travel: 'The convention center is a 15-minute drive from Sacramento International Airport (SMF). On-site parking is available, and the venue is accessible by light rail.',
	accessibility: 'The venue is fully ADA accessible. Contact the MHPA events team in advance with specific accommodation requests.',
	cta: { text: 'View Travel Details', href: '/demos/association/contact' },
} as const;

// ── Annual Conference: First-Timer Guide ──

export const annualConferenceFirstTimer = [
	{ title: 'Choose your sessions', description: 'Browse the program by track and build a personal schedule that matches your clinical interests and career goals.' },
	{ title: 'Plan your CE', description: 'Review which sessions offer CE credit and bring your license information for quick certificate processing.' },
	{ title: 'Meet your chapter', description: 'Look for your chapter meetup at the Thursday welcome reception — it is the easiest way to find peers from your region.' },
	{ title: 'Prepare for advocacy', description: 'Read the policy briefing summary (emailed pre-conference) so you can engage meaningfully in the Friday legislative sessions.' },
	{ title: 'What to bring', description: 'Bring business cards, a notebook, comfortable shoes, and a plan to follow up with at least three new connections.' },
];

// ── Annual Conference: Deadlines ──

export const annualConferenceDeadlines = [
	{ date: 'August 30', label: 'Early registration deadline' },
	{ date: 'September 15', label: 'Hotel block cutoff' },
	{ date: 'September 22', label: 'Session app and schedule release' },
	{ date: 'October 1', label: 'Final sponsor commitment deadline' },
];

// ── Annual Conference: FAQ ──

export const annualConferenceFaqs = [
	{
		question: 'Who should attend the conference?',
		answer: 'The conference is designed for practicing healthcare professionals, students, clinical leaders, educators, chapter leaders, employers, and anyone interested in the future of healthcare practice and policy.',
	},
	{
		question: 'Is CE credit available?',
		answer: 'Yes. Up to 18 contact hours of continuing education credit are available across clinical, policy, leadership, and career development tracks. Credit details are published in the program guide.',
	},
	{
		question: 'Do MHPA members receive a registration discount?',
		answer: 'Yes. Members receive the early member rate of $395 (compared to $545 for non-members). Student members receive a rate of $145.',
	},
	{
		question: 'Can students attend?',
		answer: 'Absolutely. Student registration ($145) includes access to student-track sessions, the career fair, mentorship reception, and select CE sessions.',
	},
	{
		question: 'Are sessions recorded for later viewing?',
		answer: 'Select sessions are available on-demand for 90 days after the conference through the MHPA learning portal. Not all sessions are recorded.',
	},
	{
		question: 'How do I sponsor or exhibit at the conference?',
		answer: 'Exhibitor and sponsor packages start at $1,500. Contact the MHPA events team or visit the sponsor section of this page for package details and availability.',
	},
	{
		question: 'Will there be networking events?',
		answer: 'Yes. The conference includes a welcome reception, chapter meetups, a career fair, a sponsor showcase, and a recognition awards reception — plus informal networking throughout.',
	},
	{
		question: 'How do I claim my CE certificate?',
		answer: 'Complete session evaluations through the conference app or online portal. Certificates are available for download within 48 hours of evaluation submission.',
	},
];

// ── Future Route Metadata ──

export const routeMetadata: Record<string, { title: string; description: string }> = {
	'/demos/association': {
		title: 'Meridian Health Professionals Association | Modern Professional Association Demo',
		description:
			'A modern professional association website template by FutureSolutions — designed for membership, advocacy, education, events, and career support.',
	},
	'/demos/association/membership': {
		title: 'Membership | MHPA',
		description:
			'Join or renew your MHPA membership. Access advocacy, CE education, career tools, and local chapter connections.',
	},
	'/demos/association/events': {
		title: 'Education & Events | MHPA',
		description:
			'Browse CE courses, webinars, and events. Register for the Annual Clinical Leadership Conference.',
	},
	'/demos/association/events/annual-conference': {
		title: 'Annual Conference | MHPA',
		description:
			'Register for the 2026 Clinical Leadership Conference — three days of education, advocacy, networking, and career development.',
	},
	'/demos/association/advocacy': {
		title: 'Advocacy | MHPA',
		description:
			'Track policy priorities, respond to legislative alerts, and support the political action that protects healthcare practice.',
	},
	'/demos/association/resources': {
		title: 'Resources | MHPA',
		description:
			'Practice toolkits, clinical guidelines, salary data, and member-exclusive professional resources.',
	},
	'/demos/association/chapters': {
		title: 'Chapters | MHPA',
		description:
			'Find your local MHPA chapter. 24 chapters across the state hosting meetups, CE events, and mentorship.',
	},
	'/demos/association/career-center': {
		title: 'Career Center | MHPA',
		description:
			'Search healthcare jobs, compare salary benchmarks, build your CV, and connect with mentors.',
	},
	'/demos/association/about': {
		title: 'About | MHPA',
		description:
			'Learn about the Meridian Health Professionals Association — mission, leadership, and history.',
	},
	'/demos/association/contact': {
		title: 'Contact | MHPA',
		description:
			'Get in touch with MHPA — membership questions, event support, advocacy inquiries, and general contact.',
	},
};
