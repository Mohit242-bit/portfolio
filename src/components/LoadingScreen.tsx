'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

interface Particle {
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

interface LoadingScreenProps {
  onLoadingComplete?: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const subTextRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const progressTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Generate fewer particles on mobile for better performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const particleCount = isMobile ? 15 : 30; // Reduced from 50
    
    const generatedParticles: Particle[] = Array.from({ length: particleCount }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`
    }))
    
    setParticles(generatedParticles)
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const container = containerRef.current
    const text = textRef.current
    const subText = subTextRef.current
    const path = pathRef.current

    if (!container || !text || !subText || !path) return

    // Calculate the total path length for precise animation
    const pathLength = path.getTotalLength()

    // Set initial states
    gsap.set([text, subText], { opacity: 0, y: 50 })
    gsap.set(path, { 
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    })

    // Create synchronized animation timeline
    const tl = gsap.timeline()

    // Start SVG draw and word animation simultaneously
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.out"
    })
    .to(text, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, 0) // Start at the same time as SVG
    .from(text.children, {
      opacity: 0,
      y: 20,
      rotationX: 90,
      stagger: 0.05,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, 0.3) // Slight delay for character animation
    .to(subText, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 1.5) // Start subtitle animation

    // Progress counter animation - synchronized with main timeline
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // Final exit animation after all animations complete
          setTimeout(() => {
            gsap.to(container, {
              opacity: 0,
              scale: 1.1,
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => {
                setIsLoading(false)
                onLoadingComplete?.()
              }
            })
          }, 500)
          return 100
        }
        return prevProgress + 1.25 // Slower progress to match 3s animation
      })
    }, 37.5) // 3000ms / 80 steps = 37.5ms per step

    return () => {
      clearInterval(progressTimer)
      tl.kill()
    }
  }, [isMounted, onLoadingComplete])

  if (!isLoading) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center overflow-hidden"
      style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}
    >
      {/* Background particles - only render after client mount */}
      {isMounted && (
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="text-center relative z-10 px-4 w-full max-w-lg mx-auto">
        {/* SVG Curvy Line */}
        <div className="mb-8 sm:mb-12">
          <svg 
            width="100%" 
            height="80" 
            viewBox="0 0 400 100" 
            className="mx-auto max-w-sm sm:max-w-md md:max-w-lg"
            style={{ maxWidth: '350px' }}
          >
            <path
              ref={pathRef}
              d="M 10 50 Q 100 10, 200 50 T 390 50"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Title with individual character spans */}
        <div 
          ref={textRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          <span className="inline-block">H</span>
          <span className="inline-block">e</span>
          <span className="inline-block">l</span>
          <span className="inline-block">l</span>
          <span className="inline-block">o</span>
          <span className="inline-block">,</span>
          <span className="inline-block w-4"></span>
          <span className="inline-block">I</span>
          <span className="inline-block">&apos;</span>
          <span className="inline-block">m</span>
          <span className="inline-block w-4"></span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">M</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">o</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">h</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">i</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">t</span>
          <span className="inline-block w-4"></span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">R</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">a</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">w</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">a</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">t</span>
        </div>

        {/* Subtitle */}
        <div 
          ref={subTextRef}
          className="text-sm sm:text-base md:text-lg text-purple-200 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg mx-auto leading-relaxed px-2"
        >
          Welcome to my digital universe where creativity meets precision, 
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          innovation dances with technology, and every pixel tells a story.
        </div>

        {/* Progress indicator */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <div className="w-48 sm:w-56 md:w-64 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
            {progress}%
          </span>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/10 pointer-events-none"></div>
    </div>
  )
}
