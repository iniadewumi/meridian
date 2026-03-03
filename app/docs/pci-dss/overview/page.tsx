import Link from 'next/link'
import { Metadata } from 'next'
import { appText } from '@/appText'

const { docsPages } = appText
const content = docsPages.pciDssOverview

export const metadata: Metadata = {
  title: `${content.title} - Meridian S&O`,
  description: content.description,
}

export default function PciDssOverviewPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-dark-text-muted">
            {content.breadcrumb.map((item, i) => (
              <li key={i} className="flex items-center gap-x-2">
                {i > 0 && (
                  <span className="text-dark-border" aria-hidden>
                    /
                  </span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-dark-text transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-dark-text-secondary">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-dark-text-secondary leading-relaxed">
            {content.description}
          </p>
        </header>

        {/* Article body */}
        <article className="space-y-10">
          {content.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-semibold text-dark-text mb-4">
                {section.title}
              </h2>
              <p className="text-base leading-[1.8] text-dark-text-muted">
                {section.body}
              </p>
            </section>
          ))}
        </article>

        {/* Related links */}
        <aside className="mt-16 pt-10 border-t border-dark-border">
          <h2 className="text-lg font-semibold text-dark-text mb-4">
            Related
          </h2>
          <ul className="space-y-2">
            {content.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-dark-text-secondary hover:text-dark-text transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:underline">{link.name}</span>
                  <svg
                    className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Back to docs */}
        <div className="mt-12">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-dark-text transition-colors text-sm font-medium"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}
