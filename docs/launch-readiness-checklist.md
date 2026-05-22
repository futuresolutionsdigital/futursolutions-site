# FutureSolutions Launch Readiness Checklist

> Checkbox-based checklist organized by priority. Every item includes affected files/routes, rationale, and acceptance criteria.
> Source of truth: `docs/research/futuresolutions-market-research.md` and `docs/site-audit.md`.

---

## P0 — Launch Blockers

Things that **must be fixed** before production. The site cannot go live without these.

---

- [ ] **P0 — Connect audit form to GoHighLevel (or email fallback)**
  - Routes/files: `src/components/AuditFormShell.astro`, `src/pages/api/audit.ts` (new), `src/pages/audit/index.astro`
  - Why it matters: The audit form is the primary conversion mechanism. It currently has `onsubmit="return false"` and a `type="button"` submit with no handler. Submitting the form does literally nothing. Without this, the site cannot capture a single lead.
  - Acceptance criteria: Form submits to GHL webhook (or server-side API route that forwards to email + GHL). Success redirects to `/audit-requested`. Errors show an inline message. Spam protection (honeypot at minimum) is active. Test submission verified in GHL pipeline.

- [ ] **P0 — Fix canonical URLs to production domain**
  - Routes/files: `src/pages/index.astro`, `src/pages/services/index.astro`, `src/pages/templates/[slug].astro`, `src/pages/backend/index.astro`, `src/pages/seo/index.astro`, `src/pages/resources/index.astro`, `src/pages/audit/index.astro`, `src/pages/services/*.astro`, `src/layouts/BaseLayout.astro`
  - Why it matters: All canonical URLs and OG URLs are hardcoded to `https://futursolutions.vercel.app`. This hurts SEO, creates duplicate content signals, and looks unprofessional in social sharing. If the production domain is `futursolutions.io`, every canonical and OG URL must reflect that.
  - Acceptance criteria: All `canonicalUrl` and `ogUrl` references use the production domain. Consider centralizing the base URL in an env var or config constant to avoid future duplication.

- [ ] **P0 — Add robots.txt**
  - Routes/files: `public/robots.txt` (new)
  - Why it matters: Without robots.txt, crawlers have no guidance. The site needs to allow crawling of parent pages, disallow `/api/`, and reference the sitemap.
  - Acceptance criteria: `public/robots.txt` exists with `User-agent: *`, `Allow: /`, `Disallow: /api/`, and `Sitemap:` directive pointing to the production sitemap URL.

- [ ] **P0 — Add sitemap generation**
  - Routes/files: `astro.config.mjs`, `package.json` (if `@astrojs/sitemap` needed)
  - Why it matters: Search engines need a sitemap to discover and index all pages. Without it, crawl coverage is poor.
  - Acceptance criteria: `@astrojs/sitemap` is configured in `astro.config.mjs` with the correct production `site` URL. Build produces a valid `sitemap-index.xml`. Demo routes are included. API routes are excluded.

- [ ] **P0 — Create privacy policy page**
  - Routes/files: `src/pages/privacy/index.astro` (new)
  - Why it matters: Legal requirement for any site that collects personal information (the audit form collects name, email, phone, business details). Also required for Google Analytics, Google Ads, and most ad platforms.
  - Acceptance criteria: `/privacy` route exists. Page explains what data is collected, how it is used, how it is stored, third-party sharing (GHL, analytics), cookie use, and contact information. Footer links to it.

- [ ] **P0 — Create terms of service page**
  - Routes/files: `src/pages/terms/index.astro` (new)
  - Why it matters: Standard legal requirement for a professional service business website.
  - Acceptance criteria: `/terms` route exists. Footer links to it.

- [ ] **P0 — Add healthcare compliance language to appropriate pages**
  - Routes/files: `src/pages/backend/index.astro`, `src/pages/privacy/index.astro` (new), `src/components/Footer.astro`
  - Why it matters: The research warns against blanket "HIPAA-compliant" claims and recommends precise, scoped compliance language. Currently there is zero compliance language on the site.
  - Acceptance criteria: Privacy policy includes form data handling disclosure. Backend/Growth Systems page includes a clear statement about data handling practices. No blanket HIPAA claims. Language follows the rules in `docs/strategy-reference.md`.

---

## P1 — Launch Critical

Things that **strongly affect** clarity, conversion, SEO, tracking, or form handling. Should be resolved before or immediately at launch.

---

- [ ] **P1 — Add analytics (GA4 + Vercel Analytics)**
  - Routes/files: `src/layouts/BaseLayout.astro`, `astro.config.mjs`, Vercel dashboard
  - Why it matters: Without analytics, there is no way to measure traffic, conversion, or site performance. The audit form submission must be trackable.
  - Acceptance criteria: GA4 script installed. Vercel Analytics enabled. Audit form submission fires a conversion event. Page views are tracked. Core Web Vitals are measurable.

- [ ] **P1 — Add OG images for all main pages**
  - Routes/files: `src/layouts/BaseLayout.astro`, `public/og/` (new directory), each page's frontmatter
  - Why it matters: Shared links on social media, Slack, and messaging apps show no image preview. This looks unprofessional and reduces click-through.
  - Acceptance criteria: At least one default OG image (1200x630). Ideally per-page or per-section OG images. `<meta property="og:image">` is present on every page.

- [ ] **P1 — Add favicon.ico**
  - Routes/files: `public/favicon.ico` (new)
  - Why it matters: `BaseLayout.astro` references `/favicon.ico` but only `favicon.svg` exists. Some browsers and platforms (bookmarks, tabs, shortcuts) need ICO format.
  - Acceptance criteria: `public/favicon.ico` exists and matches the brand mark.

- [ ] **P1 — Add custom 404 page**
  - Routes/files: `src/pages/404.astro` (new)
  - Why it matters: Default Astro/Vercel 404 page breaks the brand experience. Users who hit a bad link see a generic error.
  - Acceptance criteria: `/404` renders a branded page with navigation, a helpful message, and links back to key pages (home, demos, audit).

- [ ] **P1 — Add spam protection to audit form**
  - Routes/files: `src/components/AuditFormShell.astro`, possibly `src/pages/api/audit.ts`
  - Why it matters: Public forms without protection get spammed. GHL pipeline will be polluted.
  - Acceptance criteria: Honeypot field (hidden, if filled → reject). Optionally reCAPTCHA v3 or Turnstile. Server-side validation if using API route.

- [ ] **P1 — Set production `site` in astro.config.mjs**
  - Routes/files: `astro.config.mjs`
  - Why it matters: Required for sitemap generation, canonical URL generation, and correct absolute URL construction.
  - Acceptance criteria: `site: 'https://futursolutions.io'` (or correct production domain) is set in the Astro config.

- [ ] **P1 — Add footer legal links (privacy + terms)**
  - Routes/files: `src/components/Footer.astro`
  - Why it matters: Users and regulators expect privacy/terms links in the footer. Currently missing.
  - Acceptance criteria: Footer bottom row includes links to `/privacy` and `/terms`.

- [ ] **P1 — Verify chatbot API key on Vercel**
  - Routes/files: Vercel dashboard environment variables
  - Why it matters: The Fit Assistant chatbot requires `OPENAI_API_KEY` as a server-side env var. If not set on Vercel, the chatbot will show "server configuration error" in production.
  - Acceptance criteria: `OPENAI_API_KEY` is set in Vercel project settings for production and preview environments. Chatbot responds correctly on the live domain.

- [ ] **P1 — Add Twitter/X card meta tags**
  - Routes/files: `src/layouts/BaseLayout.astro`
  - Why it matters: Twitter uses its own meta tags for card previews. Without them, shared links have no preview.
  - Acceptance criteria: `<meta name="twitter:card" content="summary_large_image">`, `twitter:title`, `twitter:description`, `twitter:image` are present.

- [ ] **P1 — Audit all image alt text**
  - Routes/files: All pages and components with images/SVGs
  - Why it matters: Accessibility requirement. Also affects SEO image indexing.
  - Acceptance criteria: Every meaningful image has descriptive alt text. Decorative images have `alt=""` or `aria-hidden="true"`.

---

## P2 — Soon After Launch

Important improvements that can wait until the site is live.

---

- [ ] **P2 — Create About page**
  - Routes/files: `src/pages/about/index.astro` (new)
  - Why it matters: The research recommends an About page with: why this niche, point of view, what makes the studio different, stack in buyer language, process, values, quality bar.
  - Acceptance criteria: `/about` route exists. Header nav updated to include it. Content follows research recommendations.

- [ ] **P2 — Add structured data (JSON-LD schema)**
  - Routes/files: `src/layouts/BaseLayout.astro`, individual pages
  - Why it matters: Rich results in search (organization, local business, FAQ, service). Competitors like DoctorLogic and Orbit use this.
  - Acceptance criteria: Organization schema on homepage. LocalBusiness or ProfessionalService schema where relevant. FAQ schema on pages with FAQs.

- [ ] **P2 — Add Foundation vs Custom comparison section**
  - Routes/files: `src/components/FoundationVsCustom.astro` (new), `src/pages/services/index.astro` or homepage
  - Why it matters: The research identifies this as a major gap in the market. ProSites is the only competitor that explicitly separates the choice. FutureSolutions should make this decision architecture visible.
  - Acceptance criteria: Clear comparison section explaining when to choose Foundation vs Custom vs Website + Growth System. Links to relevant detail pages.

- [ ] **P2 — Add pricing visibility (starting ranges)**
  - Routes/files: Service detail pages, possibly a new `/pricing` page
  - Why it matters: The research notes that transparent pricing is rare in healthcare agencies but common in productized services. Publishing starting ranges reduces friction.
  - Acceptance criteria: Starting investment language on at least Foundation and Care service pages. Not a full pricing page initially — just "starting from" language.

- [ ] **P2 — Add industry pages**
  - Routes/files: `src/pages/industries/[slug].astro` (new), `src/data/industries.ts` (new)
  - Why it matters: The research recommends industry-specific pages for med spas, hormone/TRT, solo practices, wellness clinics, and associations. These improve SEO and buyer relevance.
  - Acceptance criteria: At least 3 industry pages live. Each links to relevant demos, services, and audit form.

- [ ] **P2 — Publish 2–3 resource articles**
  - Routes/files: `src/pages/resources/[slug].astro` (new), `src/data/resources.ts`
  - Why it matters: The resources page currently shows only "Planned" content. Publishing even 2–3 articles signals competence and supports SEO.
  - Acceptance criteria: At least 2 articles from the planned list are published and linked from `/resources`.

- [ ] **P2 — Add mobile mockup previews to Foundation detail pages**
  - Routes/files: `src/pages/templates/[slug].astro`, `src/data/templates.ts`
  - Why it matters: The research recommends showing mobile previews alongside desktop for every demo. Currently only desktop is implied.
  - Acceptance criteria: Foundation detail pages show a mobile device frame or screenshot alongside the desktop demo link.

- [ ] **P2 — Create email follow-up sequence in GHL**
  - Routes/files: GoHighLevel workflows (external)
  - Why it matters: The research recommends a 10-day nurture sequence after audit request. Without it, leads go cold.
  - Acceptance criteria: 5-email sequence configured: confirmation, industry insight, foundation vs custom, Growth System explanation, strategy call CTA.

- [ ] **P2 — Optimize font loading**
  - Routes/files: `src/layouts/BaseLayout.astro`
  - Why it matters: Google Fonts adds a render-blocking request. Self-hosting Inter or using `font-display: swap` more aggressively would improve LCP.
  - Acceptance criteria: Inter fonts are self-hosted or loaded with optimal strategy. LCP is under 2.5s on mobile.

- [ ] **P2 — Add conversion event tracking**
  - Routes/files: Audit form handler, analytics setup
  - Why it matters: Knowing how many visitors submit the audit form vs how many view it is essential for CRO.
  - Acceptance criteria: `audit_form_submit` event fires in GA4. Demo CTA clicks tracked. Foundation detail page views tracked.

---

## P3 — Future Enhancements

Resources, case studies, more demos, advanced CMS, pricing ladders, client portal.

---

- [ ] **P3 — Build case study structure**
  - Routes/files: `src/pages/work/[slug].astro` (new), possibly Sanity schema
  - Why it matters: The research cites case studies as a key proof mechanism. Even with anonymized or composite examples, structured case studies beat portfolio grids.
  - Acceptance criteria: Case study template with challenge, solution, results, screenshots, testimonial slot.

- [ ] **P3 — Add testimonial collection system**
  - Routes/files: Sanity schema or static data file
  - Why it matters: Social proof is critical. Currently zero testimonials on the site.
  - Acceptance criteria: Testimonial display component. Testimonials appear on homepage, service pages, and Foundation detail pages.

- [ ] **P3 — Expand Sanity CMS for articles and case studies**
  - Routes/files: `sanity-studio/`, Sanity schemas
  - Why it matters: Once content volume grows, static TS files become unmanageable. Sanity is already installed.
  - Acceptance criteria: Sanity schemas for articles, case studies, and testimonials. Content queries integrated into relevant pages.

- [ ] **P3 — Add lead magnets**
  - Routes/files: New pages or downloadable assets
  - Why it matters: The research recommends 5 specific lead magnets (Foundation vs Custom guide, booking flow checklist, med spa conversion checklist, TRT follow-up blueprint, association planning checklist).
  - Acceptance criteria: At least 1 lead magnet live with email capture.

- [ ] **P3 — Build interactive Foundation match tool**
  - Routes/files: New component or page
  - Why it matters: The research recommends an interactive recommendation tool. The Fit Assistant chatbot partially serves this role.
  - Acceptance criteria: Quiz or guided flow that recommends Foundation, Custom, or Growth System path.

- [ ] **P3 — Add video demo walkthroughs**
  - Routes/files: Foundation detail pages, possibly YouTube/Loom embeds
  - Why it matters: Video walkthroughs make demos more compelling and accessible.
  - Acceptance criteria: At least 2 Loom-style walkthrough videos embedded on Foundation detail pages.

- [ ] **P3 — Add funnel/lead-gen demo**
  - Routes/files: New demo pages, `src/data/templates.ts`
  - Why it matters: Demonstrates conversion expertise beyond brochure sites. Currently listed as a future demo.
  - Acceptance criteria: Sixth demo in the library with landing page, offer page, thank-you flow.

- [ ] **P3 — Client portal or dashboard preview**
  - Routes/files: New page or component
  - Why it matters: Makes retainer support feel more productized and premium.
  - Acceptance criteria: Visual preview showing what ongoing Care and Optimization looks like from the client side.

- [ ] **P3 — Add redirect plan for `/templates` → future URL**
  - Routes/files: `vercel.json` or Astro redirects
  - Why it matters: `/templates` is the current technical route but "templates" may be misleading. A future redirect to `/foundations` or `/library` may be appropriate.
  - Acceptance criteria: Documented redirect plan. Not executed until there is a clear need to avoid link breakage.
