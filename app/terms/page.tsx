import type { Metadata } from 'next'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: `Terms of Use - ${appText.metadata.siteName}`,
  description: 'Terms governing access to and use of Meridian S&O website and services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-text mb-4">
            Terms of Use
          </h1>
          <p className="text-dark-text-secondary">Last updated: March 3, 2026</p>
        </header>

        <article className="space-y-8 text-base leading-[1.8] text-dark-text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Use of this site</h2>
            <p>
              You may use this site for lawful business purposes. You agree not to misuse the site,
              attempt unauthorized access, or disrupt service availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">No professional guarantee</h2>
            <p>
              Content on this website is informational and does not constitute legal advice or a
              guarantee of certification outcomes. Engagement terms are defined in signed client
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Intellectual property</h2>
            <p>
              Site content, branding, and materials are owned by Meridian Standards &amp; Operations
              unless otherwise noted. Reproduction or redistribution requires written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Meridian S&amp;O is not liable for indirect or
              consequential damages arising from use of this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-text mb-3">Contact</h2>
            <p>
              Questions regarding these terms can be sent to <a className="underline" href="mailto:info@meridianso.com">info@meridianso.com</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
