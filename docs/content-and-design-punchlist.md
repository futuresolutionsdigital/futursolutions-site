# FutureSolutions — Content and Design Punchlist

> Design, content, UX, and credibility issues to address.
> Organized by category. Includes specific findings from codebase inspection.

---

## Copy Consistency Issues

### Naming
- **"Demos" nav label vs "Website Foundations" branding.** The header nav says "Demos" and links to `/templates`. The research recommends audience- or solution-led navigation. Consider renaming to "Foundations" or "Library" in the nav.
- **"template-setup" slug** in service routes (`/services/template-setup`) still uses the word "template." The user-facing title is correct ("Website Foundations"), but the URL contains "template." Consider a future redirect from `/services/template-setup` to `/services/website-foundations`.
- **Footer "Browse all Foundations"** links to `/templates` — this is correct naming but the URL path contains "templates."
- **"Backend" route** (`/backend`) is an internal/developer term. The page title says "Growth Systems & Backend Lead Systems." Consider renaming the route to `/growth-systems` for user clarity.

### Service slugs vs public names
| Slug | Public Name | URL | Match? |
|---|---|---|---|
| `template-setup` | Website Foundations | `/services/template-setup` | Mismatched |
| `custom-healthcare-websites` | Signature Custom Websites | `/services/custom-healthcare-websites` | Acceptable |
| `ongoing-optimization` | Care and Optimization | `/services/ongoing-optimization` | Acceptable |
| `backend-system-setup` | Growth System Setup | `/backend` | Route name is internal |
| `seo-local-visibility-foundation` | Local Visibility | `/seo` | Acceptable |

### Copy precision
- Hero kicker: "New — Lumen Health House — premium wellness clinic demo is live" — this will need updating as new demos launch. Consider making this data-driven or removing when no longer fresh.
- Hero headline uses "Growth Systems" with underline highlight — good, aligned with research.
- "3 offers · 1 diagnostic" in the system map header — accurate and clear.
- Audit form footer says "This form is prepared for CRM and scheduling integration. In a live build, submissions route to email, GoHighLevel, or your preferred lead pipeline." — **this must be removed or updated before launch.** It signals the form is a prototype.

---

## CTA Consistency Issues

### Current CTA audit
| Location | Primary CTA | Secondary CTA | Aligned? |
|---|---|---|---|
| Homepage hero | Get a Website Audit → | Explore Live Demos | Yes |
| Header (desktop) | Get a Website Audit → | Explore Live Demos | Yes |
| Header (mobile) | Get a Website Audit | Explore Live Demos | Yes |
| Services hero | Get a Website Audit | Explore Live Demos | Yes |
| Services final | Get a Website Audit | Explore Live Demos | Yes |
| Backend page | Get a Website Audit | Explore Live Demos | Verify |
| SEO page | Get a Website Audit | Explore Live Demos | Verify |
| Resources page | Get a Website Audit | Explore Live Demos | Verify |
| Foundation detail pages | View Live Demo / Get This Foundation Customized | Varies | Good |
| Audit confirmation | Explore Live Demos | — | Good |

### Issues found
- CTA hierarchy is generally consistent — audit as primary, demos as secondary. This matches the research recommendation.
- The header has "Explore Live Demos" as a text link and "Get a Website Audit" as a button. The research recommends "Book a Strategy Call" as the persistent header CTA. Consider whether the audit CTA or a strategy call CTA is more appropriate for the header.
- No "Book a Strategy Call" CTA exists anywhere on the site yet. The research recommends this as a third-tier CTA.

---

## Color / Contrast Issues

### Generally strong
- Lane accent system is well-implemented with tint, ink, and solid variants.
- Dark (`section-ink`) sections have explicit light text tokens.
- `--color-ink-muted: rgba(229, 233, 242, 0.78)` provides adequate contrast on dark backgrounds.

### Potential issues to verify
- **Growth System sections** — previously identified contrast issues with headings on dark panels. Verify that the fixes from the final polish pass held.
- **Foundation detail pages** on `hormone-trt` — uses dark palette; verify text contrast on all sections.
- **Resource cards** with "Planned" status — verify badge contrast.
- **Services page decision matrix** hover states — verify text remains readable on tinted backgrounds.
- **Footer text** `var(--color-muted)` (#4F5B6B) on `var(--color-bg)` (#FAFAFA) — contrast ratio is approximately 5.1:1, which passes AA for normal text. Verify.

---

## Visual Hierarchy Issues

### Homepage
- **10-second test assessment:** The hero does communicate who FuturSolutions is for, what it offers, and the primary CTA. However, the eyebrow ("Healthcare websites + growth systems") + headline + lead paragraph + system map is a lot of visual information before scrolling. A cold visitor may not absorb all of it.
- **Recommendation:** Consider whether the system map could be simplified or moved below the fold. The hero's job is 10-second clarity, not comprehensive explanation.
- **Demo library preview** is present but could benefit from a stronger visual treatment — perhaps a larger card with a real screenshot or mockup rather than card-only rendering.
- **ProofStrip component** exists but needs actual proof (logos, testimonials, metrics). Currently may render empty or placeholder.

### Services page
- Decision matrix is a strong differentiator. Keep it prominent.
- The 3-primary + 2-supporting card layout is clear.
- Consider whether the "Process Preview" section (Audit → Strategy → Build → Optimize) should be its own page or remain a brief overview.

### Foundation detail pages
- Deep and well-structured.
- **Missing:** Mobile mockup previews, real screenshots, and timeline estimates.
- **Missing:** Social proof / testimonial slot.
- The at-a-glance section is a strong scannability element.

### Backend page
- Flow diagram is helpful.
- **Could be stronger:** Attio-style system visualization rather than just a step list.
- **Missing:** Specific workflow examples (e.g., "Patient submits form → CRM creates contact → Calendar invite sent → Missed-call text-back fires → Day 2 email drip begins").

---

## Component Sameness Issues

- **Card-grid pattern** is used heavily: services cards, demo cards, resource cards, foundation sections. The lane accent system helps differentiate, but the grid layout itself is repetitive.
- **Recommendation:** Vary section layouts more. Use alternating full-width/split layouts, editorial text blocks, and visual elements (diagrams, mockups, process flows) between card grids.
- **Every CTA band** follows a similar pattern: eyebrow + heading + lead + button row. Consider one or two variations (e.g., a darker CTA band, a split layout with image).

---

## Mobile Issues

### Verified working
- Hamburger menu opens/closes correctly at 860px breakpoint
- ChatWidget goes full-screen on mobile
- Grid layouts collapse to single column at appropriate breakpoints
- Button rows stack vertically on small screens

### To verify on device
- Foundation detail page section stacking on narrow viewports
- Demo page navigation on mobile (demo layouts have their own mobile nav scripts)
- Audit form on mobile — 2-column grid collapses to 1-column at 620px, verify usability
- System map cards on homepage — collapse to 2-col at 1080px, 1-col at 520px
- Services decision matrix rows — collapse at 1040px, verify readability
- Long demo page content (association demo has many sub-pages)

---

## Accessibility Issues

### Currently strong
- Global `:focus-visible` styles applied
- `aria-labelledby` on major sections
- `aria-label` on navigation elements
- `aria-expanded` on hamburger and chatbot
- `aria-current="page"` on active nav links
- `prefers-reduced-motion` respected
- Semantic HTML: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<details>`/`<summary>`
- ChatWidget has `role="dialog"` and ARIA attributes

### To verify
- [ ] Color contrast ratios meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
- [ ] All interactive elements are keyboard-navigable
- [ ] Screen reader testing (NVDA or VoiceOver)
- [ ] Skip-to-content link (currently missing — add to BaseLayout)
- [ ] Form field labels are properly associated (audit form uses `<label>` wrapping, which is correct)
- [ ] Select elements are navigable with keyboard
- [ ] ChatWidget can be dismissed with Escape key
- [ ] Decorative images have `aria-hidden="true"` or `alt=""`
- [ ] Hero ticker has appropriate ARIA (currently `aria-label="Industries we serve"` — good)
- [ ] Demo page forms have ARIA labels (verified: they do)

---

## Credibility / Proof Gaps

This is the **most significant weakness** relative to the research recommendations.

### Currently present
- 5 live multi-page demos (strong proof of capability)
- Lane accent system implies systematic thinking
- Flow diagram on Growth Systems page
- Process preview on services page

### Missing
| Proof Type | Status | Priority |
|---|---|---|
| Client testimonials | None | P2–P3 (cannot fabricate) |
| Case studies | None | P2–P3 (cannot fabricate) |
| Client logos | None | P2–P3 (cannot fabricate) |
| Metrics / results | None | P3 (cannot fabricate) |
| Awards / certifications | None | P3 |
| Before/after examples | None | P3 |
| Ratings (Google, Clutch) | None | P3 |
| Years of experience | Not mentioned | P2 |
| Team / founder story | No about page | P2 |
| Technology stack explained | Partially on services page | P2 |
| Process documentation | Brief preview only | P2 |

### Honest assessment
The site currently relies on the demos as its primary proof. That is a legitimate and strong proof model (the research notes that live demos are rare in the healthcare space). However, the absence of any third-party proof (testimonials, logos, metrics) means the site must work harder on structural trust signals: clear process, transparent language, precise compliance language, and operational detail.

**Do not fabricate proof.** Instead:
1. Add a testimonial collection workflow after the first 2–3 clients
2. Structure case study templates for future use
3. Add an "Our Approach" or About section that explains why FutureSolutions exists
4. Add technology stack translation (Astro, Sanity, Vercel, GoHighLevel) in buyer language
5. Use the demos themselves more prominently as proof — larger screenshots, mobile mockups, feature callouts

---

## Missing Pages

| Page | Route | Priority | Why |
|---|---|---|---|
| Privacy Policy | `/privacy` | P0 | Legal requirement |
| Terms of Service | `/terms` | P0 | Legal requirement |
| About / Our Approach | `/about` | P2 | Trust, founder story, point of view |
| 404 Error | `/404` | P1 | Brand experience on bad links |
| Industry: Med Spa | `/industries/med-spa` | P2 | Vertical SEO, buyer relevance |
| Industry: Hormone/TRT | `/industries/hormone-trt` | P2 | Vertical SEO, buyer relevance |
| Industry: Solo Practice | `/industries/solo-practice` | P2 | Vertical SEO, buyer relevance |
| Industry: Wellness | `/industries/wellness` | P2 | Vertical SEO, buyer relevance |
| Industry: Association | `/industries/association` | P2 | Vertical SEO, buyer relevance |

---

## Additional Findings from Codebase Audit

### Dead code
- **`src/layouts/DemoLayout.astro`** — legacy layout, never imported by any page. Safe to remove.
- **`src/components/ResourceCard.astro`** — built for resources data but never imported. Safe to remove.
- **`src/lib/sanity.ts`** — creates a Sanity client that is never imported by any page. Dead code until CMS is wired up.

### "Template" in demo meta descriptions
- `/demos/med-spa/index.astro` — meta title/description uses "Premium Med Spa Website Template" and "med spa website template." Should be "Website Foundation" or "demo" in premium-facing copy.
- `/demos/association/index.astro` — meta description uses "professional association website template." Same issue.

### Audit page hero script gap
- `src/pages/audit/index.astro` hero customization script maps only 4 of 5 template slugs for page-level hero copy (excludes `hormone-trt`), while `AuditFormShell.astro` correctly handles all 5. When a visitor arrives at `/audit?template=hormone-trt`, the form pre-fills correctly but the page hero copy may not customize.

### Placeholder social links in demo
- `src/data/aurea.ts` lines 340–341 — footer social links for Instagram and Facebook use `href: '#'`. Rendered in `AureaLayout.astro` with an `aria-label` noting "placeholder link." Acceptable for a demo but worth noting.

---

## Post-Launch Content Ideas

| Content | Type | Related Service | Priority |
|---|---|---|---|
| Foundation vs Custom Website Guide | Article / lead magnet | All | P2 |
| Clinic Website and Booking Flow Checklist | Downloadable PDF | Growth Systems | P2 |
| Med Spa Homepage Conversion Checklist | Article | Med Spa Foundation | P2 |
| TRT Clinic Lead Follow-Up Blueprint | Article | Growth Systems | P2 |
| Association Website Planning Checklist | Article | Association Foundation | P3 |
| What Makes a Healthcare Website Trustworthy | Article | Custom Websites | P2 |
| Why Most Practice Websites Don't Convert | Article | Audit | P2 |
| Local SEO Basics for Medical Practices | Article | Local Visibility | P2 |
| Video demo walkthroughs (per Foundation) | Video | Foundations | P3 |
| Case study: First client | Case study | All | P3 |

---

## Design and Clarity Evaluation

### Does the homepage explain the offer within 10 seconds?
**Mostly yes.** The hero communicates "premium websites and Growth Systems for healthcare brands" with a clear CTA hierarchy. The "What we build" system map immediately below shows the 3+1 structure. A cold visitor will understand the category within 10 seconds. However, the density of information (eyebrow + headline + lead + CTAs + system map) above the fold is high for a first-time visitor.

### Does the hero explain who it is for, what is offered, and why it matters?
**Yes.** "Premium websites and Growth Systems for healthcare brands" covers all three. The industry ticker reinforces verticals. The system map shows the four paths.

### Does the site visually communicate premium healthcare + systems depth?
**Partially.** The design system (palette, typography, spacing, cards) feels premium. The lane accent system implies systematic thinking. However, the absence of real photography, mockups, or system visualizations makes it feel more like a clean component kit than a premium studio portfolio. Real screenshots and mobile previews would significantly strengthen this.

### Is the color palette restrained but memorable?
**Yes.** The sage/teal accent (`#5F8F8B`) is distinctive without being aggressive. The lane accent system adds meaningful color variation. The palette avoids the overused blue/purple healthcare gradient.

### Are accent colors used consistently by offer type?
**Yes.** Foundation (sage), Custom (slate), Growth (blue), Audit (sand), Care (mineral). Used in tags, chips, accent bars, and tinted backgrounds consistently.

### Does the demo library feel like proof, not inventory?
**Mostly yes.** The 5 demos are deep, multi-page, and industry-specific. Each has distinct branding, content, and UX. The Foundation detail pages contextualize them well. However, the `/templates` page itself could benefit from larger preview cards, screenshots, and a stronger "these are live proof sites" framing rather than a card grid.

### Do Foundation detail pages feel distinct by niche?
**Yes.** Each has a unique color palette via `foundationPalette`, niche-specific content, distinct audience details, and relevant FAQs. The hormone-trt page uses a darker treatment that differentiates it further.

### Is the Growth Systems explanation clear in plain English?
**Partially.** The `/backend` page explains the flow (Visit → Form → CRM → Booking → Follow-up → Pipeline), but could benefit from a more visual, diagram-heavy explanation. The Attio-style system visualization recommended by the research is not yet implemented.

### Is the audit the obvious next step?
**Yes.** The audit CTA appears in the hero, header, every service card, every Foundation detail page, the services page final CTA, the resources page, and the SEO page. The form is well-structured with contextual pre-fill. The audit is clearly positioned as the entry point.

### Does the site feel too component-kit/card-grid heavy?
**Somewhat.** Services, demos, resources, Foundation sections, and process steps all use card grids. The lane accent system helps, but more layout variation (editorial text blocks, split layouts, visual elements) would reduce repetitiveness.

### Are any important sections too low-contrast?
**Previously identified and fixed**, but should be re-verified on Growth Systems sections, hormone-trt Foundation detail page, and any `section-ink` areas.

### Is mobile polished enough?
**Likely yes for structure**, but needs device testing. Responsive breakpoints are defined and grids collapse appropriately. The hamburger menu and ChatWidget work on mobile. Actual device testing is needed to verify touch targets, text sizing, and overflow.
