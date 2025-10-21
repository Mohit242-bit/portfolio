"use client"

import { ScrollAnimation, StaggerAnimation } from '../../components/ScrollAnimations'
import StarBorder from '../../components/StarBorder'

export default function ProjectsPage() {
  // All projects in one unified list
  const allProjects = [
    {
      title: "Morphoverse",
      description: "Innovative web platform with advanced UI/UX and interactive features. Built with modern technologies for an immersive user experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://morphoverse-v2.vercel.app/",
      codeUrl: "https://github.com/Mohit242-bit/morphoverse",
      year: "2024",
      featured: true
    },
    {
      title: "Scanezy",
      description: "Advanced scanning and document processing application with real-time analysis and KYC verification capabilities.",
      tech: ["TypeScript", "React", "Computer Vision"],
      liveUrl: "https://scane-kycs.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/scane",
      year: "2024",
      featured: true
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and gallery. Built with Next.js and Tailwind CSS for optimal performance.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://restaurent-hazel.vercel.app/",
      codeUrl: "https://github.com/Mohit242-bit/restaurent",
      year: "2023",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with complete shopping experience. Features cart management, checkout process, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://ecommerceh.vercel.app/",
      codeUrl: "https://github.com/Mohit242-bit/ecommerce",
      year: "2023",
      featured: true
    },
    {
      title: "Morpho - Design System",
      description: "Modern design system and component library with TypeScript and Storybook integration for consistent UI development.",
      tech: ["TypeScript", "React", "Storybook"],
      liveUrl: "https://morpho-beryl.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/morpho",
      year: "2024",
      featured: false
    },
    {
      title: "Digital Marketing Website",
      description: "Professional digital marketing website for agencies and freelancers with comprehensive SEO optimization.",
      tech: ["Next.js", "TypeScript", "SEO"],
      liveUrl: "https://mohit242-bit.github.io/DigitalMarketingwebsite/",
      codeUrl: "https://github.com/Mohit242-bit/DigitalMarketingwebsite",
      year: "2023",
      featured: false
    },
    {
      title: "SIH - Government Solution",
      description: "Smart India Hackathon project - innovative solution for government challenges with scalable architecture.",
      tech: ["TypeScript", "Next.js", "PostgreSQL"],
      liveUrl: "https://sih-theta-two.vercel.app",
      codeUrl: "https://github.com/Mohit242-bit/SIH",
      year: "2023",
      featured: false
    },
    {
      title: "Blog Summarizer Extension",
      description: "Chrome extension that uses AI to automatically summarize articles and blog posts with advanced NLP algorithms.",
      tech: ["JavaScript", "Chrome API", "NLP"],
      liveUrl: "https://github.com/Mohit242-bit/auto-blog-summarizer",
      codeUrl: "https://github.com/Mohit242-bit/auto-blog-summarizer",
      year: "2023",
      featured: false
    },
    {
      title: "AI for Climate",
      description: "Machine learning project for climate change analysis and prediction using advanced data science techniques.",
      tech: ["Python", "ML", "Data Science"],
      liveUrl: "https://github.com/Mohit242-bit/aiforclimate",
      codeUrl: "https://github.com/Mohit242-bit/aiforclimate",
      year: "2023",
      featured: false
    },
    {
      title: "Spotify Clone",
      description: "Full-featured music streaming application cloning Spotify's core functionality with audio playback capabilities.",
      tech: ["JavaScript", "HTML/CSS", "Audio API"],
      liveUrl: "https://github.com/Mohit242-bit/spotifyclone",
      codeUrl: "https://github.com/Mohit242-bit/spotifyclone",
      year: "2022",
      featured: false
    },
    {
      title: "PDF AI Editor",
      description: "Intelligent PDF editor using Google's Gemini AI for smart document editing and processing.",
      tech: ["Python", "Gemini API", "PDF"],
      liveUrl: "https://github.com/Mohit242-bit/gemini-pdf-editor",
      codeUrl: "https://github.com/Mohit242-bit/gemini-pdf-editor",
      year: "2023",
      featured: false
    }
  ];

  return (
    <section className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 text-gray-300 rounded-lg text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-gray-700">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              My Work
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-3 sm:px-4 mt-3 sm:mt-6">
              A collection of projects showcasing modern web development, scalability, and engineering excellence.
            </p>
          </div>

          {/* All Projects in Sequential Order */}
          <StaggerAnimation 
            animation="fadeUp" 
            stagger={0.1}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {allProjects.map((project: any, index: number) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-lg sm:rounded-2xl overflow-hidden border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-700/50"
              >
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  {/* Header with Title and Year */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white group-hover:text-gray-200 transition-colors break-words">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="inline-block mt-1.5 sm:mt-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800/60 text-gray-300 text-xs font-medium rounded-full border border-gray-700/50">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500 flex-shrink-0">
                      {project.year}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex} 
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800/50 text-gray-300 text-xs rounded-lg font-medium border border-gray-700/50 hover:border-gray-600/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/60 hover:bg-gray-700/60 text-white text-xs sm:text-sm font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 text-center flex-1 sm:flex-none"
                    >
                      {project.liveUrl.includes('github') ? 'View on GitHub' : 'Live Demo'}
                    </a>
                    {!project.liveUrl.includes('github') && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/60 hover:bg-gray-700/60 text-white text-xs sm:text-sm font-medium rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 text-center flex-1 sm:flex-none"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </StaggerAnimation>

          {/* Call to Action */}
          <div className="mt-10 sm:mt-16 md:mt-20 lg:mt-24 text-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-5 sm:mb-8 px-4">
              Want to see more? Check out my GitHub profile for additional projects and contributions.
            </p>
            <a href="https://github.com/Mohit242-bit" target="_blank" rel="noopener noreferrer">
              <button className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gray-800/60 hover:bg-gray-700/60 text-white text-base sm:text-lg font-semibold rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View My GitHub
                </span>
              </button>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
