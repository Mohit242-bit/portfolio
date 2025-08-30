'use client'

import { useEffect, useState } from 'react'

interface PerformanceOptimizedProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: 'low' | 'medium' | 'high'
}

export default function PerformanceOptimized({ 
  children, 
  fallback = null, 
  threshold = 'medium' 
}: PerformanceOptimizedProps) {
  const [isHighPerformance, setIsHighPerformance] = useState(true)

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const hasWebGL = !!window.WebGLRenderingContext
      const deviceMemory = (navigator as any).deviceMemory || 4
      const hardwareConcurrency = navigator.hardwareConcurrency || 4

      let performanceScore = 0
      
      // Base score
      if (!isMobile) performanceScore += 2
      if (hasWebGL) performanceScore += 2
      if (deviceMemory >= 4) performanceScore += 1
      if (deviceMemory >= 8) performanceScore += 1
      if (hardwareConcurrency >= 4) performanceScore += 1
      if (hardwareConcurrency >= 8) performanceScore += 1

      const thresholds = {
        low: 2,
        medium: 4,
        high: 6
      }

      setIsHighPerformance(performanceScore >= thresholds[threshold])
    }

    checkPerformance()
  }, [threshold])

  return isHighPerformance ? <>{children}</> : <>{fallback}</>
}

// Hook for performance detection
export function usePerformanceDetection() {
  const [performance, setPerformance] = useState({
    isLowPerformance: false,
    isMobile: false,
    hasWebGL: true,
    deviceMemory: 4,
    hardwareConcurrency: 4
  })

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const hasWebGL = !!window.WebGLRenderingContext
    const deviceMemory = (navigator as any).deviceMemory || 4
    const hardwareConcurrency = navigator.hardwareConcurrency || 4
    
    const isLowPerformance = isMobile || !hasWebGL || deviceMemory < 4 || hardwareConcurrency < 4

    setPerformance({
      isLowPerformance,
      isMobile,
      hasWebGL,
      deviceMemory,
      hardwareConcurrency
    })
  }, [])

  return performance
}
