'use client'

import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

export default function TrustedBy() {
  return (
    <section className="border-b border-dark-border px-6 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <AnimatedSection>
          <div className="text-center">
            <p className="mx-auto max-w-[820px] text-lg leading-relaxed text-dark-text-muted md:text-xl">
              {appText.home.trustedBy.text}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
