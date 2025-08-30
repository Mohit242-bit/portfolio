'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPEnhancedSectionProps {
  children: React.ReactNode
  className?: string
  pin?: boolean
  scrub?: boolean | number
  snap?: boolean
  stagger?: number
}

export default function GSAPEnhancedSection({
  children,
  className = '',
  pin = false,
  scrub = false,
  snap = false,
  stagger = 0.1
}: GSAPEnhancedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current

    // Animate elements with class 'gsap-fade-up'
    const fadeUpElements = section.querySelectorAll('.gsap-fade-up')
    if (fadeUpElements.length > 0) {
      gsap.fromTo(fadeUpElements, 
        { 
          y: 100, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Animate elements with class 'gsap-slide-left'
    const slideLeftElements = section.querySelectorAll('.gsap-slide-left')
    if (slideLeftElements.length > 0) {
      gsap.fromTo(slideLeftElements,
        { 
          x: -100, 
          opacity: 0 
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Animate elements with class 'gsap-slide-right'
    const slideRightElements = section.querySelectorAll('.gsap-slide-right')
    if (slideRightElements.length > 0) {
      gsap.fromTo(slideRightElements,
        { 
          x: 100, 
          opacity: 0 
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Animate elements with class 'gsap-scale'
    const scaleElements = section.querySelectorAll('.gsap-scale')
    if (scaleElements.length > 0) {
      gsap.fromTo(scaleElements,
        { 
          scale: 0.8, 
          opacity: 0 
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: stagger,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Create advanced scrolltrigger if pin or scrub is enabled
    if (pin || scrub) {
      ScrollTrigger.create({
        trigger: section,
        pin: pin,
        start: 'top top',
        end: '+=500',
        scrub: scrub,
        ...(snap && {
          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: 'power1.inOut'
          }
        })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [pin, scrub, snap, stagger])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
