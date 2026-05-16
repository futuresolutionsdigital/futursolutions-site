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
