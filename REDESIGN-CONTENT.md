# Meridian S&O Redesign — Content Changes

This document covers all content/copy changes needed for the website redesign. Use alongside `REDESIGN-DESIGN.md` for the font/color scheme changes.

**Project root:** `/Users/hannah/Desktop/meridian/.claude/worktrees/festive-nash`

---

## Business Context

| Decision | Answer |
|----------|--------|
| **Brand name** | Meridian S&O (Meridian Standards & Operations) |
| **Positioning** | Compliance Infrastructure (broad, NOT fintech-only) |
| **Target market** | B2B SaaS companies — startups and mid-market, lean toward fintech but not boxed in |
| **Core frameworks** | SOC 2, PCI DSS, ISO (NO EU AI Act) |
| **Contact email** | info@meridianso.com |
| **Domain** | MeridianSO.com |
| **Pages to keep** | Home, About, Contact, Docs, Showcase |
| **Pages to DELETE** | Blog, Pricing |
| **Contact approach** | Keep form + add mailto link |

---

## HTML Reference Doc (Target Copy)

The full source HTML is at `/Users/hannah/Downloads/meridian-so.html`. Key content sections from it:

### Hero
- Badge: "Fintech Trust Infrastructure" → **change to "Compliance Infrastructure"**
- Headline: "We build the control environment before your auditor, bank, or enterprise buyer asks for it."
- Subheadline: "Meridian Standards & Operations designs compliance architecture for fintech companies preparing for PCI DSS, SOC 2, and enterprise buyer scrutiny." → **broaden "fintech companies" to "growing companies"**
- CTA: "Schedule a Discovery Call" → mailto:info@meridianso.com

### The Situation (NEW section)
- Label: "The Situation"
- Heading: "You are growing faster than your controls."
- Paragraph 1: "Your team passed a few security questionnaires by pulling answers together manually. A bank partner just asked about your PCI status. An enterprise prospect wants to see your SOC 2 report. You have smart engineers who care about security, but no structured control framework underneath it."
- Paragraph 2: "Compliance has been reactive. You know it needs to become deliberate. The question is where to start without over-investing in frameworks you may not need or under-scoping the ones you do."

### Our Approach
- Label: "Our Approach"
- Heading: "Foundation first. Then framework. Then audit."
- Intro: "We do not begin with a checklist or an audit timeline. We start with your product architecture, your data flows, and the trust expectations of the buyers you are selling to. From there, we build forward."
- Steps:
  1. **Scope** — "Map payment flows, cloud infrastructure, and third-party dependencies to define what is actually in scope."
  2. **Align** — "Match your environment to the right framework requirements. PCI, SOC 2, or both. No over-scoping."
  3. **Build** — "Design and implement controls that fit how your product actually operates, not how a template assumes it does."
  4. **Sustain** — "Establish ongoing governance so compliance stays current as you scale, raise, and onboard new partners."

### Services (4 cards, 2x2 grid)
- Label: "Services"
- Heading: "What we do."
- Cards:
  1. **Control Architecture** — "Payment flow analysis, PCI scoping, cloud governance review, third-party risk mapping, data flow diagrams, and a 90-day compliance roadmap tailored to your product and buyer requirements. Includes AWS IAM, logging, encryption, and access governance review."
  2. **PCI DSS Readiness** — "SAQ determination, gap assessment, control implementation guidance, QSA coordination, and evidence preparation. Scoped to your actual cardholder data environment, not a generic template."
  3. **SOC 2 Readiness** — "Trust Services Criteria mapping, access governance, logging and monitoring controls, vendor risk program design, business continuity formalization, and full audit preparation."
  4. **TrustOps Advisory** — "Ongoing retainer for continuous control monitoring, security questionnaire support, executive reporting, and quarterly risk reviews. Compliance stays operational, not just documented."

### Why Meridian
- Label: "Why Meridian"
- Heading: "We are not a compliance factory."
- Body: "Most compliance consultants hand you a controls spreadsheet built from a generic template. We start with scope clarity because the majority of wasted compliance spend comes from misunderstanding what is actually in scope. We understand payment architecture, tokenization models, and the cloud infrastructure patterns fintech products are built on. We design controls around how your product operates, not how an auditor imagines it does."
- Dark callout block:
  - Title: "AI Controls Expertise"
  - Body: "If your product uses machine learning for decisioning, fraud detection, or underwriting, auditors and enterprise buyers are beginning to ask about model governance, data lineage, and algorithmic risk. We help you address those questions before they surface in diligence or audit."

### Footer CTA
- Heading: "Start with scope."
- Body: "If you are building in fintech and preparing for PCI or SOC 2, the first conversation should be about what is actually in scope. We can start there." → **broaden "building in fintech"**
- CTA: "Schedule a Discovery Call" → mailto:info@meridianso.com
- Alt: "or reach us directly at info@meridianso.com"

### Site Footer
- "© 2026 Meridian Standards & Operations. MeridianSO.com"

---

## `appText.ts` — Full Restructure

The current file is at `/Users/hannah/Desktop/meridian/.claude/worktrees/festive-nash/appText.ts` (729 lines). Here is what every section needs to become:

### `metadata`
- `siteName`: `'Meridian S&O'`
- `defaultTitle`: `'Meridian S&O — Compliance Infrastructure for Growing Companies'`
- `defaultDescription`: New description referencing SOC 2, PCI DSS, ISO. NO EU AI Act.
- **Remove**: `blog` and `pricing` metadata entries
- Update remaining page descriptions to remove EU AI Act references

### `header`
- `logo`: `'Meridian S&O'`
- Replace `nav` object (5 links) with single CTA:
  ```
  cta: { text: 'Schedule a Discovery Call', href: 'mailto:info@meridianso.com' }
  ```
- Keep `mobileMenu` open/close labels

### `footer`
- Replace entire 4-column structure with:
  ```
  copyright: '© 2026 Meridian Standards & Operations.'
  domain: 'MeridianSO.com'
  ```
- Remove: `product`, `resources`, `company`, `legal` sections and `builtWith`

### `home`
**Remove these keys entirely:** `trustedBy`, `featureGrid`, `pitch`, `offers`, `faq`, `finalCta`

**Replace with:**

```
hero: {
  badge: 'Compliance Infrastructure',
  headline: 'We build the control environment before your auditor, bank, or enterprise buyer asks for it.',
  description: (broadened subheadline from HTML doc),
  cta: { text: 'Schedule a Discovery Call', href: 'mailto:info@meridianso.com' }
}

situation: {
  label: 'The Situation',
  heading: 'You are growing faster than your controls.',
  paragraphs: [ (2 paragraphs from HTML doc) ]
}

approach: {
  label: 'Our Approach',
  heading: 'Foundation first. Then framework. Then audit.',
  description: (intro paragraph from HTML doc),
  steps: [
    { number: '01', name: 'Scope', description: '...' },
    { number: '02', name: 'Align', description: '...' },
    { number: '03', name: 'Build', description: '...' },
    { number: '04', name: 'Sustain', description: '...' },
  ]
}

services: {
  label: 'Services',
  heading: 'What we do.',
  cards: [
    { title: 'Control Architecture', description: '...' },
    { title: 'PCI DSS Readiness', description: '...' },
    { title: 'SOC 2 Readiness', description: '...' },
    { title: 'TrustOps Advisory', description: '...' },
  ]
}

whyMeridian: {
  label: 'Why Meridian',
  heading: 'We are not a compliance factory.',
  body: (paragraph from HTML doc),
  callout: { title: 'AI Controls Expertise', body: '...' }
}

footerCta: {
  heading: 'Start with scope.',
  body: (broadened from HTML doc),
  cta: { text: 'Schedule a Discovery Call', href: 'mailto:info@meridianso.com' },
  alt: { text: 'or reach us directly at', email: 'info@meridianso.com' }
}
```

### `about` — Complete Rewrite
**Remove:** `story` (fake dev-tool origin), `stats` (10K+ projects etc.), `backedBy` (Sequoia/a16z — fabricated), `careers`

**Keep:** `team.members` — Hannah Ifekoya (Founder) and Ini Adewumi (Co-Founder) are real

**Add:**
- New header title/description reflecting compliance consulting identity
- Brief authentic company description (2-3 paragraphs about who Meridian S&O is)
- Rewritten values relevant to compliance (e.g., "Defensible by Default", "Execution Over Theater", "Clarity of Scope", "Continuous Operations")

### `contact` — Update
- Replace `contactInfo` (sales/support/press emails + social) with single email: `info@meridianso.com`
- Update `form.interestOptions`:
  - `general: 'General Inquiry'`
  - `soc2: 'SOC 2 Readiness'`
  - `pci: 'PCI DSS Readiness'`
  - `iso: 'ISO Alignment'`
  - `architecture: 'Control Architecture'`
- Update `form.error` to reference `info@meridianso.com`
- Keep Dallas office location
- Add mailto CTA alongside the form

### `docs` — Restructure
**Remove:** EU AI Act Compliance section entirely

**New sections:**
1. Getting Started (keep, update)
2. PCI DSS (NEW — replaces EU AI Act)
3. SOC 2 (expand)
4. ISO (expand)
5. Deliverables & Artifacts (keep)
6. Compliance Operations (keep)

**Update** `popularResources` — remove EU AI Act classification guide

### `showcase` — Rewrite
**New categories:** `['All', 'B2B SaaS', 'Fintech', 'Startups', 'Mid-Market', 'Enterprise']`

**Rewrite all 6 case studies** — remove ALL EU AI Act and MDR references. Focus on SOC 2, PCI DSS, ISO outcomes. Example direction:
- SaaS company achieving SOC 2 Type II in 90 days
- Fintech startup getting PCI DSS compliant for bank partnership
- Mid-market company mapping controls to ISO 27001
- etc.

**Update CTA:**
```
cta: {
  title: 'Ready to build your control environment?',
  description: '...',
  primary: 'Schedule a Discovery Call',
  primaryHref: 'mailto:info@meridianso.com'
}
```

### `blog` — DELETE entire section
### `pricing` — DELETE entire section

### `notFound`
- Remove `pricing` and `blog` from `helpfulLinks.links`

### `error` — No content changes needed

---

## Homepage Composition Change

**Current (`app/page.tsx`):**
```
Hero → TrustedBy → FeatureGrid → Pitch paragraph → OffersSection → FAQ → Final CTA
```

**New:**
```
Hero → SituationSection → ApproachSection → ServicesSection → WhyMeridianSection → FooterCta
```

### New components to create:
| Component | Purpose |
|-----------|---------|
| `components/SituationSection.tsx` | "The Situation" — editorial problem statement |
| `components/ApproachSection.tsx` | "Our Approach" — 4 numbered steps |
| `components/ServicesSection.tsx` | "Services" — 2x2 card grid |
| `components/WhyMeridianSection.tsx` | "Why Meridian" + dark callout block |
| `components/FooterCta.tsx` | "Start with scope" closing CTA |

All new components use `AnimatedSection` + `appText`, render with `max-w-[820px]` editorial column.

---

## Other Page Changes

| Page | Changes |
|------|---------|
| `app/about/page.tsx` | Complete rewrite. Remove fake stats/investors/story/careers. Keep team. Add authentic company description + compliance values. |
| `app/contact/page.tsx` | Single email + mailto link + form. Remove multi-department sidebar, social links. |
| `app/docs/page.tsx` | Consume restructured appText (PCI DSS replaces EU AI Act). |
| `app/showcase/page.tsx` | Consume rewritten case studies. Fix CTA link swap bug (lines 125/131 — primary links to /docs, secondary to /contact — reversed). |
| `app/not-found.tsx` | Remove `/blog` and `/pricing` links. |
| `app/blog/page.tsx` | **DELETE** |
| `app/pricing/page.tsx` | **DELETE** |

---

## Component Changes (Content-Related)

| Component | Changes |
|-----------|---------|
| `components/Header.tsx` | Remove 5-link nav. Replace with logo "Meridian S&O" + single "Schedule a Call" CTA. Remove `'use client'` (no state needed). |
| `components/Footer.tsx` | Replace 4-column grid with single line (copyright + domain). Remove all Link imports. |
| `components/Hero.tsx` | Remove secondary CTA, feature badges (EU AI Act/SOC 2/ISO checkmarks), microcopy. Single headline, single mailto CTA. |
| `components/ContactForm.tsx` | Update to consume new `interestOptions` from appText. Update error email. |

---

## Files to Delete

| File | Reason |
|------|--------|
| `app/blog/page.tsx` | Page removed |
| `app/pricing/page.tsx` | Page removed |
| `components/DynamicGrid.tsx` | Never imported (unused) |
| `components/FeatureStats.tsx` | Never imported (unused) |
| `components/PitchSection.tsx` | Never imported (unused) |
| `components/TrustedBy.tsx` | Replaced by SituationSection |
| `components/FeatureGrid.tsx` | Replaced by ApproachSection |
| `components/OffersSection.tsx` | Replaced by ServicesSection |
| `public/file.svg` | Unused starter asset |
| `public/globe.svg` | Unused starter asset |
| `public/next.svg` | Unused starter asset |
| `public/vercel.svg` | Unused starter asset |
| `public/window.svg` | Unused starter asset |

---

## Verification Checklist

After all changes, grep for stale references:
- `EU AI Act` — should be zero matches
- `/blog` — should only appear in git history
- `/pricing` — should only appear in git history
- `meridian.com` — should be `meridianso.com` everywhere
- `ff6ad8` — old pink accent, should be zero
- `sales@meridian.com`, `support@meridian.com`, `press@meridian.com` — should be zero
