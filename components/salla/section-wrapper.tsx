'use client'

import React, { useRef, useEffect, useState } from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-16 scale-95'
      } ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
