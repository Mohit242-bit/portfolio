'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from '@/components/Hero'
import ProjectsGSAP from '@/components/ProjectsGSAP'
import About from '@/components/About'
import DrawSVGSection from '@/components/DrawSVGSection'
import MagicBento from '@/components/MagicBento'
import { useRouter } from 'next/navigation'

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
          <DrawSVGSection className="min-h-screen">
            <About />
          </DrawSVGSection>
          <ProjectsGSAP />
          <MagicBento 
            onIssuesClick={handleIssuesClick}
          />
      </main>
    </>
  )
}
