'use client'

import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

export default function WhyMeridianSection() {
  const { whyMeridian } = appText.home
  return (
    <section className="border-b border-dark-border px-6 py-[72px]">
      <div className="mx-auto max-w-[820px] px-4 md:px-7">
        <AnimatedSection>
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-dark-text-secondary mb-5">
            {whyMeridian.label}
          </div>
          <h2 className="font-serif text-[clamp(26px,3.5vw,34px)] leading-[1.25] font-normal text-dark-text mb-6 max-w-[600px]">
            {whyMeridian.heading}
          </h2>
          <p className="text-base leading-[1.8] text-dark-text-muted max-w-[620px] mb-8">
            {whyMeridian.body}
          </p>
          <div className="rounded-[3px] bg-dark-text px-8 py-9 text-dark-bg">
            <h3 className="font-serif text-[22px] font-normal text-dark-bg mb-4">
              {whyMeridian.callout.title}
            </h3>
            <p className="text-[15px] leading-[1.8] text-[#b0b3b8]">
              {whyMeridian.callout.body}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
