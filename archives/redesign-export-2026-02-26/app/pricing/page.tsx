import Link from 'next/link'
import { Metadata } from 'next'
import { appText } from '@/appText'

export const metadata: Metadata = {
  title: appText.metadata.pricing.title,
  description: appText.metadata.pricing.description,
}

const { pricing } = appText
const tiers = pricing.tiers
const faqs = pricing.faq.items

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {pricing.header.title}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            {pricing.header.description}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-dark-surface border rounded-lg p-8 ${
                tier.featured
                  ? 'border-white shadow-lg shadow-white/10'
                  : 'border-dark-border'
              }`}
            >
              {tier.featured && tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  {tier.price !== 'Custom' && (
                    <span className="text-dark-text-secondary ml-2">{pricing.priceUnit}</span>
                  )}
                </div>
                <p className="text-dark-text-secondary">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-white mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-dark-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`block w-full text-center py-3 rounded-md font-medium transition-all ${
                  tier.featured
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="bg-dark-surface border border-dark-border rounded-lg p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{pricing.enterprise.title}</h2>
            <p className="text-lg text-dark-text-secondary mb-8">
              {pricing.enterprise.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {pricing.enterprise.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-dark-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center btn-primary rounded-md"
            >
              {pricing.enterprise.cta}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{pricing.faq.title}</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-dark-border pb-6">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-dark-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
