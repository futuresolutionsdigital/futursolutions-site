# VANTAGE Visual Density & Premium Polish Plan

## 1. Screenshot-Based Issues Observed

- Hero `.vt-img` placeholder: dark rectangle with barely-visible "Performance Lab" label. Feels empty.
- Labs "Biomarker Review" placeholder: same issue — blank dark rectangle.
- Service page heroes: "Hormone Performance Lab" / "Private Consult" placeholders are empty boxes.
- Several homepage sections at 1080px sit in wide black voids on desktop.
- Metabolic factors, key markers, privacy panels on service pages feel thin/sparse.
- Game plan steps on bone section feel lightweight — small circles on a dotted line.
- Treatment stack bands are narrow rows of small pill buttons.
- Pricing columns feel compressed.

## 2. Sections That Feel Too Empty

- Homepage hero right-side (image placeholder + scoreboard stack)
- Treatment Stack section — narrow bands with small buttons
- Roster section — 2-col cards on a black field
- FAQ section — narrow 700px list on a full-width dark bg
- Service page heroes — single-column text with small sidebar cards
- How-It-Works expanded step details — max-width 700px on full-width bg

## 3. Placeholder Panels That Need Improvement

Current `.vt-img` is: dark background + faint diagonal stripe + red corner bracket + barely-visible label.

Upgrade to rich CSS compositions:
- Add layered internal elements: mock stat bars, status chips, grid lines
- Make labels more visible (increase opacity)
- Add mock "UI chrome" — thin header bar, status dots, measurement lines
- Add bottom-right red corner bracket too (both corners)
- Make min-height larger where appropriate

## 4. Planned Visual-Density Improvements

### Layout (VantageLayout.astro)
- Upgrade `.vt-img` with richer composition: dual corner brackets, internal mock UI elements, stronger label
- Add `.vt-img--tall` variant for larger placeholders
- Widen `--vt-max` to 1120px for slightly more content room

### Homepage (index.astro)
- Hero: Replace thin image placeholder with richer composition including mock status bars
- Hero: Widen scoreboard stat rows, add more visual weight to the card
- Breakdown: Use `vt-w--wide` for wider grid
- Tracks: Use `vt-w--wide`
- Labs: Make tiles taller with mock reference ranges
- Pricing: Use `vt-w--wide`
- FAQ: Increase max-width to full container
- Roster: Use `vt-w--wide`

### Service pages
- TRT: Make key markers band more substantial (grid layout, not inline pills)
- Weight Loss: Make metabolic factors bars taller with value labels
- ED: Make privacy shield wider and stronger
- How It Works: Make hero image placeholder richer
- Assessment: Strengthen progress indicator
- Book Consultation: Improve image placeholder

## 5. Files to Modify

1. `src/layouts/VantageLayout.astro`
2. `src/pages/demos/hormone-trt/index.astro`
3. `src/pages/demos/hormone-trt/testosterone-optimization.astro`
4. `src/pages/demos/hormone-trt/ed-sexual-wellness.astro`
5. `src/pages/demos/hormone-trt/medical-weight-loss.astro`
6. `src/pages/demos/hormone-trt/how-it-works.astro`
7. `src/pages/demos/hormone-trt/pricing.astro`
8. `src/pages/demos/hormone-trt/assessment.astro`
9. `src/pages/demos/hormone-trt/book-consultation.astro`

## 6. QA Checklist

- [ ] All 8 VANTAGE routes build
- [ ] Other demos unaffected
- [ ] Placeholder panels feel branded, not empty
- [ ] No overflow on mobile
- [ ] Text contrast passes
- [ ] Hero feels substantial
- [ ] Labs section feels flagship
- [ ] Build passes with 0 errors
