import type { Metadata } from 'next'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: `Privacy Policy - ${appText.metadata.siteName}`,
  description: 'How Meridian S&O collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-dark-text-secondary">Last updated: March 3, 2026</p>
        </header>

        <article className="space-y-8 text-base leading-[1.8] text-dark-text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Information we collect</h2>
            <p>
              We collect information you submit through our contact forms, including name, email
              address, company, and message content. We may also collect technical metadata such as
              IP address and user agent for abuse prevention and security monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">How we use information</h2>
            <p>
              We use submitted information to respond to inquiries, scope potential engagements, and
              provide requested services. We do not sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Data retention</h2>
            <p>
              We retain contact and project communications for as long as needed to deliver services,
              comply with legal obligations, and maintain business records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Third-party services</h2>
            <p>
              Our site may use third-party providers for scheduling, hosting, and email transport.
              Those providers may process limited data necessary to operate the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Contact</h2>
            <p>
              Questions about this policy can be sent to <a className="underline" href="mailto:info@meridianso.com">info@meridianso.com</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
