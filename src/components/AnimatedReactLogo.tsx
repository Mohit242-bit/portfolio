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
    // Better fallback with proper React logo SVG
    return (
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #61dafb, #21a9c7)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 3s ease infinite'
        }}
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 841.9 595.3" fill="currentColor">
          <g fill="currentColor">
            <path d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3 c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9 c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9V78c-27.5,0-63.5,19.6-99.9,53.6c-36.4-33.8-72.4-53.2-99.9-53.2v22.3 c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8 c3-1.8,6.9-2.6,11.5-2.6V78.5c-8.4,0-16,1.8-22.6,5.6c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3 c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6 c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4 C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9 c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2 c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8 C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8 c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z M421.2,430c-9.3-9.6-18.6-20.3-27.8-32 c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9 c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z M420.7,163c9.3,9.6,18.6,20.3,27.8,32 c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7 c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z M256.2,347.1 c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9 c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7 c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9 C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6 c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1 c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6 C644,312.2,621.1,332.1,585.7,347.1z"/>
            <polygon points="320.8,78.4 320.8,78.4 320.8,78.4"/>
            <circle cx="420.9" cy="296.5" r="45.7"/>
            <polygon points="520.5,78.1 520.5,78.1 520.5,78.1"/>
          </g>
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
