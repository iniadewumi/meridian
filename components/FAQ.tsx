// components/FAQ.tsx
'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

const faqs = appText.home.faq.items

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {appText.home.faq.title}
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                className="group border border-white/10 rounded-xl overflow-hidden
                         hover:border-white/20 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between
                           hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
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
                  <div className="px-8 pb-6 text-gray-400 leading-relaxed">
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