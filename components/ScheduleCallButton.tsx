'use client'

import { useContext } from 'react'
import { CalReadyContext } from '@/components/CalFloatingEmbed'

const CAL_LINK = 'olasubomi-ini-adewumi-lvbbku/30min'
const CAL_NAMESPACE = '30min'
const CAL_ORIGIN = 'https://app.cal.com'

type ScheduleCallButtonProps = {
  children: React.ReactNode
  className?: string
  /** Use when you need link semantics (e.g. inside nav); still opens Cal modal, no navigation */
  as?: 'button' | 'a'
  /** Fallback URL if modal cannot be opened */
  fallbackHref?: string
  /** If fallback navigation should open in a new tab */
  fallbackNewTab?: boolean
  /** Called when the element is clicked (e.g. close mobile menu) */
  onClick?: () => void
}

/**
 * Button/link that opens the Cal.com booking modal when clicked.
 * Uses data-cal-link only after Cal is loaded to avoid "Cal is not defined" from embed.js.
 *
 * Used in: Header (desktop + mobile), Hero, Home final CTA, Showcase CTA, About careers,
 * Pricing (all 3 tier CTAs + enterprise CTA), Footer Contact.
 */
export default function ScheduleCallButton({
  children,
  className,
  as = 'button',
  fallbackHref = `https://app.cal.com/${CAL_LINK}`,
  fallbackNewTab = false,
  onClick,
}: ScheduleCallButtonProps) {
  const calReady = useContext(CalReadyContext)
  const calGlobal = typeof window !== 'undefined' ? (window as Window).Cal : undefined

  const openCalModal = () => {
    if (!calReady || !calGlobal || typeof calGlobal.version !== 'string') return false

    try {
      const calNamespaceApi = calGlobal.ns?.[CAL_NAMESPACE]
      if (typeof calNamespaceApi === 'function') {
        calNamespaceApi('modal', { calLink: CAL_LINK })
        return true
      }
      if (typeof calGlobal === 'function') {
        calGlobal('modal', {
          calLink: CAL_LINK,
          calOrigin: CAL_ORIGIN,
        })
        return true
      }
    } catch {
      return false
    }
    return false
  }

  const handleClick = (e: React.MouseEvent) => {
    onClick?.()

    if (as === 'a') {
      e.preventDefault()
    }

    if (openCalModal()) {
      return
    }

    if (fallbackHref) {
      if (fallbackNewTab) {
        window.open(fallbackHref, '_blank', 'noopener,noreferrer')
      } else {
        window.location.assign(fallbackHref)
      }
    }
  }

  const shouldAttachCalData = calReady

  const calDataAttrs = shouldAttachCalData
    ? {
        'data-cal-link': CAL_LINK,
        'data-cal-namespace': CAL_NAMESPACE,
        'data-cal-origin': CAL_ORIGIN,
      }
    : {}

  if (as === 'a') {
    const isInternal = fallbackHref.startsWith('/')
    const target = fallbackNewTab && !isInternal ? '_blank' : undefined
    const rel = target ? 'noopener noreferrer' : undefined
    return (
      <a
        href={fallbackHref}
        target={target}
        rel={rel}
        className={className}
        onClick={handleClick}
        {...calDataAttrs}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={handleClick} {...calDataAttrs}>
      {children}
    </button>
  )
}
