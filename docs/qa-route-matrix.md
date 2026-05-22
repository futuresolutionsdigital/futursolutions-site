# FutureSolutions — QA Route Matrix

> Route-by-route QA checklist. Check each box after manual verification.
> Routes marked "verify-only" are demo sites that should not be modified.

---

## Parent Site Routes

| Route | Purpose | Desktop | Mobile | Links | Forms | SEO/Meta | A11y | Notes |
|---|---|---|---|---|---|---|---|---|
| `/` | Homepage | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify hero messaging, system map, CTA hierarchy, demo preview, ticker animation, ChatWidget |
| `/templates` | Demo library / Foundation browser | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify all 5 Foundation cards render, "Demo Coming Soon" badge on entries without demos, links to detail pages work |
| `/services` | Solutions overview | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify decision matrix, 3 primary + 2 supporting cards, lane accents, process section, CTAs |
| `/audit` | Audit form | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | **CRITICAL:** Verify form submits to GHL. Verify all fields work. Verify template pre-fill via `?template=slug`. Verify honeypot. Verify redirect to `/audit-requested`. |
| `/audit-requested` | Confirmation page | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify template context from URL param. Verify demo card links. Verify messaging. |
| `/seo` | Local Visibility service | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify content, CTAs, internal links |
| `/resources` | Content roadmap / resource hub | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify all 10 planned entries render. Verify "Planned" status badges. Verify CTAs. |
| `/backend` | Growth Systems page | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify flow diagram, problem section, modules, CTAs, compliance language |
| `/services/template-setup` | Website Foundations detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify content, FAQs, CTAs, internal links |
| `/services/custom-healthcare-websites` | Signature Custom detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify content, FAQs, CTAs, internal links |
| `/services/ongoing-optimization` | Care and Optimization detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify content, FAQs, CTAs, internal links |

---

## Foundation Detail Pages

| Route | Purpose | Desktop | Mobile | Links | Forms | SEO/Meta | A11y | Notes |
|---|---|---|---|---|---|---|---|---|
| `/templates/med-spa` | Med Spa Foundation detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify at-a-glance, audience, pages, features, FAQs, palette accent (rose), demo link, audit CTA with pre-fill |
| `/templates/solo-practice` | Solo Practice Foundation detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify all sections, palette accent (warm amber), demo link, audit CTA with pre-fill |
| `/templates/association` | Association Foundation detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify all sections, palette accent (blue-slate), demo link, audit CTA with pre-fill |
| `/templates/hormone-trt` | Hormone/TRT Foundation detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify all sections, palette accent (forest), demo link, contrast on dark sections, audit CTA with pre-fill |
| `/templates/premium-wellness-clinic` | Wellness Clinic Foundation detail | [ ] | [ ] | [ ] | N/A | [ ] | [ ] | Verify all sections, palette accent (warm teal), demo link, audit CTA with pre-fill |

---

## Live Demo Routes (Verify Only — Read-Only)

> These are complete demo sites. Do not modify unless a broken link or shared routing issue is found.
> Check that they load, navigation works, and demo banner is visible.

| Route | Purpose | Loads | Demo Banner | Nav Works | ChatWidget | Notes |
|---|---|---|---|---|---|---|
| `/demos/med-spa` | Auréa Med Spa demo homepage | [ ] | [ ] | [ ] | [ ] | Multi-page: treatments, providers, results, about, contact, membership, concerns |
| `/demos/solo-practice` | Aster Private Health demo homepage | [ ] | [ ] | [ ] | [ ] | Multi-page: services, about, how-it-works, new-patients, pricing, contact, patient-portal, resources |
| `/demos/association` | NPA Association demo homepage | [ ] | [ ] | [ ] | [ ] | Multi-page: membership, events, resources, chapters, career-center, advocacy, about, contact |
| `/demos/hormone-trt` | Vantage Men's Health demo homepage | [ ] | [ ] | [ ] | [ ] | Multi-page: testosterone, ED, weight loss, how-it-works, pricing, book-consultation, assessment |
| `/demos/premium-wellness-clinic` | Lumen Health House demo homepage | [ ] | [ ] | [ ] | [ ] | Multi-page: services (6 detail pages), providers, new-clients, memberships, resources (8 articles), reviews, contact |

---

## Shared Component Checks

| Component | Check | Status | Notes |
|---|---|---|---|
| Header | Desktop nav links resolve | [ ] | Demos, Solutions, Resources, Audit |
| Header | Mobile hamburger opens/closes | [ ] | Test at 860px breakpoint |
| Header | CTA buttons work | [ ] | "Explore Live Demos" + "Get a Website Audit" |
| Header | Active state shows on correct page | [ ] | Test on each nav route |
| Footer | All Solution links resolve | [ ] | 5 links in Solutions column |
| Footer | All Demo links resolve | [ ] | 6 links in Live Demos column |
| Footer | All Company links resolve | [ ] | Resources, Services, Local Visibility, Audit |
| Footer | Legal links resolve | [ ] | Privacy, Terms (after creation) |
| ChatWidget | FAB appears on all pages | [ ] | Check on parent site and demo pages |
| ChatWidget | Panel opens/closes | [ ] | Test FAB click and close button |
| ChatWidget | Responds to messages | [ ] | Requires OPENAI_API_KEY in env |
| ChatWidget | Mobile full-screen mode | [ ] | Test on mobile viewport |
| ChatWidget | Accessibility (keyboard nav) | [ ] | Tab to FAB, Enter to open, Escape to close |

---

## Cross-Cutting Checks

| Check | Status | Notes |
|---|---|---|
| All canonical URLs use production domain | [ ] | Currently point to `futursolutions.vercel.app` |
| Meta descriptions present on all parent pages | [ ] | Spot-check each route |
| OG images present | [ ] | Not yet implemented |
| robots.txt accessible at `/robots.txt` | [ ] | Not yet created |
| Sitemap accessible at `/sitemap-index.xml` | [ ] | Not yet configured |
| No `href="#"` links on parent site | [ ] | Verified: none found in `src/` |
| No TODO/FIXME comments in source | [ ] | Verified: none found |
| No `console.log` in production code | [ ] | Verified: none found |
| Build passes with zero warnings | [ ] | Verified: clean build |
| Privacy policy page exists | [ ] | Not yet created |
| Terms page exists | [ ] | Not yet created |
| 404 page is branded | [ ] | Not yet created |
| Analytics fires on page load | [ ] | Not yet installed |
| Audit form submission tracked | [ ] | Not yet implemented |
