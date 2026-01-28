import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import TrustedBy from '@/components/TrustedBy'
import OffersSection from '@/components/OffersSection'
import FAQ from '@/components/FAQ'
import { appText } from '@/appText'

export default function HomePage() {
  return (
    <>
      {/* Hero section with primary CTA */}
      <Hero />

      {/* Social proof - proof language */}
      <TrustedBy />

      {/* Core features */}
      <FeatureGrid />

      {/* Company pitch paragraph */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-[#888] leading-relaxed text-center">
            {appText.home.pitch.paragraph}
          </p>
        </div>
      </section>

      {/* Offers section */}
      <OffersSection />

      {/* FAQ section */}
      <FAQ />

      {/* Final CTA section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {appText.home.finalCta.title}
          </h2>
          <p className="text-lg text-[#888]">
            {appText.home.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="btn-primary rounded-md inline-flex items-center"
            >
              {appText.home.finalCta.primary}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/docs"
              className="btn-secondary rounded-md inline-flex items-center"
            >
              {appText.home.finalCta.secondary}
            </a>
          </div>
          <p className="text-sm text-[#666] pt-4">
            {appText.home.finalCta.microcopy}
          </p>
        </div>
      </section>
    </>
  )
}
