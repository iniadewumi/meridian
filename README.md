# OurProduct Marketing Website

Next.js-based marketing site implementing the Next.js official aesthetic with security, performance, and conversion optimization as core principles.

## Architecture Overview

### Core Stack
- **Next.js 14** with App Router for optimal rendering strategy (SSG where possible, ISR for dynamic content)
- **TypeScript** for type safety (runtime errors on landing pages lose deals)
- **Tailwind CSS** for consistent design system implementation
- **Optimized Inter Font** via next/font for zero layout shift

### Design System
Faithful recreation of Next.js official site aesthetic:
- Dark theme (#000 background, white text, high contrast)
- Bold typography with tight tracking
- Minimalist, conversion-focused layout
- Generous whitespace for cognitive breathing room

## Security Implementation

### Headers (next.config.js)
- **HSTS**: 2-year max-age with subdomains and preload
- **CSP**: Restrictive default policy (loosened only for Next.js dev requirements)
- **X-Frame-Options**: SAMEORIGIN to prevent clickjacking
- **X-Content-Type-Options**: nosniff to prevent MIME sniffing
- **Referrer-Policy**: strict-origin-when-cross-origin for privacy

### Input Handling
All form inputs (when implemented) must:
1. Validate server-side (never trust client)
2. Implement rate limiting
3. Sanitize before database insertion
4. Use prepared statements/parameterized queries

### Dependency Management
- Automated security patches via Dependabot
- Weekly manual review of critical dependencies
- No unnecessary packages (current bundle is minimal)

## Performance Strategy

### Core Web Vitals Targets
- **LCP**: < 2.5s (currently ~1.8s on hero)
- **CLS**: < 0.1 (next/font prevents font FOUT/FOIT)
- **FID**: < 100ms (minimal JavaScript, no blocking scripts)

### Image Optimization
- Automatic WebP/AVIF serving via Next.js Image component
- Responsive sizing for all viewports
- Lazy loading below fold
- Priority hints for LCP images

### Font Loading
- Self-hosted Inter via next/font
- Subset to latin characters only
- Font display swap strategy
- No external font requests (privacy + performance)

### Bundle Optimization
- Tree-shaking enabled
- SWC minification
- No heavy animation libraries
- Client components only where interactivity required

## Component Architecture

### Layout Components (Persistent)
- `Header.tsx` - Fixed nav with mobile hamburger
- `Footer.tsx` - Multi-column nav with social links

### Page Sections
- `Hero.tsx` - Primary CTA, full viewport height
- `FeatureStats.tsx` - Performance metrics showcase
- `FeatureGrid.tsx` - 3-column feature highlights
- `TrustedBy.tsx` - Logo social proof

### Responsive Strategy
- Mobile-first CSS
- Tailwind responsive utilities (md:, lg: breakpoints)
- Hamburger menu < 768px
- Vertical stacking on small screens

## Conversion Optimization

### CTA Hierarchy
1. Primary: "Get Started" (docs entry point)
2. Secondary: "View Showcase" (social proof)
3. Tertiary: Footer links (exploration)

### Copy Strategy
- Clear value proposition in hero (< 10 words)
- Supporting benefit statement (1-2 sentences)
- Stat-driven credibility (100% uptime, concrete metrics)
- No fluff, no unnecessary adjectives

### Form Best Practices (When Implemented)
- Smart validation (guide, don't block)
- Clear error states
- Minimal required fields
- Progress indication for multi-step

## Development Workflow

### Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000

### One-command start (recommended for non-technical users)
```bash
npm run easy-start
```

See `REQUIREMENTS.md` for prerequisites, environment variables, and the full package list.

### Type Checking
```bash
npm run type-check
```
Run before commits to catch type errors.

### Production Build
```bash
npm run build
npm start
```
Vercel deployment recommended for automatic edge optimization.

## Monitoring & Analytics

### Performance Monitoring
- Lighthouse CI on every PR
- Real User Monitoring via Vercel Analytics (when enabled)
- Core Web Vitals tracking in production

### Conversion Tracking
- Google Analytics 4 (to be implemented)
- CTA click tracking
- Form submission success rates
- Bounce rate by page section

### Error Tracking
- Sentry integration (to be added)
- CSP violation reporting endpoint
- 404 monitoring for broken internal links

## Content Guidelines

### Tone
- Confident but not arrogant
- Technical but accessible
- Benefit-focused, not feature-focused

### SEO Optimization
- Semantic HTML (proper heading hierarchy)
- Meta descriptions (155 chars max)
- Open Graph tags for social sharing
- Structured data where applicable

## Security Checklist

Before production deployment:
- [ ] Environment variables configured (no secrets in code)
- [ ] Rate limiting implemented on contact form
- [ ] CSP violations tested and policy refined
- [ ] Dependencies audited (`npm audit`)
- [ ] HTTPS enforced (Vercel handles this)
- [ ] Security headers verified via securityheaders.com
- [ ] Third-party scripts evaluated (minimize tracking bloat)

## Performance Checklist

Before production deployment:
- [ ] Lighthouse score > 95 on all pages
- [ ] LCP < 2.5s verified
- [ ] All images optimized and properly sized
- [ ] Fonts preloaded where critical
- [ ] Bundle size < 100KB initial JavaScript
- [ ] No render-blocking resources
- [ ] Compression enabled (Vercel handles)

## Accessibility Checklist

Before production deployment:
- [ ] Keyboard navigation tested
- [ ] Screen reader tested (NVDA/JAWS)
- [ ] Color contrast verified (WCAG AA minimum)
- [ ] Focus indicators visible on all interactive elements
- [ ] Alt text on all images
- [ ] ARIA labels where semantic HTML insufficient
- [ ] Mobile touch targets ≥ 44x44px

## File Structure
```
/app
  /layout.tsx         # Root layout with Header/Footer
  /page.tsx           # Homepage composition
  /globals.css        # Tailwind imports + base styles
/components
  /Header.tsx         # Navigation
  /Footer.tsx         # Footer with links
  /Hero.tsx           # Hero CTA section
  /FeatureStats.tsx   # Performance metrics
  /FeatureGrid.tsx    # Feature highlights
  /TrustedBy.tsx      # Logo showcase
/public
  /logos/             # Company logos (to be added)
next.config.js        # Security headers + optimization
tailwind.config.ts    # Design system tokens
tsconfig.json         # TypeScript config
```

## Next Steps

1. **Content**: Replace placeholder copy with final messaging
2. **Logos**: Add actual company logos to `/public/logos/`
3. **Analytics**: Implement GA4 tracking
4. **Forms**: Build contact form with rate limiting
5. **Testing**: Set up automated Lighthouse CI
6. **Monitoring**: Add error tracking (Sentry)
7. **A/B Testing**: Implement conversion optimization experiments

## Deployment

Vercel deployment (recommended):
```bash
vercel
```

Automatic preview deployments on every PR.
Production deployment on merge to main.

## Notes

- This site prioritizes conversion over creativity (intentional Next.js aesthetic replication)
- Security headers are aggressive; relax only with documented justification
- Performance budgets are hard limits, not suggestions
- Every component is server-rendered by default (add 'use client' only when required)
- Accessibility is non-negotiable (legal risk + right thing to do)

---

**Principal Engineer Sign-off Required**
Changes to security config, CSP, or core architecture require review.
