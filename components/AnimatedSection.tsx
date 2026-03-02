// components/AnimatedSection.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

export function AnimatedSection({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}