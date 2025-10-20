'use client'

import { useState } from 'react'
import { ScrollAnimation, StaggerAnimation } from './ScrollAnimations'
import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma, SiMongodb, SiPostgresql, SiGit, SiExpress, SiJavascript, SiAngular, SiRedux, SiFlutter, SiFirebase, SiThreedotjs, SiBlender, SiMysql, SiDocker, SiVercel } from 'react-icons/si'
import { FaReact, FaAws } from 'react-icons/fa'
import StarBorder from './StarBorder'
import ProfileCard from './ProfileCard'

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState('Web App');

  const techStack = {
    'Web App': [
      { icon: <SiReact className="w-12 h-12" />, name: 'React.js' },
      { icon: <SiNextdotjs className="w-12 h-12" />, name: 'Next.js' },
      { icon: <SiTypescript className="w-12 h-12" />, name: 'TypeScript' },
      { icon: <SiJavascript className="w-12 h-12" />, name: 'JavaScript' },
      { icon: <SiAngular className="w-12 h-12" />, name: 'Angular' },
    ],
    'Mobile App': [
      { icon: <FaReact className="w-12 h-12" />, name: 'React Native' },
      { icon: <SiFlutter className="w-12 h-12" />, name: 'Flutter' },
      { icon: <SiFirebase className="w-12 h-12" />, name: 'Firebase' },
    ],
    'Framework': [
      { icon: <SiNextdotjs className="w-12 h-12" />, name: 'Next.js' },
      { icon: <SiReact className="w-12 h-12" />, name: 'React' },
      { icon: <SiTailwindcss className="w-12 h-12" />, name: 'TailwindCSS' },
      { icon: <SiRedux className="w-12 h-12" />, name: 'Redux' },
    ],
    '3D': [
      { icon: <SiThreedotjs className="w-12 h-12" />, name: 'Three.js' },
      { icon: <SiBlender className="w-12 h-12" />, name: 'Blender' },
    ],
    'Database': [
      { icon: <SiMongodb className="w-12 h-12" />, name: 'MongoDB' },
      { icon: <SiPostgresql className="w-12 h-12" />, name: 'PostgreSQL' },
      { icon: <SiMysql className="w-12 h-12" />, name: 'MySQL' },
      { icon: <SiFirebase className="w-12 h-12" />, name: 'Firebase' },
    ],
    'Cloud & DevOps': [
      { icon: <FaAws className="w-12 h-12" />, name: 'AWS' },
      { icon: <SiDocker className="w-12 h-12" />, name: 'Docker' },
      { icon: <SiVercel className="w-12 h-12" />, name: 'Vercel' },
      { icon: <SiGit className="w-12 h-12" />, name: 'Git' },
    ],
  };

  const tabs = Object.keys(techStack);

  return (
    <div className="w-full">
      {/* Tab Buttons - Simple underline style like reference */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-2 text-base font-medium transition-all duration-300 relative ${
              activeTab === tab
                ? 'text-white'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tech Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {techStack[activeTab as keyof typeof techStack].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-gray-400 group-hover:text-blue-400 transition-colors mb-3">
              {tech.icon}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React & Next.js", "TypeScript", "Tailwind CSS", "GSAP Animation"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools & Design", items: ["Figma", "Git & GitHub", "Vercel/Netlify", "Responsive Design"] },
    { category: "Specialties", items: ["Performance Optimization", "SEO", "Accessibility", "3D Web Experiences"] }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <ScrollAnimation animation="slideLeft">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                About Me
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
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
            </ScrollAnimation>
            
            <ScrollAnimation animation="slideRight" className="lg:pl-12 order-first lg:order-last">
              <div className="flex flex-col items-center mb-8 lg:mb-0">
                <ProfileCard
                  name="Mohit Rawat"
                  handle="mohitrawat"
                  status="Available for projects"
                  avatarUrl="/pfp.jpg"
                />
              </div>
            </ScrollAnimation>
          </div>
          
          {/* Skills Section - Tab Based Layout */}
          <ScrollAnimation animation="fadeUp" className="mt-12 sm:mt-16 md:mt-20">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Tech Stack</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl sm:max-w-2xl mx-auto px-4">
                Powerful technologies I use to build scalable, high-performance solutions
              </p>
            </div>
            <SkillTabs />
            {/* Logo Loop Animation */}
            <div className="mt-16 sm:mt-20 md:mt-24 mb-8 sm:mb-10 md:mb-12" style={{ height: '60px', position: 'relative', overflow: 'hidden' }}>
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
                speed={100}
                direction="left"
                logoHeight={36}
                gap={30}
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
