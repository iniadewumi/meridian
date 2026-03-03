'use client'

import { createContext, useEffect, useRef, useState } from 'react'

const CAL_EMBED_URL = 'https://app.cal.com/embed/embed.js'
const CAL_ORIGIN = 'https://app.cal.com'
const CAL_NAMESPACE = '30min'
const CAL_LINK = 'olasubomi-ini-adewumi-lvbbku/30min'

type CalQueueFn = ((...args: unknown[]) => void) & {
  q?: unknown[]
  version?: string
}

declare global {
  interface Window {
    Cal?: CalQueueFn & {
      loaded?: boolean
      ns?: Record<string, CalQueueFn>
    }
  }
}

/** True once window.Cal is defined so buttons can safely use data-cal-* without triggering embed.js before Cal exists */
export const CalReadyContext = createContext(false)

function ensureCalSnippet() {
  if (typeof window === 'undefined') return undefined
  if (window.Cal) return window.Cal

  ;(function (C: Window, A: string, L: string) {
    const queuePush = (queueOwner: { q?: unknown[] }, args: unknown[]) => {
      queueOwner.q = queueOwner.q || []
      queueOwner.q.push(args)
    }
    const doc = C.document

    C.Cal =
      C.Cal ||
      function (...args: unknown[]) {
        const cal = C.Cal as CalQueueFn & {
          loaded?: boolean
          ns?: Record<string, CalQueueFn>
          q?: unknown[]
        }

        if (!cal.loaded) {
          cal.ns = cal.ns || {}
          cal.q = cal.q || []
          doc.head.appendChild(doc.createElement('script')).src = A
          cal.loaded = true
        }

        if (args[0] === L) {
          const namespace = args[1]
          const nsQueueFn: CalQueueFn = (...nsArgs: unknown[]) => {
            queuePush(nsQueueFn, nsArgs)
          }
          nsQueueFn.q = nsQueueFn.q || []

          if (typeof namespace === 'string') {
            const namespaces = cal.ns || (cal.ns = {})
            namespaces[namespace] = namespaces[namespace] || nsQueueFn
            queuePush(namespaces[namespace], args)
            queuePush(cal, ['initNamespace', namespace])
          } else {
            queuePush(cal, args)
          }
          return
        }

        queuePush(cal, args)
      }
  })(window, CAL_EMBED_URL, 'init')

  return window.Cal
}

function initCalFloatingButton() {
  const cal = ensureCalSnippet()
  if (!cal) return false

  try {
    cal('init', CAL_NAMESPACE, { origin: CAL_ORIGIN })
    if (typeof cal.version !== 'string') return false

    const namespaceApi = cal.ns?.[CAL_NAMESPACE]
    if (typeof namespaceApi !== 'function') return false

    namespaceApi('floatingButton', {
      calLink: CAL_LINK,
      config: {
        layout: 'month_view',
        useSlotsViewOnSmallScreen: 'true',
      },
    })
    namespaceApi('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
    return true
  } catch {
    return false
  }
}

type CalFloatingEmbedProps = { children?: React.ReactNode }

export default function CalFloatingEmbed({ children }: CalFloatingEmbedProps) {
  const inited = useRef(false)
  const [calReady, setCalReady] = useState(false)

  useEffect(() => {
    if (inited.current) return

    let attempts = 0
    const maxAttempts = 80

    const runInit = () => {
      if (inited.current) return true
      if (initCalFloatingButton()) {
        inited.current = true
        setCalReady(true)
        return true
      }
      return false
    }

    if (runInit()) return

    const intervalId = window.setInterval(() => {
      attempts += 1
      if (runInit() || attempts >= maxAttempts) {
        window.clearInterval(intervalId)
      }
    }, 100)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return <CalReadyContext.Provider value={calReady}>{children}</CalReadyContext.Provider>
}
