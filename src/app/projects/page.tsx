"use client"

import { ScrollAnimation } from '../../components/ScrollAnimations'
import StarBorder from '../../components/StarBorder'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, reservations, and gallery. Built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "Framer"],
      liveUrl: "https://restaurent-hazel.vercel.app/",
      gradient: "from-orange-600 to-red-600",
      icon: "🍕"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React and Node.js. Complete shopping experience with cart and checkout.",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://ecommerceh.vercel.app/",
      gradient: "from-blue-600 to-purple-600",
      icon: "🛒"
    },
    {
      title: "Digital Marketing Website",
      description: "Professional digital marketing website for agencies and freelancers with SEO optimization.",
      tech: ["Next.js", "TypeScript", "SEO"],
      liveUrl: "https://mohit242-bit.github.io/DigitalMarketingwebsite/",
      gradient: "from-purple-600 to-pink-600",
      icon: "📈"
    },
    {
      title: "Gym Website",
      description: "Complete gym management system with member portal and class booking functionality.",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      gradient: "from-green-600 to-teal-600",
      icon: "🏋️"
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollAnimation animation="fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Projects</h1>
          
          {/* Featured Projects */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hover:shadow-lg transition-all duration-300 group">
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full font-medium border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Link */}
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <StarBorder className="w-full text-center py-3" color="#3B82F6">
                        <span className="text-sm font-medium">View Live Site</span>
                      </StarBorder>
                    </a>
                  )}
                  
                  {project.liveUrl === "#" && (
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <span className="text-gray-400 text-sm">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Professional Projects Link */}
          <div className="text-center">
            <a href="https://github.com/Mohit242-bit" target="_blank" rel="noopener noreferrer">
              <StarBorder className="inline-block px-8 py-4" color="#6B7280">
                <span className="flex items-center gap-3 text-lg font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  See Professional Projects
                </span>
              </StarBorder>
            </a>
            <p className="text-gray-400 text-sm mt-3">View more projects and source code on GitHub</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
