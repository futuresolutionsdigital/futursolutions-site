# FutureSolutions — Integration Plan

> Practical integration plan for taking the site live.
> Covers Sanity, GoHighLevel, analytics, SEO, legal/compliance, and Vercel deployment.

---

## Sanity CMS Plan

### Current State
- Sanity is installed (`@sanity/client` in `package.json`)
- A `sanity-studio/` directory exists with a homepage schema
- Sanity is not meaningfully used — all content lives in static TypeScript data files (`src/data/templates.ts`, `src/data/services.ts`, `src/data/serviceDetails.ts`, `src/data/resources.ts`)
- Environment variables for Sanity (`PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`) are defined in `.env.example`

### Recommendation: Do Not Expand Sanity for Launch

**Rationale:** Static TypeScript data files are appropriate for the current content volume and structure. The Foundation data model is complex (30+ fields per entry), the service data is stable, and there are no non-developer editors yet. Expanding Sanity now would add complexity without immediate value.

### What Should Stay Static for Launch
- Foundation data (`templates.ts`) — complex, stable, developer-maintained
- Service offerings (`services.ts`, `serviceDetails.ts`) — stable, rarely changing
- Page copy (homepage, services, backend, SEO, audit) — stable after launch polish
- Demo page content — static, hand-crafted per demo

### What Benefits from CMS Later (Post-Launch)
- **Resource articles** — once articles are actually published, editing in Sanity is much better than code deploys
- **Case studies** — likely to be added and edited frequently
- **Testimonials** — need to be collected and updated without deploys
- **FAQ entries** — may evolve based on customer conversations
- **Blog posts** — if a content strategy is implemented

### Schemas Needed Later
| Schema | Priority | Fields |
|---|---|---|
| `article` | P2 | title, slug, category, audience, body (portable text), excerpt, related service, CTA, author, publishedAt, status |
| `caseStudy` | P3 | title, slug, client industry, challenge, solution, results, screenshots, testimonial, tags |
| `testimonial` | P3 | name, role, company, industry, quote, rating, photo, related service |
| `faq` | P3 | question, answer, category, page placement |

### What Should Not Be CMS-ified
- Design tokens / CSS variables
- Component structure
- Route configuration
- Foundation data model (too complex, too tightly coupled to page rendering)
- Demo page content (hand-crafted, needs developer control)

---

## GoHighLevel Integration Plan

### Current Form State
The audit form (`src/components/AuditFormShell.astro`) is fully structured but **non-functional**:
- `onsubmit="return false"` prevents submission
- Submit button is `type="button"` with no click handler
- No webhook, API endpoint, or email integration exists
- The form footer explicitly states: "This form is prepared for CRM and scheduling integration."

### Fields Currently Collected
| Field | Type | Name Attribute |
|---|---|---|
| Name | text | `name` |
| Email | email | `email` |
| Practice/business name | text | `business-name` |
| Current website URL | url | `website-url` |
| Business type | select | `business-type` |
| Location | text | `location` |
| Primary goal | select | `primary-goal` |
| Payment model | select | `payment-model` |
| Biggest website issue | select | `biggest-website-issue` |
| Scheduling system | text | `scheduling-system` |
| Services of interest | checkboxes | `services-of-interest` |
| Preferred next step | select | `preferred-next-step` |
| Template interest (hidden) | hidden | `templateInterest` |
| Template name (hidden) | hidden | `templateName` |
| Template category (hidden) | hidden | `templateCategory` |
| Source (hidden) | hidden | `source` |
| Lead type (hidden) | hidden | `leadType` |
| Inquiry type (hidden) | hidden | `inquiryType` |

### Fields to Add (Based on Research)
| Field | Rationale |
|---|---|
| Phone (optional) | Enables SMS follow-up and missed-call text-back |
| Number of providers/locations | Helps qualify complexity and tier |
| Budget comfort range (optional) | Helps pre-qualify before strategy call |
| Loom review request (checkbox) | Research recommends this as an option |

### Recommended GHL Pipeline Stages

```
New Audit Request
  → Needs Review
    → Qualified Lead
      → Audit Sent / Loom Sent
        → Strategy Call Booked
          → Proposal Sent
            → Won
            → Lost / Not Fit
  → Nurture (from any stage)
```

### Recommended Tags
| Tag | Applied When |
|---|---|
| `source:website` | All web submissions |
| `offer:audit` | Audit form submitted |
| `interest:foundation` | "Website Foundations setup" checked |
| `interest:custom` | "Signature Custom Website" checked |
| `interest:growth-system` | "Growth System" checked |
| `interest:local-visibility` | "SEO / local visibility" checked |
| `interest:care` | "Care and Optimization" checked |
| `industry:med-spa` | Business type = Med Spa |
| `industry:trt` | Business type = Men's Health Clinic |
| `industry:solo-practice` | Business type = Solo Practice |
| `industry:wellness` | Business type = Wellness Clinic |
| `industry:association` | Business type = Healthcare Association |
| `timeline:urgent` | If timeline field is added and = "ASAP" |
| `timeline:soon` | If timeline = "1–3 months" |
| `timeline:later` | If timeline = "3+ months" |
| `template:med-spa` | Hidden field templateInterest = med-spa |
| `template:solo-practice` | Hidden field templateInterest = solo-practice |
| `template:wellness-clinic` | Hidden field templateInterest = premium-wellness-clinic |
| `template:hormone-trt` | Hidden field templateInterest = hormone-trt |
| `template:association` | Hidden field templateInterest = association |

### Recommended Custom Fields in GHL
| Field | Type |
|---|---|
| Website URL | URL |
| Business Type | Dropdown |
| Location | Text |
| Primary Goal | Dropdown |
| Payment Model | Dropdown |
| Biggest Issue | Dropdown |
| Scheduling System | Text |
| Services of Interest | Multi-select |
| Preferred Next Step | Dropdown |
| Template Interest | Text |
| Lead Source Page | Text |
| Lead Type | Text |

### Recommended Automations
1. **On new audit request:**
   - Create contact in GHL
   - Apply tags based on form data
   - Move to "New Audit Request" pipeline stage
   - Send internal notification (email + Slack if connected)
   - Send confirmation email to prospect

2. **Nurture sequence (if not booked within 2 days):**
   - Day 0: Confirmation email with demo links relevant to their industry
   - Day 2: Short insight specific to their industry
   - Day 4: Foundation vs Custom explanation
   - Day 6: Growth System explanation in plain language
   - Day 8: Demo walkthrough or case-study-style example
   - Day 10: Soft strategy-call CTA

3. **Internal notifications:**
   - Immediate email to team on new submission
   - Slack notification (if configured)
   - Task created in GHL for manual review

### Webhook/API/Embed Options

**Recommended approach: Server-side API route**

Create `src/pages/api/audit.ts` that:
1. Validates form data server-side
2. Checks honeypot field
3. Posts to GHL webhook URL
4. Optionally sends a backup email via Resend/SendGrid
5. Returns success/error JSON
6. Client-side JS handles the response and redirects to `/audit-requested`

**Environment variables needed:**
| Variable | Context | Access |
|---|---|---|
| `GHL_WEBHOOK_URL` | server | secret |
| `GHL_API_KEY` | server | secret (if using API instead of webhook) |
| `RESEND_API_KEY` | server | secret (optional backup email) |

### Spam Protection Recommendation
- **Minimum:** Honeypot field (hidden input, if filled → reject silently)
- **Better:** Cloudflare Turnstile (free, privacy-respecting, no user friction)
- **Alternative:** reCAPTCHA v3 (invisible, score-based)

### Confirmation Page Behavior
- `/audit-requested` already exists with helpful content and demo links
- After successful submission: redirect to `/audit-requested?template={slug}` (preserves context)
- The page already has logic to display the template name from the URL parameter

### Test Submission Plan
1. Set up GHL test pipeline
2. Submit test form with each business type
3. Verify contact creation, tags, and pipeline stage
4. Verify confirmation email delivery
5. Verify internal notification
6. Test with template pre-fill (e.g., `/audit?template=med-spa`)
7. Test spam protection (fill honeypot, verify rejection)
8. Test rate limiting behavior
9. Test error handling (network failure, GHL downtime)

---

## Analytics / Tracking Plan

### Current State
- Zero analytics installed
- No tracking of any kind

### Recommended Stack

| Tool | Purpose | Priority |
|---|---|---|
| Vercel Analytics | Core Web Vitals, page views, real-time | P1 |
| Google Analytics 4 | Full analytics, conversion funnels, audience | P1 |
| Google Search Console | Search performance, indexing, crawl errors | P1 |
| Google Tag Manager | Event management (optional) | P2 |

### Conversion Events to Track

| Event | Trigger | Priority |
|---|---|---|
| `audit_form_submit` | Successful audit form submission | P1 |
| `audit_form_start` | First field interaction on audit form | P2 |
| `demo_cta_click` | Click on "View Live Demo" or "Explore Live Demos" | P1 |
| `foundation_detail_view` | Page view on `/templates/[slug]` | P1 |
| `foundation_customize_click` | Click on "Get This Foundation Customized" | P1 |
| `chatbot_open` | Fit Assistant FAB clicked | P2 |
| `chatbot_message_sent` | User sends message in chatbot | P2 |
| `outbound_demo_click` | Click to live demo site from Foundation detail page | P2 |
| `service_detail_view` | Page view on `/services/[slug]` | P2 |
| `header_audit_cta_click` | Click on header "Get a Website Audit" | P2 |

### Implementation Notes
- Vercel Analytics: Enable in Vercel dashboard + add `@vercel/analytics` package
- GA4: Add measurement ID to `BaseLayout.astro` head
- Search Console: Verify domain ownership via DNS or HTML tag
- Track `/audit-requested` as a "thank you" page conversion in GA4

---

## SEO Launch Plan

### Current State
| Item | Status |
|---|---|
| Page titles | Present on all main pages |
| Meta descriptions | Present on most pages |
| Canonical URLs | Present but wrong domain (`vercel.app`) |
| OG meta | Title and description only, no images |
| Sitemap | Missing |
| Robots.txt | Missing |
| Schema/JSON-LD | Missing |
| Internal links | Good — services, demos, and audit are well-linked |
| Image alt text | Not audited — needs review |
| Performance | Static Astro site — fast baseline, Google Fonts adds latency |

### SEO Launch Checklist

1. **Set `site` in astro.config.mjs** to production domain
2. **Fix all canonical URLs** to production domain
3. **Install `@astrojs/sitemap`** and configure
4. **Create `public/robots.txt`** with sitemap reference
5. **Add OG images** (at minimum one default, ideally per-page)
6. **Add Twitter card meta** to BaseLayout
7. **Verify Google Search Console** ownership
8. **Submit sitemap** to Google Search Console
9. **Audit all image alt text** across parent site pages
10. **Add Organization schema** (JSON-LD) to homepage

### Future SEO Work (P2–P3)
- Add FAQ schema to pages with FAQ sections
- Add LocalBusiness or ProfessionalService schema
- Publish resource articles for content SEO
- Create industry pages for vertical keyword targeting
- Monitor Core Web Vitals and optimize
- Self-host Inter font to reduce external requests
- Add breadcrumb schema for service and Foundation detail pages

### Local SEO Considerations
- If FutureSolutions has a physical location, add LocalBusiness schema
- Google Business Profile should be set up and linked
- Service-area pages are not necessary for a studio business (as opposed to clients who are local businesses)

---

## Legal / Privacy / Compliance Plan

### Current State
- **No privacy policy** — missing entirely
- **No terms of service** — missing entirely
- **No cookie/analytics disclosure** — will be needed once GA4 is installed
- **No form data disclosure** — the audit form collects PII with no disclosure
- **No healthcare compliance language** — zero on the site
- **No BAA language** — not mentioned anywhere

### Required for Launch

1. **Privacy Policy (`/privacy`)**
   - What data is collected (name, email, phone, business details, website URL)
   - How data is used (lead qualification, audit delivery, follow-up)
   - Third-party sharing (GoHighLevel CRM, analytics, hosting)
   - Cookie use (analytics cookies, no advertising cookies initially)
   - Data retention
   - Contact information for privacy inquiries
   - California/CCPA considerations if applicable

2. **Terms of Service (`/terms`)**
   - Service description
   - Intellectual property
   - Limitation of liability
   - Governing law
   - Contact information

3. **Form Data Disclosure**
   - Brief statement near the audit form submit button: "By submitting this form, you agree to our [Privacy Policy](/privacy). Your information is used to prepare your audit and will be stored in our CRM system."

4. **Healthcare Compliance Language**
   - On the Backend/Growth Systems page and Privacy Policy:
   - "FutureSolutions builds website forms, CRM workflows, and lead routing systems for healthcare businesses. When workflows involve protected health information (ePHI), we support appropriate safeguards including Business Associate Agreements with relevant platform providers. We do not store or process ePHI directly through our website forms. For practices handling sensitive patient data, we recommend platform-level BAAs with CRM, scheduling, and hosting providers."
   - **Never claim:** "HIPAA-compliant website" or "HIPAA-certified"

5. **Cookie Consent**
   - If GA4 is installed, a simple cookie consent banner is recommended
   - Not legally required in all jurisdictions but is best practice

---

## Vercel / Env / Deployment Plan

### Current Configuration
| Setting | Value |
|---|---|
| Framework | Astro 6.1.8 |
| Adapter | `@astrojs/vercel` 7.2.1 |
| Output | Static (default) with server routes |
| Build command | `astro build` |
| Node version | >=22.12.0 |
| API routes | `/api/chat` (chatbot) |

### Production Environment Variables

| Variable | Context | Status |
|---|---|---|
| `OPENAI_API_KEY` | server, secret | Set locally, needs Vercel verification |
| `PUBLIC_SANITY_PROJECT_ID` | client, public | In `.env.example`, verify on Vercel |
| `PUBLIC_SANITY_DATASET` | client, public | In `.env.example`, verify on Vercel |
| `GHL_WEBHOOK_URL` | server, secret | Not yet created |
| `RESEND_API_KEY` | server, secret | Not yet created (optional) |

### Preview Environment Variables
- Same as production but can point to GHL test pipeline
- `OPENAI_API_KEY` should be set for preview to test chatbot

### Domain Readiness
- [ ] Production domain registered and DNS configured
- [ ] Domain added to Vercel project
- [ ] SSL certificate auto-provisioned by Vercel
- [ ] `site` set in `astro.config.mjs` to production domain
- [ ] All canonical URLs updated to production domain

### Redirects Needed
| From | To | Reason |
|---|---|---|
| (none currently needed) | — | No legacy URLs to redirect |

**Future consideration:** If `/templates` is renamed to `/foundations` or `/library`, set up 301 redirects.

### Error Pages
- [ ] Custom 404 page (`src/pages/404.astro`)
- [ ] Verify Vercel handles 500 errors gracefully

### Build Verification
- Current build: PASS (zero warnings, zero errors)
- 77 static pages prerendered
- 1 server route (`/api/chat`)
- Build time: ~10.5s

### Route Verification
- All parent site routes verified via build output
- All demo routes verified via build output
- No route conflicts detected

### Deployment Checklist
1. [ ] Set production env vars on Vercel
2. [ ] Add production domain to Vercel project
3. [ ] Set `site` in astro.config.mjs
4. [ ] Fix canonical URLs
5. [ ] Add robots.txt and sitemap
6. [ ] Deploy to production
7. [ ] Verify all routes load
8. [ ] Verify audit form submission works
9. [ ] Verify chatbot works
10. [ ] Submit sitemap to Google Search Console
11. [ ] Verify OG image previews on social platforms
12. [ ] Verify analytics tracking fires
13. [ ] Run Lighthouse audit on key pages
14. [ ] Test on mobile devices (iOS Safari, Android Chrome)
