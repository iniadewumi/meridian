import type { Metadata } from 'next'
import Link from 'next/link'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: `FAQ - ${appText.metadata.siteName}`,
  description: 'Answers to common questions about scope, timelines, deliverables, and audit readiness.',
}

export default function FaqPage() {
  const { faq } = appText.home

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
            {faq.title}
          </h1>
          <p className="text-xl text-dark-text-secondary">
            Practical answers on how Meridian S&O scopes and delivers compliance work.
          </p>
        </header>

        <div className="space-y-5">
          {faq.items.map((item) => (
            <section
              key={item.question}
              className="rounded-lg border border-dark-border bg-dark-surface p-6"
            >
              <h2 className="text-xl font-semibold text-dark-text mb-3">{item.question}</h2>
              <p className="text-base leading-[1.8] text-dark-text-muted">{item.answer}</p>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/contact#schedule-call"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-dark-text text-dark-bg font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </div>
    </div>
  )
}
