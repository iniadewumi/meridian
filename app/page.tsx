import Link from 'next/link'
import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import TrustedBy from '@/components/TrustedBy'
import OffersSection from '@/components/OffersSection'
import FAQ from '@/components/FAQ'
import { AnimatedSection } from '@/components/AnimatedSection'
import { appText } from '@/appText'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeatureGrid />
      <section className="border-b border-dark-border px-6 py-[72px]">
        <div className="mx-auto max-w-[1120px]">
          <AnimatedSection>
            <p className="mx-auto max-w-[820px] text-center text-lg leading-relaxed text-dark-text-muted md:text-xl">
              {appText.home.pitch.paragraph}
            </p>
          </AnimatedSection>
        </div>
      </section>
      <OffersSection />
      <FAQ />
      <section className="px-6 pt-20 pb-[100px]">
        <div className="mx-auto max-w-[1120px]">
          <div className="rounded-sm border border-transparent bg-dark-surface p-10 text-center transition-colors duration-300 hover:border-dark-border md:p-14">
            <h2 className="font-serif text-4xl tracking-tight text-dark-text md:text-5xl">
              {appText.home.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-lg leading-relaxed text-dark-text-muted">
              {appText.home.finalCta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                {appText.home.finalCta.primary}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/docs" className="btn-secondary">
                {appText.home.finalCta.secondary}
              </Link>
            </div>
            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-relaxed text-dark-text-muted">
              {appText.home.finalCta.microcopy}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
