import Link from 'next/link'
import { Metadata } from 'next'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: appText.metadata.docs.title,
  description: appText.metadata.docs.description,
}

const { docs } = appText
const docSections = docs.sections

type DocsPageProps = {
  searchParams?: {
    q?: string | string[]
  }
}

function normalizeQuery(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value
  return (raw || '').trim()
}

function matchesQuery(value: string, query: string) {
  return value.toLowerCase().includes(query.toLowerCase())
}

export default function DocsPage({ searchParams }: DocsPageProps) {
  const query = normalizeQuery(searchParams?.q)
  const hasQuery = query.length > 0

  const filteredSections = docSections
    .map((section) => {
      const sectionMatches =
        matchesQuery(section.title, query) || matchesQuery(section.description, query)

      const matchingLinks = section.links.filter((link) =>
        matchesQuery(link.name, query)
      )

      if (!hasQuery) {
        return section
      }

      if (sectionMatches) {
        return section
      }

      return {
        ...section,
        links: matchingLinks,
      }
    })
    .filter((section) => section.links.length > 0)

  const filteredResources = docs.popularResources.resources.filter((resource) => {
    if (!hasQuery) return true
    return (
      matchesQuery(resource.title, query) || matchesQuery(resource.description, query)
    )
  })

  const hasResults = filteredSections.length > 0 || filteredResources.length > 0

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {docs.header.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl">
            {docs.header.description}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-16">
          <form method="get" className="relative max-w-2xl">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder={docs.search.placeholder}
              className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 pl-12 text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-text focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
          {hasQuery && (
            <div className="mt-3">
              <Link
                href="/docs"
                className="text-sm text-dark-text-secondary hover:text-dark-text transition-colors"
              >
                Clear search
              </Link>
            </div>
          )}
        </div>

        {/* Documentation Sections */}
        {!hasResults && hasQuery && (
          <div className="mb-10 rounded-lg border border-dark-border bg-dark-surface p-6 text-dark-text-secondary">
            No documentation pages matched <strong className="text-dark-text">"{query}"</strong>.
          </div>
        )}

        {filteredSections.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSections.map((section) => (
              <div
                key={section.title}
                className="bg-dark-surface border border-dark-border rounded-lg p-8"
              >
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="text-dark-text-secondary mb-6">{section.description}</p>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
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
              </div>
            ))}
          </div>
        )}

        {/* Popular Resources */}
        {filteredResources.length > 0 && (
          <div className="mt-16 pt-16 border-t border-dark-border">
            <h2 className="text-2xl font-bold mb-8">{docs.popularResources.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-dark-text-muted transition-all"
                >
                  <h3 className="font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-dark-text-secondary">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
