'use client'

import FuzzyText from '../../components/FuzzyText'

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <FuzzyText
          fontSize="clamp(2rem, 8vw, 6rem)"
          fontWeight={900}
          color="#ffffff"
          enableHover={true}
          baseIntensity={0.15}
          hoverIntensity={0.4}
        >
          404 - Error : Not Found
        </FuzzyText>
      </div>
    </div>
  )
}
