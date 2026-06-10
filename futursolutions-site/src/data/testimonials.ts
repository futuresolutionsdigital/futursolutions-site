export interface Testimonial {
	quote: string;
	name: string;
	role: string;
	isPlaceholder?: boolean;
}

/**
 * Real client testimonials go here. Until they're collected, these are clearly
 * marked placeholders so nothing fabricated ships as if it were a real quote.
 * Replace each entry (and remove `isPlaceholder`) as testimonials come in.
 */
export const testimonials: Testimonial[] = [
	{
		quote: '[PLACEHOLDER — add a real client quote about the result they saw, in their words.]',
		name: '[Client name]',
		role: '[Practice / role]',
		isPlaceholder: true,
	},
	{
		quote: '[PLACEHOLDER — a second client quote, ideally about working with the team or the outcome.]',
		name: '[Client name]',
		role: '[Practice / role]',
		isPlaceholder: true,
	},
	{
		quote: '[PLACEHOLDER — a third client quote, e.g. about clarity, trust, or more booked consults.]',
		name: '[Client name]',
		role: '[Practice / role]',
		isPlaceholder: true,
	},
];

export const hasRealTestimonials = () => testimonials.some((t) => !t.isPlaceholder);
