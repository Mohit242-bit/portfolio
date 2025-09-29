'use client'

import { useState, useEffect } from 'react';
import ShinyText from './ShinyText';
import StarBorder from './StarBorder';
import { Plasma } from './Plasma';

export default function Hero() {
  const [plasmaColor, setPlasmaColor] = useState('#6366f1');
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Detect low performance devices
    const isLowPerformanceDevice = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isSlowGPU = !window.WebGLRenderingContext;
      const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      return isMobile || isSlowGPU || isLowMemory;
    };

    setIsLowPerformance(isLowPerformanceDevice());

    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    let colorIndex = 0;
    
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setPlasmaColor(colors[colorIndex]);
    }, 8000); // Change color every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32 bg-black">
      {/* Plasma Background - Only on high performance devices */}
      {!isLowPerformance && (
        <div className="absolute inset-0 z-0">
          <Plasma 
            color={plasmaColor} 
            speed={0.3} 
            direction="forward" 
            scale={0.8} 
            opacity={0.4} 
            mouseInteractive={false}
          />
        </div>
      )}
      {/* Fallback gradient for low performance devices */}
      {isLowPerformance && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      )}
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Creating Digital
            <ShinyText text="Experiences" speed={4} className="block" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            I&apos;m a passionate web developer specializing in modern, responsive websites 
            that help businesses grow and make a lasting impression online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-2">
            <StarBorder as="a" href="#projects" className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto" color="#C0C0C0" style={{background: '#000'}}>
              <span className="flex items-center justify-center">
                View My Work
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </StarBorder>
            <StarBorder as="a" href="#contact" className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto" color="#C0C0C0" style={{background: '#000'}}>
              <span className="flex items-center justify-center">
                Get In Touch
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </StarBorder>
          </div>
          {/* Stats panels hidden on initial load. If needed, move these to About or below the fold. */}
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
