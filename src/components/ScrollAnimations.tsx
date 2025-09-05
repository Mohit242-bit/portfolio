'use client'

import { useRef, ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'slideDown'
  delay?: number
  duration?: number
  triggerStart?: string
  className?: string
}

export function ScrollAnimation({ 
  children, 
  animation = 'fadeUp', 
  delay = 0, 
  duration = 1,
  triggerStart = 'top 80%',
  className = '' 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!elementRef.current) return

    // Set initial state based on animation type
    const initialState: any = { opacity: 0 }
    const finalState: any = { opacity: 1, duration, delay, ease: 'power2.out' }

    switch (animation) {
      case 'fadeUp':
        initialState.y = 50
        finalState.y = 0
        break
      case 'slideLeft':
        initialState.x = -100
        finalState.x = 0
        break
      case 'slideRight':
        initialState.x = 100
        finalState.x = 0
        break
      case 'slideDown':
        initialState.y = -50
        finalState.y = 0
        break
      case 'scale':
        initialState.scale = 0.8
        finalState.scale = 1
        break
    }

    // Set initial state
    gsap.set(elementRef.current, initialState)

    // Create scroll trigger animation
    gsap.to(elementRef.current, {
      ...finalState,
      scrollTrigger: {
        trigger: elementRef.current,
        start: triggerStart,
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [animation, delay, duration, triggerStart])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

interface StaggerAnimationProps {
  children: ReactNode[]
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale'
  stagger?: number
  duration?: number
  triggerStart?: string
  className?: string
}

export function StaggerAnimation({
  children,
  animation = 'fadeUp',
  stagger = 0.2,
  duration = 1,
  triggerStart = 'top 80%',
  className = ''
}: StaggerAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const childElements = containerRef.current.children

    // Set initial state based on animation type
    const initialState: any = { opacity: 0 }
    const finalState: any = { opacity: 1, duration, ease: 'power2.out' }

    switch (animation) {
      case 'fadeUp':
        initialState.y = 50
        finalState.y = 0
        break
      case 'slideLeft':
        initialState.x = -100
        finalState.x = 0
        break
      case 'slideRight':
        initialState.x = 100
        finalState.x = 0
        break
      case 'scale':
        initialState.scale = 0.8
        finalState.scale = 1
        break
    }

    // Set initial state for all children
    gsap.set(childElements, initialState)

    // Create staggered animation
    gsap.to(childElements, {
      ...finalState,
      stagger,
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerStart,
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [animation, stagger, duration, triggerStart])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollAnimation
