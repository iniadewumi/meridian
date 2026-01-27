// components/PitchSection.tsx
'use client'

import { AnimatedSection } from './AnimatedSection'

export default function PitchSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Meridian helps CISOs, product leaders, and compliance officers build defensible AI compliance programs without stalling delivery. We start with the EU AI Act and translate requirements into operational controls, documentation, and evidence that hold up under scrutiny. Whether you need a rapid Readiness Sprint, an ongoing Compliance Ops partner, or certification-focused execution for SOC 2 and ISO (including AI governance where applicable), Meridian delivers clear outputs, tight timelines, and accountable ownership—at a cost-effective price point.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}