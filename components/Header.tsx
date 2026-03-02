'use client'

import Link from 'next/link'
import { useState } from 'react'
import { appText } from '@/appText'

const navigation = [
  { name: appText.header.nav.docs, href: '/docs' },
  { name: appText.header.nav.showcase, href: '/showcase' },
  { name: appText.header.nav.blog, href: '/blog' },
  { name: appText.header.nav.pricing, href: '/pricing' },
  { name: appText.header.nav.contact, href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-dark-border bg-dark-bg">
      <nav className="mx-auto max-w-[1120px] px-6 py-8" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="wordmark font-serif text-[1.4rem] tracking-tight text-dark-text no-underline transition-opacity hover:opacity-80"
            aria-label={`${appText.metadata.siteName} home`}
          >
            <span>{appText.header.logo} </span>
            <span className="text-dark-text-muted font-normal">{appText.header.logoSecondary}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium no-underline px-3 py-2 rounded-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="nav-cta no-underline hidden md:inline-flex"
            >
              Schedule a Call
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-dark-text-muted hover:text-dark-text transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? appText.header.mobileMenu.close : appText.header.mobileMenu.open}
          >
            <span className="sr-only">{mobileMenuOpen ? appText.header.mobileMenu.close : appText.header.mobileMenu.open}</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-1 text-sm font-medium text-dark-text-muted no-underline transition-colors hover:text-dark-text"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="nav-cta no-underline w-fit mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
