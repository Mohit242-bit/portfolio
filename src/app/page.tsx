'use client'

import { useState, useEffect, Suspense, lazy } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from '@/components/Hero'
import { useRouter } from 'next/navigation'

// Lazy load heavy components
const About = lazy(() => import('@/components/About'))
const ProjectsGSAP = lazy(() => import('@/components/ProjectsGSAP'))
const DrawSVGSection = lazy(() => import('@/components/DrawSVGSection'))
const MagicBento = lazy(() => import('@/components/MagicBento'))

export default function Home() {
  const [showLoading, setShowLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Show loading screen only on first site load
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (hasVisited) {
      setShowLoading(false)
    } else {
      sessionStorage.setItem('hasVisited', 'true')
      const timer = setTimeout(() => setShowLoading(false), 3500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleIssuesClick = () => {
    router.push('/issues')
  }

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <main className={`min-h-screen bg-black ${showLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
          <DrawSVGSection className="min-h-screen">
            <About />
          </DrawSVGSection>
          <ProjectsGSAP />
          <MagicBento 
            onIssuesClick={handleIssuesClick}
          />
        </Suspense>
      </main>
    </>
  )
}
