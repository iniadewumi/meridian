import type { Post } from './types'

/**
 * All blog posts. Add new posts here to have them appear on /blog and at /blog/[slug].
 * Keep slugs URL-safe (lowercase, hyphens, no spaces).
 */
export const posts: Post[] = [
  {
    slug: 'why-we-start-with-scope',
    title: 'Why We Start With Scope',
    excerpt:
      `The majority of wasted compliance spend comes from misunderstanding what is actually in scope. Here's how we define it before you invest.`,
    date: '2025-01-15',
    author: 'Meridian S&O',
    category: 'Compliance',
    readTime: '5 min read',
    body: `The majority of wasted compliance spend comes from misunderstanding what is actually in scope. Teams buy frameworks, hire consultants, and start writing policies before they've mapped where sensitive data lives and what systems touch it.

At Meridian S&O we start with scope: we help you define your cardholder data environment (CDE), your in-scope systems for SOC 2, and the boundaries of what an auditor will care about. Only then do we align controls and documentation. That way you invest in the right work from day one.`,
  },
  {
    slug: 'soc2-first-90-days',
    title: 'SOC 2 Readiness: What to Expect in Your First 90 Days',
    excerpt:
      `A practical outline of control design, evidence collection, and audit prep when you're preparing for SOC 2.`,
    date: '2025-01-10',
    author: 'Meridian S&O',
    category: 'SOC 2',
    readTime: '8 min read',
    body: `Your first 90 days of SOC 2 readiness typically break into three phases: scope and control mapping, control design and implementation, and evidence collection and audit prep.

We start by mapping your environment to the trust services criteria, then design controls that fit your team size and tools. Evidence collection runs in parallel so that by the time you're ready for the auditor, you have a defensible body of documentation and artifacts. This post walks through what to expect week by week.`,
  },
  {
    slug: 'pci-dss-scoping',
    title: 'PCI DSS Scoping: Cardholder Data Environment Basics',
    excerpt:
      'How we help fintech and B2B SaaS companies define their CDE and choose the right SAQ path.',
    date: '2025-01-05',
    author: 'Meridian S&O',
    category: 'PCI DSS',
    readTime: '6 min read',
    body: `Defining your cardholder data environment (CDE) is the first step to PCI DSS compliance. The CDE includes people, processes, and technologies that store, process, or transmit cardholder data—and any system that can impact the security of that data.

We help you map data flows, identify in-scope systems, and determine whether you're eligible for an SAQ or need a full Report on Compliance (ROC). Getting scope right upfront saves time and cost later.`,
  },
  {
    slug: 'case-study-soc2',
    title: 'Case Study: From Questionnaire Chaos to SOC 2 Type II',
    excerpt:
      'How one B2B SaaS company went from ad-hoc security answers to a defensible control environment in 90 days.',
    date: '2025-01-01',
    author: 'Meridian S&O',
    category: 'Case Study',
    readTime: '6 min read',
    body: `A B2B SaaS company was drowning in security questionnaires. Every RFP asked for SOC 2; they had no formal controls or evidence. We ran a Readiness Sprint: scoped their environment, designed controls to fit their stack, and built the documentation and evidence package needed for the audit.

Within 90 days they had a Type I; six months later they completed Type II. This case study walks through what we did and what they learned.`,
  },
  {
    slug: 'trustops-cadence',
    title: 'Keeping Compliance Operational: The TrustOps Cadence',
    excerpt:
      "Why compliance degrades when it's not tied to product and vendor changes—and how we keep it current.",
    date: '2024-12-28',
    author: 'Meridian S&O',
    category: 'Operations',
    readTime: '5 min read',
    body: `Compliance isn't a one-time project. New features, new vendors, and new data flows constantly change your risk profile. If controls and documentation aren't updated on a regular cadence, they drift—and auditors notice.

Our TrustOps cadence ties compliance to your release cycle and vendor onboarding: control reviews, evidence collection, and policy updates happen on a schedule that matches how you actually work. This post explains the rhythm we use and why it matters.`,
  },
  {
    slug: 'who-we-serve',
    title: 'Meridian S&O: What We Do and Who We Serve',
    excerpt:
      'A short overview of our approach—scope first, then framework, then audit—and who we work with.',
    date: '2024-12-20',
    author: 'Meridian S&O',
    category: 'Company',
    readTime: '4 min read',
    body: `Meridian S&O helps B2B SaaS companies build defensible compliance without stalling delivery. We start with scope, then align to the framework (SOC 2, PCI DSS, ISO) that matters for your buyers, then prepare you for audit.

We work with CISOs, product leaders, and compliance officers who need clear ownership and practical controls—not shelfware. This post is a short overview of our approach and who we serve.`,
  },
]
