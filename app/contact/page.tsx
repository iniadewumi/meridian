import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: appText.metadata.contact.title,
  description: appText.metadata.contact.description,
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {appText.contact.header.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            {appText.contact.header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Sales */}
            <div>
              <h3 className="text-lg font-bold mb-2">{appText.contact.contactInfo.sales.title}</h3>
              <p className="text-dark-text-secondary mb-2">
                {appText.contact.contactInfo.sales.description}
              </p>
              <a
                href={`mailto:${appText.contact.contactInfo.sales.email}`}
                className="text-white hover:underline"
              >
                {appText.contact.contactInfo.sales.email}
              </a>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold mb-2">{appText.contact.contactInfo.support.title}</h3>
              <p className="text-dark-text-secondary mb-2">
                {appText.contact.contactInfo.support.description}
              </p>
              <a
                href={`mailto:${appText.contact.contactInfo.support.email}`}
                className="text-white hover:underline"
              >
                {appText.contact.contactInfo.support.email}
              </a>
            </div>

            {/* Press */}
            <div>
              <h3 className="text-lg font-bold mb-2">{appText.contact.contactInfo.press.title}</h3>
              <p className="text-dark-text-secondary mb-2">
                {appText.contact.contactInfo.press.description}
              </p>
              <a
                href={`mailto:${appText.contact.contactInfo.press.email}`}
                className="text-white hover:underline"
              >
                {appText.contact.contactInfo.press.email}
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-bold mb-4">{appText.contact.contactInfo.social.title}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary hover:text-white transition-colors"
                  aria-label={appText.contact.contactInfo.social.ariaLabels.twitter}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary hover:text-white transition-colors"
                  aria-label={appText.contact.contactInfo.social.ariaLabels.github}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary hover:text-white transition-colors"
                  aria-label={appText.contact.contactInfo.social.ariaLabels.linkedin}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Office Locations (Optional) */}
        <div className="mt-20 pt-20 border-t border-dark-border">
          <h2 className="text-3xl font-bold mb-8 text-center">{appText.contact.officeLocations.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appText.contact.officeLocations.locations.map((location) => (
              <div key={location.city} className="text-center">
                <h3 className="font-bold mb-2">{location.city}</h3>
                <p className="text-sm text-dark-text-secondary">
                  {location.address.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < location.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
