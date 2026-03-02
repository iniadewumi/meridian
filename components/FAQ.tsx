// components/FAQ.tsx
'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

const faqs = appText.home.faq.items

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="border-b border-dark-border px-6 py-[72px]">
      <div className="mx-auto max-w-[980px]">
        <AnimatedSection>
          <h2 className="mb-14 text-center font-serif text-4xl tracking-tight text-dark-text md:text-5xl">
            {appText.home.faq.title}
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                className="group overflow-hidden rounded-[3px] border border-transparent bg-dark-surface transition-[border-color] duration-300 hover:border-dark-border"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-7 py-5 text-left transition-colors hover:bg-dark-surface md:px-8 md:py-6"
                >
                  <span className="pr-8 text-lg font-semibold text-dark-text">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-dark-text-muted transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-7 pb-6 leading-relaxed text-dark-text-muted md:px-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
