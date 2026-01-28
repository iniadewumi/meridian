import { Metadata } from 'next'
import Link from 'next/link'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: appText.metadata.about.title,
  description: appText.metadata.about.description,
}

const { about } = appText

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {about.header.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            {about.header.description}
          </p>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">{about.story.title}</h2>
          <div className="space-y-4 text-dark-text-secondary leading-relaxed">
            {about.story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{about.stats.activeProjects.value}</div>
            <div className="text-sm text-dark-text-secondary">{about.stats.activeProjects.label}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{about.stats.apiRequests.value}</div>
            <div className="text-sm text-dark-text-secondary">{about.stats.apiRequests.label}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{about.stats.uptime.value}</div>
            <div className="text-sm text-dark-text-secondary">{about.stats.uptime.label}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{about.stats.countries.value}</div>
            <div className="text-sm text-dark-text-secondary">{about.stats.countries.label}</div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">{about.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.values.items.map((value) => (
              <div key={value.title} className="bg-dark-surface border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-dark-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">{about.team.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {about.team.members.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-dark-surface border border-dark-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-dark-text-muted">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-dark-text-secondary mb-2">{member.role}</p>
                <p className="text-xs text-dark-text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backed By */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-8">{about.backedBy.title}</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 text-dark-text-secondary">
            {about.backedBy.investors.map((investor) => (
              <div key={investor} className="text-lg font-semibold">{investor}</div>
            ))}
          </div>
        </div>

        {/* Careers CTA */}
        <div className="bg-dark-surface border border-dark-border rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{about.careers.title}</h2>
          <p className="text-lg text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            {about.careers.description}
          </p>
          <Link
            href="/careers"
            className="btn-primary rounded-md inline-flex items-center"
          >
            {about.careers.cta}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
