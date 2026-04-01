import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { appText } from '@/appText'

type DocIndexEntry = {
  href: string
  title: string
  summary: string
  sectionTitle: string
  sectionDescription: string
}

function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/'
}

const sectionEntries: DocIndexEntry[] = appText.docs.sections.flatMap((section) =>
  section.links.map((link) => {
    const summary =
      'description' in link && typeof link.description === 'string' && link.description.trim().length > 0
        ? link.description
        : section.description

    return {
      href: normalizePath(link.href),
      title: link.name,
      summary,
      sectionTitle: section.title,
      sectionDescription: section.description,
    }
  })
)

const popularEntries: DocIndexEntry[] = appText.docs.popularResources.resources.map((resource) => ({
  href: normalizePath(resource.href),
  title: resource.title,
  summary: resource.description,
  sectionTitle: 'Popular Resources',
  sectionDescription: 'Frequently accessed implementation and scoping guides.',
}))

const docsIndex = Array.from(
  new Map([...sectionEntries, ...popularEntries].map((entry) => [entry.href, entry])).values()
)

const docsByPath = new Map(docsIndex.map((entry) => [entry.href, entry]))

type PageContent = {
  headings?: {
    whatThisCovers?: string
    howToUseIt?: string
  }
  whatThisCovers: { body: string; items?: string[] }
  howToUseIt: { intro: string; items: string[] }
  cta: { heading: string; body: string }
}

const pageContentByPath: Record<string, PageContent> = {
  '/docs/getting-started/readiness-sprint': appText.docsPages.readinessSprintOverview,
  '/docs/ops/cadence': appText.docsPages.opsCadenceOverview,
}

function getEntryFromSlug(slug: string[]) {
  const path = normalizePath(`/docs/${slug.join('/')}`)
  return docsByPath.get(path)
}

export function generateStaticParams() {
  return docsIndex
    .filter((entry) => entry.href !== '/docs/pci-dss/overview')
    .map((entry) => ({
      slug: entry.href.replace(/^\/docs\//, '').split('/'),
    }))
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const entry = getEntryFromSlug(params.slug)
  if (!entry) {
    return {
      title: `Docs - ${appText.metadata.siteName}`,
      description: appText.metadata.docs.description,
    }
  }

  return {
    title: `${entry.title} - ${appText.metadata.siteName}`,
    description: entry.summary,
  }
}

export default function DocsDetailPage({ params }: { params: { slug: string[] } }) {
  const entry = getEntryFromSlug(params.slug)
  if (!entry) notFound()

  const path = normalizePath(`/docs/${params.slug.join('/')}`)
  const content = pageContentByPath[path]

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-dark-text-muted">
            <li>
              <Link href="/docs" className="hover:text-dark-text transition-colors">
                Docs
              </Link>
            </li>
            <li className="text-dark-border" aria-hidden>
              /
            </li>
            <li className="text-dark-text-secondary">{entry.title}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-text-secondary mb-3">
            {entry.sectionTitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
            {entry.title}
          </h1>
          <p className="text-xl text-dark-text-secondary leading-relaxed">{entry.summary}</p>
        </header>

        <article className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">
              {content?.headings?.whatThisCovers ?? 'What this guide covers'}
            </h2>
            <p className="text-base leading-[1.8] text-dark-text-muted">
              {content
                ? content.whatThisCovers.body
                : 'The purpose of this guide is to help you understand scope decisions, required artifacts, and implementation order before audit evidence is collected.'}
            </p>
            {content?.whatThisCovers.items && content.whatThisCovers.items.length > 0 && (
              <ul className="mt-4 list-disc pl-5 text-base leading-[1.8] text-dark-text-muted space-y-2">
                {content.whatThisCovers.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">
              {content?.headings?.howToUseIt ?? 'How to use this guide'}
            </h2>
            <p className="text-base leading-[1.8] text-dark-text-muted mb-4">
              {content
                ? content.howToUseIt.intro
                : 'Use this guide to understand what decisions you need to make, what artifacts you need to produce, and what to do first—before you start collecting audit evidence.'}
            </p>
            <ul className="list-disc pl-5 text-base leading-[1.8] text-dark-text-muted space-y-2">
              {content ? (
                content.howToUseIt.items.map((item, i) => <li key={i}>{item}</li>)
              ) : (
                <>
                  <li>Confirm what systems and data flows are in scope.</li>
                  <li>Assign control owners and define evidence cadence.</li>
                  <li>Document decisions so auditors and buyers can verify them.</li>
                </>
              )}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">
              {content?.cta.heading ?? 'Need help with this section?'}
            </h2>
            <p className="text-base leading-[1.8] text-dark-text-muted">
              {content ? (
                content.cta.body
              ) : (
                <>
                  If you need an implementation walkthrough for <strong>{entry.title}</strong>, our team can
                  scope and prioritize the exact control set for your environment.
                </>
              )}
            </p>
          </section>
        </article>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/contact#schedule-call"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-dark-text text-dark-bg font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Discovery Call
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-dark-text transition-colors text-sm font-medium"
          >
            Back to Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}
