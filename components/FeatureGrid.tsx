'use client'

import { AnimatedSection } from './AnimatedSection'
import { appText } from '@/appText'

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

const icons = [
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
]

const features: FeatureProps[] = appText.home.featureGrid.features.map((feature, index) => ({
  ...feature,
  icon: icons[index],
}))

function FeatureCard({ title, description, icon }: FeatureProps) {
  return (
    <div className="h-full space-y-4 rounded-[3px] border border-transparent bg-dark-surface p-7 transition-[border-color] duration-300 hover:border-dark-border md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-dark-border bg-dark-surface text-dark-text-secondary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-dark-text">{title}</h3>
      <p className="leading-relaxed text-dark-text-muted">{description}</p>
    </div>
  )
}

export default function FeatureGrid() {
  return (
    <section className="border-b border-dark-border px-6 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="mb-4 font-serif text-4xl tracking-tight text-dark-text md:text-5xl">
              {appText.home.featureGrid.title}
            </h2>
            <p className="mx-auto max-w-[640px] text-lg text-dark-text-muted">
              {appText.home.featureGrid.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
