'use client'

import { useEffect } from 'react'
import { appText } from '@/appText'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error tracking service
    console.error('Application error:', error)
  }, [error])

  const { error: errorText } = appText

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">{errorText.title}</h1>
        <h2 className="text-2xl font-bold mb-4">{errorText.subtitle}</h2>
        <p className="text-dark-text-secondary mb-8">
          {errorText.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary rounded-md"
          >
            {errorText.tryAgain}
          </button>
          <a
            href="/"
            className="btn-secondary rounded-md inline-flex items-center justify-center"
          >
            {errorText.backToHome}
          </a>
        </div>

        {/* Error details for development */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-sm text-dark-text-muted cursor-pointer hover:text-white transition-colors">
              {errorText.errorDetails.title}
            </summary>
            <pre className="mt-4 p-4 bg-dark-surface border border-dark-border rounded text-xs overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
