// components/Footer.tsx
import Link from 'next/link'
import ScheduleCallButton from '@/components/ScheduleCallButton'
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
              <li><Link href="/docs/getting-started/readiness-sprint" className="hover:text-dark-text transition-colors">{footer.product.links.readinessSprint}</Link></li>
              <li><Link href="/docs/ops/cadence" className="hover:text-dark-text transition-colors">{footer.product.links.complianceOps}</Link></li>
              <li><Link href="/docs/certifications/soc2" className="hover:text-dark-text transition-colors">{footer.product.links.certification}</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-dark-text font-semibold uppercase mb-4 tracking-wide text-xs">{footer.resources.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/docs/deliverables/overview" className="hover:text-dark-text transition-colors">{footer.resources.links.deliverables}</Link></li>
              <li><Link href="/docs/getting-started/how-we-work" className="hover:text-dark-text transition-colors">{footer.resources.links.howWeWork}</Link></li>
              <li><Link href="/faq" className="hover:text-dark-text transition-colors">{footer.resources.links.faq}</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-dark-text font-semibold uppercase mb-4 tracking-wide text-xs">{footer.company.title}</h6>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-dark-text transition-colors">{footer.company.links.about}</Link></li>
              <li><ScheduleCallButton as="a" fallbackHref="/contact" className="hover:text-dark-text transition-colors no-underline text-inherit cursor-pointer">{footer.company.links.contact}</ScheduleCallButton></li>
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
        </div>
      </div>
    </footer>
  )
}
