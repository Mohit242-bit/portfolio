'use client'

import { ScrollAnimation, StaggerAnimation } from './ScrollAnimations'
import ElectricBorder from './ElectricBorder'

export default function Experience() {
  const experiences = [
    {
      company: "Kraftx Works",
      position: "Full-Stack Web Developer",
      duration: "Jan 2023 - Present",
      description: "Worked as a full-stack developer building modern web applications for various clients. Specialized in Next.js, React, and Node.js backend development.",
      responsibilities: [
        "Developed and maintained multiple client websites using React and Next.js",
        "Built responsive and performant web applications with advanced CSS animations",
        "Implemented REST APIs and database solutions using Node.js and MongoDB",
        "Collaborated with designers and project managers to deliver client projects on time",
        "Optimized web applications for performance and SEO"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "GSAP", "Tailwind CSS"],
      icon: "🚀"
    },
    {
      company: "Self-Employed",
      position: "Freelance Web Developer",
      duration: "2022 - Present",
      description: "Providing web development services to startups and small businesses. Focus on creating custom solutions tailored to client needs.",
      responsibilities: [
        "Designed and developed custom websites and web applications",
        "Managed full project lifecycle from concept to deployment",
        "Implemented modern design patterns and best practices",
        "Ensured cross-browser compatibility and mobile responsiveness",
        "Provided ongoing maintenance and support to clients"
      ],
      technologies: ["React", "Next.js", "GSAP", "Three.js", "Tailwind CSS", "Firebase", "Vercel"],
      icon: "💼"
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fadeUp" className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              My Professional Journey
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
              I have worked on diverse projects and collaborated with talented teams to create innovative digital solutions.
            </p>
          </ScrollAnimation>

          <StaggerAnimation
            animation="fadeUp"
            stagger={0.3}
            className="space-y-8 sm:space-y-12"
          >
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                  {/* Timeline dot - visible on lg and up */}
                  <div className="hidden lg:flex lg:col-span-1 justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
                      {index < experiences.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent mt-4"></div>
                      )}
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="lg:col-span-11">
                    <ElectricBorder
                      color="#3b82f6"
                      speed={0.8}
                      chaos={0.3}
                      thickness={1}
                      className="rounded-2xl w-full"
                    >
                      <div className="bg-gray-900/90 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-gray-800/90 transition-colors border-0 h-full">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                          <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{exp.company}</h3>
                            <p className="text-base sm:text-lg text-blue-400 font-semibold mb-1">{exp.position}</p>
                            <p className="text-xs sm:text-sm text-gray-400">{exp.duration}</p>
                          </div>
                          <div className="text-3xl sm:text-4xl">{exp.icon}</div>
                        </div>

                        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-6 sm:mb-8">
                          <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Key Responsibilities:</h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start text-xs sm:text-sm md:text-base text-gray-300">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Technologies:</h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full font-medium border border-blue-500/30 hover:border-blue-500/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ElectricBorder>
                  </div>
                </div>
              </div>
            ))}
          </StaggerAnimation>
        </div>
      </div>
    </section>
  )
}
