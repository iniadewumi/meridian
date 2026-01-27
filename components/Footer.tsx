// components/Footer.tsx
import Link from 'next/link'
import { appText } from '@/appText'

export default function Footer() {
  const { footer } = appText
  return (
    <footer className="bg-black text-gray-400 py-12 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h6 className="text-white font-semibold uppercase mb-4 tracking-wide text-xs">{footer.product.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/readiness-sprint" className="hover:text-white transition-colors">{footer.product.links.readinessSprint}</Link></li>
              <li><Link href="/compliance-ops" className="hover:text-white transition-colors">{footer.product.links.complianceOps}</Link></li>
              <li><Link href="/certification" className="hover:text-white transition-colors">{footer.product.links.certification}</Link></li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-white font-semibold uppercase mb-4 tracking-wide text-xs">{footer.resources.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/deliverables" className="hover:text-white transition-colors">{footer.resources.links.deliverables}</Link></li>
              <li><Link href="/how-we-work" className="hover:text-white transition-colors">{footer.resources.links.howWeWork}</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">{footer.resources.links.faq}</Link></li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-white font-semibold uppercase mb-4 tracking-wide text-xs">{footer.company.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">{footer.company.links.about}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{footer.company.links.contact}</Link></li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-white font-semibold uppercase mb-4 tracking-wide text-xs">{footer.legal.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white transition-colors">{footer.legal.links.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">{footer.legal.links.terms}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>{footer.copyright}</span>
          <span className="text-gray-500">{footer.builtWith}</span>
        </div>
      </div>
    </footer>
  )
}