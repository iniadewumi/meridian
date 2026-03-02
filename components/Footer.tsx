// components/Footer.tsx – structure matches meridian-so.html (single line, centered)
import { appText } from '@/appText'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-7 text-center text-[13px] text-dark-text-muted">
      <div className="mx-auto max-w-[820px] px-6">
        {appText.footer.copyright}
      </div>
    </footer>
  )
}
