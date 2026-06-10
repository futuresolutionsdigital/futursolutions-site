export interface Testimonial {
	/** The quote, in the client's own words. */
	quote: string;
	/** Person's name. */
	name: string;
	/** Their role/title, e.g. "Owner" or "Medical Director". */
	role: string;
	/** Business or practice name. */
	business: string;
	/** Optional location, e.g. "Austin, TX". */
	location?: string;
	/** Optional related result framed honestly (no fabricated metrics). */
	context?: string;
}

/**
 * Real client testimonials only. This intentionally starts empty — the
 * <Testimonials /> component renders nothing while it is empty, so no
 * placeholder or fabricated proof ever ships. To publish proof, add a real,
 * approved entry below and it appears automatically wherever the component
 * is used (home page, About).
 *
 * Example shape (do not enable until you have written permission to use it):
 * {
 *   quote: 'They rebuilt our site and the consult requests actually started coming in.',
 *   name: 'Jane Doe',
 *   role: 'Owner',
 *   business: 'Example Med Spa',
 *   location: 'Austin, TX',
 * }
 */
export const testimonials: Testimonial[] = [];

export const hasTestimonials = (): boolean => testimonials.length > 0;
