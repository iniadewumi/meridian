'use client'
import { appText } from '@/appText'
import { AnimatedSection } from '@/components/AnimatedSection'
import ScheduleCallButton from '@/components/ScheduleCallButton'

const { about } = appText

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 border-b border-dark-border md:pt-36 md:pb-24">
        <div className="mx-auto max-w-[820px] px-4 md:px-7">
          <AnimatedSection>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-dark-text-secondary mb-5">
              About
            </p>
            <h1 className="font-serif text-[clamp(32px,5vw,48px)] leading-[1.15] font-normal text-dark-text mb-6">
              {about.header.title}
            </h1>
            <p className="text-lg leading-[1.75] text-dark-text-secondary max-w-[620px]">
              {about.header.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-[72px] px-6 border-b border-dark-border">
        <div className="mx-auto max-w-[820px] px-4 md:px-7">
          <AnimatedSection delay={100}>
            <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-normal text-dark-text mb-8">
              {about.story.title}
            </h2>
            <div className="space-y-6">
              {about.story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base leading-[1.8] text-dark-text-muted max-w-[620px] ${
                    index === 0 ? 'text-[17px] leading-[1.75] text-dark-text' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* In short */}
      <section className="py-[72px] px-6 border-b border-dark-border bg-[var(--warm)]/50">
        <div className="mx-auto max-w-[820px] px-4 md:px-7">
          <AnimatedSection delay={150}>
            <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-normal text-dark-text mb-8">
              {about.inShort.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {about.inShort.items.map((item, i) => (
                <div
                  key={i}
                  className="pl-5 border-l-2 border-dark-text-secondary/30 hover:border-dark-text-secondary/60 transition-colors"
                >
                  <div className="font-serif text-2xl md:text-[28px] font-normal text-dark-text tracking-tight">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-dark-text-muted max-w-[140px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-[72px] px-6 border-b border-dark-border">
        <div className="mx-auto max-w-[900px] px-4 md:px-7">
          <AnimatedSection delay={100}>
            <h2 className="font-serif text-[clamp(26px,3.5vw,34px)] font-normal text-dark-text mb-14 text-center">
              {about.values.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {about.values.items.map((value, i) => (
                <div
                  key={value.title}
                  className="group rounded-[3px] bg-dark-surface/80 border border-dark-border p-8 md:p-9 transition-colors hover:border-dark-text-secondary/25 hover:bg-dark-surface"
                >
                  <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-dark-text-secondary mb-4">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-xl md:text-[22px] font-normal text-dark-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-dark-text-muted">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-[72px] px-6 border-b border-dark-border bg-[var(--warm)]/30">
        <div className="mx-auto max-w-[820px] px-4 md:px-7">
          <AnimatedSection delay={100}>
            <h2 className="font-serif text-[clamp(26px,3.5vw,34px)] font-normal text-dark-text mb-14 text-center">
              {about.team.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {about.team.members.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
                >
                  <div className="shrink-0 w-24 h-24 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center ring-2 ring-dark-bg">
                    <span className="font-serif text-2xl font-normal text-dark-text-muted">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-dark-text">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-dark-text-secondary mt-1">
                      {member.role}
                    </p>
                    <p className="text-[15px] text-dark-text-muted mt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Work with us CTA */}
      <section className="py-[72px] px-6 pb-24">
        <div className="mx-auto max-w-[820px] px-4 md:px-7">
          <AnimatedSection delay={100}>
            <div className="rounded-[3px] bg-dark-text px-8 py-10 md:px-12 md:py-12 text-dark-bg">
              <h2 className="font-serif text-[clamp(24px,3vw,30px)] font-normal text-dark-bg mb-4">
                {about.careers.title}
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#b0b3b8] max-w-[560px] mb-8">
                {about.careers.description}
              </p>
              <ScheduleCallButton className="inline-flex items-center gap-2 px-6 py-3 rounded-[3px] bg-dark-bg text-dark-text font-semibold text-[15px] hover:bg-[#e8e6e1] transition-colors">
                {about.careers.cta}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </ScheduleCallButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
