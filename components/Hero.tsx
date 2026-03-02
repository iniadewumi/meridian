import Link from 'next/link'
import { appText } from '@/appText'

export default function Hero() {
  const { hero } = appText.home
  return (
    <section className="border-b border-dark-border px-6 pt-[100px] pb-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[820px] space-y-10 animate-fade-in">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-text-secondary">
            {hero.badge}
          </div>

          <h1 className="font-serif text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.15] font-normal tracking-tight text-dark-text">
            {typeof hero.headline === 'string' ? hero.headline : `${(hero.headline as { part1: string; part2: string }).part1} ${(hero.headline as { part1: string; part2: string }).part2}`}
          </h1>

          <p className="max-w-[68ch] text-lg leading-relaxed text-dark-text-muted md:text-xl">
            {hero.subheadline}
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row">
            <Link href={hero.cta.primaryHref ?? '/contact'} className="btn-primary">
              {hero.cta.primary}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            <p className="max-w-[62ch] text-sm leading-relaxed text-dark-text-muted">
              {hero.microcopy}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-dark-text-muted">
              <span className="inline-flex items-center gap-2 rounded-sm border border-dark-border bg-dark-surface px-3 py-1.5 whitespace-nowrap">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {hero.features.pci}
              </span>
              <span className="inline-flex items-center gap-2 rounded-sm border border-dark-border bg-dark-surface px-3 py-1.5 whitespace-nowrap">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {hero.features.soc2}
              </span>
              <span className="inline-flex items-center gap-2 rounded-sm border border-dark-border bg-dark-surface px-3 py-1.5 whitespace-nowrap">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-dark-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {hero.features.iso}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
