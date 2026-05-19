# VANTAGE Men's Health — Final Art Direction & Polish Plan

## 1. What Still Feels Repetitive

- Almost every section: black bg → red eyebrow → white H2 → gray paragraph → 1px-gap grid
- Sections use same `--vt-charcoal` or `--vt-black` without visual texture or shape variety
- No image/brand identity moments — the site is pure UI panels and text
- Max-width 1080px feels narrow, leaving too much empty black space on wider screens
- Hero stat card is decent but too small/generic — needs to be a flagship visual
- All service pages share identical skeleton: hero → reasons → process → safety → pricing → CTA
- No section uses diagonal cuts, field patterns, oversized type, or visual anchors
- Standard band, breakdown, tracks, stack, labs, roster, pricing, wins — all use same 1px-gap grid technique

## 2. Visual Systems to Add

### A. Identity Layer (CSS-only)
- Subtle diagonal red stripe accents on key sections
- Branded image placeholder blocks with dark overlay + label + red corner marks
- Oversized section numbers (e.g., "01" in ~4rem behind content)
- Thin red horizontal rules as section dividers
- Field-line patterns on bone sections (subtle dotted lines)

### B. Wider Container Option
- Add `.vt-w--wide` at `min(100% - 2rem, 1200px)` for hero, labs, and other flagship sections
- Keep standard `.vt-w` at 1080px for text-heavy sections

### C. Branded Image Placeholders
- Dark panel with subtle diagonal stripe + red corner marks + white label
- Used for: hero secondary visual, labs section, service page heroes, provider section
- Labels: "PERFORMANCE LAB", "PRIVATE CONSULT", "BIOMARKER REVIEW", etc.

## 3. Homepage Section Improvements

| Section | Current | Improvement |
|---------|---------|-------------|
| Hero | Small stat card, basic diagonal | Larger scoreboard, wider grid, branded image placeholder, bottom status row |
| Standard | Basic 4-column grid | Oversized numbers, stronger visual weight, red accent left borders |
| Breakdown | 3×2 grid of same-shaped cards | Add "SIGNAL" label, stronger hover, red left-border on hover |
| Tracks | Stacked same-weight panels | Add red left-border accent on each panel, oversized track numbers |
| Game Plan | Steps on bone | Add subtle field-line pattern background, stronger step markers |
| Treatment Stack | Category bands | Add branded visual placeholder in empty space, stronger band separators |
| Labs | Split with small tiles | Use wider container, larger tiles, add branded "BIOMARKER REVIEW" placeholder |
| Roster | 2-col cards | Add "TEAM" header image placeholder, stronger card differentiation |
| Pricing | 3-col comparison | Red left border on featured, stronger visual hierarchy |
| Patient Wins | 2×2 grid | Add oversized "WIN" numbers, stronger quote styling |
| FAQ | Single column | Add section number, wider max-width |
| Final CTA | Red panel | Add field-line motif, stronger composition |

## 4. Service Page Differentiation

- Testosterone: Add "Key Markers" stat-board band
- ED: More restrained/private tone, privacy shield visual
- Weight Loss: Add metabolic factors scoreboard
- How It Works: Bigger game plan graphic, more bone background
- Pricing: Stronger membership board, clearer featured tier
- Assessment: Progress indicator bar, premium form styling
- Book Consultation: Stronger prep checklist, cleaner form panel

## 5. Readability & Spacing

- Increase hero padding and scale
- `.vt-w--wide` for hero, labs, process sections
- Larger h1 on homepage (bump max to 3.8rem)
- Slightly more generous section padding on key sections
- Better visual breathing room around CTA blocks

## 6. Files to Modify

- `src/layouts/VantageLayout.astro` — add `.vt-w--wide`, `.vt-img` placeholder, identity CSS
- `src/pages/demos/hormone-trt/index.astro` — homepage polish
- All 7 supporting pages — targeted improvements
- `src/data/vantage.ts` — no changes needed

## 7. QA Checklist

- [ ] All 8 VANTAGE routes build
- [ ] Other demos unaffected
- [ ] No red used as small body text
- [ ] Text contrast passes
- [ ] Mobile responsive
- [ ] Hero feels flagship
- [ ] Sections feel visually distinct
- [ ] Service pages feel differentiated
- [ ] Build passes with 0 errors
