# VANTAGE Template Integration Polish Plan

## 1. Current Mismatch
- VANTAGE demo is red/black, dark, masculine, sports-performance medicine
- Template card mockup on /templates is pastel/soft with green accents — identical to every other card
- Template detail hero on /templates/hormone-trt has same pale generic browser mockup
- Audit-requested card is plain text with no differentiation

## 2. Template Card Issues
- Generic pastel browser mockup doesn't preview the red/black direction
- Feature tags show generic features (Symptom-Based Routing, Patient Pathway Cards) — need sport-performance ones
- QuickViewSummary needs updating to reference sports-performance direction

## 3. Template Detail Page Issues
- Hero has same soft green/pastel preview mockup as every other template
- No "Why this template is different" section
- Description is good but doesn't sell the sports-performance brand positioning

## 4. Audit-Requested Card Issues
- Description is generic — needs to reference red/black sports-performance direction

## 5. Planned Improvements
- Add VANTAGE-specific dark mockup variant to TemplateCard.astro (slug check)
- Add VANTAGE-specific dark preview to TemplateDetailHero.astro (slug check)
- Update templates.ts features list for VANTAGE
- Add "Why this template is different" section to [slug].astro for VANTAGE
- Update audit-requested VANTAGE card
- Update TemplatePreviewSection.astro mockup for VANTAGE

## 6. Files to Modify
1. `src/data/templates.ts`
2. `src/components/TemplateCard.astro`
3. `src/components/TemplateDetailHero.astro`
4. `src/components/TemplatePreviewSection.astro`
5. `src/pages/templates/[slug].astro`
6. `src/pages/audit-requested/index.astro`

## 7. QA Checklist
- [ ] /templates — VANTAGE card has dark mockup, reads differently
- [ ] /templates/hormone-trt — hero preview is dark/red, "Why different" section present
- [ ] /audit-requested — VANTAGE card updated
- [ ] /demos/hormone-trt — still works
- [ ] Other template cards unaffected
- [ ] Build passes with 0 errors
