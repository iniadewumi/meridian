# Design & Structure Audit: Code vs meridian-so.html

Reference: `meridian-so.html`. This doc lists what to **create**, **modify**, and **delete** to align structure and global design. Content updates are out of scope.

---

## Global design fixes (done)

- **Primary button**: Solid accent green (`#2c5f4a`), light text, hover `#234d3b` — was white/black.
- **Secondary button**: Outline accent (border + text), hover fill — was white border on light background.
- **Nav links**: Accent color, hover = filled accent + light text — was hover to white (invisible on light bg).
- **Background / tokens**: `:root` tokens match HTML (paper, ink, accent, rule, warm, etc.); body uses `--paper`/`--ink`.
- **Fonts**: DM Sans + DM Serif Display already in `layout.tsx`; no change.
- **Tailwind**: Removed invalid v4-style `@import "tailwindcss"` and `@theme`; kept v3 `@tailwind` directives and added `fadeUp` keyframes.

---

## CREATE (components / pieces to add for S&O structure)

When you’re ready to mirror the HTML page structure:

| Item | Purpose |
|------|--------|
| **SituationSection** | “The Situation” block: section label, heading “You are growing faster than your controls.”, 2× section-body paragraphs. |
| **ApproachSection** | “Our Approach”: label, heading “Foundation first. Then framework. Then audit.”, intro paragraph, **approach-steps** grid (4 columns: 01 Scope, 02 Align, 03 Build, 04 Sustain). |
| **ServicesSection** | “Services”: label, heading “What we do.”, **services-grid** (2×2): Control Architecture, PCI DSS Readiness, SOC 2 Readiness, TrustOps Advisory. |
| **WhyMeridianSection** | “Why Meridian”: label, heading “We are not a compliance factory.”, body paragraph, **diff-block** (dark bg): “AI Controls Expertise” + paragraph. |
| **FooterCtaSection** | Centered CTA above site footer: heading “Start with scope.”, short paragraph, primary CTA link “Schedule a Discovery Call”, “or reach us at …” with mailto. |
| **Reusable primitives** (optional) | `SectionLabel`, `SectionHeading`, `SectionBody`, `ServiceCard`, `StepCard`, `DiffBlock` to keep sections consistent with HTML classes. |

No new **pages** are strictly required; these can live as sections on the existing home (or a dedicated S&O route) and be wired to `appText` later.

---

## MODIFY (done or recommended)

| Item | Status | Notes |
|------|--------|--------|
| **globals.css** | Done | Single Tailwind v3 entry point; `:root` tokens; `.btn-primary` / `.btn-secondary` / `.nav-link` / `.nav-cta` match HTML; `fadeUp` added; duplicate block removed. |
| **tailwind.config.ts** | Done | Comment and `accent-hover` added; palette already matched. |
| **Header** | Done | Nav CTA “Schedule a Call” added (outline style, `.nav-cta`); nav links use `.nav-link` with correct hover. |
| **Footer** | Done | Structure matches HTML: single line, centered, border-top, no link columns. |
| **Hero** | Done | Badge/label uses accent color (text and dot). Padding/styling already close; optional: match HTML hero padding (e.g. 100px 0 80px) and container max-width. |
| **Section spacing** | Optional | For pixel parity: section `padding: 72px 0` (e.g. `py-18`), container `max-width: 820px` + `px-7` as in HTML. |
| **Layout (body)** | Optional | HTML uses `font-size: 16.5px`, `line-height: 1.7`; can add to `body` in `globals.css` or via Tailwind if desired. |
| **Final CTA (page.tsx)** | No change | Uses `.btn-primary` / `.btn-secondary`; styling fixed globally. |

---

## DELETE (or simplify)

| Item | Recommendation |
|------|----------------|
| **Duplicate Tailwind / theme in globals.css** | Done — removed `@import "tailwindcss"`, `@theme { }`, and the second `@tailwind` block. |
| **DynamicGrid component + .dynamic-grid / .grid-cell CSS** | **Optional** — `DynamicGrid` is not used on the home page or in layout. Safe to remove component and its styles if you don’t plan to use the grid; otherwise keep. |
| **Footer 4-column link grid** | Done — replaced by single-line footer. |
| **“Built with Next.js” in footer copy** | Content — update in `appText.footer` when you refresh content. |
| **Unused animations** | `.animate-gradient`, `.animate-float`, `gradient-shift`, `float` — keep if used elsewhere; remove if not. |

---

## File-level summary

- **Updated:** `app/globals.css`, `tailwind.config.ts`, `components/Header.tsx`, `components/Footer.tsx`, `components/Hero.tsx` (badge accent).
- **To add (when aligning content/structure):** SituationSection, ApproachSection, ServicesSection, WhyMeridianSection, FooterCtaSection, and optionally the reusable primitives above.
- **Optional cleanup:** Remove `DynamicGrid.tsx` and its CSS if unused; trim unused animation keyframes/classes.
