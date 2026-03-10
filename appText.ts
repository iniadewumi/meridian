// Centralized text content for the Meridian application
// Update text here without modifying component code

export const appText = {
  // Metadata
  metadata: {
    siteName: 'Meridian S&O',
    defaultTitle: 'Meridian S&O: Compliance Infrastructure for Growing Companies',
    defaultDescription: 'Meridian Standards & Operations designs compliance architecture for B2B SaaS companies: SOC 2, PCI DSS, and ISO alignment—control environment before your auditor asks.',
    about: {
      title: 'About - Meridian S&O',
      description: 'Who we are: compliance infrastructure and control design for growing companies.',
    },
    blog: {
      title: 'Blog - Meridian S&O',
      description: 'Updates and insights on compliance, SOC 2, PCI DSS, and control operations.',
    },
    contact: {
      title: 'Contact Us - Meridian S&O',
      description: 'Get in touch. We’ll respond quickly to discuss scope and next steps.',
    },
    docs: {
      title: 'Documentation - Meridian S&O',
      description: 'Guides, deliverables, and resources for SOC 2, PCI DSS, and ISO compliance.',
    },
    pricing: {
      title: 'Pricing - Meridian S&O',
      description: 'Transparent engagement options for compliance readiness and operations.',
    },
    showcase: {
      title: 'Showcase - Meridian S&O',
      description: 'How leading companies built their control environment with Meridian S&O—SOC 2, PCI DSS, and ISO success stories.',
    },
  },

  // Header
  header: {
    logo: 'Meridian',
    logoSecondary: 'S&O',
    cta: 'Schedule a Call',
    ctaHref: '/contact#schedule-call',
    nav: {
      docs: 'Docs',
      showcase: 'Showcase',
      blog: 'Blog',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    mobileMenu: {
      open: 'Open main menu',
      close: 'Close main menu',
    },
  },

  // Footer
  footer: {
    product: {
      title: 'Product',
      links: {
        readinessSprint: 'Readiness Sprint',
        complianceOps: 'Compliance Ops',
        certification: 'Certification',
      },
    },
    resources: {
      title: 'Resources',
      links: {
        deliverables: 'Deliverables',
        howWeWork: 'How We Work',
        faq: 'FAQ',
      },
    },
    company: {
      title: 'Company',
      links: {
        about: 'About',
        contact: 'Contact',
      },
    },
    legal: {
      title: 'Legal',
      links: {
        privacy: 'Privacy',
        terms: 'Terms',
      },
    },
    copyright: '© 2026 Meridian Standards & Operations.',
    domain: 'MeridianSO.com',
  },

  // Home Page
  home: {
    hero: {
      badge: 'Compliance Infrastructure',
      headline: 'We build the control environment before your auditor, bank, or enterprise buyer asks for it.',
      subheadline: 'Meridian designs compliance architecture for fintech and SaaS companies preparing for SOC 2, PCI DSS, and enterprise security reviews',
      cta: {
        primary: 'Schedule a Discovery Call',
        primaryHref: '/contact#schedule-call',
      },
      microcopy: "20–30 minute scoping call. We'll confirm scope, timelines, and what \"done\" looks like.",
      features: {
        pci: 'PCI DSS',
        soc2: 'SOC 2',
        iso: 'ISO',
      },
    },
    situation: {
      label: 'The Situation',
      heading: 'You are growing faster than your controls.',
      paragraphs: [
        'Your team passed a few security questionnaires by pulling answers together manually. A bank partner just asked about your PCI status. An enterprise prospect wants to see your SOC 2 report. You have smart engineers who care about security, but no structured control framework underneath it.',
        'Compliance has been reactive. You know it needs to become deliberate. The question is where to start without over-investing in frameworks you may not need or under-scoping the ones you do.',
      ],
    },
    trustedBy: {
      text: "We start with scope clarity—the majority of wasted compliance spend comes from misunderstanding what is actually in scope. We design controls around how your product operates, not how an auditor imagines it.",
    },
    featureGrid: {
      title: 'Our Approach',
      subtitle: 'Foundation first. Then framework. Then audit.',
      intro: 'We do not begin with a checklist or an audit timeline. We start with your product architecture, your data flows, and the trust expectations of the buyers you are selling to. From there, we build forward.',
      steps: [
        { number: '01', title: 'Scope', description: 'Map data flows, cloud infrastructure, and third-party dependencies to define what is actually in scope.' },
        { number: '02', title: 'Align', description: 'Match your environment to the right framework requirements. PCI, SOC 2, or both. No over-scoping.' },
        { number: '03', title: 'Build', description: 'Design and implement controls that fit how your product actually operates, not how a template assumes it does.' },
        { number: '04', title: 'Sustain', description: 'Establish ongoing governance so compliance stays current as you scale, raise, and onboard new partners.' },
      ],
    },
    whyMeridian: {
      label: 'Why Meridian',
      heading: 'We are not a compliance factory.',
      body: 'Most compliance consultants hand you a controls spreadsheet built from a generic template. We start with scope clarity because the majority of wasted compliance spend comes from misunderstanding what is actually in scope. We understand payment architecture, tokenization models, and the cloud infrastructure patterns fintech products are built on. We design controls around how your product operates, not how an auditor imagines it does.',
      callout: {
        title: 'AI Controls Expertise',
        body: 'If your product uses machine learning for decisioning, fraud detection, or underwriting, auditors and enterprise buyers are beginning to ask about model governance, data lineage, and algorithmic risk. We help you address those questions before they surface in diligence or audit.',
      },
    },
    pitch: {
      paragraph: 'Meridian S&O helps CISOs, product leaders, and compliance officers build a defensible control environment without stalling delivery. We start with your product architecture, data flows, and the trust expectations of the buyers you sell to—then translate that into operational controls, documentation, and evidence that hold up under scrutiny. Whether you need control architecture, PCI DSS or SOC 2 readiness, or ongoing TrustOps advisory, we deliver clear scope, tight timelines, and accountable ownership.',
    },
    offers: {
      title: 'What we do',
      subtitle: 'Control architecture, framework readiness, and ongoing operations',
      offers: [
        {
          title: 'Control Architecture',
          purpose: 'Data flow analysis, PCI scoping, cloud governance review, third-party risk mapping, and a 90-day compliance roadmap tailored to your product and buyer requirements.',
          items: [
            'Data flow diagrams and scope definition',
            'AWS IAM, logging, encryption, and access governance review',
            'Third-party risk mapping and cloud governance',
            '90-day roadmap with owners and deliverables',
          ],
          bestFor: 'Teams that need scope clarity before committing to a framework or audit timeline.',
        },
        {
          title: 'PCI DSS Readiness',
          purpose: 'SAQ determination, gap assessment, control implementation guidance, QSA coordination, and evidence preparation.',
          items: [
            'Scoped to your actual cardholder data environment',
            'Gap assessment and control implementation guidance',
            'QSA coordination and evidence preparation',
            'No generic templates—built for your environment',
          ],
          bestFor: 'Fintech and B2B SaaS companies preparing for bank or partner requirements.',
        },
        {
          title: 'SOC 2 Readiness',
          purpose: 'Trust Services Criteria mapping, access governance, logging and monitoring controls, and full audit preparation.',
          items: [
            'Trust Services Criteria mapping',
            'Access governance, logging, and monitoring controls',
            'Vendor risk program design and business continuity',
            'Audit prep and evidence packaging',
          ],
          bestFor: 'Companies preparing for enterprise sales or procurement questionnaires.',
        },
        {
          title: 'TrustOps Advisory',
          purpose: 'Ongoing retainer for continuous control monitoring, security questionnaire support, and quarterly risk reviews.',
          items: [
            'Continuous control monitoring and evidence cadence',
            'Security questionnaire support and executive reporting',
            'Quarterly risk reviews and gap tracking',
            'Compliance stays operational, not just documented',
          ],
          bestFor: 'Teams that want compliance to stay current as they scale and onboard new partners.',
        },
      ],
      whatYouGet: 'What you get:',
      bestFor: 'Best for:',
    },
    faq: {
      title: 'Common questions',
      items: [
        {
          question: 'What do you deliver, concretely?',
          answer: 'A scoped set of compliance artifacts and an evidence plan tied to controls, owners, and timelines—plus ongoing ops if you retain us.',
        },
        {
          question: 'How do you stay cost-effective without being low-quality?',
          answer: 'We reduce waste: tighter scope control, reusable crosswalks between PCI, SOC 2, and ISO, and deliverable templates that still fit your environment.',
        },
        {
          question: 'Do you replace our internal GRC/security team?',
          answer: 'No. We operate as an execution partner: we build structure, produce artifacts, and run the evidence cadence with your owners.',
        },
        {
          question: 'Can you guarantee certification?',
          answer: 'No. We can make you defensible and audit-ready by aligning scope, controls, and evidence with auditor expectations.',
        },
        {
          question: 'Where do you start?',
          answer: 'A short scoping call to define what is actually in scope, then a roadmap—Readiness Sprint or control architecture—tailored to your situation.',
        },
      ],
    },
    finalCta: {
      title: 'Start with scope.',
      description: 'If you are preparing for PCI or SOC 2, the first conversation should be about what is actually in scope. We can start there.',
      primary: 'Schedule a Discovery Call',
      primaryHref: '/contact#schedule-call',
      altPrefix: 'Or reach us directly at ',
      email: 'info@meridianso.com',
    },
  },

  // About Page
  about: {
    header: {
      title: 'Who we are',
      description: 'Meridian Standards & Operations designs compliance architecture for growing B2B SaaS companies—scope first, then framework, then audit.',
    },
    story: {
      title: 'Our Story',
      paragraphs: [
        'Meridian S&O was founded to fix a recurring problem: companies were over-investing in frameworks they did not need or under-scoping the ones they did. We saw talented teams pass security questionnaires by pulling answers together manually—until a bank asked about PCI status or an enterprise prospect asked for a SOC 2 report. We started the firm to give growing companies a clear path to compliance without the overhead of big-firm engagements.',
        'We start with scope clarity. We map your product architecture, data flows, and the trust expectations of the buyers you sell to. From there we build controls that fit how your product actually operates, not how a generic template assumes it does.',
        'Today we work with B2B SaaS companies—from startups to mid-market—preparing for PCI DSS, SOC 2, and enterprise buyer scrutiny. We are not a compliance factory; we are the control environment before your auditor asks for it.',
      ],
    },
    inShort: {
      title: 'In short',
      items: [
        { value: '90 days', label: 'Typical roadmap to scope clarity' },
        { value: 'PCI · SOC 2', label: 'Core frameworks' },
        { value: 'Scope first', label: 'How we work' },
        { value: 'B2B SaaS', label: 'Who we serve' },
      ],
    },
    stats: {
      activeProjects: { value: '90 days', label: 'Typical roadmap to scope clarity' },
      apiRequests: { value: 'PCI · SOC 2', label: 'Core frameworks' },
      uptime: { value: 'Scope first', label: 'How we work' },
      countries: { value: 'B2B SaaS', label: 'Who we serve' },
    },
    values: {
      title: 'Our Values',
      items: [
        {
          title: 'Defensible by Default',
          description: 'Artifacts, evidence, and controls built for scrutiny—so audits and regulators do not become fire drills.',
        },
        {
          title: 'Execution Over Theater',
          description: 'We deliver structure and deliverables that fit your environment. No generic spreadsheets, no consulting theater.',
        },
        {
          title: 'Clarity of Scope',
          description: 'We define what is actually in scope before you invest. The majority of wasted compliance spend comes from getting scope wrong.',
        },
        {
          title: 'Continuous Operations',
          description: 'Compliance stays current as you scale. We design governance and cadence that align to your product and partners.',
        },
      ],
    },
    team: {
      title: 'Leadership Team',
      members: [
        {
          name: 'Hannah Ifekoya',
          role: 'Founder',
          bio: 'Cybersecurity and compliance specialist with experience across fintech and B2B SaaS. Focused on control design and audit readiness so companies can pass scrutiny without wasting budget on mis-scoped engagements.',
        },
      ],
    },
    careers: {
      title: 'Work with us',
      description: 'We work with companies that want a clear, scoped path to compliance—without over-investing or under-scoping.',
      cta: 'Schedule a discovery call',
      ctaHref: '/contact#schedule-call',
    },
  },

  // Blog Page — post content and categories live in content/blog/posts.ts
  blog: {
    header: {
      title: 'Blog',
      description: 'Updates and insights on compliance, SOC 2, PCI DSS, and control operations from Meridian S&O',
    },
    newsletter: {
      title: 'Subscribe',
      description: 'Get compliance and control-operations insights delivered to your inbox.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
    },
    imagePlaceholders: {
      featured: 'Featured Image',
      post: 'Post Image',
    },
  },

  // Contact Page
  contact: {
    header: {
      title: 'Get in Touch',
      description: "Have questions about scope, readiness, or next steps? We'll respond quickly.",
    },
    contactInfo: {
      primary: {
        title: 'Email',
        description: 'For discovery calls, scope questions, and engagement inquiries.',
        email: 'info@meridianso.com',
      },
      sales: {
        title: 'Sales',
        description: 'Interested in our services?',
        email: 'info@meridianso.com',
      },
      support: {
        title: 'Support',
        description: 'Need assistance with an existing engagement?',
        email: 'info@meridianso.com',
      },
      press: {
        title: 'Press',
        description: 'Media inquiries',
        email: 'info@meridianso.com',
      },
      social: {
        title: 'Follow Us',
        ariaLabels: {
          twitter: 'Twitter',
          github: 'GitHub',
          linkedin: 'LinkedIn',
        },
      },
    },
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      interest: "I'm interested in",
      message: 'Message',
      required: '*',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: "Thank you! We'll get back to you shortly.",
      error: 'Something went wrong. Please try again or email us directly at info@meridianso.com',
      interestOptions: {
        general: 'General Inquiry',
        soc2: 'SOC 2 Readiness',
        pci: 'PCI DSS Readiness',
        iso: 'ISO Alignment',
        architecture: 'Control Architecture',
      },
    },
    officeLocations: {
      title: 'Office',
      locations: [
        {
          city: 'Dallas',
          address: ['123 Main Street', 'Dallas, TX 75219', 'United States'],
        }
      ],
    },
  },

  // Docs Page
  docs: {
    header: {
      title: 'Documentation',
      description: 'Guides, deliverables, and resources for SOC 2, PCI DSS, and ISO compliance',
    },
    search: {
      placeholder: 'Search documentation...',
    },
    sections: [
      {
        title: 'Getting Started',
        description: 'How we work and how to begin your compliance journey',
        links: [
          { name: 'How We Work', href: '/docs/getting-started/how-we-work' },
          { name: 'Scoping Your Program', href: '/docs/getting-started/scoping' },
          { name: 'Readiness Sprint Overview', href: '/docs/getting-started/readiness-sprint' },
          { name: 'What to Expect', href: '/docs/getting-started/expectations' },
        ],
      },
      {
        title: 'PCI DSS',
        description: 'Guides for PCI DSS readiness and cardholder data environment scoping',
        links: [
          { name: 'PCI DSS Overview', href: '/docs/pci-dss/overview' },
          { name: 'SAQ Determination', href: '/docs/pci-dss/saq' },
          { name: 'Scope & Data Flows', href: '/docs/pci-dss/scope' },
          { name: 'Gap Assessment', href: '/docs/pci-dss/gap-assessment' },
        ],
      },
      {
        title: 'SOC 2 & ISO',
        description: 'Documentation for SOC 2 and ISO certification processes',
        links: [
          { name: 'SOC 2 Readiness Guide', href: '/docs/certifications/soc2' },
          { name: 'ISO 27001 Alignment', href: '/docs/certifications/iso27001' },
          { name: 'Control Mapping', href: '/docs/certifications/control-mapping' },
          { name: 'Audit Preparation', href: '/docs/certifications/audit-prep' },
        ],
      },
      {
        title: 'Deliverables & Artifacts',
        description: 'What you receive: policies, registers, documentation, and evidence',
        links: [
          { name: 'Deliverables Overview', href: '/docs/deliverables/overview' },
          { name: 'Policy Templates', href: '/docs/deliverables/policies' },
          { name: 'System Documentation', href: '/docs/deliverables/system-docs' },
          { name: 'Evidence Packages', href: '/docs/deliverables/evidence' },
        ],
      },
      {
        title: 'Compliance Operations',
        description: 'Ongoing compliance management and operations cadence',
        links: [
          { name: 'Ops Cadence Overview', href: '/docs/ops/cadence' },
          { name: 'Change Management', href: '/docs/ops/change-management' },
          { name: 'Evidence Collection', href: '/docs/ops/evidence' },
          { name: 'Vendor Risk Management', href: '/docs/ops/vendor-risk' },
        ],
      },
      {
        title: 'Guides & Best Practices',
        description: 'Step-by-step guides and best practices for compliance',
        links: [
          { name: 'Questionnaire Response Guide', href: '/docs/guides/questionnaires' },
          { name: 'Vendor Assessment Process', href: '/docs/guides/vendor-assessment' },
          { name: 'Control Design Best Practices', href: '/docs/guides/control-design' },
          { name: 'Compliance Best Practices', href: '/docs/guides/best-practices' },
        ],
      },
    ],
    popularResources: {
      title: 'Popular Resources',
      resources: [
        {
          title: 'Deliverables Overview',
          description: 'See exactly what you receive from Meridian S&O compliance programs',
          href: '/docs/deliverables/overview',
        },
        {
          title: 'PCI DSS Scoping',
          description: 'Define what is in scope for your cardholder data environment',
          href: '/docs/pci-dss/scope',
        },
        {
          title: 'How We Work',
          description: 'Meridian S&O approach: scope first, then framework, then audit',
          href: '/docs/getting-started/how-we-work',
        },
      ],
    },
  },

  // Doc article content (individual doc pages)
  docsPages: {
    pciDssOverview: {
      title: 'PCI DSS Overview',
      description: 'What the Payment Card Industry Data Security Standard is, who it applies to, and how Meridian S&O helps you achieve and maintain compliance.',
      breadcrumb: [{ label: 'Docs', href: '/docs' }, { label: 'PCI DSS', href: '/docs/pci-dss/overview' }, { label: 'Overview' }],
      sections: [
        {
          title: 'What is PCI DSS?',
          body: 'The Payment Card Industry Data Security Standard (PCI DSS) is a set of security standards designed to ensure that all companies that store, process, or transmit cardholder data maintain a secure environment. It was created by the PCI Security Standards Council (PCI SSC) and is mandated by the card brands (Visa, Mastercard, American Express, Discover, JCB) for any organization that handles cardholder data.',
        },
        {
          title: 'Who must comply?',
          body: 'Any entity that stores, processes, or transmits cardholder data—including merchants, processors, acquirers, issuers, and service providers—must comply with PCI DSS. Your compliance level and validation requirements depend on your transaction volume and how you interact with cardholder data. Meridian S&O helps you determine your scope and the right path to validation (e.g., SAQ or Report on Compliance).',
        },
        {
          title: 'The 12 requirements',
          body: 'PCI DSS is organized into 12 high-level requirements across six goals: build and maintain a secure network; protect cardholder data; maintain a vulnerability management program; implement strong access control; regularly monitor and test networks; and maintain an information security policy. Each requirement breaks down into sub-requirements and testing procedures that auditors and assessors use to evaluate compliance.',
        },
        {
          title: 'How Meridian S&O helps',
          body: 'We help you scope your cardholder data environment (CDE), map data flows, and align your controls to PCI DSS. Whether you need a readiness assessment, SAQ guidance, or support for a full Report on Compliance (ROC), we work with you to build defensible controls, documentation, and evidence so you can achieve and maintain compliance without stalling delivery.',
        },
      ],
      relatedLinks: [
        { name: 'SAQ Determination', href: '/docs/pci-dss/saq' },
        { name: 'Scope & Data Flows', href: '/docs/pci-dss/scope' },
        { name: 'Gap Assessment', href: '/docs/pci-dss/gap-assessment' },
      ],
    },
  },

  // Pricing Page
  pricing: {
    header: {
      title: 'Engagement Options',
      description: 'Scope-based engagements: control architecture, readiness, and ongoing TrustOps. No one-size-fits-all packages.',
    },
    tiers: [
      {
        name: 'Control Architecture',
        price: 'Scoped',
        description: 'Scope clarity, data flow analysis, and a 90-day compliance roadmap',
        features: [
          'Data flow and scope definition',
          'PCI and/or SOC 2 alignment',
          '90-day roadmap with deliverables',
          'Cloud and third-party risk mapping',
          'No commitment to audit timeline',
        ],
        cta: 'Schedule a Call',
        href: '/contact',
        featured: false,
      },
      {
        name: 'Readiness Sprint',
        price: 'Scoped',
        description: 'Gap assessment, control design, and audit preparation for SOC 2 or PCI DSS',
        features: [
          'Gap assessment and control design',
          'Evidence plan and artifact set',
          'Audit prep and walkthrough support',
          'Clear owners and timelines',
          'Single framework or combined',
        ],
        cta: 'Schedule a Call',
        href: '/contact',
        featured: true,
        badge: 'Most Common',
      },
      {
        name: 'TrustOps Advisory',
        price: 'Retainer',
        description: 'Ongoing compliance operations: evidence cadence, questionnaires, and risk reviews',
        features: [
          'Continuous control monitoring',
          'Security questionnaire support',
          'Quarterly risk reviews',
          'Evidence and renewal cadence',
          'Compliance stays operational',
        ],
        cta: 'Get in Touch',
        href: '/contact',
        featured: false,
      },
    ],
    enterprise: {
      title: 'Custom Engagements',
      description: 'Multi-framework, certification-focused, or dedicated support—we scope to your situation.',
      stats: [
        { value: 'Scope first', label: 'Approach' },
        { value: 'PCI · SOC 2 · ISO', label: 'Frameworks' },
        { value: 'B2B SaaS', label: 'Focus' },
        { value: 'Defensible', label: 'Artifacts' },
      ],
      cta: 'Schedule a Discovery Call',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How is pricing determined?',
          answer: 'We scope each engagement based on your product, data flows, and target framework(s). No generic packages—we quote after a discovery call.',
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We offer invoicing for engagements. Terms are outlined in the statement of work after scope is agreed.',
        },
        {
          question: 'Can we start with scope only?',
          answer: 'Yes. Many clients start with control architecture or a Readiness Sprint to get scope clarity before committing to an audit timeline.',
        },
        {
          question: 'Do you work with early-stage companies?',
          answer: 'Yes. We work with startups and growth-stage B2B SaaS that need defensible scope and artifacts without over-investing.',
        },
        {
          question: 'What if we need PCI and SOC 2?',
          answer: 'We scope both and align controls so work is reused where possible. We’ll outline the roadmap in the discovery phase.',
        },
        {
          question: 'How do we get started?',
          answer: 'Schedule a discovery call. We’ll discuss your situation, buyers, and timeline—then propose a scoped engagement.',
        },
      ],
    },
    priceUnit: '',
  },

  // Showcase Page
  showcase: {
    header: {
      title: 'Client Success Stories',
      description: 'See how leading companies built their control environment with Meridian S&O—SOC 2, PCI DSS, and ISO outcomes.',
    },
    categories: ['All', 'B2B SaaS', 'Fintech', 'Startups', 'Mid-Market', 'Enterprise'],
    showcases: [
      {
        company: 'PayFlow SaaS',
        category: 'B2B SaaS',
        tagline: 'Payment orchestration',
        description: 'Achieved SOC 2 Type II in 90 days after we scoped their cardholder data environment and aligned controls to their actual architecture. Ongoing TrustOps keeps evidence current for enterprise buyers.',
        metrics: [
          { label: 'Time to Certification', value: '90 days' },
          { label: 'Certification', value: 'SOC 2 Type II' },
          { label: 'Ops Cadence', value: 'Active' },
        ],
        href: '/showcase/payflow',
      },
      {
        company: 'Nexus Fintech',
        category: 'Fintech',
        tagline: 'Banking infrastructure',
        description: 'PCI DSS readiness for bank partnership: SAQ determination, gap assessment, and evidence preparation scoped to their tokenization model. Passed partner security review in 60 days.',
        metrics: [
          { label: 'Framework', value: 'PCI DSS' },
          { label: 'Partner Review', value: '60 days' },
          { label: 'Scope', value: 'CDE defined' },
        ],
        href: '/showcase/nexus-fintech',
      },
      {
        company: 'ScaleHealth',
        category: 'Mid-Market',
        tagline: 'Healthcare SaaS',
        description: 'Control architecture and SOC 2 readiness for a growing healthcare SaaS. We mapped data flows, defined scope, and delivered a 90-day roadmap—then supported audit prep.',
        metrics: [
          { label: 'Roadmap', value: '90 days' },
          { label: 'Certification', value: 'SOC 2 Type I' },
          { label: 'Focus', value: 'Scope first' },
        ],
        href: '/showcase/scalehealth',
      },
      {
        company: 'StackSync',
        category: 'B2B SaaS',
        tagline: 'Enterprise SaaS',
        description: 'Completed Readiness Sprint and achieved SOC 2 Type I. Established ongoing compliance ops cadence aligned to product release cycles and enterprise questionnaire demand.',
        metrics: [
          { label: 'Sprint Duration', value: '30 days' },
          { label: 'SOC 2 Type', value: 'Type I' },
          { label: 'Ops Cadence', value: 'Active' },
        ],
        href: '/showcase/stacksync',
      },
      {
        company: 'EduSec',
        category: 'Startups',
        tagline: 'EdTech platform',
        description: 'Scoped control environment for an early-stage EdTech facing enterprise RFPs. Delivered defensible artifact set and passed customer security reviews without over-investing in frameworks.',
        metrics: [
          { label: 'Artifacts', value: '25+' },
          { label: 'Security Reviews', value: '100% Pass' },
          { label: 'Approach', value: 'Scope-first' },
        ],
        href: '/showcase/edusec',
      },
      {
        company: 'RetailOps',
        category: 'Enterprise',
        tagline: 'Retail technology',
        description: 'ISO 27001 control mapping and vendor risk program design for a large retailer. Compliance stays operational through quarterly reviews and evidence cadence.',
        metrics: [
          { label: 'Framework', value: 'ISO 27001' },
          { label: 'Vendor Program', value: 'Active' },
          { label: 'Governance', value: 'Quarterly' },
        ],
        href: '/showcase/retailops',
      },
    ],
    cta: {
      title: 'Ready to build your control environment?',
      description: 'Join these companies. We start with scope—then framework, then audit.',
      primary: 'Schedule a Discovery Call',
      primaryHref: '/contact#schedule-call',
    },
    readMore: 'Read case study',
  },

  // Loading (global)
  loading: {
    message: 'Loading...',
  },

  // Not Found Page
  notFound: {
    code: '404',
    title: 'Page Not Found',
    description: "The page you're looking for doesn't exist or has been moved.",
    backToHome: 'Back to Home',
    browseDocs: 'Browse Docs',
    helpfulLinks: {
      title: 'Looking for something specific?',
      links: {
        docs: 'Documentation',
        showcase: 'Showcase',
        pricing: 'Pricing',
        blog: 'Blog',
        contact: 'Contact',
      },
    },
  },

  // Error Page
  error: {
    title: 'Oops!',
    subtitle: 'Something went wrong',
    description: "We're sorry for the inconvenience. Our team has been notified and is working to fix the issue.",
    tryAgain: 'Try Again',
    backToHome: 'Back to Home',
    errorDetails: {
      title: 'Error Details (Development Only)',
    },
  },
}
