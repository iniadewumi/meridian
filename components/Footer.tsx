// components/Footer.tsx
import Link from 'next/link'
import { appText } from '@/appText'

export default function Footer() {
  const { footer } = appText
  return (
    <footer className="border-t border-dark-border bg-dark-bg py-12 text-sm text-dark-text-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h6 className="text-dark-text font-semibold uppercase mb-4 tracking-wide text-xs">{footer.product.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/readiness-sprint" className="hover:text-dark-text transition-colors">{footer.product.links.readinessSprint}</Link></li>
              <li><Link href="/compliance-ops" className="hover:text-dark-text transition-colors">{footer.product.links.complianceOps}</Link></li>
              <li><Link href="/certification" className="hover:text-dark-text transition-colors">{footer.product.links.certification}</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-dark-text font-semibold uppercase mb-4 tracking-wide text-xs">{footer.resources.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/deliverables" className="hover:text-dark-text transition-colors">{footer.resources.links.deliverables}</Link></li>
              <li><Link href="/how-we-work" className="hover:text-dark-text transition-colors">{footer.resources.links.howWeWork}</Link></li>
              <li><Link href="/faq" className="hover:text-dark-text transition-colors">{footer.resources.links.faq}</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-dark-text font-semibold uppercase mb-4 tracking-wide text-xs">{footer.company.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-dark-text transition-colors">{footer.company.links.about}</Link></li>
              <li><Link href="/contact" className="hover:text-dark-text transition-colors">{footer.company.links.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-dark-text font-semibold uppercase mb-4 tracking-wide text-xs">{footer.legal.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-dark-text transition-colors">{footer.legal.links.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-dark-text transition-colors">{footer.legal.links.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
          <span>{footer.copyright} {footer.domain && `· ${footer.domain}`}</span>
          {footer.builtWith && <span>{footer.builtWith}</span>}
        </div>
      </div>
    </footer>
  )
}
