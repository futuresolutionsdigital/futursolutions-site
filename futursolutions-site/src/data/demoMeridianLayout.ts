/**
 * Props shared across Meridian Wellness Practice demo pages for DemoLayout.
 */
export interface DemoNavLink {
	label: string;
	href: string;
}

export const meridianDemoLayoutDefaults = {
	brandLine1: 'Meridian',
	brandLine2: 'Wellness Practice',
	brandHomeHref: '/demos/solo-practice',
	brandAriaLabel: 'Meridian Wellness Practice demo home',
	navLabel: 'Meridian Wellness Practice demo navigation',
	navItems: [
		{ label: 'Services', href: '/demos/solo-practice/services' },
		{ label: 'New Patients', href: '/demos/solo-practice/new-patients' },
		{ label: 'Contact', href: '/demos/solo-practice/contact' },
	],
	primaryCtaLabel: 'Request Appointment',
	primaryCtaHref: '/demos/solo-practice/contact',
	footerBrandHref: '/demos/solo-practice',
	footerBrandText: 'Meridian Wellness Practice',
	footerNote: 'Demonstration solo practice site showcasing a Future Solutions website template.',
	footerLinks: [
		{ label: 'Services', href: '/demos/solo-practice/services' },
		{ label: 'New Patients', href: '/demos/solo-practice/new-patients' },
		{ label: 'Template Details', href: '/templates/solo-practice' },
	],
} as const;
