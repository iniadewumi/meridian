import ScheduleCallButton from '@/components/ScheduleCallButton'
import Link from 'next/link'
import { Metadata } from 'next'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: appText.metadata.showcase.title,
  description: appText.metadata.showcase.description,
}

const { showcase } = appText
const showcases = showcase.showcases
const categories = showcase.categories

export default function ShowcasePage({
  searchParams,
}: {
  searchParams?: { category?: string }
}) {
  const selectedCategory =
    (searchParams?.category && categories.includes(searchParams.category)
      ? searchParams.category
      : 'All') ?? 'All'

  const filteredShowcases =
    selectedCategory === 'All'
      ? showcases
      : showcases.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {showcase.header.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            {showcase.header.description}
          </p>
        </div>

        {/* Category Filter — hidden until there are case studies to filter */}
        {showcases.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Link
                key={category}
                href={category === 'All' ? '/showcase' : `/showcase?category=${encodeURIComponent(category)}`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  category === selectedCategory
                    ? 'bg-dark-text-secondary text-dark-bg'
                    : 'bg-dark-surface text-dark-text-secondary hover:text-dark-text border border-dark-border hover:border-dark-text-muted'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        )}

        {/* Showcase Grid — card layout preserved for when `showcases` has entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredShowcases.length === 0 && (
            <div className="md:col-span-2 rounded-lg border border-dashed border-dark-border bg-dark-surface/50 px-8 py-16 text-center">
              <h2 className="text-xl font-semibold text-dark-text mb-3">{showcase.emptyState.title}</h2>
              <p className="text-dark-text-secondary max-w-lg mx-auto leading-relaxed">
                {showcase.emptyState.description}
              </p>
            </div>
          )}
          {filteredShowcases.map((item) => (
            <Link
              key={item.company}
              href={item.href}
              className="group bg-dark-surface border border-dark-border rounded-lg overflow-hidden hover:border-dark-text-muted transition-all"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-dark-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{item.company}</div>
                  <div className="text-sm text-dark-text-muted">{item.tagline}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{item.company}</h3>
                  <span className="text-xs uppercase tracking-wider text-dark-text-muted bg-dark-border px-2 py-1 rounded">
                    {item.tagline}
                  </span>
                </div>

                <p className="text-dark-text-secondary mb-6">{item.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-bold">{metric.value}</div>
                      <div className="text-xs text-dark-text-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="mt-6 flex items-center text-sm text-dark-text-secondary group-hover:text-dark-text transition-colors">
                  <span>{showcase.readMore}</span>
                  <svg
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-dark-surface border border-dark-border rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{showcase.cta.title}</h2>
          <p className="text-lg text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            {showcase.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScheduleCallButton className="btn-primary rounded-md inline-flex items-center">
              {showcase.cta.primary}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ScheduleCallButton>
          </div>
        </div>
      </div>
    </div>
  )
}
