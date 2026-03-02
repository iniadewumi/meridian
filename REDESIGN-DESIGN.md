# Meridian S&O Redesign — Font & Color Scheme

This document covers all visual/design system changes. Use alongside `REDESIGN-CONTENT.md` for content changes.

**Project root:** `/Users/hannah/Desktop/meridian/.claude/worktrees/festive-nash`

---

## Design Direction

Moving from a dark dev-tool aesthetic to a light editorial style. The target look is defined by the HTML reference doc at `/Users/hannah/Downloads/meridian-so.html`.

### Current → New

| | Current | New |
|---|---|---|
| **Theme** | Dark (black bg) | Light (cream bg) |
| **Heading font** | Inter (bold/extrabold) | DM Serif Display (weight 400) |
| **Body font** | Inter | DM Sans |
| **Primary bg** | `#000000` | `#f8f7f4` (paper) |
| **Card/section bg** | `#111111` | `#f2f0eb` (warm) |
| **Primary text** | `#ffffff` | `#1a1d23` (ink) |
| **Secondary text** | `#ff6ad8` (pink) | `#6b6e76` (stone) |
| **Muted text** | `#666666` | `#6b6e76` (stone) |
| **Accent** | `#ff6ad8` (pink) | `#2c5f4a` (green) |
| **Borders** | `#222222` | `#d4d2cd` (rule) |
| **Hover bg** | `#1a1a1a` | `#f2f0eb` (warm) |
| **Button primary** | White bg, black text, glow | Green bg, cream text |
| **Button secondary** | Transparent, white border | Transparent, rule border |
| **Max width** | `max-w-7xl` (varies) | `820px` editorial column |
| **Nav** | Fixed, blur bg, 5 links + hamburger | Static, border-bottom, logo + 1 CTA |
| **Footer** | 4-column link grid | Single line |
| **Animations** | Grid pulse, shimmer, gradient shift | Simple fade-up on scroll |

---

## New Color Tokens

```
ink:          #1a1d23   — Primary text, headings
paper:        #f8f7f4   — Page background
stone:        #6b6e76   — Secondary/body text
accent:       #2c5f4a   — CTAs, labels, links, accents
accent-light: #e8f0ec   — Accent backgrounds, badges
rule:         #d4d2cd   — Borders, dividers
warm:         #f2f0eb   — Card backgrounds, section alternates
```

---

## Files to Modify

### 1. `tailwind.config.ts`

**Current colors block:**
```typescript
colors: {
  'dark-bg': '#000000',
  'dark-surface': '#111111',
  'dark-border': '#222222',
  'dark-text': '#ffffff',
  'dark-text-secondary': '#ff6ad8',
  'dark-text-muted': '#666666',
  'dark-hover': '#1a1a1a',
},
```

**Replace with:**
```typescript
colors: {
  ink: '#1a1d23',
  paper: '#f8f7f4',
  stone: '#6b6e76',
  accent: '#2c5f4a',
  'accent-light': '#e8f0ec',
  rule: '#d4d2cd',
  warm: '#f2f0eb',
},
```

**Current fontFamily:**
```typescript
fontFamily: {
  sans: ['var(--font-inter)'],
},
```

**Replace with:**
```typescript
fontFamily: {
  sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
  serif: ['var(--font-serif)', 'Georgia', 'serif'],
},
```

Keep `letterSpacing`, `animation`, and `keyframes` as-is.

### 2. `app/layout.tsx`

**Current:**
```tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
// ...
<body className={`${inter.className} antialiased bg-black text-white`}>
```

**Replace with:**
```tsx
import { DM_Serif_Display, DM_Sans } from 'next/font/google'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
// ...
<html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
  <body className="font-sans antialiased bg-paper text-ink">
```

### 3. `app/globals.css`

**Full rewrite.** Replace entire file contents with:

```css
@import "tailwindcss";

@theme {
  --color-ink: #1a1d23;
  --color-paper: #f8f7f4;
  --color-stone: #6b6e76;
  --color-accent: #2c5f4a;
  --color-accent-light: #e8f0ec;
  --color-rule: #d4d2cd;
  --color-warm: #f2f0eb;

  --animate-fade-in: fadeIn 0.5s ease-in;
  --animate-slide-up: slideUp 0.5s ease-out;
}

@layer base {
  * {
    border-color: var(--color-rule);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-paper);
    color: var(--color-ink);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Button styles */
.btn-primary {
  @apply px-6 py-3 bg-accent text-white font-semibold rounded-sm;
  @apply hover:bg-accent/90 transition-all duration-200;
  @apply hover:-translate-y-px;
}

.btn-secondary {
  @apply px-6 py-3 border border-accent text-accent font-semibold rounded-sm;
  @apply hover:bg-accent hover:text-white transition-all duration-200;
  @apply uppercase tracking-wider text-sm;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**What's removed:** All dark-theme CSS (`gridPulse`, `cellHighlight`, `shimmer` keyframes, `.nav-link` pink styles, `.dynamic-grid` and `.grid-cell` rules, `.animate-gradient`, `.animate-float`, `gradient-shift`, `float` keyframes). Also removes the duplicate `@tailwind base/components/utilities` directives (lines 159-161 that conflict with line 1 `@import "tailwindcss"`).

### 4. `next.config.js`

Update CSP `font-src` line:

**Current:**
```javascript
"font-src 'self' data:",
```

**Replace with:**
```javascript
"font-src 'self' data: https://fonts.gstatic.com",
```

---

## Color Class Migration Guide

Every component and page file needs color classes updated. Here's the mapping:

### Background classes
| Old | New |
|-----|-----|
| `bg-black` | `bg-paper` |
| `bg-black/80` | `bg-paper` |
| `bg-[#111]` | `bg-warm` |
| `bg-dark-surface` | `bg-white` |
| `bg-dark-bg` | `bg-paper` |
| `bg-dark-border` | `bg-rule` |
| `bg-dark-hover` | `bg-warm` |
| `bg-white/[0.02]` | `bg-warm` |
| `bg-white text-black` (btn) | `bg-accent text-white` |
| `bg-green-900/20` | `bg-accent-light` |
| `bg-red-900/20` | `bg-red-50` |

### Text classes
| Old | New |
|-----|-----|
| `text-white` | `text-ink` |
| `text-[#888]` | `text-stone` |
| `text-[#666]` | `text-stone` |
| `text-[#555]` | `text-stone` |
| `text-dark-text` | `text-ink` |
| `text-dark-text-secondary` | `text-stone` |
| `text-dark-text-muted` | `text-stone/60` |
| `text-gray-400` | `text-stone` |
| `text-gray-500` | `text-stone/60` |
| `text-green-400` | `text-accent` |
| `text-red-400` | `text-red-700` |

### Border classes
| Old | New |
|-----|-----|
| `border-[#222]` | `border-rule` |
| `border-dark-border` | `border-rule` |
| `border-white/10` | `border-rule` |
| `border-white/20` | `border-rule` |
| `border-green-500/50` | `border-accent/30` |
| `border-red-500/50` | `border-red-200` |

### Focus/ring classes
| Old | New |
|-----|-----|
| `focus:ring-white` | `focus:ring-accent` |
| `outline: 2px solid white` | `outline: 2px solid var(--color-accent)` |

### Hover classes
| Old | New |
|-----|-----|
| `hover:text-white` | `hover:text-ink` |
| `hover:bg-white/5` | `hover:bg-warm` |
| `hover:border-white/20` | `hover:border-stone/30` |
| `hover:border-white/40` | `hover:border-stone/50` |
| `hover:border-dark-text-muted` | `hover:border-stone` |
| `hover:bg-gray-200` | `hover:bg-accent/90` |

### Typography classes
| Old | New |
|-----|-----|
| `font-extrabold` / `font-bold` (headings) | `font-serif font-normal` |
| `tracking-tighter` (headings) | `tracking-normal` or remove |

---

## Component-Level Design Changes

### `components/Header.tsx`
- Remove: `fixed top-0`, `bg-black/80`, `backdrop-blur-sm`, `border-[#222]`
- Add: `border-b border-rule`
- Container: `max-w-[820px] mx-auto px-7`
- Logo: `font-serif text-xl text-ink`
- Nav CTA: Uses `.btn-secondary` class (border style, uppercase)
- Remove mobile hamburger entirely (single CTA doesn't need it)

### `components/Footer.tsx`
- Remove: `bg-black`, `text-gray-400`, `border-white/10`
- Add: `border-t border-rule`
- Container: `max-w-[820px] mx-auto`
- Text: `text-sm text-stone`

### `components/Hero.tsx`
- Remove: `min-h-screen`, gradient bg, grid pattern overlay, `animate-fade-in`
- Remove: `text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter`
- Add: `font-serif text-4xl md:text-5xl font-normal leading-tight`
- Container: `max-w-[820px] mx-auto px-7`
- Section padding: `pt-24 pb-20`
- Badge: `text-xs font-semibold uppercase tracking-widest text-accent`
- Subheadline: `text-lg text-stone max-w-xl leading-relaxed`
- NOT centered — left-aligned (matching HTML doc)

### `components/ContactForm.tsx`
- `bg-dark-surface` → `bg-white`
- `border-dark-border` → `border-rule`
- `bg-dark-bg` → `bg-paper`
- `text-white` on inputs → `text-ink`
- `focus:ring-white` → `focus:ring-accent`
- Success: `bg-accent-light border-accent/30 text-accent`
- Error: `bg-red-50 border-red-200 text-red-700`

### New components (all follow same pattern)
- Container: `max-w-[820px] mx-auto px-7`
- Section padding: `py-16` or `py-20`
- Section labels: `text-xs font-semibold uppercase tracking-widest text-accent mb-5`
- Section headings: `font-serif text-3xl md:text-4xl text-ink font-normal`
- Body text: `text-stone leading-relaxed`
- Cards: `bg-warm rounded-sm p-8 border border-transparent hover:border-rule`
- Dark callout: `bg-ink text-white rounded-sm p-8` with body text `text-white/70`
- Section dividers: `border-b border-rule` on sections

### Pages — Layout Changes
- All pages: Replace `max-w-7xl` with `max-w-[820px]` (or `max-w-4xl` for pages with 2-col grids like docs/showcase)
- Remove: `pt-24` top padding that compensated for fixed header (header is no longer fixed)
- All page headers: Use `font-serif` for headings, `text-stone` for descriptions

---

## Showcase/Docs Page Category Pills

**Current (dark):**
```
Active: bg-white text-black
Inactive: bg-dark-surface text-dark-text-secondary border border-dark-border hover:border-dark-text-muted
```

**New (light):**
```
Active: bg-accent text-white
Inactive: bg-white text-stone border border-rule hover:border-stone
```

---

## Known Issue: Tailwind v3/v4 Conflict

`postcss.config.js` uses `@tailwindcss/postcss` (v4 plugin) but `package.json` has `tailwindcss: ^3.4.1`. The `globals.css` has BOTH `@import "tailwindcss"` (v4) AND `@tailwind base/components/utilities` (v3). The new `globals.css` above resolves this by using only `@import "tailwindcss"` (v4 style). Verify the installed version matches.

---

## Verification Checklist

After all design changes, grep for stale visual references:
- `dark-bg`, `dark-surface`, `dark-border`, `dark-text`, `dark-hover` — should be zero
- `#111`, `#222`, `#888`, `#666`, `#555` — should be zero (replaced by tokens)
- `bg-black` — should be zero (except maybe in dark callout block intentionally)
- `text-white` — only in `.btn-primary`, dark callout block, and the `bg-ink` callout
- `ff6ad8` — old pink accent, should be zero
- `border-white` — should be zero (replaced by `border-rule`)
- `font-extrabold` — should be zero on headings (now `font-serif font-normal`)
- `hover:shadow-[0_0_30px` — old glow effect, should be zero
- `hover:scale-105` — old scale effect, should be zero
- `gridPulse`, `cellHighlight`, `shimmer`, `.dynamic-grid`, `.grid-cell` — should be zero
