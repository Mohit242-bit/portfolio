'use client'

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ShinyText from './ShinyText';
import StarBorder from './StarBorder';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-900 animate-pulse rounded-lg"></div>,
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32 bg-black">
      {/* Clean black background only */}
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-3xl mx-auto lg:mx-0">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Creating Digital
              <ShinyText text="Experiences" speed={4} className="block" />
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              I&apos;m a passionate web developer specializing in modern, responsive websites that help businesses grow and make a lasting impression online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <StarBorder as="a" href="#projects" className="px-6 sm:px-8 md:px-0 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto text-center" color="#C0C0C0" style={{background: '#000'}}>
                <span className="flex items-center justify-center">
                  View My Work
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </StarBorder>
              <StarBorder as="a" href="#contact" className="px-8 sm:px-8 md:px-2 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto text-center" color="#C0C0C0" style={{background: '#000'}}>
                <span className="flex items-center justify-center">
                  Get In Touch
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03 8-9 8s9 3.582 9 8z" />
                  </svg>
                </span>
              </StarBorder>
            </div>
          </div>

          {/* Right Column - 3D Model Viewer */}
          <div className="hidden lg:block">
            <div className="relative rounded-lg overflow-visible bg-black"
                 style={{ left: '-60px', top: '30px', position: 'relative', width: '600px', height: '600px' }}>
              <ModelViewer
                url="/models/laptop.glb"
                width={600}
                height={600}
                autoRotate={true}
                autoRotateSpeed={0.5}
                enableManualRotation={true}
                enableManualZoom={false}
                defaultZoom={5}
                minZoomDistance={5}
                maxZoomDistance={5}
                environmentPreset="none"
                showScreenshotButton={false}
                placeholderSrc="/pfp.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
