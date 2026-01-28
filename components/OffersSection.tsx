import { appText } from '@/appText'

interface OfferProps {
  title: string
  purpose: string
  items: string[]
  bestFor: string
}

const offers: OfferProps[] = appText.home.offers.offers

function OfferCard({ title, purpose, items, bestFor }: OfferProps) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-lg p-8 hover:border-[#666] transition-all duration-300 h-full flex flex-col">
      <div className="space-y-6 flex-grow">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-3">{title}</h3>
          <p className="text-[#888] leading-relaxed">{purpose}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">{appText.home.offers.whatYouGet}</h4>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="text-[#888] leading-relaxed flex items-start gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-[#222]">
        <p className="text-sm text-[#666]">
          <span className="font-semibold text-white">{appText.home.offers.bestFor}</span> {bestFor}
        </p>
      </div>
    </div>
  )
}

export default function OffersSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            {appText.home.offers.title}
          </h2>
          <p className="text-lg text-[#888] max-w-2xl mx-auto">
            {appText.home.offers.subtitle}
          </p>
        </div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </div>
    </section>
  )
}
