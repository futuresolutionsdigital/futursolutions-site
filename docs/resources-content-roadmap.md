# Resources Content Roadmap

Status: living document. Created alongside the Resource Library upgrade (block-based content model, visual block components, filterable index, two flagship resources).

## Purpose

The Resource Library exists to do three jobs, in this order:

1. **Earn trust** by demonstrating the quality and care a FutureSolutions build delivers.
2. **Help the ideal visitor** (health and wellness operators: med spas, TRT/hormone clinics, solo practices, wellness clinics, associations) with genuinely useful, paid-grade material.
3. **Route interest to the Free Website & Lead Flow Snapshot** (`/audit`), and secondarily to Foundations, Growth Systems, and Local Visibility.

Every resource should pass the test: *would a busy practice owner save, print, or forward this?* If not, it is not ready.

## Resource types

| Type | What it is | Primary job |
| --- | --- | --- |
| **Guide** | Strategic read on what moves a healthcare website | Trust + SEO + education |
| **Playbook / SOP** | Step-by-step operating procedure with owners and scripts | Operational value, high save/forward |
| **Checklist** | Scannable, self-scoring audit | Self-diagnosis -> Snapshot |
| **Toolkit / Template** | Copy-paste assets (scripts, page outlines, email sequences) | Immediate utility, future lead magnet |

## Content pillars (lanes)

- **Trust & Strategy** (custom lane)
- **Conversion** (audit lane)
- **Foundations & Local** (foundation lane)
- **Growth Systems** (growth lane)

## Current inventory

Published (live, in the new visual system):

- Guide - What Makes a Healthcare Website Feel Trustworthy? (Trust)
- Guide - Why Most Practice Websites Do Not Convert (Conversion)
- Guide - The Homepage Structure Every Health and Wellness Business Needs (Trust)
- Guide - Local SEO Basics for Medical and Wellness Practices (Local)
- Guide - What Happens After Someone Fills Out Your Contact Form? (Growth)
- Guide - Website Foundation vs Signature Custom (Foundations)
- **Playbook - The New Patient Inquiry Follow-Up SOP** (flagship)
- **Checklist - The Website Trust & Conversion Audit Checklist** (flagship, featured)

Planned (stubs in `resources.ts`, shown in the "On the roadmap" teaser):

- Guide - What Every Med Spa Website Needs to Drive Bookings
- Guide - How Solo Practices Can Build Trust Online
- Guide - Why Every Service Deserves Its Own Page
- Playbook - How to Turn Your Website Into a Lead and Booking System

## Prioritized backlog

Priority is weighted by: Snapshot pull, ideal-customer relevance, and reusability as a future lead magnet.

### Now (next 4-6 pieces)

| Priority | Type | Working title | Pillar | Industry focus | Snapshot pull |
| --- | --- | --- | --- | --- | --- |
| 1 | Toolkit | Healthcare Homepage Wireframe & Section Outline | Trust | All | High |
| 2 | Checklist | New Website Launch Readiness Checklist | Foundations | All | High |
| 3 | Playbook | Google Business Profile Setup & Optimization SOP | Local | Local/appointment-based | High |
| 4 | Guide | What Every Med Spa Website Needs to Drive Bookings | Trust | Med spa | Medium |
| 5 | Toolkit | First-5-Touches Email & SMS Follow-Up Templates | Growth | All | High (pairs with the SOP) |
| 6 | Guide | How Solo Practices Can Build Trust Online | Trust | Solo practice | Medium |

### Next

- Checklist - Med Spa Website Conversion Checklist (industry cut of the flagship)
- Checklist - TRT / Hormone Clinic Intake & Compliance-Aware Funnel Checklist
- Playbook - Review Request SOP (asking for reviews within privacy rules)
- Guide - Why Every Service Deserves Its Own Page (Local)
- Toolkit - Service Page Template (structure + prompts)
- Playbook - How to Turn Your Website Into a Lead and Booking System

### Later

- Industry toolkits (bundled guide + checklist + templates per industry)
- Association-specific resources (membership, events, advocacy structure)
- Annual "State of Healthcare Websites" trends piece

## Type x pillar coverage (target)

Aim for at least one strong resource in every cell over time. Bold = exists.

| Pillar | Guide | Playbook | Checklist | Toolkit |
| --- | --- | --- | --- | --- |
| Trust & Strategy | **yes** | gap | gap | gap (priority 1) |
| Conversion | **yes** | gap | **yes** | gap |
| Foundations & Local | **yes (x2)** | gap (priority 3) | gap (priority 2) | gap (priority 7) |
| Growth Systems | **yes** | **yes** | gap | gap (priority 5) |

## Production standards (the quality bar)

Every published resource should use the block system to avoid walls of text:

- An `intro` that frames the real problem, not keywords.
- At least one non-text visual block per ~2 screens (callout, steps, stats, compare, do/don't, script, checklist, or figure).
- Headings with `id`s so the auto table of contents and HowTo schema work.
- `keyTakeaways` at the end.
- Premium resources also set `subtitle`, `outcomes`, `forWho`, and `timeToImplement` so the "What you'll get" panel renders.
- A clear CTA: primary always the Free Snapshot; secondary to the most relevant service.

## Future phases (out of scope for the current pass)

1. **Email capture / lead magnets.** Offer a polished downloadable (PDF) version of the premium toolkits and checklists in exchange for an email. Reuse the existing audit form pattern (`AuditFormShell`). Keep on-page versions free; the download is the upgrade.
2. **Generated PDF assets.** Branded, print-perfect PDFs for the SOP, checklists, and toolkits. Current pass ships print-friendly CSS so browser "Save as PDF" already works.
3. **Interactive tools / calculators.** E.g. a lead-leakage calculator, a "what should my site cost" estimator, or an interactive version of the audit checklist that computes the score automatically.
4. **Industry landing hubs.** Per-industry resource collections that link to the matching Foundation demo.
5. **Search + tag pages** once the library exceeds ~20 resources.
