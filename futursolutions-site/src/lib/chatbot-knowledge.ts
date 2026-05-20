import { templateSystems } from '../data/templates';
import { serviceOfferings } from '../data/services';
import { resources } from '../data/resources';

function buildFoundationsBlock(): string {
	return templateSystems
		.map((t) => {
			const lines = [
				`Name: ${t.name}`,
				`Slug: ${t.slug}`,
				`Category: ${t.category}`,
				`Audience: ${t.audience}`,
				`Description: ${t.shortDescription}`,
				`Business types: ${t.businessTypes.join(', ')}`,
				`Key goals: ${t.goals.join(', ')}`,
				`Included pages: ${t.includedPages.join(', ')}`,
				`Demo URL: ${t.demoUrl ?? 'Coming soon'}`,
				`Detail page: /templates/${t.slug}`,
				`Audit URL: ${t.auditUrl}`,
			];
			if (t.atAGlance) {
				lines.push(`Best for: ${t.atAGlance.bestFor}`);
				lines.push(`Primary goal: ${t.atAGlance.primaryGoal}`);
				lines.push(`Typical path: ${t.atAGlance.typicalPath}`);
			}
			return lines.join('\n');
		})
		.join('\n\n');
}

function buildServicesBlock(): string {
	return serviceOfferings
		.map((s) =>
			[
				`Name: ${s.name}`,
				`Description: ${s.shortDescription}`,
				`Best for: ${s.bestFor}`,
				`Includes: ${s.includes.join(', ')}`,
				`Why it matters: ${s.whyItMatters}`,
				`Detail page: ${s.ctaHref}`,
			].join('\n'),
		)
		.join('\n\n');
}

function buildResourcesBlock(): string {
	return resources
		.map((r) =>
			[
				`Title: ${r.title}`,
				`Category: ${r.category}`,
				`Summary: ${r.excerpt}`,
				`Status: ${r.status}`,
			].join('\n'),
		)
		.join('\n\n');
}

export function buildKnowledgeContext(): string {
	return `
=== WEBSITE FOUNDATIONS (5 available) ===
FutureSolutions offers five industry-specific Website Foundations — polished, strategic website starting points based on real business models. Each has a live demo visitors can explore.

${buildFoundationsBlock()}

=== SERVICES ===
FutureSolutions offers five service lanes:

${buildServicesBlock()}

=== RESOURCES (Content Roadmap) ===
FutureSolutions is developing guides and articles. These are planned but not yet published. You can mention their topics when relevant, but note they are coming soon. Direct visitors to /resources to see the roadmap or to /audit for immediate help.

${buildResourcesBlock()}

=== KEY SITE ROUTES ===
/ — Homepage
/templates — Browse all Website Foundations with live demos
/templates/{slug} — Individual Foundation detail page (med-spa, solo-practice, association, premium-wellness-clinic, hormone-trt)
/services — All services overview
/services/template-setup — Website Foundations service detail
/services/custom-healthcare-websites — Signature Custom Websites detail
/services/ongoing-optimization — Care and Optimization detail
/seo — Local Visibility service
/backend — Growth System Setup
/audit — Free Website and Systems Audit (main conversion path)
/resources — Content roadmap (planned articles)
/demos/{slug} — Live demo sites (med-spa, solo-practice, association, premium-wellness-clinic, hormone-trt)

=== WEBSITE AND SYSTEMS AUDIT ===
The audit is free, takes ~5 business days, and is NOT a sales pitch. It reviews:
- First-impression trust
- Service clarity and structure
- Booking/conversion path
- Local visibility (SEO structure)
- Mobile experience
- Follow-up system readiness

After the audit, FutureSolutions provides written notes or a Loom walkthrough with a recommended next step. Visitors can request an audit at /audit.

If a visitor already has a Foundation in mind, the audit URL can include a template parameter (e.g., /audit?template=med-spa) to pre-fill context.
`.trim();
}
