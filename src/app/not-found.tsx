'use client'

import FuzzyText from '../components/FuzzyText'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <FuzzyText 
            fontSize="clamp(3rem, 15vw, 12rem)"
            fontWeight={900}
            color="#ffffff"
            enableHover={true}
            baseIntensity={0.2}
            hoverIntensity={0.6}
          >
            404
          </FuzzyText>
        </div>
        
        <div className="mb-6">
          <FuzzyText 
            fontSize="clamp(1.5rem, 5vw, 3rem)"
            fontWeight={600}
            color="#ffffff"
            enableHover={true}
            baseIntensity={0.15}
            hoverIntensity={0.4}
          >
            Issues You May Face
          </FuzzyText>
        </div>

        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto leading-relaxed">
          Sometimes things don&apos;t go as planned. This page doesn&apos;t exist, 
          but that&apos;s just one of the many issues you might encounter when working with me.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-white/10 border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Go Back Home
          </Link>
          
          <p className="text-white/60 text-sm">
            Or hover over the text above to see the fuzzy effect in action
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}
