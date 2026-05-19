# VANTAGE Men's Health — Sports Performance Redesign Plan

## 1. What Still Feels Too Similar

### Structural overlaps with Wellness demo:
- Homepage conversion arc: same story beats (hero → credibility → symptoms → pathways → process → offerings → team → pricing → testimonials → FAQ → CTA)
- Diagnostic hero panel: both use panel-header + metric bars + sample disclaimer
- Segmented border grids: pillars, protocol, pricing all use `repeat(N, 1fr)` inside shared borders
- Numbered row lists: `01` labels + border-bottom rows used for symptoms, benefits, tracks
- FAQ accordion: nearly identical `details/summary` with `+/−` and `max-width: 680px`
- Header/footer scaffold: same sticky bar + grid footer + banner height JS + bottom sticky CTA
- Service pages: numbered benefit rows + protocol step dots + stat-strip CTAs
- Design tokens: Inter font, ~1100px max width, uppercase micro-labels, muted body at ~45% opacity

### What the "command center" direction failed to fix:
- Still dark-on-dark with low contrast
- Still used bordered segmented panels (same as wellness bordered cards, just merged)
- Still used diagnostic/dashboard visual metaphors that feel generic
- Still used the same conversion arc ordering
- Bronze accent felt like a muted version of wellness sage — didn't create visual energy

---

## 2. New Visual Language: "Elite Sports Performance Medicine"

**Concept:** Premium men's health clinic meets elite sports facility. Think sports science lab, not software dashboard.

**Core metaphor:** "Your health has a game plan."

### Visual motifs:
- Scoreboard/stat-card panels (not diagnostic dashboards)
- Field-line / playbook-style background patterns
- Diagonal red accent stripes
- Roster-style provider cards
- Training-facility energy
- Game plan tracks (not care pathways)
- Performance breakdown (not symptom dossier)
- Player-card biomarker tiles
- Comparison/matchup tables
- Season-long optimization plan

### What changes structurally:
- Hero: Diagonal red accent stripe, asymmetric split, scoreboard-style stat cards (NOT metric bars)
- Trust bar → "Performance Standard" bold band with pillar blocks
- Symptoms → "Performance Breakdown" with signal-style stat blocks
- Pathways → "Game Plan Tracks" with playbook-style numbered panels
- Process → "The VANTAGE Game Plan" with field-line horizontal design
- Treatments → "Performance Medicine Stack" with stacked bands/angled panels
- Labs → Sports science biomarker tiles with status indicators
- Providers → "Performance Medical Team" roster-style layout
- Pricing → Club membership comparison board
- Testimonials → "Patient Wins" numbered entries
- FAQ → Grouped accordion with sport-themed categories
- Final CTA → Decisive game-plan action panel

---

## 3. New Palette

```css
--vt-black: #050505;
--vt-charcoal: #111111;
--vt-carbon: #1A1A1A;
--vt-bone: #F4EFE7;
--vt-white: #FFFFFF;
--vt-red: #D71920;
--vt-crimson: #8F1117;
--vt-muted-red: #B4232A;
--vt-steel: #7C858C;
--vt-silver: #C7CED3;
--vt-warm-gray: #D8D0C5;
--vt-border: rgba(255,255,255,0.08);
--vt-border-light: rgba(0,0,0,0.08);
--vt-border-red: rgba(215,25,32,0.2);
--vt-r: 3px;
```

### Color rules:
- Red for: CTAs, accent lines, stat indicators, dividers, badges, hover states
- NEVER red for body text on dark backgrounds
- Body text: `--vt-bone` on dark, `--vt-charcoal` on light
- Headers: `--vt-white` on dark, `--vt-black` on light
- High contrast everywhere — readability is non-negotiable

---

## 4. Accessibility Rules

- All body text on dark: minimum `#F4EFE7` on `#111111` = ratio ~14:1 ✓
- Red accent `#D71920` used only on large text (18px+), buttons, icons, lines — NOT small body
- White `#FFFFFF` on `#050505` = 21:1 ✓
- `#111111` on `#F4EFE7` = ~14:1 ✓
- Red button `#D71920` with white text = ~4.8:1 ✓ for large text
- Focus states: red outline ring
- Form inputs: high contrast labels and borders

---

## 5. Files to Modify

### Data:
- `src/data/vantage.ts` — updated nav labels, sport-themed section data

### Layout:
- `src/layouts/VantageLayout.astro` — complete rewrite: new palette, sports-club header, compact footer

### Homepage:
- `src/pages/demos/hormone-trt/index.astro` — 13 new sports-performance sections

### Supporting pages (7):
- testosterone-optimization.astro
- ed-sexual-wellness.astro
- medical-weight-loss.astro
- how-it-works.astro
- pricing.astro
- assessment.astro
- book-consultation.astro

### No changes to:
- Wellness clinic files
- Other demo files
- templates.ts
- AuditFormShell.astro

---

## 6. New Homepage Architecture

| # | Section | Layout Pattern | What It Replaces |
|---|---------|---------------|-----------------|
| 1 | Sports-club header | Black bar with red top rule, sharp nav | Command-bar header |
| 2 | Hero | Diagonal red stripe, asymmetric, scoreboard stats | Stacked console panel |
| 3 | Performance Standard | Bold horizontal band, 4 pillar blocks | Status rail dots |
| 4 | Performance Breakdown | Signal-style stat blocks, 2×3 grid | Chip cluster dossier |
| 5 | Game Plan Tracks | Numbered playbook panels, stacked rows | 2-col care tracks |
| 6 | The VANTAGE Game Plan | Horizontal field-line steps, red markers | Protocol timeline track |
| 7 | Performance Medicine Stack | Stacked category bands with treatments | Categorized matrix rows |
| 8 | Lab section | Biomarker tiles, sports science report | Dashboard grid panel |
| 9 | Performance Medical Team | Roster-style cards with credential bars | Editorial provider rows |
| 10 | Care Plans | Club membership comparison board | Segmented pricing columns |
| 11 | Patient Wins | Numbered win entries with concern/result | Dossier notes |
| 12 | FAQ | Grouped accordion, single column | Same basic pattern |
| 13 | Final CTA | Red action panel, decisive | Split CTA + stat strip |

---

## 7. QA Checklist

- [ ] Zero old VANTAGE class names remain (vt-sec, vt-eye, vt-cmd, etc.)
- [ ] New palette applied consistently
- [ ] Red never used as small body text
- [ ] Text contrast passes on all sections
- [ ] All 8 VANTAGE routes build
- [ ] All other demo routes unaffected
- [ ] Mobile responsive at 768px, 600px, 480px
- [ ] Forms remain demo-only
- [ ] No broken internal links
- [ ] Hero dramatically different from wellness demo
- [ ] Section rhythm differs from wellness demo
- [ ] No shared layout primitives with wellness demo
