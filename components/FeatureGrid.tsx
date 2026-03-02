'use client'

import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

export default function FeatureGrid() {
  const { featureGrid } = appText.home
  return (
    <section className="border-b border-dark-border px-6 py-[72px]">
      <div className="mx-auto max-w-[820px] px-4 md:px-7">
        <AnimatedSection>
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-dark-text-secondary mb-5">
            Our Approach
          </div>
          <h2 className="font-serif text-[clamp(26px,3.5vw,34px)] leading-[1.25] font-normal text-dark-text mb-6 max-w-[600px]">
            {featureGrid.subtitle}
          </h2>
          <p className="text-base leading-[1.8] text-dark-text-muted max-w-[620px] mb-10">
            {featureGrid.intro}
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {featureGrid.steps.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-dark-text-secondary pt-5"
              >
                <div className="text-xs font-semibold tracking-wide text-dark-text-secondary mb-2">
                  {step.number}
                </div>
                <h3 className="text-[15px] font-semibold text-dark-text mb-1.5">
                  {step.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-dark-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
