"use client"

import { ScrollAnimation } from '../../components/ScrollAnimations'

export default function AboutPage() {
  const interests = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Fascinated by how AI can transform businesses and solve complex problems. I love experimenting with AI APIs, building intelligent automation workflows, and exploring how machine learning can enhance user experiences."
    },
    {
      title: "Business Process Automation",
      description: "There&apos;s something magical about watching repetitive tasks disappear with smart automation. I use tools like n8n, Zapier, and custom scripts to streamline workflows and free up time for creative work."
    },
    {
      title: "Modern Web Technologies",
      description: "The web evolves so fast, and I love keeping up! From React Server Components to edge computing, I&apos;m always exploring the latest technologies that can make websites faster, smarter, and more engaging."
    },
    {
      title: "Problem-Solving & Innovation",
      description: "Every project is a puzzle waiting to be solved. I enjoy breaking down complex challenges, finding creative solutions, and building tools that make people&apos;s lives easier and more productive."
    }
  ];

  return (
  <section className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 py-6 sm:py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">About Me</h1>
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I&apos;m a passionate web developer and AI enthusiast who believes technology should work for people, not the other way around.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 md:gap-12">
          {/* Personal Introduction */}
          <ScrollAnimation animation="fadeUp">
            <div className="bg-gray-800/30 rounded-2xl p-4 sm:p-8 border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hello, I&apos;m Mohit Rawat
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                <p className="text-sm sm:text-base md:text-lg">
                  I&apos;m a full-stack web developer with a deep passion for artificial intelligence and automation. 
                  What started as curiosity about &quot;how things work&quot; has evolved into a career dedicated to building 
                  intelligent solutions that make businesses more efficient and user experiences more delightful.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  I love the intersection where code meets creativity, where automation meets human needs, and where 
                  AI meets real-world problems. Every project is an opportunity to learn something new and push the 
                  boundaries of what&apos;s possible with modern technology.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* What Drives Me */}
          <ScrollAnimation animation="fadeUp">
            <div className="bg-gray-800/30 rounded-2xl p-4 sm:p-8 border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What Drives Me
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {interests.map((interest, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">{interest.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{interest.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* AI & Technology Philosophy */}
          <ScrollAnimation animation="fadeUp">
            <div className="bg-gray-800/30 rounded-2xl p-4 sm:p-8 border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                My AI Philosophy
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                <p className="text-sm sm:text-base md:text-lg">
                  I believe AI isn&apos;t about replacing humans—it&apos;s about amplifying human potential. The best AI 
                  implementations are invisible to the end user but dramatically improve their experience. Whether 
                  it&apos;s automating tedious tasks, personalizing content, or providing intelligent insights, AI should 
                  feel like magic, not machinery.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  I&apos;m particularly excited about how AI can democratize access to powerful tools. Small businesses 
                  can now have enterprise-level automation, and individual creators can build sophisticated workflows 
                  that were once only possible for large teams.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  The future I&apos;m building toward is one where technology adapts to people, not the other way around. 
                  Where websites understand user intent, where business processes optimize themselves, and where 
                  creative professionals can focus on creativity while AI handles the routine work.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Technical Approach */}
          <ScrollAnimation animation="fadeUp">
            <div className="bg-gray-800/30 rounded-2xl p-4 sm:p-8 border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                How I Work
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                <p className="text-sm sm:text-base md:text-lg">
                  Every project starts with understanding the &quot;why.&quot; I don&apos;t just build features—I solve problems. 
                  My approach combines modern web technologies with intelligent automation to create solutions that 
                  are both powerful and user-friendly.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  I&apos;m constantly experimenting with new AI tools, testing automation workflows, and staying ahead 
                  of the curve on web technologies. This isn&apos;t just professional development—it&apos;s genuine curiosity 
                  about what&apos;s possible when you combine creativity with cutting-edge tech.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Whether I&apos;m building a React application, setting up an n8n workflow, or integrating AI APIs, 
                  I focus on creating systems that are scalable, maintainable, and delightful to use. Good code 
                  should be as elegant as the experience it creates.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Blog/Personal Thoughts */}
          <ScrollAnimation animation="fadeUp">
            <div className="bg-gradient-to-br from-blue-800/10 to-purple-800/10 rounded-2xl p-4 sm:p-8 border border-blue-700/30">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Personal Blog: The Future of Work
              </h2>
              <div className="text-gray-200 leading-relaxed space-y-4 text-lg">
                <p className="text-base sm:text-xl font-semibold text-blue-300">
                  &quot;We&apos;re living through the most exciting time in human history to be a developer.&quot;
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Think about it: we have AI that can write code, automation tools that can replace entire 
                  departments, and web technologies that make the impossible feel routine. But here&apos;s what 
                  excites me most—we&apos;re not just building tools, we&apos;re reshaping how work gets done.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  I recently automated a client&apos;s entire customer onboarding process using n8n, AI content 
                  generation, and smart forms. What used to take their team 3 hours per customer now happens 
                  in 3 minutes. That&apos;s not just efficiency—that&apos;s transformation.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  The companies that will thrive in the next decade aren&apos;t the ones with the most people—they&apos;re 
                  the ones with the smartest systems. And as developers, we get to build those systems. We get 
                  to decide how AI integrates with human creativity, how automation enhances rather than replaces 
                  human judgment.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  This is why I&apos;m so passionate about what I do. Every line of code, every automation workflow, 
                  every AI integration is a small piece of the future we&apos;re building together. And that future? 
                  It&apos;s going to be incredible.
                </p>
                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
                  <p className="text-blue-200 italic text-xs sm:text-base">
                    &quot;The best way to predict the future is to build it. And the best time to start building 
                    is now.&quot; - Me, probably after too much coffee and late-night coding 😄
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Call to Action */}
          <ScrollAnimation animation="fadeUp">
            <div className="text-center py-8 sm:py-12">
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Build Something Amazing Together</h3>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Whether you need a cutting-edge website, intelligent automation, or AI integration, 
                I&apos;d love to help bring your ideas to life.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
