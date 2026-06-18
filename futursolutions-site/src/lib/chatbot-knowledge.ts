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

/**
 * A focused profile of a single demo, used when the assistant is embedded on
 * that demo site so it can answer as the brand's concierge.
 */
export function buildDemoFocus(slug: string): string {
	const t = templateSystems.find((tpl) => tpl.slug === slug);
	if (!t) return '';
	const lines = [
		`Brand: ${t.name}`,
		`Industry / audience: ${t.audience}`,
		`What it is: ${t.shortDescription}`,
		`Business types served: ${t.businessTypes.join(', ')}`,
		`Primary visitor goals: ${t.goals.join(', ')}`,
		`Pages on this demo site: ${t.includedPages.join(', ')}`,
		`This demo's home: /demos/${t.slug}`,
		`FutureSolutions Foundation detail (for "get one like this"): /templates/${t.slug}`,
	];
	if (t.atAGlance) {
		lines.push(`Best for: ${t.atAGlance.bestFor}`);
		lines.push(`Primary goal: ${t.atAGlance.primaryGoal}`);
		lines.push(`Typical visitor path: ${t.atAGlance.typicalPath}`);
	}
	if (t.conversionFeatures?.length) {
		lines.push(`Conversion features shown: ${t.conversionFeatures.join(', ')}`);
	}
	if (t.backendFeatures?.length) {
		lines.push(`Backend / system features: ${t.backendFeatures.join(', ')}`);
	}
	return lines.join('\n');
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
/services/template-setup — Foundation Setup service detail
/services/custom-healthcare-websites — Signature Custom Websites detail
/services/ongoing-optimization — Care and Optimization detail
/services/local-visibility — Local Visibility (SEO) service
/services/growth-systems — Growth Systems (lead capture, booking, CRM, follow-up)
/audit — Free Website and Systems Audit (main conversion path)
/resources — Published guides on website strategy, trust, conversion, and visibility
/demos/{slug} — Live demo sites (med-spa, solo-practice, association, premium-wellness-clinic, hormone-trt)

=== WEBSITE AND SYSTEMS AUDIT ===
The audit is free, takes ~2 business days, and is NOT a sales pitch. It reviews:
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
