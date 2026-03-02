'use client'

import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

interface OfferProps {
  title: string
  purpose: string
  items: string[]
  bestFor: string
}

const offers: OfferProps[] = appText.home.offers.offers

function OfferCard({ title, purpose, items, bestFor }: OfferProps) {
  return (
    <div className="flex h-full flex-col rounded-[3px] border border-transparent bg-dark-surface p-8 transition-[border-color] duration-300 hover:border-dark-border">
      <div className="space-y-6 flex-grow">
        <div>
          <h3 className="mb-3 font-serif text-3xl leading-tight tracking-tight text-dark-text">{title}</h3>
          <p className="leading-relaxed text-dark-text-muted">{purpose}</p>
        </div>
        
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-dark-text">{appText.home.offers.whatYouGet}</h4>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 leading-relaxed text-dark-text-muted">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 border-t border-dark-border pt-6">
        <p className="text-sm text-dark-text-muted">
          <span className="font-semibold text-dark-text">{appText.home.offers.bestFor}</span> {bestFor}
        </p>
      </div>
    </div>
  )
}

export default function OffersSection() {
  return (
    <section className="border-b border-dark-border px-6 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="mb-4 font-serif text-4xl tracking-tight text-dark-text md:text-5xl">
              {appText.home.offers.title}
            </h2>
            <p className="mx-auto max-w-[680px] text-lg text-dark-text-muted">
              {appText.home.offers.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
