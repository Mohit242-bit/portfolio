'use client'

import { useEffect, useState } from 'react'
import MetallicPaint from './MetallicPaint'

// Create a simple React logo as ImageData
function createReactLogoImageData(): ImageData {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const size = 100
  
  canvas.width = size
  canvas.height = size
  
  // Clear with white background
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, size, size)
  
  // Draw React logo shape
  ctx.fillStyle = 'black'
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 3
  
  const centerX = size / 2
  const centerY = size / 2
  
  // Draw center circle
  ctx.beginPath()
  ctx.arc(centerX, centerY, 6, 0, Math.PI * 2)
  ctx.fill()
  
  // Draw orbital ellipses
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, 35, 15, 0, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, 35, 15, Math.PI / 3, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, 35, 15, -Math.PI / 3, 0, Math.PI * 2)
  ctx.stroke()
  
  return ctx.getImageData(0, 0, size, size)
}

export default function AnimatedReactLogo() {
  const [imageData, setImageData] = useState<ImageData | undefined>()

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const logoData = createReactLogoImageData()
      setImageData(logoData)
    }
  }, [])

  if (!imageData) {
    return (
      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <span className="text-white text-sm font-bold">R</span>
      </div>
    )
  }

  return (
    <div className="w-10 h-10 rounded-lg overflow-hidden">
      <MetallicPaint 
        imageData={imageData}
        params={{
          patternScale: 1.5,
          refraction: 0.02,
          edge: 1,
          patternBlur: 0.01,
          liquid: 0.05,
          speed: 0.4,
        }}
      />
    </div>
  )
}
