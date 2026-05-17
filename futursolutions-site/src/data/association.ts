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
	cta: { text: 'Take Action Now', href: '/demos/association/advocacy/scope-of-practice' },
	secondaryLink: { text: 'View All Policy Priorities', href: '/demos/association/advocacy#priorities' },
	urgency: 'Senate vote expected June 2026',
} as const;

// ── Resource / Education Preview ──

export const resourcePreview = [
	{
		category: 'CE Course',
		title: 'Pharmacology Update: 2026 Guidelines',
		description: 'Self-paced module covering the latest prescribing updates and clinical decision frameworks.',
		meta: '3.0 CE credits · Self-paced',
		href: '/demos/association/resources/pharmacology-update-2026',
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

// ── Advocacy: Hero ──

export const advocacyHero = {
	eyebrow: 'Advocacy',
	headline: 'Your voice shapes the future of healthcare practice.',
	lead: 'MHPA tracks legislation, mobilizes members, and gives healthcare professionals a unified voice at every level of government.',
	supportLine: 'Nonpartisan advocacy · Member action alerts · Policy tracking · Lobby Day preparation',
	primaryCta: { text: 'Take Action Now', href: '#action' },
	secondaryCta: { text: 'View Policy Priorities', href: '#priorities' },
	tertiaryLink: { text: 'Explore Lobby Day →', href: '#lobby-day' },
} as const;

// ── Advocacy: Current Alert ──

export const advocacyCurrentAlert = {
	headline: 'Action needed this week',
	title: 'Support SB-1247: Expanding Scope of Practice Access',
	status: 'Committee hearing scheduled',
	deadline: 'Submit comments by Friday at 5:00 PM',
	summary: 'A proposed bill would expand access to care by reducing outdated practice restrictions and improving patient access in underserved communities.',
	primaryCta: { text: 'Send a Message', href: '#action' },
	secondaryCta: { text: 'Read the Issue Brief', href: '/demos/association/advocacy/scope-of-practice' },
} as const;

// ── Advocacy: Stats ──

export const advocacyStats = [
	{ value: '36', label: 'policy updates tracked' },
	{ value: '4,800+', label: 'member messages sent' },
	{ value: '18', label: 'coalition partners' },
	{ value: '24', label: 'chapters mobilized' },
	{ value: '1', label: 'annual Lobby Day' },
];

// ── Advocacy: Policy Priorities ──

export const advocacyPriorities = [
	{
		title: 'Practice Authority',
		summary: 'Protecting the ability of qualified professionals to practice to the full extent of their training.',
		tag: 'Active',
		href: '/demos/association/advocacy/scope-of-practice',
	},
	{
		title: 'Patient Access',
		summary: 'Expanding timely care access in rural, underserved, and high-need communities.',
		tag: 'Monitoring',
		href: '/demos/association/advocacy',
	},
	{
		title: 'Workforce Development',
		summary: 'Supporting pipelines, mentorship, retention, and sustainable healthcare careers.',
		tag: 'Active',
		href: '/demos/association/advocacy',
	},
	{
		title: 'Reimbursement & Recognition',
		summary: 'Advancing fair recognition and payment for professional services.',
		tag: 'Monitoring',
		href: '/demos/association/advocacy',
	},
	{
		title: 'Education & Preceptorship',
		summary: 'Strengthening clinical education, preceptorship, and early-career support.',
		tag: 'Active',
		href: '/demos/association/advocacy',
	},
	{
		title: 'Public Health Readiness',
		summary: 'Ensuring professionals are equipped to respond to changing community health needs.',
		tag: 'Watch',
		href: '/demos/association/advocacy',
	},
];

// ── Advocacy: Legislative Tracker ──

export const advocacyLegislativeTracker = [
	{
		bill: 'SB-1247',
		issue: 'Expanding Scope of Practice Access',
		status: 'Hearing Scheduled',
		position: 'Support',
		priority: 'high',
		href: '/demos/association/advocacy/scope-of-practice',
	},
	{
		bill: 'AB-2089',
		issue: 'Workforce Training Grant Program',
		status: 'In Review',
		position: 'Monitoring',
		priority: 'medium',
		href: '/demos/association/advocacy',
	},
	{
		bill: 'SB-931',
		issue: 'Telehealth Continuity Act',
		status: 'Floor Vote',
		position: 'Support',
		priority: 'high',
		href: '/demos/association/advocacy',
	},
	{
		bill: 'AB-1442',
		issue: 'Clinical Preceptor Incentive Pilot',
		status: 'Introduced',
		position: 'Support',
		priority: 'medium',
		href: '/demos/association/advocacy',
	},
	{
		bill: 'Budget 4260',
		issue: 'Healthcare Workforce Funding',
		status: 'Budget Review',
		position: 'Watch',
		priority: 'low',
		href: '/demos/association/advocacy',
	},
];

// ── Advocacy: How It Works ──

export const advocacyProcess = [
	{ step: '01', title: 'Members surface practice barriers', description: 'Frontline professionals report scope challenges, access issues, and policy gaps through MHPA channels.' },
	{ step: '02', title: 'MHPA evaluates policy impact', description: 'The advocacy team reviews proposed legislation, assesses workforce and patient impact, and develops evidence-based positions.' },
	{ step: '03', title: 'Advocacy team coordinates action', description: 'MHPA builds coalitions, prepares testimony, creates member action tools, and engages legislative offices.' },
	{ step: '04', title: 'Members mobilize and lawmakers hear from the profession', description: 'Thousands of members send messages, attend hearings, and meet with legislators — amplifying the professional voice.' },
];

// ── Advocacy: Lobby Day ──

export const advocacyLobbyDay = {
	title: 'Healthcare Advocacy Day 2026',
	date: 'May 5, 2026',
	location: 'Sacramento, CA',
	summary: 'A full-day advocacy event where members receive policy briefings, meet with legislative offices, and speak directly about the issues shaping healthcare practice.',
	schedule: [
		'Morning policy briefing and issue training',
		'Chapter delegation preparation sessions',
		'Legislative office visits by district',
		'Post-visit debrief and next steps',
		'Advocacy resources and follow-up toolkit',
	],
	primaryCta: { text: 'Explore Lobby Day', href: '/demos/association/events' },
	secondaryCta: { text: 'Prepare for Advocacy Day', href: '#toolkit' },
} as const;

// ── Advocacy: Toolkit ──

export const advocacyToolkit = [
	{ title: 'Legislator Meeting Guide', format: 'PDF Guide', audience: 'All Members', summary: 'Step-by-step preparation for meetings with elected officials, including scheduling, talking points, and follow-up.', access: 'Public' },
	{ title: 'Talking Points Template', format: 'Template', audience: 'All Members', summary: 'Customizable talking points for phone calls, emails, and in-person legislative meetings.', access: 'Public' },
	{ title: 'Policy Brief Library', format: 'Resource Hub', audience: 'All Members', summary: 'One-page summaries of active policy issues, MHPA positions, and key data points.', access: 'Public' },
	{ title: 'Chapter Advocacy Toolkit', format: 'Toolkit', audience: 'Chapter Leaders', summary: 'Tools for organizing local advocacy events, hosting legislative forums, and coordinating district outreach.', access: 'Member-only' },
	{ title: 'Testimony Preparation Guide', format: 'PDF Guide', audience: 'Advanced Advocates', summary: 'How to prepare, deliver, and follow up on written and oral testimony for legislative hearings.', access: 'Member-only' },
	{ title: 'Media & Letter Writing Guide', format: 'Template', audience: 'All Members', summary: 'Templates and tips for writing letters to the editor, op-eds, and social media advocacy posts.', access: 'Public' },
];

// ── Advocacy: Policy Updates ──

export const advocacyPolicyUpdates = [
	{ date: 'May 12, 2026', category: 'Legislative', title: 'Committee hearing scheduled for SB-1247', summary: 'The Senate Health Committee will hear testimony on SB-1247 next week. MHPA is preparing member comments.', href: '/demos/association/advocacy/scope-of-practice' },
	{ date: 'May 8, 2026', category: 'Coalition', title: 'MHPA joins workforce development coalition', summary: 'MHPA announced partnership with 12 organizations to advocate for healthcare workforce funding and retention programs.', href: '/demos/association/advocacy' },
	{ date: 'May 3, 2026', category: 'Legislative', title: 'New telehealth continuity bill introduced', summary: 'SB-931 proposes extending pandemic-era telehealth flexibilities for qualified healthcare professionals.', href: '/demos/association/advocacy' },
	{ date: 'April 28, 2026', category: 'Events', title: 'Lobby Day registration opening soon', summary: 'Healthcare Advocacy Day 2026 registration will open in two weeks. Priority access for chapter leaders.', href: '/demos/association/advocacy' },
];

// ── Advocacy: Support / PAC ──

export const advocacyPacBlock = {
	headline: 'Support long-term professional influence.',
	description: 'MHPA\\\'s advocacy work is supported through member engagement, coalition partnerships, and optional contributions to advocacy programs. Sustained advocacy ensures the profession has a credible, consistent voice in policy conversations — not just when a crisis hits.',
	primaryCta: { text: 'Learn About Advocacy Support', href: '/demos/association/contact' },
	secondaryCta: { text: 'Join Advocacy Alerts', href: '/demos/association/contact' },
	disclaimer: 'This section is fictional demo content. No real donations or contributions are processed.',
} as const;

// ── Advocacy: FAQ ──

export const advocacyFaqs = [
	{ question: 'Is MHPA advocacy partisan?', answer: 'No. MHPA advocacy is nonpartisan and focused on issues that affect healthcare practice, patient access, and workforce strength — regardless of party affiliation.' },
	{ question: 'Do I need policy experience to participate?', answer: 'Not at all. MHPA provides talking points, training, and step-by-step guides that make it easy for any member to participate in advocacy activities.' },
	{ question: 'How do action alerts work?', answer: 'When legislation moves that affects the profession, MHPA sends targeted alerts with background information, talking points, and simple tools to contact legislators directly.' },
	{ question: 'Can students participate in advocacy?', answer: 'Yes. Student members can join action alerts, attend Lobby Day, participate in chapter advocacy events, and access all public advocacy resources.' },
	{ question: 'What happens during Lobby Day?', answer: 'Lobby Day includes morning policy briefings, issue-specific training, chapter delegation meetings, and scheduled visits to legislative offices in Sacramento.' },
	{ question: 'Are advocacy resources member-only?', answer: 'Many core resources — talking points, issue briefs, and legislator guides — are publicly available. Advanced toolkits and chapter-level resources are member-only.' },
	{ question: 'How are policy priorities selected?', answer: 'MHPA\\\'s policy priorities are developed through member input, practice barrier data, chapter feedback, and review by the advocacy committee and board of directors.' },
	{ question: 'How do I stay updated on advocacy?', answer: 'Join MHPA advocacy alerts for real-time updates. You can also follow the legislative tracker on this page and check the advocacy updates section for recent news.' },
];

// ── Advocacy: Issue Detail (Scope of Practice) ──

export const advocacyIssueDetail = {
	eyebrow: 'Policy Issue',
	headline: 'Expanding Scope of Practice Access',
	lead: 'A proposed policy package to reduce outdated practice barriers and improve access to timely care in underserved communities.',
	bill: 'SB-1247',
	position: 'Support',
	status: 'Committee hearing scheduled',
	deadline: 'Comments due Friday at 5:00 PM',
	primaryCta: { text: 'Send a Message', href: '#take-action' },
	secondaryCta: { text: 'Download Issue Brief', href: '#resources' },
	tertiaryLink: { text: '← Back to Advocacy', href: '/demos/association/advocacy' },
} as const;

export const advocacyIssueWhyItMatters = [
	{ title: 'Patients wait longer when outdated barriers limit access', description: 'In communities with provider shortages, restrictive practice laws delay care and increase emergency utilization when patients cannot see qualified professionals in a timely manner.' },
	{ title: 'Professionals need clarity to practice to their full training', description: 'Ambiguous or outdated scope-of-practice definitions create confusion, limit care options, and undermine the value of advanced clinical education and certification.' },
	{ title: 'Underserved communities are affected most', description: 'Rural, low-income, and medically underserved populations bear the greatest burden of workforce constraints, facing longer wait times and fewer available providers.' },
];

export const advocacyIssueTimeline = [
	{ label: 'Introduced', date: 'January 2026', status: 'complete' },
	{ label: 'Referred to Committee', date: 'February 2026', status: 'complete' },
	{ label: 'Committee Hearing Scheduled', date: 'May 2026', status: 'active' },
	{ label: 'Member Comment Period Open', date: 'May 2026', status: 'active' },
	{ label: 'Committee Vote', date: 'June 2026 (expected)', status: 'upcoming' },
];

export const advocacyIssuePosition = [
	'Reduce unnecessary practice barriers that limit access without improving safety',
	'Preserve high standards for education and clinical preparation',
	'Expand access in rural and underserved areas where provider shortages are most acute',
	'Improve team-based care coordination across professions',
	'Track outcomes and implementation responsibly with evidence-based review',
];

export const advocacyIssueActions = {
	headline: 'Take action in three minutes',
	steps: [
		{ num: '1', title: 'Review the talking points', description: 'Read the one-page issue brief so you understand the key arguments and data.' },
		{ num: '2', title: 'Personalize your message', description: 'Use the template to add your professional experience and your community context.' },
		{ num: '3', title: 'Send to your representative', description: 'Submit your message through the advocacy portal — it takes less than two minutes.' },
	],
	primaryCta: { text: 'Send a Message', href: '/demos/association/contact' },
	secondaryCta: { text: 'Download Talking Points', href: '#resources' },
} as const;

export const advocacyIssueDates = [
	{ date: 'May 16, 2026', label: 'Comment deadline' },
	{ date: 'May 20, 2026', label: 'Committee hearing' },
	{ date: 'May 5, 2026', label: 'Lobby Day briefing' },
	{ date: 'June 2026', label: 'Expected vote window' },
];

export const advocacyIssueResources = [
	{ title: 'One-Page Issue Brief', format: 'PDF', summary: 'Key data, arguments, and MHPA position on SB-1247 in a shareable one-page format.', access: 'Public' },
	{ title: 'Talking Points', format: 'Template', summary: 'Customizable talking points for calls, emails, and meetings with legislators.', access: 'Public' },
	{ title: 'Member Testimony Guide', format: 'PDF Guide', summary: 'How to prepare and submit written or oral testimony for the committee hearing.', access: 'Member-only' },
	{ title: 'Chapter Discussion Guide', format: 'Toolkit', summary: 'Facilitation guide for chapter-level conversations about scope-of-practice policy.', access: 'Member-only' },
];

export const advocacyIssueUpdates = [
	{ date: 'May 12, 2026', title: 'Committee hearing date confirmed', summary: 'The Senate Health Committee confirmed the hearing for May 20. MHPA is coordinating member testimony.' },
	{ date: 'May 8, 2026', title: 'Coalition support grows to 18 organizations', summary: 'Three additional workforce organizations joined the coalition supporting SB-1247 this week.' },
	{ date: 'April 22, 2026', title: 'Member comment period opened', summary: 'MHPA sent action alerts to 4,800+ members with talking points and comment submission tools.' },
];

// ── Resources: Hero ──

export const resourcesHero = {
	eyebrow: 'Resources',
	headline: 'Practical tools built for working healthcare professionals.',
	lead: 'Explore CE courses, webinars, toolkits, policy briefs, clinical guides, career resources, and member-exclusive materials designed to help you practice, lead, and stay current.',
	supportLine: 'CE learning · Practice support · Policy tools · Member-only resources',
	primaryCta: { text: 'Browse Resource Library', href: '#library' },
	secondaryCta: { text: 'Explore CE Courses', href: '#library' },
	tertiaryLink: { text: 'View Member Benefits →', href: '/demos/association/membership' },
} as const;

// ── Resources: Stats ──

export const resourceStats = [
	{ value: '80+', label: 'professional resources' },
	{ value: '32', label: 'CE-eligible activities' },
	{ value: '18', label: 'member-only toolkits' },
	{ value: '12', label: 'topic collections' },
	{ value: 'Monthly', label: 'updated' },
];

// ── Resources: Featured ──

export const resourcesFeatured = [
	{
		title: 'Pharmacology Update: 2026 Guidelines',
		type: 'CE Course',
		access: 'Member-only',
		ce: '3.0 CE credits',
		summary: 'A self-paced course covering prescribing updates, safety considerations, and clinical decision frameworks.',
		href: '/demos/association/resources/pharmacology-update-2026',
		cta: 'View Course',
	},
	{
		title: 'Legislative Update: What Passed in 2025',
		type: 'Webinar',
		access: 'Public',
		ce: '1.0 CE credit',
		summary: 'A 60-minute overview of the legislative actions that may affect healthcare practice this year.',
		href: '/demos/association/events',
		cta: 'Watch Webinar',
	},
	{
		title: 'Salary & Compensation Benchmarks',
		type: 'Report',
		access: 'Member-only',
		ce: '',
		summary: 'Regional salary data, benefit benchmarks, and negotiation considerations for healthcare professionals.',
		href: '/demos/association/resources',
		cta: 'View Report',
	},
];

// ── Resources: Filter Definitions ──

export const resourceFilters = {
	topics: ['Clinical Practice', 'Pharmacology', 'Advocacy', 'Workforce', 'Leadership', 'Preceptorship', 'Career Growth', 'Telehealth', 'Reimbursement', 'Public Health'],
	types: ['CE Course', 'Webinar', 'Practice Guide', 'Toolkit', 'Policy Brief', 'Template', 'Report', 'Career Resource', 'Chapter Resource'],
	audiences: ['Students', 'New Professionals', 'Practicing Professionals', 'Clinical Leaders', 'Chapter Leaders', 'Employers'],
	access: ['Public', 'Member-only'],
	ce: ['CE eligible', 'No CE'],
} as const;

// ── Resources: Library Items ──

export const resourceLibraryItems = [
	{ title: 'Pharmacology Update: 2026 Guidelines', summary: 'Self-paced module covering the latest prescribing updates and clinical decision frameworks.', type: 'CE Course', topic: 'Pharmacology', audience: 'Practicing Professionals', access: 'Member-only', ce: 'CE eligible', duration: '2.5 hours', date: 'May 2026', href: '/demos/association/resources/pharmacology-update-2026', featured: true },
	{ title: 'Legislative Update: What Passed in 2025', summary: 'A 60-minute overview of the legislative actions that may affect healthcare practice this year.', type: 'Webinar', topic: 'Advocacy', audience: 'Practicing Professionals', access: 'Public', ce: 'CE eligible', duration: '60 min', date: 'January 2026', href: '/demos/association/events', featured: true },
	{ title: 'Salary & Compensation Benchmarks', summary: 'Regional salary data, benefit benchmarks, and negotiation considerations for healthcare professionals.', type: 'Report', topic: 'Career Growth', audience: 'Practicing Professionals', access: 'Member-only', ce: 'No CE', duration: 'Report', date: 'April 2026', href: '/demos/association/resources', featured: true },
	{ title: 'Telehealth Documentation Checklist', summary: 'Step-by-step documentation template for telehealth visits, consent, and follow-up.', type: 'Template', topic: 'Telehealth', audience: 'Practicing Professionals', access: 'Public', ce: 'No CE', duration: 'Template', date: 'March 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Preceptor Onboarding Toolkit', summary: 'Orientation materials, evaluation rubrics, and scheduling templates for new preceptors.', type: 'Toolkit', topic: 'Preceptorship', audience: 'Clinical Leaders', access: 'Member-only', ce: 'No CE', duration: 'Toolkit', date: 'February 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Chapter Meeting Planning Template', summary: 'Agenda templates, speaker coordination guides, and logistics checklists for local chapter events.', type: 'Template', topic: 'Leadership', audience: 'Chapter Leaders', access: 'Member-only', ce: 'No CE', duration: 'Template', date: 'January 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Reimbursement Basics for Clinical Services', summary: 'An introductory guide to billing codes, documentation requirements, and payer navigation.', type: 'Practice Guide', topic: 'Reimbursement', audience: 'New Professionals', access: 'Public', ce: 'CE eligible', duration: '45 min', date: 'April 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Burnout Prevention and Team Resilience', summary: 'Evidence-based strategies for individual resilience and team-level wellness in clinical settings.', type: 'Webinar', topic: 'Workforce', audience: 'Clinical Leaders', access: 'Public', ce: 'CE eligible', duration: '90 min', date: 'March 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Advocacy Talking Points Template', summary: 'Customizable talking points for legislative meetings, phone calls, and written communications.', type: 'Policy Brief', topic: 'Advocacy', audience: 'Practicing Professionals', access: 'Public', ce: 'No CE', duration: 'Template', date: 'May 2026', href: '/demos/association/advocacy#toolkit', featured: false },
	{ title: 'Clinical Decision Support Guide', summary: 'A reference framework for integrating clinical evidence, patient preferences, and risk assessment.', type: 'Practice Guide', topic: 'Clinical Practice', audience: 'Practicing Professionals', access: 'Member-only', ce: 'CE eligible', duration: '1.5 hours', date: 'February 2026', href: '/demos/association/resources', featured: false },
	{ title: 'New Professional Career Roadmap', summary: 'A structured guide to your first five years in healthcare practice — from licensure to leadership.', type: 'Career Resource', topic: 'Career Growth', audience: 'New Professionals', access: 'Public', ce: 'No CE', duration: 'Guide', date: 'January 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Employer Partnership Guide', summary: 'Resources for employers looking to partner with MHPA on recruitment, retention, and workforce development.', type: 'Report', topic: 'Workforce', audience: 'Employers', access: 'Public', ce: 'No CE', duration: 'Guide', date: 'March 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Public Health Readiness Brief', summary: 'A preparedness overview covering emergency response protocols, community health roles, and reporting requirements.', type: 'Policy Brief', topic: 'Public Health', audience: 'Practicing Professionals', access: 'Public', ce: 'No CE', duration: 'Brief', date: 'April 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Mentorship Conversation Guide', summary: 'Structured conversation frameworks for mentors and mentees at different career stages.', type: 'Career Resource', topic: 'Career Growth', audience: 'Students', access: 'Public', ce: 'No CE', duration: 'Guide', date: 'February 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Conference CE Claiming Instructions', summary: 'Step-by-step instructions for claiming CE credit from MHPA conferences and on-demand sessions.', type: 'Practice Guide', topic: 'Clinical Practice', audience: 'Practicing Professionals', access: 'Public', ce: 'No CE', duration: 'Quick Reference', date: 'May 2026', href: '/demos/association/resources', featured: false },
	{ title: 'Practice Question Submission Guide', summary: 'How to submit clinical, legal, or practice-related questions to MHPA for expert review and response.', type: 'Practice Guide', topic: 'Clinical Practice', audience: 'Practicing Professionals', access: 'Member-only', ce: 'No CE', duration: 'Quick Reference', date: 'January 2026', href: '/demos/association/resources', featured: false },
];

// ── Resources: Collections ──

export const resourceCollections = [
	{ title: 'Clinical Practice', summary: 'Evidence-based guides, decision frameworks, and prescribing resources.', count: 14, href: '#library' },
	{ title: 'Advocacy & Policy', summary: 'Talking points, legislative briefs, and grassroots action tools.', count: 8, href: '/demos/association/advocacy#toolkit' },
	{ title: 'Career Growth', summary: 'Career roadmaps, salary data, mentorship guides, and professional branding.', count: 12, href: '#library' },
	{ title: 'Leadership', summary: 'Team resilience, operations strategy, and leadership development resources.', count: 9, href: '#library' },
	{ title: 'Preceptorship', summary: 'Onboarding toolkits, evaluation tools, and clinical education templates.', count: 6, href: '#library' },
	{ title: 'Chapter Tools', summary: 'Meeting templates, event guides, and chapter operations resources.', count: 7, href: '#library' },
];

// ── Resources: Learning Pathways ──

export const resourceLearningPathways = [
	{
		title: 'New Professional Foundations',
		audience: 'Students & New Graduates',
		time: '6 hours',
		modules: ['Career Roadmap', 'Reimbursement Basics', 'Mentorship Conversation Guide', 'Practice Question Submission Guide'],
		href: '#library',
	},
	{
		title: 'Clinical Leadership Track',
		audience: 'Practicing Professionals',
		time: '8 hours',
		modules: ['Pharmacology Update', 'Clinical Decision Support', 'Burnout Prevention & Resilience', 'Preceptor Onboarding Toolkit'],
		href: '#library',
	},
	{
		title: 'Advocacy Readiness Track',
		audience: 'All Members',
		time: '4 hours',
		modules: ['Legislative Update Webinar', 'Advocacy Talking Points', 'Public Health Readiness Brief'],
		href: '/demos/association/advocacy',
	},
];

// ── Resources: Member Access Value ──

export const resourceMemberAccess = [
	{ title: 'Member-only toolkits', description: '18 practice toolkits, chapter templates, and preceptor resources available exclusively to members.' },
	{ title: 'CE and webinar access', description: 'Unlimited access to on-demand CE courses, recorded webinars, and self-paced learning modules.' },
	{ title: 'Practice guidance', description: 'Clinical decision frameworks, documentation templates, and expert Q&A through the practice resource center.' },
	{ title: 'Career and leadership resources', description: 'Salary benchmarks, career roadmaps, leadership development guides, and mentorship tools.' },
];

// ── Resources: FAQ ──

export const resourceFaqs = [
	{ question: 'Are all resources free?', answer: 'Many core resources — including policy briefs, advocacy tools, and career guides — are publicly available. Advanced toolkits, CE courses, and practice guides are member-only.' },
	{ question: 'Which resources are member-only?', answer: 'Member-only resources include CE courses, practice toolkits, salary benchmarks, preceptor materials, and chapter operations guides. Each resource card shows its access level.' },
	{ question: 'How do I know if a course offers CE?', answer: 'CE-eligible resources are labeled with a CE badge showing the number of credits. Look for the "CE eligible" indicator on resource cards in the library.' },
	{ question: 'Can I download toolkits and templates?', answer: 'Yes. Most toolkits and templates are available as downloadable PDFs or editable documents. Member-only materials require an active MHPA membership.' },
	{ question: 'How often are resources updated?', answer: 'The resource library is updated monthly. Clinical resources are reviewed annually, and policy/advocacy tools are updated with each legislative session.' },
	{ question: 'Can students access resources?', answer: 'Students have access to all public resources plus select student-specific career guides and mentorship materials. Student membership unlocks the full library.' },
	{ question: 'Are advocacy resources public?', answer: 'Most advocacy resources — talking points, legislative briefs, and action tools — are publicly available to support broad participation in advocacy efforts.' },
	{ question: 'Can I suggest a new resource?', answer: 'Yes. Members can submit resource suggestions through the contact form or through their chapter representative. The education committee reviews suggestions quarterly.' },
];

// ── Resources: Pharmacology Detail ──

export const resourceDetailPharmacology = {
	eyebrow: 'CE Course',
	headline: 'Pharmacology Update: 2026 Guidelines',
	lead: 'A self-paced learning module covering key prescribing updates, safety considerations, documentation guidance, and clinical decision frameworks for healthcare professionals.',
	access: 'Member-only',
	ce: '3.0 CE credits',
	format: 'Self-paced module',
	audience: 'Practicing Professionals',
	duration: '2.5 hours',
	updated: 'May 2026',
	primaryCta: { text: 'Start Course', href: '#course-outline' },
	secondaryCta: { text: 'Save to My Resources', href: '#access' },
	tertiaryLink: { text: '← Back to Resources', href: '/demos/association/resources' },
	disclaimer: 'This is a fictional course detail page for demo purposes.',
} as const;

export const resourceDetailQuickFacts = [
	{ label: 'Format', value: 'Self-paced module' },
	{ label: 'Credit', value: '3.0 CE' },
	{ label: 'Access', value: 'Member-only' },
	{ label: 'Audience', value: 'Practicing professionals' },
	{ label: 'Duration', value: '2.5 hours' },
	{ label: 'Updated', value: 'May 2026' },
];

export const resourceDetailObjectives = [
	{ title: 'Identify key prescribing updates', description: 'Review the most significant pharmacology changes from 2025–2026 affecting primary and specialty care.' },
	{ title: 'Apply safety and documentation considerations', description: 'Learn updated documentation requirements and safety protocols for high-risk prescribing scenarios.' },
	{ title: 'Review patient communication scenarios', description: 'Practice discussing medication changes, side effects, and alternatives with patients using structured frameworks.' },
	{ title: 'Connect updates to clinical decision workflows', description: 'Integrate new guidelines into your existing clinical decision process with practical application tools.' },
];

export const resourceDetailOutline = [
	{ module: 1, title: '2026 Prescribing Update Overview', length: '30 min', type: 'Video + Reading', locked: false },
	{ module: 2, title: 'Safety Considerations and Documentation', length: '35 min', type: 'Interactive Module', locked: false },
	{ module: 3, title: 'Patient Communication Scenarios', length: '30 min', type: 'Case Studies', locked: true },
	{ module: 4, title: 'Clinical Decision Frameworks', length: '35 min', type: 'Interactive Module', locked: true },
	{ module: 5, title: 'Evaluation and Certificate Steps', length: '20 min', type: 'Assessment', locked: true },
];

export const resourceDetailRelated = [
	{ title: 'Clinical Decision Support Guide', type: 'Practice Guide', ce: 'CE eligible', access: 'Member-only', href: '/demos/association/resources' },
	{ title: 'Telehealth Documentation Checklist', type: 'Template', ce: '', access: 'Public', href: '/demos/association/resources' },
	{ title: 'Practice Question Submission Guide', type: 'Practice Guide', ce: '', access: 'Member-only', href: '/demos/association/resources' },
	{ title: 'Conference CE Claiming Instructions', type: 'Practice Guide', ce: '', access: 'Public', href: '/demos/association/resources' },
];

// ── Resources: Guidance Paths ──

export const resourceGuidancePaths = [
	{ title: 'I need CE credit', description: 'Browse CE-eligible courses and webinars.', href: '#library', icon: 'ce' },
	{ title: 'I need help with practice questions', description: 'Submit a question or browse clinical guides.', href: '#library', icon: 'practice' },
	{ title: 'I want advocacy tools', description: 'Find talking points, briefs, and action resources.', href: '/demos/association/advocacy#toolkit', icon: 'advocacy' },
	{ title: 'I am early in my career', description: 'Start with career roadmaps and mentorship guides.', href: '#library', icon: 'career' },
];

// ── Chapters: Hero ──

export const chaptersHero = {
	eyebrow: 'Chapters & Community',
	headline: 'Your local chapter is where membership comes to life.',
	lead: 'Connect with healthcare professionals in your region through local events, mentorship, leadership opportunities, advocacy briefings, and practical peer support.',
	supportLine: 'Regional chapters · Local events · Mentorship · Volunteer leadership',
	primaryCta: { text: 'Find Your Chapter', href: '#finder' },
	secondaryCta: { text: 'Explore Local Events', href: '#events' },
	tertiaryLink: { text: 'Become a Chapter Volunteer →', href: '#leadership' },
} as const;

// ── Chapters: Stats ──

export const chapterStats = [
	{ value: '24', label: 'local chapters' },
	{ value: '6', label: 'regions' },
	{ value: '120+', label: 'local events annually' },
	{ value: '300+', label: 'volunteer leaders' },
	{ value: '1', label: 'statewide network' },
];

// ── Chapters: Region Cards ──

export const chapterRegions = [
	{ name: 'Northern California', slug: 'northern-california', region: 'Northern California', summary: 'Chapters serving Sacramento, Chico, Redding, Davis, and surrounding areas with monthly events and strong advocacy participation.', memberCount: 850, upcomingEvents: 8, meetingFrequency: 'Monthly', cityFocus: 'Sacramento Chico Redding Davis', tags: ['networking', 'advocacy', 'mentorship', 'education'], href: '/demos/association/chapters/northern-california' },
	{ name: 'Central Valley', slug: 'central-valley', region: 'Central Valley', summary: 'Covering Fresno, Bakersfield, Stockton, Modesto, and rural communities with a focus on workforce and access issues.', memberCount: 520, upcomingEvents: 5, meetingFrequency: 'Monthly', cityFocus: 'Fresno Bakersfield Stockton Modesto', tags: ['networking', 'advocacy', 'education'], href: '/demos/association/chapters' },
	{ name: 'Southern California', slug: 'southern-california', region: 'Southern California', summary: 'The largest regional network, connecting professionals across Los Angeles, San Diego, Orange County, and surrounding areas.', memberCount: 1400, upcomingEvents: 12, meetingFrequency: 'Biweekly', cityFocus: 'Los Angeles San Diego Orange County', tags: ['networking', 'advocacy', 'mentorship', 'leadership', 'education'], href: '/demos/association/chapters' },
	{ name: 'Inland Empire & Desert', slug: 'inland-empire', region: 'Inland Empire & Desert', summary: 'Serving Riverside, San Bernardino, Palm Springs, and desert communities with a focus on rural access and new professional support.', memberCount: 380, upcomingEvents: 4, meetingFrequency: 'Monthly', cityFocus: 'Riverside San Bernardino Palm Springs', tags: ['networking', 'mentorship', 'education'], href: '/demos/association/chapters' },
	{ name: 'Bay Area', slug: 'bay-area', region: 'Bay Area', summary: 'Connecting professionals across San Francisco, Oakland, San Jose, and the broader Bay Area with robust CE programming and leadership development.', memberCount: 1100, upcomingEvents: 10, meetingFrequency: 'Biweekly', cityFocus: 'San Francisco Oakland San Jose', tags: ['networking', 'advocacy', 'mentorship', 'leadership', 'education'], href: '/demos/association/chapters' },
	{ name: 'Coastal Region', slug: 'coastal-region', region: 'Coastal Region', summary: 'Chapters along the central coast serving Santa Barbara, San Luis Obispo, Monterey, and Santa Cruz communities.', memberCount: 290, upcomingEvents: 3, meetingFrequency: 'Monthly', cityFocus: 'Santa Barbara San Luis Obispo Monterey Santa Cruz', tags: ['networking', 'education'], href: '/demos/association/chapters' },
];

// ── Chapters: Finder Filters ──

export const chapterFinderFilters = {
	regions: ['Northern California', 'Central Valley', 'Southern California', 'Inland Empire & Desert', 'Bay Area', 'Coastal Region'],
	interests: ['networking', 'advocacy', 'mentorship', 'education', 'leadership'],
} as const;

// ── Chapters: Community Benefits ──

export const chapterCommunityBenefits = [
	{ title: 'Meet peers who understand your work', description: 'Chapter events connect you with professionals in your area who face the same clinical, administrative, and career challenges.' },
	{ title: 'Learn from local clinical and policy updates', description: 'Chapters host CE dinners, policy briefings, and practice-focused events tailored to regional needs.' },
	{ title: 'Find mentors and leadership opportunities', description: 'Local peer circles, mentorship pairings, and chapter leadership roles build your professional network and resume.' },
	{ title: 'Bring statewide advocacy into your community', description: 'Chapters coordinate local advocacy briefings, legislative outreach, and district-level engagement with elected officials.' },
];

// ── Chapters: Upcoming Events ──

export const chapterEvents = [
	{ date: 'May 22, 2026', chapter: 'Northern California', type: 'Policy Briefing', title: 'Policy Briefing Breakfast', summary: 'Legislative update and advocacy preparation over coffee with Northern California chapter members.', href: '/demos/association/events' },
	{ date: 'May 28, 2026', chapter: 'Central Valley', type: 'Networking', title: 'New Professional Meetup', summary: 'Casual networking for new graduates and early-career professionals in the Fresno area.', href: '/demos/association/events' },
	{ date: 'June 3, 2026', chapter: 'Bay Area', type: 'CE Event', title: 'CE Dinner: Telehealth Documentation', summary: '1.0 CE credit dinner event covering telehealth documentation best practices.', href: '/demos/association/events' },
	{ date: 'June 10, 2026', chapter: 'Inland Empire & Desert', type: 'Advocacy', title: 'Advocacy Roundtable', summary: 'Discussion of local access issues and preparation for upcoming legislative outreach.', href: '/demos/association/advocacy' },
	{ date: 'June 15, 2026', chapter: 'Southern California', type: 'Mentorship', title: 'Student Mentorship Night', summary: 'Structured mentorship conversations pairing students with practicing professionals.', href: '/demos/association/events' },
	{ date: 'June 20, 2026', chapter: 'Coastal Region', type: 'Leadership', title: 'Leadership Coffee', summary: 'Informal leadership development and chapter planning conversation for current and aspiring leaders.', href: '/demos/association/events' },
];

// ── Chapters: Leadership Roles ──

export const chapterLeadership = [
	{ role: 'Chapter Chair', summary: 'Lead chapter strategy, coordinate events, and serve as the primary liaison to MHPA statewide leadership.', commitment: '5–8 hours/month' },
	{ role: 'Education Coordinator', summary: 'Plan and organize local CE events, webinar watch parties, and educational programming for chapter members.', commitment: '3–5 hours/month' },
	{ role: 'Advocacy Liaison', summary: 'Coordinate local advocacy briefings, connect chapter members to statewide campaigns, and support district outreach.', commitment: '3–5 hours/month' },
	{ role: 'Student/New Professional Rep', summary: 'Welcome students and new graduates, organize mentorship events, and connect early-career professionals to chapter resources.', commitment: '2–4 hours/month' },
];

// ── Chapters: Mentorship ──

export const chapterMentorship = {
	headline: 'Find the people who help you grow.',
	description: 'MHPA chapters support mentorship through structured pairings, informal peer circles, and career-stage community groups — all designed to help you learn from professionals who have walked the path before you.',
	pathways: [
		{ title: 'Find a mentor', description: 'Connect with an experienced professional in your specialty or career area through the MHPA mentorship network.', href: '/demos/association/contact' },
		{ title: 'Become a mentor', description: 'Share your experience with the next generation. Mentors report stronger professional satisfaction and expanded networks.', href: '/demos/association/contact' },
		{ title: 'Join a peer circle', description: 'Small-group professional support sessions organized by chapter, career stage, or specialty interest.', href: '#events' },
	],
	cta: { text: 'Explore Mentorship', href: '/demos/association/contact' },
} as const;

// ── Chapters: Resources ──

export const chapterResourceCards = [
	{ title: 'Chapter Meeting Planning Template', type: 'Template', access: 'Member-only', summary: 'Agenda templates, logistics checklists, and speaker coordination guides for chapter events.' },
	{ title: 'Local Advocacy Toolkit', type: 'Toolkit', access: 'Member-only', summary: 'District outreach guides, legislator meeting prep, and grassroots organizing resources.' },
	{ title: 'Mentorship Conversation Guide', type: 'Guide', access: 'Public', summary: 'Structured conversation frameworks for mentors and mentees at different career stages.' },
	{ title: 'Event Promotion Checklist', type: 'Template', access: 'Public', summary: 'Step-by-step checklist for promoting chapter events through email, social media, and word of mouth.' },
	{ title: 'Chapter Leader Onboarding Guide', type: 'Guide', access: 'Member-only', summary: 'Everything new chapter leaders need to know about operations, events, budgets, and MHPA support.' },
	{ title: 'New Member Welcome Script', type: 'Template', access: 'Public', summary: 'Sample welcome messages and onboarding resources for new chapter members.' },
];

// ── Chapters: Member Stories ──

export const chapterStories = [
	{ name: 'Mara Jensen', role: 'FNP-C', chapter: 'Northern California', quote: 'My chapter helped me find people facing the same practice questions, learn what was happening in policy, and get involved without feeling overwhelmed.' },
	{ name: 'David Okafor', role: 'DNP Student', chapter: 'Bay Area', quote: 'As a student, the chapter mentorship night was the first time I felt like I had a real professional network outside my program.' },
	{ name: 'Lisa Reyes', role: 'PA-C, Chapter Chair', chapter: 'Southern California', quote: 'Volunteering as chapter chair gave me leadership experience I could not have gotten anywhere else — and it connected me to the statewide advocacy work.' },
];

// ── Chapters: Volunteer CTA ──

export const chapterVolunteerCTA = {
	headline: 'Want to help build your local professional community?',
	description: 'Chapter volunteers host events, welcome new members, support advocacy, and create the local relationships that make statewide membership valuable.',
	primaryCta: { text: 'Become a Chapter Volunteer', href: '/demos/association/contact' },
	secondaryCta: { text: 'Contact Chapter Support', href: '/demos/association/contact' },
} as const;

// ── Chapters: FAQ ──

export const chapterFaqs = [
	{ question: 'Do I need to be a member to attend chapter events?', answer: 'Most chapter events are open to both members and non-members. Some events — such as CE dinners and mentorship pairings — may be member-only or offer member pricing.' },
	{ question: 'How do I find my chapter?', answer: 'Use the chapter finder above to search by region, city, or interest area. Each chapter page includes meeting details, upcoming events, and contact information for local leaders.' },
	{ question: 'Can students join chapter activities?', answer: 'Absolutely. Student members are welcome at all chapter events and can apply for the Student/New Professional Representative volunteer role.' },
	{ question: 'How often do chapters meet?', answer: 'Most chapters meet monthly. Some larger chapters in urban areas meet biweekly. Meeting frequency and format are listed on each chapter detail page.' },
	{ question: 'Can I volunteer with my chapter?', answer: 'Yes. Chapters are always looking for volunteers — from event planning to advocacy liaison to mentorship coordination. Contact your local chapter leaders to learn about openings.' },
	{ question: 'Are chapter events eligible for CE?', answer: 'Many chapter events offer CE credit, including CE dinners, clinical workshops, and practice-focused presentations. CE eligibility is noted on each event listing.' },
	{ question: 'What if my area does not have an active chapter?', answer: 'Contact MHPA chapter support. The association provides tools and guidance for members interested in starting or reactivating a local chapter.' },
	{ question: 'How do chapters connect to statewide advocacy?', answer: 'Each chapter has an advocacy liaison who coordinates with the MHPA advocacy team. Chapters host local policy briefings, district outreach, and legislative meeting preparation.' },
];

// ── Chapter Detail: Northern California ──

export const chapterDetailNorthernCalifornia = {
	eyebrow: 'Local Chapter',
	headline: 'Northern California Chapter',
	lead: 'A regional network for healthcare professionals across Sacramento, Chico, Redding, Davis, and surrounding communities.',
	memberCount: '850+',
	upcomingEvents: '8',
	meetingFrequency: 'Monthly meetings',
	advocacyStatus: 'Advocacy active',
	regionServed: 'Sacramento, Chico, Redding, Davis, and surrounding areas',
	focusAreas: ['Rural access', 'Workforce development', 'New professional mentorship', 'Legislative outreach'],
	leadershipOpenings: 2,
	studentActivity: 'Active student/new professional programming',
	primaryCta: { text: 'Attend an Event', href: '#events' },
	secondaryCta: { text: 'Contact Chapter Leaders', href: '/demos/association/contact' },
	tertiaryLink: { text: '← Back to Chapters', href: '/demos/association/chapters' },
} as const;

export const chapterDetailQuickFacts = [
	{ label: 'Region', value: 'Northern CA' },
	{ label: 'Meetings', value: 'Monthly' },
	{ label: 'Members', value: '850+' },
	{ label: 'Focus', value: 'Rural access' },
	{ label: 'Openings', value: '2 roles' },
	{ label: 'Students', value: 'Active' },
];

export const chapterDetailEvents = [
	{ date: 'May 22, 2026', type: 'Policy Briefing', title: 'Policy Briefing Breakfast', location: 'Sacramento', summary: 'Legislative update and advocacy preparation over coffee with chapter members.', href: '/demos/association/events' },
	{ date: 'June 5, 2026', type: 'Peer Circle', title: 'New Professional Peer Circle', location: 'Davis', summary: 'Small-group conversation for early-career professionals on practice transitions and career planning.', href: '/demos/association/events' },
	{ date: 'June 18, 2026', type: 'CE Event', title: 'CE Dinner: Documentation Updates', location: 'Sacramento', summary: '1.0 CE credit dinner covering documentation best practices and compliance updates.', href: '/demos/association/events' },
	{ date: 'July 10, 2026', type: 'Open House', title: 'Chapter Leadership Open House', location: 'Chico', summary: 'Learn about volunteer leadership roles and meet current chapter leaders.', href: '/demos/association/chapters/northern-california' },
];

export const chapterDetailLeaders = [
	{ name: 'Dr. Karen Ishida', initials: 'KI', role: 'Chapter Chair', bio: 'Family nurse practitioner with 12 years of practice experience in Sacramento. Focused on workforce development and rural access.' },
	{ name: 'Thomas Obi', initials: 'TO', role: 'Education Coordinator', bio: 'PA-C specializing in emergency medicine. Organizes CE events and clinical education programming for the chapter.' },
	{ name: 'Sofia Delgado', initials: 'SD', role: 'Advocacy Liaison', bio: 'Public health professional coordinating local legislative outreach and connecting members to statewide advocacy campaigns.' },
];

export const chapterDetailPriorities = [
	{ title: 'Rural access and workforce', description: 'Supporting healthcare professionals in underserved Northern California communities and advocating for workforce incentives.' },
	{ title: 'New professional mentorship', description: 'Connecting new graduates with experienced mentors through structured pairings and peer circle events.' },
	{ title: 'Local CE programming', description: 'Hosting CE dinners, clinical workshops, and practice-focused presentations tailored to regional needs.' },
	{ title: 'Advocacy participation', description: 'Preparing members for legislative outreach, Lobby Day, and district-level engagement with elected officials.' },
];

export const chapterDetailInvolvement = [
	{ title: 'Attend a chapter event', description: 'Join a CE dinner, policy briefing, or networking meetup in your area.', href: '#events' },
	{ title: 'Join a peer circle', description: 'Small-group professional support organized by career stage or specialty.', href: '/demos/association/contact' },
	{ title: 'Volunteer for a role', description: 'Chapter leadership, education, advocacy, or student representative.', href: '/demos/association/contact' },
	{ title: 'Bring an issue to the chapter', description: 'Share a practice barrier or policy concern for chapter discussion.', href: '/demos/association/contact' },
];

export const chapterDetailResources = [
	{ title: 'Meeting Calendar', type: 'Calendar', summary: 'Full schedule of upcoming chapter meetings, events, and deadlines.', href: '/demos/association/events' },
	{ title: 'Local Advocacy Toolkit', type: 'Toolkit', summary: 'District outreach guides and legislator meeting preparation resources.', href: '/demos/association/advocacy#toolkit' },
	{ title: 'New Member Guide', type: 'Guide', summary: 'Welcome information, onboarding checklist, and chapter contact details.', href: '/demos/association/resources' },
	{ title: 'Chapter Volunteer Guide', type: 'Guide', summary: 'Roles, expectations, and support resources for chapter volunteers.', href: '/demos/association/resources' },
];

export const chapterDetailAnnouncements = [
	{ date: 'May 14, 2026', title: 'Next chapter meeting announced', summary: 'The May meeting will focus on Lobby Day preparation and local advocacy priorities.' },
	{ date: 'May 8, 2026', title: 'Volunteer roles opening in June', summary: 'Education Coordinator and Student Representative positions will be open for applications starting June 1.' },
	{ date: 'May 2, 2026', title: 'Advocacy briefing recap available', summary: 'A summary of the April policy briefing, including SB-1247 talking points and member feedback, is available in the resource library.' },
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
	'/demos/association/chapters/northern-california': {
		title: 'Northern California Chapter | MHPA',
		description:
			'Connect with healthcare professionals across Sacramento, Chico, Redding, and Davis through the MHPA Northern California Chapter.',
	},
	'/demos/association/resources/pharmacology-update-2026': {
		title: 'Pharmacology Update: 2026 Guidelines | MHPA Resources',
		description:
			'A self-paced CE course covering prescribing updates, safety considerations, and clinical decision frameworks.',
	},
	'/demos/association/advocacy/scope-of-practice': {
		title: 'Expanding Scope of Practice Access | MHPA Advocacy',
		description:
			'Learn about SB-1247, MHPA position on scope-of-practice reform, and how to take action to expand patient access.',
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
