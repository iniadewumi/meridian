'use client'

import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

export default function SituationSection() {
  const { situation } = appText.home
  return (
    <section className="border-b border-dark-border px-6 py-[72px]">
      <div className="mx-auto max-w-[820px] px-4 md:px-7">
        <AnimatedSection>
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-dark-text-secondary mb-5">
            {situation.label}
          </div>
          <h2 className="font-serif text-[clamp(26px,3.5vw,34px)] leading-[1.25] font-normal text-dark-text mb-6 max-w-[600px]">
            {situation.heading}
          </h2>
          <div className="space-y-4">
            {situation.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-[1.8] text-dark-text-muted max-w-[620px]">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
