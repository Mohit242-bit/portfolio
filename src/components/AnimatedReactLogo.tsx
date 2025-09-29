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
    // Better fallback with React logo SVG
    return (
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87-.84 1.87-1.87S13.03 6.37 12 6.37s-1.87.84-1.87 1.87.84 1.87 1.87 1.87zm4.51 1.37c1.68-.86 2.97-2.48 3.35-4.37.37-1.89-.29-3.84-1.68-5.23C16.8.5 15.35-.16 13.79.21c-1.56.37-2.97 1.35-3.86 2.83-.89 1.48-1.21 3.22-.89 4.92.32 1.7 1.21 3.15 2.48 4.1 1.27.95 2.8 1.37 4.35 1.16 1.55-.21 2.97-.95 4.05-2.12.42.27.91.42 1.42.42.68 0 1.32-.27 1.8-.75.48-.48.75-1.12.75-1.8 0-.51-.15-1-.42-1.42.75-.54 1.37-1.21 1.8-1.95.43-.74.66-1.57.66-2.43 0-.68-.13-1.35-.38-1.98-.25-.63-.62-1.2-1.08-1.68-.46-.48-1.01-.85-1.61-1.08C18.35.13 17.68 0 17 0c-.86 0-1.69.23-2.43.66-.74.43-1.41 1.05-1.95 1.8-.42-.27-.91-.42-1.42-.42-.68 0-1.32.27-1.8.75-.48.48-.75 1.12-.75 1.8 0 .51.15 1 .42 1.42C8.32 5.74 7.7 6.41 7.27 7.15c-.43.74-.66 1.57-.66 2.43 0 .68.13 1.35.38 1.98.25.63.62 1.2 1.08 1.68.46.48 1.01.85 1.61 1.08.63.25 1.3.38 1.98.38.86 0 1.69-.23 2.43-.66.74-.43 1.41-1.05 1.95-1.8z"/>
        </svg>
      </div>
    )
  }

  return (
    <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
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
