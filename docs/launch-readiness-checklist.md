# FutureSolutions Launch Readiness Checklist

> Checkbox-based checklist organized by priority. Each item includes affected files/routes, rationale, and acceptance criteria.
> **Last reviewed: June 18, 2026.** This supersedes the previous version — most earlier P0/P1 items (audit form wiring, canonical URLs, robots.txt, sitemap, privacy/terms, 404, About page, JSON-LD schema, industry pages, published resources) are now complete. See "Already complete" below.

---

## Already complete (verified June 18, 2026)

These were prior blockers and are now done — no action needed:

- Per-page SEO: `title`, `meta description`, `canonical`, Open Graph + Twitter card tags, JSON-LD schema (`BaseLayout.astro`, `src/data/schema.ts`).
- Auto-generated sitemap (filtered to exclude `/api/` and the association portal) + `public/robots.txt`.
- Legal pages with real content and effective dates: `/privacy`, `/terms`; footer links present.
- Branded `/404` page.
- Contact + Audit forms: client validation, inline errors, honeypot spam protection, rate limiting, and server-side forwarding to a GoHighLevel webhook (`api/contact.ts`, `api/audit.ts`).
- Chat API hardened with input validation and rate limiting (`api/chat.ts`).
- Real org identity wired through schema + footer (Future Solutions Digital LLC, admin@futuresolutions.io, California / US).
- Redirects configured: `/seo`, `/backend`, `/snapshot` (`astro.config.mjs`).

---

## P0 — Launch Blockers

Must be resolved before production. Most are environment/asset items rather than code.

- [ ] **P0 — Set `GHL_WEBHOOK_URL` in Vercel production**
  - Routes/files: Vercel env settings; consumed by `src/pages/api/contact.ts`, `src/pages/api/audit.ts`
  - Why it matters: Without it, both forms still return a "success" response to the visitor, but the lead is only `console.log`'d and **lost**. This is the single most dangerous gap — every lead silently disappears.
  - Acceptance criteria: Env var set for Production (and Preview). A real test submission appears in the GHL pipeline and triggers the expected notification/automation.

- [ ] **P0 — Set `OPENAI_API_KEY` in Vercel production**
  - Routes/files: Vercel env settings; consumed by `src/pages/api/chat.ts`
  - Why it matters: Without it the chat widget returns a 500 on every message ("Server configuration error") on the live site.
  - Acceptance criteria: Env var set for Production (and Preview). Chat responds correctly on the live domain across the base site and all demos.

- [ ] **P0 — Confirm and standardize the production domain**
  - Routes/files: `astro.config.mjs` (`site`), `src/data/schema.ts` (`SITE_URL`), all hardcoded `canonicalUrl`, `public/robots.txt` sitemap line
  - Why it matters: The repo folder is `futursolutions.io` (no "e") while all code uses `futuresolutions.io` (with "e"). One of these is wrong. Canonicals, sitemap, OG URLs, and schema all assume `futuresolutions.io`.
  - Acceptance criteria: Registered/deployed domain confirmed; every reference matches it exactly.

- [ ] **P0 — Replace the SVG Open Graph image with a PNG/JPG**
  - Routes/files: `public/og/default.svg` → new `public/og/default.png`; default `ogImage` in `src/layouts/BaseLayout.astro`
  - Why it matters: Facebook, LinkedIn, X, iMessage, and Slack do **not** render SVG OG images. Every shared link currently produces a blank/broken preview.
  - Acceptance criteria: A `1200×630` PNG/JPG exists and is the default OG image. Validated in the Facebook Sharing Debugger / LinkedIn Post Inspector.

- [ ] **P0 — Add real favicon / app icons**
  - Routes/files: `public/` (`favicon.ico`, `apple-touch-icon.png`, optional `site.webmanifest`), `src/layouts/BaseLayout.astro`
  - Why it matters: Only `favicon.svg` exists, and `apple-touch-icon` points to the SVG, which iOS ignores. No `.ico` fallback or manifest.
  - Acceptance criteria: At minimum a `180×180` PNG apple-touch-icon; ideally a `favicon.ico` and a web manifest. Icons render correctly on iOS home screen and browser tabs.

- [ ] **P0 — Install analytics + conversion tracking**
  - Routes/files: `src/layouts/BaseLayout.astro`; Contact/Audit submit handlers; chat open handler
  - Why it matters: There is currently **no** analytics. For a lead-gen site, traffic, form conversions, and chat engagement are unmeasurable.
  - Acceptance criteria: GA4 or Plausible installed sitewide. Events fire on Contact submit, Audit submit, and chat open. Pageviews tracked. (If using GA4 / cookies, pair with the consent banner in P2.)

- [ ] **P0 — Production deploy configuration**
  - Routes/files: Vercel project + DNS
  - Why it matters: Custom domain, SSL, and a canonical host redirect are required for a clean launch.
  - Acceptance criteria: Domain attached in Vercel, SSL active, `www` ↔ apex redirect set in one direction.

- [ ] **P0 — Replace the README**
  - Routes/files: `futursolutions-site/README.md`
  - Why it matters: It is still the default Astro starter template — no setup, env var, or deploy documentation.
  - Acceptance criteria: README documents project overview, required env vars (`OPENAI_API_KEY`, `GHL_WEBHOOK_URL`, optional Sanity vars), local dev, and deploy steps.

---

## P1 — Verify before launch (QA)

Should be completed and signed off before go-live.

- [ ] **P1 — End-to-end lead test into GoHighLevel**
  - Why it matters: Confirms the most important business flow actually works end to end.
  - Acceptance criteria: A submitted Contact and Audit lead arrives in GHL, fires notifications/auto-reply, and the 502 error path behaves correctly when the webhook is unreachable.

- [ ] **P1 — Live chat test across all contexts**
  - Acceptance criteria: With the real API key, the chat widget answers correctly on the base site and all 5 demos; inline suggestions, "Browse all topics", follow-ups, and reset all behave.

- [ ] **P1 — Cross-device QA (iOS Safari + Android Chrome)**
  - Acceptance criteria: Chat panel sizing (no header/first-message clipping), forms, and nav dropdowns verified on real mobile devices.

- [ ] **P1 — Lighthouse pass on key pages**
  - Routes/files: home, `/audit`, a service page, one demo
  - Acceptance criteria: Performance and Accessibility reviewed; LCP under ~2.5s on mobile; no critical a11y violations.

- [ ] **P1 — Verify redirects and 404 on Vercel**
  - Acceptance criteria: `/seo`, `/backend`, `/snapshot` redirect correctly; the branded 404 renders on a bad URL on the live deployment.

- [ ] **P1 — Submit sitemap to search consoles**
  - Acceptance criteria: Sitemap submitted to Google Search Console and Bing Webmaster Tools; confirmed it excludes `/api/` and the association portal.

- [ ] **P1 — Content proofread + demo data containment**
  - Acceptance criteria: Main marketing pages proofread. Fictional demo contact info (e.g., `(951) 555-0147`, `hello@lumenhealthhouse.com`) confirmed to appear only under `/demos/*`, never on the real site.

---

## P2 — Nice-to-have / polish

Can ship at or shortly after launch.

- [ ] **P2 — Decide on Sanity CMS**
  - Routes/files: `src/lib/sanity.ts`, `sanity-studio/`, `package.json`
  - Why it matters: `sanityClient` is configured but **never imported anywhere**; `PUBLIC_SANITY_PROJECT_ID/DATASET` are unused. Either wire it up or remove the dependency + studio to shrink surface area.
  - Acceptance criteria: A decision is made and reflected in code (wired in, or removed).

- [ ] **P2 — Add `.env.example`**
  - Acceptance criteria: Documents every env var the app reads.

- [ ] **P2 — Security headers via `vercel.json`**
  - Acceptance criteria: CSP, `X-Content-Type-Options`, `Referrer-Policy`, and HSTS configured.

- [ ] **P2 — Raster logo for schema**
  - Routes/files: `src/data/schema.ts`
  - Why it matters: Google rich results prefer a raster logo (≥112×112); currently `favicon.svg`.
  - Acceptance criteria: `organizationSchema.logo` / `articleSchema` publisher logo points to a PNG.

- [ ] **P2 — Per-page OG images + `og:type: article` for resources**
  - Acceptance criteria: At least section-level OG images; resource detail pages use `og:type=article` with published/author tags (articleSchema already exists).

- [ ] **P2 — Email deliverability + auto-responder**
  - Acceptance criteria: SPF/DKIM/DMARC set for `admin@futuresolutions.io`; optional confirmation auto-reply on form submit.

- [ ] **P2 — Error monitoring on API routes**
  - Acceptance criteria: Sentry or Vercel log drains capture failures in `api/chat.ts`, `api/contact.ts`, `api/audit.ts`.

- [ ] **P2 — Cookie/consent banner (if analytics uses cookies)**
  - Why it matters: CCPA is relevant since the entity is California-based.
  - Acceptance criteria: Consent banner present when GA4/cookie-based analytics is used.

- [ ] **P2 — Full accessibility pass**
  - Acceptance criteria: Color contrast and keyboard navigation verified across nav dropdowns and all forms.

> Note: the API rate-limit map is in-memory per serverless instance and resets on cold start. Acceptable for launch; revisit with a durable store only if abuse appears.

---

## Post-launch roadmap (product/content)

Still-relevant growth items carried over from the prior plan; not launch blockers.

- [ ] Case study structure (challenge / solution / results / proof).
- [ ] Testimonial collection + display (currently none live; see `src/data/testimonials.ts` policy on real proof only).
- [ ] Lead magnets (Foundation-vs-Custom guide, booking checklist, med-spa conversion checklist, TRT follow-up blueprint, association planning checklist).
- [ ] Interactive Foundation match tool (the chat assistant partially covers this).
- [ ] Video/Loom demo walkthroughs on Foundation detail pages.
- [ ] GHL nurture email sequence after audit request.
- [ ] Self-host the Inter font to drop the Google Fonts request (improves LCP).
