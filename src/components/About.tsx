'use client'

import ElectricBorder from './ElectricBorder'
import { ScrollAnimation, StaggerAnimation } from './ScrollAnimations'
import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma, SiMongodb, SiPostgresql, SiGit, SiExpress } from 'react-icons/si'
import StarBorder from './StarBorder'
import ProfileCard from './ProfileCard'

export default function About() {
  
  const skills = [
    { category: "Frontend", items: ["React & Next.js", "TypeScript", "Tailwind CSS", "GSAP Animation"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools & Design", items: ["Figma", "Git & GitHub", "Vercel/Netlify", "Responsive Design"] },
    { category: "Specialties", items: ["Performance Optimization", "SEO", "Accessibility", "3D Web Experiences"] }
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideLeft">
              <span className="inline-block px-4 py-2 bg-gray-700 text-blue-400 rounded-full text-sm font-medium mb-6">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate full-stack developer who brings ideas to life through 
                  clean code and intuitive design. With 3+ years of experience, I specialize 
                  in modern web technologies and creating seamless user experiences.
                </p>
                <p>
                  My focus is simple: build fast, scalable applications that solve real 
                  problems. From concept to deployment, I handle the entire development 
                  process while ensuring every detail serves a purpose.
                </p>
                <p>
                  Let&apos;s collaborate to turn your vision into reality and create something 
                  extraordinary together.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <StarBorder as="a" href="#projects" className="px-6 py-3 font-semibold" color="#C0C0C0" style={{background: '#000'}}>
                  View My Work
                </StarBorder>
                <StarBorder as="a" href="/resume.pdf" className="px-6 py-3 font-semibold" color="#C0C0C0" style={{background: '#000'}}>
                  Download CV
                </StarBorder>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slideRight" className="lg:pl-12">
              <div className="flex flex-col items-center">
                <ProfileCard
                  name="Mohit Rawat"
                  handle="mohitrawat"
                  status="Available for projects"
                  avatarUrl="/pfp.jpg"
                />
                <div className="mt-6 flex flex-col items-center">
                  <div className="text-lg font-semibold text-white">@mohitrawat</div>
                  <button
                    className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Skills Section */}
          <ScrollAnimation animation="fadeUp" className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Skills & Technologies</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                I work with modern technologies to create fast, scalable, and beautiful web experiences.
              </p>
            </div>
            <StaggerAnimation 
              animation="fadeUp" 
              stagger={0.2}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {skills.map((skillGroup, index) => (
                <ElectricBorder
                  key={index}
                  color="#8b5cf6" 
                  speed={1.2} 
                  chaos={0.5} 
                  thickness={1}
                  className="rounded-2xl"
                >
                  <div className="bg-gray-900/90 rounded-2xl p-6 hover:bg-gray-800/90 transition-colors border-0">
                    <h4 className="font-bold text-white mb-4 text-lg">{skillGroup.category}</h4>
                    <ul className="space-y-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="font-medium">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ElectricBorder>
              ))}
            </StaggerAnimation>
            {/* Logo Loop Animation */}
            <div className="mt-12 mb-12" style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={[
                  { node: <SiReact className="text-gray-400" />, title: "React", href: "https://react.dev" },
                  { node: <SiNextdotjs className="text-gray-400" />, title: "Next.js", href: "https://nextjs.org" },
                  { node: <SiTypescript className="text-gray-400" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                  { node: <SiTailwindcss className="text-gray-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                  { node: <SiNodedotjs className="text-gray-400" />, title: "Node.js", href: "https://nodejs.org" },
                  { node: <SiFigma className="text-gray-400" />, title: "Figma", href: "https://figma.com" },
                  { node: <SiMongodb className="text-gray-400" />, title: "MongoDB", href: "https://mongodb.com" },
                  { node: <SiPostgresql className="text-gray-400" />, title: "PostgreSQL", href: "https://postgresql.org" },
                  { node: <SiGit className="text-gray-400" />, title: "Git", href: "https://git-scm.com" },
                  { node: <SiExpress className="text-gray-400" />, title: "Express", href: "https://expressjs.com" },
                ]}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology partners"
              />
            </div>
          </ScrollAnimation>
          
          {/* Stats Section removed per request */}
        </div>
      </div>
    </section>
  )
}
