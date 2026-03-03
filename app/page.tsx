import ScheduleCallButton from '@/components/ScheduleCallButton'
import Hero from '@/components/Hero'
import SituationSection from '@/components/SituationSection'
import FeatureGrid from '@/components/FeatureGrid'
import OffersSection from '@/components/OffersSection'
import WhyMeridianSection from '@/components/WhyMeridianSection'
import FAQ from '@/components/FAQ'
import { appText } from '@/appText'

export default function HomePage() {
  const { finalCta } = appText.home
  return (
    <>
      <Hero />
      <SituationSection />
      <FeatureGrid />
      <OffersSection />
      <WhyMeridianSection />
      <FAQ />
      <section id="contact" className="px-6 pt-20 pb-[100px]">
        <div className="mx-auto max-w-[1120px]">
          <div className="rounded-sm border border-transparent bg-dark-surface p-10 text-center transition-colors duration-300 hover:border-dark-border md:p-14">
            <h2 className="font-serif text-4xl tracking-tight text-dark-text md:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-lg leading-relaxed text-dark-text-muted">
              {finalCta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ScheduleCallButton className="btn-primary">
                {finalCta.primary}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </ScheduleCallButton>
            </div>
            <p className="mx-auto mt-6 max-w-[620px] text-sm leading-relaxed text-dark-text-muted">
              {finalCta.altPrefix}
              <a href={`mailto:${finalCta.email}`} className="text-dark-text-secondary font-medium underline decoration-dark-text-secondary/40 hover:decoration-dark-text-secondary">
                {finalCta.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
