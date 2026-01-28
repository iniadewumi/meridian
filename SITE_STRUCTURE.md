# Site Structure & Pages

## Complete Page List

### ✅ Implemented Pages

#### Homepage (`/`)
**Purpose:** Primary landing page with hero, stats, features, and CTAs
**Components:**
- Hero with headline and primary CTA
- TrustedBy logos section
- FeatureStats with performance metrics
- FeatureGrid with 3-column features
- Final CTA section
**Conversion Goal:** Drive to /docs (Get Started) or /contact (Talk to Sales)

#### Documentation (`/docs`)
**Purpose:** Documentation hub and entry point for technical resources
**Features:**
- Search bar for doc search
- 4 major sections: Getting Started, Core Concepts, Guides, API Reference
- Popular resources showcase
**Conversion Goal:** Guide users to quickstart and first project

#### Pricing (`/pricing`)
**Purpose:** Pricing tiers and plan comparison
**Features:**
- 3 tier comparison (Starter/Pro/Enterprise)
- Feature checkmarks per tier
- Enterprise stats section
- FAQ section
**Conversion Goal:** Free trial signup or enterprise contact

#### Showcase (`/showcase`)
**Purpose:** Social proof through customer case studies
**Features:**
- Category filter
- 6 case study cards with metrics
- Each card shows: company, tagline, description, key metrics
**Conversion Goal:** Build credibility, drive to /contact for enterprise

#### Blog (`/blog`)
**Purpose:** Content marketing, SEO, thought leadership
**Features:**
- Featured post (large card)
- Category filter
- Post grid with metadata (author, date, read time)
- Newsletter signup
**Conversion Goal:** Build authority, email capture, SEO traffic

#### Contact (`/contact`)
**Purpose:** Lead generation and support inquiry
**Features:**
- Contact form with validation
- Department-specific email addresses
- Office locations
- Social media links
**Conversion Goal:** Sales leads, support tickets
**Security:** Requires rate limiting implementation (currently mocked)

#### About (`/about`)
**Purpose:** Company story, values, team
**Features:**
- Company stats (10K projects, 100M+ requests)
- Values grid
- Leadership team
- Investor backing
- Careers CTA
**Conversion Goal:** Build trust, recruitment

#### 404 Error (`/not-found`)
**Purpose:** Handle missing pages gracefully
**Features:**
- Clear 404 message
- Links to key pages
- Home and Docs CTAs

#### Loading State (`/loading.tsx`)
**Purpose:** Global loading indicator
**Features:**
- Spinner animation
- Centered layout

#### Error Boundary (`/error.tsx`)
**Purpose:** Handle runtime errors gracefully
**Features:**
- User-friendly error message
- Try again functionality
- Dev-mode error details

---

## Site Map

```
/
├── /docs
│   ├── /installation
│   ├── /quickstart
│   ├── /configuration
│   ├── /architecture
│   ├── /guides
│   │   ├── /building-apis
│   │   ├── /database
│   │   ├── /deployment
│   │   └── /best-practices
│   └── /api
│       ├── /rest
│       ├── /javascript
│       ├── /python
│       └── /cli
├── /pricing
├── /showcase
│   └── /[company-slug]  (individual case studies - to be implemented)
├── /blog
│   └── /[post-slug]  (individual blog posts - to be implemented)
├── /contact
├── /about
├── /careers  (linked from about, to be implemented)
└── /404  (automatic)
```

---

## Component Architecture

### Layout Components (Persistent)
Located in `/components/`

1. **Header.tsx** (Client Component)
   - Fixed navigation
   - Mobile hamburger menu
   - Responsive breakpoints

2. **Footer.tsx** (Server Component)
   - Multi-column navigation
   - Social links
   - Copyright

### Page-Specific Components

3. **Hero.tsx** (Server Component)
   - Full viewport height
   - Gradient background
   - Primary + Secondary CTAs

4. **FeatureStats.tsx** (Server Component)
   - 3-column stat grid
   - Large numbers with descriptions
   - Performance metrics

5. **FeatureGrid.tsx** (Server Component)
   - 3-column feature list
   - Icons + descriptions
   - Core product benefits

6. **TrustedBy.tsx** (Server Component)
   - Logo showcase grid
   - Grayscale hover effect
   - Social proof

7. **ContactForm.tsx** (Client Component)
   - Form with validation
   - Success/error states
   - Rate limiting placeholder

---

## Routes Needing Implementation

### High Priority
1. `/signup` - User registration
2. `/login` - Authentication
3. `/dashboard` - User dashboard
4. `/docs/[...slug]` - Individual doc pages
5. `/blog/[slug]` - Individual blog posts
6. `/showcase/[slug]` - Individual case studies

### Medium Priority
7. `/careers` - Job listings
8. `/privacy` - Privacy policy
9. `/terms` - Terms of service
10. `/security` - Security practices
11. `/api/contact` - Form submission endpoint

### Low Priority
12. `/changelog` - Product updates
13. `/status` - Status page
14. `/partners` - Partner program
15. `/community` - Community hub

---

## API Endpoints to Create

### Forms & Authentication
- `POST /api/contact` - Contact form submission (rate limited)
- `POST /api/newsletter` - Newsletter signup
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Data Fetching
- `GET /api/docs` - Documentation search
- `GET /api/blog` - Blog posts (with filters)
- `GET /api/showcase` - Case studies (with filters)

---

## Database Schema Requirements

### Users
```sql
- id (uuid, primary key)
- email (unique)
- name
- company
- created_at
- updated_at
```

### Contact Submissions
```sql
- id (uuid, primary key)
- name
- email
- company
- message
- interest_type
- ip_address
- submitted_at
- rate_limit_bucket
```

### Newsletter Subscribers
```sql
- id (uuid, primary key)
- email (unique)
- subscribed_at
- unsubscribed_at
- source
```

---

## Security Checklist by Page

### Contact Page (`/contact`)
- [ ] Server-side form validation
- [ ] Rate limiting (100/hour per IP)
- [ ] CSRF token
- [ ] Honeypot field
- [ ] Email validation
- [ ] SQL injection prevention
- [ ] XSS sanitization

### Authentication Pages (when built)
- [ ] Password hashing (bcrypt)
- [ ] Session management
- [ ] CSRF tokens
- [ ] Rate limiting on login attempts
- [ ] 2FA support
- [ ] Secure password reset flow

### API Endpoints
- [ ] Authentication middleware
- [ ] Authorization checks
- [ ] Input validation
- [ ] Output encoding
- [ ] Rate limiting per endpoint
- [ ] Logging and monitoring

---

## Performance Optimization by Page

### Homepage
- **Current:** Server-rendered, static generation
- **Target:** LCP < 2.0s
- **Optimizations:**
  - Hero image priority loading
  - Logo lazy loading
  - Minimal JavaScript

### Docs
- **Current:** Server-rendered
- **Target:** LCP < 2.5s
- **Needs:**
  - Search index (Algolia or similar)
  - Code syntax highlighting (lazy loaded)
  - Table of contents sticky nav

### Blog
- **Current:** Server-rendered
- **Target:** LCP < 2.0s
- **Needs:**
  - ISR for dynamic content
  - Image optimization
  - Reading progress indicator

### Showcase
- **Current:** Server-rendered
- **Target:** LCP < 2.5s
- **Needs:**
  - Thumbnail optimization
  - Lazy loading below fold
  - Filter state management

---

## Conversion Funnel by Entry Point

### Homepage → Docs
1. Land on hero
2. Click "Get Started"
3. View docs landing
4. Navigate to quickstart
5. **Conversion:** Follow tutorial

### Homepage → Contact
1. Land on hero
2. Scroll to stats/features
3. Click "Talk to Sales"
4. Fill contact form
5. **Conversion:** Submit inquiry

### Blog → Email Signup
1. Search result → blog post
2. Read content
3. Scroll to newsletter
4. Enter email
5. **Conversion:** Subscribe

### Showcase → Enterprise Contact
1. Homepage → "View Showcase"
2. Filter by industry
3. Read case study
4. Click "Talk to Sales"
5. **Conversion:** Enterprise inquiry

---

## Analytics Events to Track

### Page Views
- Homepage load
- Docs sections
- Pricing page
- Blog posts

### Conversions
- CTA clicks (Get Started, Talk to Sales)
- Form submissions (Contact, Newsletter)
- Link clicks (Docs, Blog)
- Download events (if applicable)

### User Behavior
- Scroll depth
- Time on page
- Exit pages
- Search queries

---

## Next Steps for Each Page

### Homepage
- [ ] Add real company logos
- [ ] Update copy with actual metrics
- [ ] A/B test hero headline

### Docs
- [ ] Implement search functionality
- [ ] Create actual documentation content
- [ ] Add code examples

### Pricing
- [ ] Connect to payment processor
- [ ] Add plan comparison table
- [ ] Implement trial signup

### Showcase
- [ ] Create individual case study pages
- [ ] Add real customer testimonials
- [ ] Implement filtering

### Blog
- [ ] Connect to CMS or create markdown system
- [ ] Implement individual post pages
- [ ] Add author profiles
- [ ] Setup RSS feed

### Contact
- [ ] Implement server-side form handler
- [ ] Add rate limiting
- [ ] Setup email notifications
- [ ] Add reCAPTCHA

---

## Technology Stack Summary

**Framework:** Next.js 14 (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS
**Fonts:** Inter (via next/font)
**Deployment:** Vercel (recommended)
**Analytics:** TBD (GA4 recommended)
**Error Tracking:** TBD (Sentry recommended)
**Database:** TBD (PostgreSQL recommended)
**Email:** TBD (SendGrid/Postmark recommended)

---

## Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── loading.tsx         # Global loading state
│   ├── error.tsx           # Global error handler
│   ├── not-found.tsx       # 404 page
│   ├── docs/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── showcase/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── about/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeatureStats.tsx
│   ├── FeatureGrid.tsx
│   ├── TrustedBy.tsx
│   └── ContactForm.tsx
├── public/
│   └── logos/              # Company logos (to add)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
