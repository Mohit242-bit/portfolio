'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AdvancedScrollTriggerProps {
  children: React.ReactNode
  trigger?: string
  pin?: boolean
  start?: string
  end?: string
  scrub?: number | boolean
  snap?: boolean
  snapTo?: 'labels' | 'labelsDirectional' | number | number[]
  snapDuration?: { min: number; max: number }
  snapDelay?: number
  snapEase?: string
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
  className?: string
}

export default function AdvancedScrollTrigger({
  children,
  trigger,
  pin = false,
  start = 'top center',
  end = 'bottom center',
  scrub = false,
  snap = false,
  snapTo = 'labels',
  snapDuration = { min: 0.2, max: 3 },
  snapDelay = 0.2,
  snapEase = 'power1.inOut',
  onEnter,
  onLeave,
  onEnterBack,
  onLeaveBack,
  className = '',
}: AdvancedScrollTriggerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline>()

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const triggerElement = trigger ? container.querySelector(trigger) : container

    // Create timeline with ScrollTrigger
    const scrollTriggerConfig: any = {
      trigger: triggerElement || container,
      pin: pin,
      start: start,
      end: end,
      scrub: scrub,
      onEnter: onEnter,
      onLeave: onLeave,
      onEnterBack: onEnterBack,
      onLeaveBack: onLeaveBack,
      // Enable markers for development (remove in production)
      // markers: true,
    }

    if (snap) {
      scrollTriggerConfig.snap = {
        snapTo: snapTo,
        duration: snapDuration,
        delay: snapDelay,
        ease: snapEase
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: scrollTriggerConfig
    })

    timelineRef.current = tl

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [trigger, pin, start, end, scrub, snap, snapTo, snapDuration, snapDelay, snapEase, onEnter, onLeave, onEnterBack, onLeaveBack])

  // Expose timeline for external animations
  const addAnimation = (animation: gsap.TweenVars, target: string | Element) => {
    if (timelineRef.current) {
      timelineRef.current.to(target, animation)
    }
  }

  const addLabel = (label: string) => {
    if (timelineRef.current) {
      timelineRef.current.addLabel(label)
    }
  }

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
