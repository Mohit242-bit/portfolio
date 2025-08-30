'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function GSAPTest() {
  const containerRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!boxRef.current) return

    // Simple fade up animation
    gsap.fromTo(boxRef.current, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-black">
      <div 
        ref={boxRef} 
        className="w-48 h-48 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold"
      >
        GSAP Test
      </div>
    </div>
  )
}
