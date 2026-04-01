import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ScheduleCallButton from '@/components/ScheduleCallButton'
import { appText, type ShowcaseCaseStudy } from '@/appText'

type ShowcaseEntry = ShowcaseCaseStudy & {
  slug: string
}

const showcaseBySlug = new Map<string, ShowcaseEntry>(
  appText.showcase.showcases.map((item) => {
    const slug = item.href.replace(/^\/showcase\//, '')
    return [slug, { ...item, slug }]
  })
)

export function generateStaticParams() {
  return Array.from(showcaseBySlug.keys()).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = showcaseBySlug.get(params.slug)
  if (!item) {
    return {
      title: appText.metadata.showcase.title,
      description: appText.metadata.showcase.description,
    }
  }

  return {
    title: `${item.company} Case Study - ${appText.metadata.siteName}`,
    description: item.description,
  }
}

export default function ShowcaseDetailPage({ params }: { params: { slug: string } }) {
  const item = showcaseBySlug.get(params.slug)
  if (!item) notFound()

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-dark-text-muted">
            <li>
              <Link href="/showcase" className="hover:text-dark-text transition-colors">
                Showcase
              </Link>
            </li>
            <li className="text-dark-border" aria-hidden>
              /
            </li>
            <li className="text-dark-text-secondary">{item.company}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-text-secondary mb-3">
            {item.category} • {item.tagline}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
            {item.company}
          </h1>
          <p className="text-xl text-dark-text-secondary leading-relaxed">{item.description}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {item.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-dark-border bg-dark-surface p-5"
            >
              <p className="text-xs uppercase tracking-wide text-dark-text-muted mb-2">
                {metric.label}
              </p>
              <p className="text-2xl font-semibold text-dark-text">{metric.value}</p>
            </div>
          ))}
        </section>

        <article className="space-y-8 mb-14">
          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Engagement snapshot</h2>
            <p className="text-base leading-[1.8] text-dark-text-muted">
              Meridian S&O worked with <strong>{item.company}</strong> to define in-scope systems,
              align control ownership, and establish an evidence cadence matched to delivery velocity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">What changed</h2>
            <p className="text-base leading-[1.8] text-dark-text-muted">
              Instead of treating compliance as a one-time project, the team adopted a repeatable operating
              model: scope clarity first, then framework-aligned controls, then ongoing governance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Why it worked</h2>
            <p className="text-base leading-[1.8] text-dark-text-muted">
              Controls were tailored to the real architecture, not a template. That reduced rework,
              accelerated buyer diligence responses, and improved audit readiness.
            </p>
          </section>
        </article>

        <div className="rounded-lg border border-dark-border bg-dark-surface p-8">
          <h2 className="text-2xl font-semibold text-dark-text mb-3">
            Need a similar outcome for your team?
          </h2>
          <p className="text-dark-text-secondary mb-6">
            We can scope your environment and define the right control roadmap for PCI DSS, SOC 2, or
            ISO alignment.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleCallButton className="btn-primary rounded-md inline-flex items-center">
              Schedule a Discovery Call
            </ScheduleCallButton>
            <Link
              href="/showcase"
              className="text-sm font-medium text-dark-text-secondary hover:text-dark-text transition-colors"
            >
              Back to all case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
