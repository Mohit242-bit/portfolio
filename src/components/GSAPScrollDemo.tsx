'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function GSAPScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true, 
        start: 'top top',
        end: '+=500', 
        scrub: 1, 
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 3 }, 
          delay: 0.2, 
          ease: 'power1.inOut' 
        }
      }
    })

    // Add animations and labels to the timeline
    tl.addLabel('start')
      .from('.gsap-demo-text', { scale: 0.3, rotation: 45, autoAlpha: 0 })
      .addLabel('color')
      .from('.gsap-demo-box', { backgroundColor: '#28a92b' })
      .addLabel('spin')
      .to('.gsap-demo-box', { rotation: 360 })
      .addLabel('reset')
      .to('.gsap-demo-text', {
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        color: '#fff',
        duration: 0.6,
        ease: 'power2.out'
      })
      .addLabel('end')

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">GSAP ScrollTrigger Demo</h2>
          <p className="text-lg text-gray-300">
            Scroll down to see advanced pinning, scrubbing, and snapping animations
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="gsap-demo-box w-64 h-64 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <p className="gsap-demo-text text-white text-xl font-bold text-center">
              Scroll to see<br />
              the magic!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
