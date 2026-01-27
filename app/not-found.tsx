import Link from 'next/link'
import { appText } from '@/appText'

export default function NotFound() {
  const { notFound } = appText
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">{notFound.code}</h1>
        <h2 className="text-3xl font-bold mb-4">{notFound.title}</h2>
        <p className="text-lg text-dark-text-secondary mb-8 max-w-md mx-auto">
          {notFound.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary rounded-md inline-flex items-center justify-center"
          >
            {notFound.backToHome}
          </Link>
          <Link
            href="/docs"
            className="btn-secondary rounded-md inline-flex items-center justify-center"
          >
            {notFound.browseDocs}
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-12 border-t border-dark-border">
          <p className="text-sm text-dark-text-muted mb-4">{notFound.helpfulLinks.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/docs" className="text-dark-text-secondary hover:text-white transition-colors">
              {notFound.helpfulLinks.links.docs}
            </Link>
            <Link href="/showcase" className="text-dark-text-secondary hover:text-white transition-colors">
              {notFound.helpfulLinks.links.showcase}
            </Link>
            <Link href="/pricing" className="text-dark-text-secondary hover:text-white transition-colors">
              {notFound.helpfulLinks.links.pricing}
            </Link>
            <Link href="/blog" className="text-dark-text-secondary hover:text-white transition-colors">
              {notFound.helpfulLinks.links.blog}
            </Link>
            <Link href="/contact" className="text-dark-text-secondary hover:text-white transition-colors">
              {notFound.helpfulLinks.links.contact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
