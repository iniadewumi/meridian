import Link from 'next/link'
import { appText } from '@/appText'

export default function Hero() {
  const { hero } = appText.home
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black pointer-events-none" aria-hidden="true" />
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-10 animate-fade-in">
        {/* Badge/Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-[#888]">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {hero.badge}
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-balance leading-[1.1]">
          {hero.headline.part1}{' '}
          <span className="text-white relative">
            {hero.headline.part2}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#888] max-w-3xl mx-auto leading-relaxed font-light">
          {hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/contact"
            className="btn-primary rounded-lg inline-flex items-center gap-2 px-8 py-4 text-base font-semibold hover:scale-105 transition-transform duration-200"
          >
            {hero.cta.primary}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href="/docs"
            className="btn-secondary rounded-lg inline-flex items-center gap-2 px-8 py-4 text-base font-semibold border border-white/20 hover:border-white/40 transition-all duration-200"
          >
            {hero.cta.secondary}
          </Link>
        </div>

        {/* Microcopy under CTA */}
        <div className="pt-4 space-y-2">
          <p className="text-sm text-[#666]">
            {hero.microcopy}
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-[#555] pt-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {hero.features.euAiAct}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {hero.features.soc2}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {hero.features.iso}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
