'use client'

import { ScrollAnimation } from './ScrollAnimations'

export default function WorkExperience() {
  const experiences = [
    {
      company: "KraftX",
      logoUrl: "https://www.kraftxworks.com/",
      companyWebsite: "https://www.kraftxworks.com/",
      position: "Software Engineer Intern",
      dateStart: "AUG 2023",
      dateEnd: "Present",
      duration: "1+ years",
      location: "Remote",
      description: "Developed modern web applications, intelligent automation workflows, and database solutions. Led implementation of business process automation that improved efficiency by 60%.",
      highlights: [
        "Developed 15+ production web applications using React.js, Next.js with TypeScript",
        "Implemented end-to-end automation workflows using n8n, reducing manual processes by 60%",
        "Designed and optimized PostgreSQL & MongoDB databases for high-performance applications",
        "Collaborated with teams to deliver scalable, pixel-perfect user experiences"
      ],
      tech: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "n8n", "Automation"],
      gradient: "from-amber-600 to-orange-600"
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 px-4">
              Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Professional experience building scalable solutions and driving technical excellence
            </p>
          </div>
        </ScrollAnimation>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 px-3 sm:px-0">
          {experiences.map((exp, idx) => (
            <ScrollAnimation key={idx} animation="fadeUp">
              <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-800/50 p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden hover:border-gray-700/50 transition-all duration-500">
                
                {/* Gradient Background Effect */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${exp.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Header with Company Info */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 mb-6 sm:mb-8 relative z-10">
                  {/* Company Logo */}
                  <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                    <img 
                      src="/kraftx.png" 
                      alt="KraftX Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Company Details */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-1 sm:mb-2 flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Part of</span>
                    </div>
                    <a 
                      href={exp.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group/link mb-2 sm:mb-3 hover:text-gray-300 transition-colors"
                    >
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white break-words">
                        {exp.company}
                      </h3>
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4 text-xs sm:text-sm text-gray-400">
                      <span className="flex items-center gap-1 sm:gap-2 font-medium">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.dateStart} - {exp.dateEnd}
                      </span>
                      <span className="hidden sm:inline text-gray-700">•</span>
                      <span className="text-gray-400">( {exp.duration} )</span>
                      <span className="hidden sm:inline text-gray-700">•</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Position & Description */}
                <div className="mb-6 sm:mb-8 relative z-10">
                  <h4 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{exp.position}</h4>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-6 sm:mb-8 relative z-10">
                  <h5 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Key Highlights
                  </h5>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm md:text-base">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="relative z-10">
                  <h5 className="text-xs font-bold text-white mb-2 sm:mb-3 uppercase tracking-wider">Technologies</h5>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-500/10 text-blue-300 text-xs rounded-lg font-medium border border-blue-500/20 group-hover:border-blue-500/40 group-hover:bg-blue-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}