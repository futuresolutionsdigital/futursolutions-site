# FutureSolutions.io Navigation & Site Architecture Audit

> Status: **Planning only.** No header/footer code changes have been made. This
> document is the proposal to review and approve before implementation.
> Grounded in the actual codebase as of this audit (routes verified against the
> production build output, `Header.astro`, `Footer.astro`, `astro.config.mjs`,
> and the `services` / `industries` data files).

---

## 1. Business Model Summary

FutureSolutions.io is a premium website and growth-systems studio for **health,
wellness, and high-trust service businesses** (clinics, med spas, hormone/TRT,
solo practices, wellness brands, associations, consultants, appointment-based
service businesses). The offer model, front to back:

| Tier | Offer | Role | Current page |
|---|---|---|---|
| Entry / lead gen | **Free Website & Lead Flow Snapshot** | Hand-reviewed Loom + clear recommendation, routes prospects into the right offer | `/audit` |
| Core offer | **Website Foundations** | Main public sell — premium customized sites from proven frameworks | `/services/template-setup` |
| Premium offer | **Signature Custom Websites** | Fully custom strategy/design/build | `/services/custom-healthcare-websites` |
| System layer | **Growth Systems** | CRM, booking, forms, follow-up, reporting, lead routing (GHL) | `/services/growth-systems` |
| Retainer | **Website Management / Care** | Ongoing updates, content, SEO, reporting, optimization | `/services/ongoing-optimization` |
| Consulting | **Web & Business Systems Consulting** | Phased/legacy systems work (AMS/CMS, associations) | **does not exist yet** |

Supporting pillars: **Resources** (authority/SEO), **Industries** (niche
relevance), **About** (trust).

---

## 2. Current Route Inventory

Verified against the build output. "Parent site" = the FutureSolutions marketing
site. "Demos" = standalone read-only demo sites (not part of parent nav).

### Parent site — top level
| Route | Purpose | In header? | In footer? |
|---|---|---|---|
| `/` | Homepage | brand logo | brand logo |
| `/templates` | Demo library / Website Foundation browser | yes (as "Demos") | yes ("Browse all Foundations") |
| `/services` | Solutions overview | yes (as "Solutions") | — (only sub-pages linked) |
| `/industries` | Industries overview | yes | yes (Company col) |
| `/resources` | Resource/blog hub | yes | yes (Company col) |
| `/about` | About / trust | yes | yes |
| `/contact` | Contact | — | yes |
| `/audit` | Free Snapshot request form (GHL-wired, `?template=` pre-fill) | yes (CTA) | yes (2 links) |
| `/audit-requested` | Post-submit confirmation | — | — |
| `/privacy` | Privacy Policy | — | yes (legal) |
| `/terms` | Terms of Service | — | yes (legal) |
| `/404` | Not found | — | — |

### Parent site — Solutions detail pages (`/services/*`)
| Route | Data name | Maps to offer |
|---|---|---|
| `/services/template-setup` | Website Foundations | Core offer |
| `/services/custom-healthcare-websites` | Signature Custom Websites | Premium offer |
| `/services/growth-systems` | Growth System Setup | System layer |
| `/services/local-visibility` | Local Visibility | SEO sub-offer |
| `/services/ongoing-optimization` | Care and Optimization | Retainer (= "Website Management") |

### Parent site — Foundation detail pages (`/templates/*`)
`/templates/med-spa`, `/templates/solo-practice`, `/templates/association`,
`/templates/hormone-trt`, `/templates/premium-wellness-clinic` (5).

### Parent site — Industries (`/industries/[slug]`)
| Slug | `navLabel` | `name` |
|---|---|---|
| `med-spas` | Med Spas | Med Spas & Aesthetics |
| `solo-practices` | Solo Practices | Solo & Private Practices |
| `wellness-functional-medicine` | Wellness | Wellness & Functional Medicine |
| `hormone-trt-clinics` | Hormone / TRT | Hormone & TRT Clinics |
| `healthcare-associations` | Associations | Healthcare Associations |

### Parent site — Resources (`/resources/[slug]`)
6 articles: `healthcare-website-trust`, `practice-websites-do-not-convert`,
`health-wellness-homepage-structure`, `local-seo-basics-medical-wellness`,
`after-contact-form-submission`, `template-vs-custom-website`.

### Redirects (in `astro.config.mjs`)
- `/seo` → `/services/local-visibility`
- `/backend` → `/services/growth-systems`

### Live demo sites (read-only — NOT in parent nav)
`/demos/med-spa`, `/demos/solo-practice`, `/demos/association`,
`/demos/hormone-trt`, `/demos/premium-wellness-clinic` (each multi-page).

### API
`/api/audit`, `/api/chat`, `/api/contact`.

---

## 3. Current Header Audit

Source: `src/components/Header.astro`.

| Item | Destination | Issue | Recommendation |
|---|---|---|---|
| Logo "FutureSolutions" | `/` | OK | Keep |
| **Demos** | `/templates` | Undersells the **core product**. Frames the main sell as "examples," not a product. | Rename to **Website Foundations** |
| **Solutions** | `/services` | Generic; hides the offer ladder (Foundations / Custom / Growth Systems / Management). No dropdown. | Convert to **Solutions ▼** dropdown |
| **Industries** | `/industries` | OK label; 5 real sub-pages exist but are invisible. | Convert to **Industries ▼** dropdown |
| **Resources** | `/resources` | OK label; flat. | Keep, optional **Resources ▼** dropdown |
| **About** | `/about` | OK | Keep as simple link |
| CTA **"Get a Website Audit"** | `/audit` | Outdated funnel language ("Audit" = heavy/formal). | **"Get My Free Snapshot"** (keep `/audit` route) |
| Mobile btn "Explore Live Demos" | `/templates` | Inconsistent with "Website Foundations" framing. | **"Explore Website Foundations"** |
| Mobile btn "Get a Website Audit" | `/audit` | Outdated language. | **"Get My Free Snapshot"** |

**Structural gaps:**
- No dropdown system exists. All offer/industry depth is hidden behind generic
  top-level links.
- There is unused/orphaned CSS (`.site-header__audit-link`) with no markup —
  safe to remove during implementation.
- Mobile nav is a flat list + 2 buttons; works, but has no accordion for the
  proposed dropdown sections.

---

## 4. Current Footer Audit

Source: `src/components/Footer.astro`. Three columns + brand block.

| Column / link | Destination | Issue | Recommendation |
|---|---|---|---|
| Brand blurb: "Premium web design and growth systems for clinics, associations, and high-trust service businesses." | — | "web design" is weaker than the brand language; healthcare-narrow. | Reword to "Premium website foundations and growth systems for health, wellness, and high-trust service businesses." |
| **Solutions** → Website Foundations | `/services/template-setup` | OK | Keep |
| Solutions → Signature Custom Websites | `/services/custom-healthcare-websites` | OK | Keep |
| Solutions → Growth Systems | `/services/growth-systems` | OK | Keep |
| Solutions → Local Visibility | `/services/local-visibility` | OK but minor offer | Keep (or move to Resources) |
| Solutions → Care and Optimization | `/services/ongoing-optimization` | Naming mismatch with "Website Management" | Relabel **Website Management** |
| Solutions → **"Website and Systems Audit"** | `/audit` | Outdated CTA language | Relabel **Free Website & Lead Flow Snapshot** |
| **Live demos** (Med Spa, Solo Practice, Wellness Clinic, Hormone/TRT, Association, Browse all Foundations) | `/templates/*` | "Live demos" header conflicts with "Website Foundations" framing | Rename column **Website Foundations**; keep links |
| **Company** → About / Industries / Resources / Contact | existing | OK | Keep / regroup |
| Company → **"Get a Website Audit"** | `/audit` | Outdated CTA language | Relabel **Get My Free Snapshot** |
| Legal → Privacy / Terms | `/privacy`, `/terms` | OK | Keep; consider Accessibility statement (future) |

**Notes:** Footer has only 3 link columns; the proposed model (Offers /
Industries / Resources / Company-Legal) needs a 4th column. The grid is
`minmax(240px,1.4fr) repeat(3,1fr)` and already collapses to 2-up at 900px and
1-up at 620px — adding a column is low-risk.

---

## 5. CTA Language Audit

Every place in header/footer/nav using outdated "Audit" language:

| File | Line (approx) | Current | Replace with | Route change? |
|---|---|---|---|---|
| `Header.astro` | desktop CTA | "Get a Website Audit" | "Get My Free Snapshot" | No — keep `/audit` |
| `Header.astro` | mobile btn | "Get a Website Audit" | "Get My Free Snapshot" | No |
| `Header.astro` | mobile btn | "Explore Live Demos" | "Explore Website Foundations" | No — keep `/templates` |
| `Footer.astro` | Solutions col | "Website and Systems Audit" | "Free Website & Lead Flow Snapshot" | No |
| `Footer.astro` | Company col | "Get a Website Audit" | "Get My Free Snapshot" | No |

**Related (out of strict header/footer scope, flagged for later):** the `/audit`
page itself (`pages/audit/index.astro`) still uses "Website and Systems Audit"
in its title, eyebrow, and copy. The funnel language should eventually align
there too, but that is a page-content task, not a nav task.

---

## 6. Recommended Sitemap

### Existing pages to KEEP (no change)
`/`, `/services` + all 5 `/services/*`, `/templates` + all 5 `/templates/*`,
`/industries` + all 5 industry pages, `/resources` + 6 articles, `/about`,
`/contact`, `/audit`, `/audit-requested`, `/privacy`, `/terms`, the two redirects.

### Existing pages to RENAME/REPOSITION (label only — routes unchanged)
- Header "Demos" → **Website Foundations** (still `/templates`).
- `/services/ongoing-optimization` nav/footer label → **Website Management**
  (page heading "Care and Optimization" can stay or be revisited later).
- Footer "Live demos" column → **Website Foundations**.
- All "Audit" CTA labels → **Free Snapshot** language (per §5).

### Pages to ADD NOW (only if approved)
- **None strictly required.** The recommended nav can be built entirely from
  existing routes. Optional, low-effort:
  - `/snapshot` **redirect → `/audit`** (URL-language alignment; zero breakage).

### Pages to ADD LATER (future, do not link until they exist)
- `/services/web-business-systems-consulting` — "Web & Business Systems
  Consulting" (associations / legacy AMS-CMS work). Currently no page.
- A dedicated **Case Studies / Project Snapshots** page (today this only exists
  as the homepage "Selected Work" section).
- A **High-Trust Service Businesses** industry page (no page today).
- Optional **Accessibility statement** page for the footer legal row.

### Pages to REMOVE / MERGE
- Nothing to remove. `/seo` and `/backend` are already handled cleanly as
  redirects — keep them.

---

## 7. Recommended Header Structure (desktop)

**Recommended option: a hybrid of Option B + C** — Website Foundations as a
direct top-level link (it is the main sell and must not be buried), plus
dropdowns for the deeper areas.

```
[FutureSolutions]   Website Foundations   Solutions ▼   Industries ▼   Resources ▼   About        [ Get My Free Snapshot → ]
```

Rationale vs the three options offered:
- **Option A (no dropdowns):** rejected — cannot expose the offer ladder or 5
  real industry pages without dropdowns; keeps the current "hidden depth" problem.
- **Option C (Growth Systems as top-level):** partially adopted — Growth Systems
  is important but belongs inside Solutions so the nav doesn't read as a
  multi-product menu. Foundations stays the headline.
- **Option B (dropdowns):** adopted as the base, with "Website Foundations"
  promoted to a direct link for conversion emphasis.

This keeps top-level items to 6, makes Foundations the obvious hero, exposes
real pages, and scales as consulting/case-study pages get built.

---

## 8. Recommended Dropdown Structure

All links below point to **pages that already exist** unless marked _(future —
do not link yet)_.

### Solutions ▼
| Label | Description | Link |
|---|---|---|
| Website Foundations | Premium customized website foundations built from proven frameworks. | `/services/template-setup` |
| Signature Custom Websites | Custom strategy, architecture, design, and build for more complex brands. | `/services/custom-healthcare-websites` |
| Growth Systems | CRM, booking, follow-up, reporting, and lead-handling systems. | `/services/growth-systems` |
| Website Management | Ongoing updates, optimization, reporting, and system support. | `/services/ongoing-optimization` |
| Local Visibility | Service structure, metadata, and content for local discovery. | `/services/local-visibility` |
| Web & Business Systems Consulting _(future — do not link yet)_ | Phased systems and website consulting for complex organizations. | — |

### Industries ▼
| Label | Link |
|---|---|
| Health & Wellness | `/industries/wellness-functional-medicine` |
| Med Spas | `/industries/med-spas` |
| Hormone / TRT Clinics | `/industries/hormone-trt-clinics` |
| Solo Practices | `/industries/solo-practices` |
| Professional Associations | `/industries/healthcare-associations` |
| High-Trust Service Businesses _(future — or link to `/industries`)_ | — |

### Resources ▼
| Label | Link |
|---|---|
| All Resources | `/resources` |
| SEO & Local Visibility | `/services/local-visibility` |
| Free Website & Lead Flow Snapshot | `/audit` |
| Project Snapshots _(future — homepage section only today)_ | `/#selected-work` or future `/case-studies` |

> Keep dropdowns small: title + one line. Solutions is the only dropdown that
> benefits from descriptions; Industries can be a simple link list.

---

## 9. Recommended Mobile Navigation

- Keep the existing hamburger + slide-down panel pattern (already implemented and
  styled).
- Render top-level items as a vertical list; **Solutions / Industries / Resources
  become collapsible accordions** (button + `aria-expanded`, panel toggled).
- **Website Foundations** stays a direct top-level link (not buried in an accordion).
- Primary CTA **"Get My Free Snapshot"** pinned at the bottom as a full-width
  button; secondary **"Explore Website Foundations"** above it.
- Accordions: `aria-expanded` on the trigger, `aria-controls` to the panel, one
  open at a time optional. Tapping any link closes the whole panel (existing
  behavior already closes on link click — extend to accordions).
- No broken links, no horizontal overflow, keyboard operable (Enter/Space toggles
  accordion, Tab order follows DOM).

---

## 10. Recommended Footer Structure

Move from 3 columns to **4 link columns + brand** (grid already responsive).

**Brand block**
- FutureSolutions
- "Premium website foundations and growth systems for health, wellness, and
  high-trust service businesses."
- CTA: **Get My Free Snapshot** → `/audit`
- Email + location (keep existing)

**Column 1 — Solutions**
- Website Foundations → `/services/template-setup`
- Signature Custom Websites → `/services/custom-healthcare-websites`
- Growth Systems → `/services/growth-systems`
- Website Management → `/services/ongoing-optimization`
- Local Visibility → `/services/local-visibility`
- _(Web & Business Systems Consulting — add when page exists)_

**Column 2 — Industries**
- Health & Wellness → `/industries/wellness-functional-medicine`
- Med Spas → `/industries/med-spas`
- Hormone / TRT Clinics → `/industries/hormone-trt-clinics`
- Solo Practices → `/industries/solo-practices`
- Associations → `/industries/healthcare-associations`
- All Industries → `/industries`

**Column 3 — Website Foundations (demos)**
- Med Spa → `/templates/med-spa`
- Solo Practice → `/templates/solo-practice`
- Wellness Clinic → `/templates/premium-wellness-clinic`
- Hormone / TRT → `/templates/hormone-trt`
- Association → `/templates/association`
- Browse all Foundations → `/templates`

**Column 4 — Company & Resources**
- About → `/about`
- Resources → `/resources`
- Contact → `/contact`
- Free Website & Lead Flow Snapshot → `/audit`

**Bottom bar (legal)**
- © Future Solutions Digital LLC
- Privacy Policy → `/privacy`
- Terms of Service → `/terms`
- _(Accessibility statement — future)_

> This adds one column (4 vs 3). If 5 columns feel too dense at the brand width,
> merge "Website Foundations (demos)" into a compact sub-list or drop it to the
> brand row — decision flagged in §12.

---

## 11. Implementation Plan

> Execute only after structure is approved. Suggested order, each independently
> revertible:

1. **CTA language pass (lowest risk, highest value).** Update the 5 labels in
   `Header.astro` / `Footer.astro` per §5. No route changes. Build + verify.
2. **Header relabel.** "Demos" → "Website Foundations"; mobile "Explore Live
   Demos" → "Explore Website Foundations". Remove orphaned
   `.site-header__audit-link` CSS.
3. **Dropdown data model.** Introduce a typed nav config (array of
   `{ label, href, children?: { label, description?, href }[] }`) in
   `Header.astro` (or a small `src/data/nav.ts`) so desktop dropdowns and mobile
   accordions render from one source.
4. **Desktop dropdowns.** Build Solutions/Industries/Resources dropdowns with
   hover + focus + keyboard support; ensure no layout shift (absolute-positioned
   panels). Use existing design tokens.
5. **Mobile accordions.** Extend the mobile panel to render collapsible sections
   with `aria-expanded`; keep CTA buttons pinned.
6. **Footer restructure.** Add the 4th column, relabel columns/links, update
   brand blurb, add Snapshot CTA in brand block.
7. **Optional `/snapshot` redirect** in `astro.config.mjs` → `/audit`.
8. **QA:** run `npm run build`; check no broken links; verify keyboard + mobile;
   update `docs/qa-route-matrix.md` (currently lists stale `/seo` and `/backend`
   as pages — they are redirects now).

---

## 12. Open Questions / Decisions Needed

1. **Header shape:** approve the recommended hybrid (Website Foundations as a
   direct link + Solutions/Industries/Resources dropdowns)? Or prefer strict
   Option A / B / C?
2. **Snapshot route:** keep `/audit` as the canonical route (recommended, since
   it's wired to GHL, `?template=` pre-fill, and `/audit-requested`) and only
   change labels? Add a `/snapshot` → `/audit` redirect for URL alignment?
3. **"Website Management" naming:** relabel `/services/ongoing-optimization` in
   nav/footer to "Website Management"? Should the page's own heading ("Care and
   Optimization") also change, or stay?
4. **Web & Business Systems Consulting:** build the page now, or keep it out of
   nav until it exists? (Recommended: keep out until built.)
5. **Local Visibility placement:** under Solutions, under Resources, or both?
6. **Project Snapshots / Case Studies:** acceptable to point Resources at the
   homepage section anchor for now, or hold until a dedicated page exists?
7. **High-Trust Service Businesses industry:** create a page, point to
   `/industries`, or omit from the Industries dropdown?
8. **Footer width:** 4 link columns + brand acceptable, or should "Website
   Foundations (demos)" be merged to keep the footer lighter?
9. **`/audit` page content:** in scope to realign its on-page "Audit" language to
   "Snapshot" in a later pass, or leave as-is for now?
