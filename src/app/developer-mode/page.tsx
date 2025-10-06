import Link from "next/link";

export default function DeveloperMode() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
              &lt;/Developer&gt;
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tech-stack" className="text-gray-300 hover:text-green-400 transition-colors">Tech Stack</a>
              <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</a>
              <a href="#collaboration" className="text-gray-300 hover:text-green-400 transition-colors">Collaboration</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
              <div className="flex items-center space-x-2">
                <Link href="/store-mode" className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Store</span>
                </Link>
                <Link href="/blog-mode" className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span>Blog</span>
                </Link>
                <Link href="/" className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2a2 2 0 00-2 2z" />
                  </svg>
                  <span>Business</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Developer Mode Activated
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Full-Stack Developer
              <span className="block text-green-400">Looking to Collaborate</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experienced in building scalable web applications and desktop software.
              Open for collaboration on challenging projects, technical partnerships, and knowledge sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#collaboration"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Let's Collaborate
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modern tech stack with focus on performance, scalability, and developer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">React / Next.js</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">TypeScript</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Tailwind CSS</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Electron</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Backend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Node.js / Express</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Python / FastAPI</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">PostgreSQL / MongoDB</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">GraphQL / REST APIs</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">DevOps & Tools</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Docker / Kubernetes</span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AWS / Vercel</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Git / GitHub Actions</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Testing (Jest/Cypress)</span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Deep dive into the technical architecture and implementation details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Insurance Gateway */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Insurance Provider Gateway</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <span className="text-sm text-gray-400">Production</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Microservices architecture handling 10k+ daily transactions with real-time policy management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-sm">PostgreSQL</span>
                  <span className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded text-sm">Redis</span>
                </div>
              </div>
              <div className="p-6 bg-gray-900">
                <h4 className="font-semibold mb-2 text-sm text-gray-400">Key Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• JWT-based authentication with role management</li>
                  <li>• Real-time WebSocket notifications</li>
                  <li>• Automated policy renewal workflows</li>
                  <li>• RESTful API with comprehensive documentation</li>
                </ul>
              </div>
            </div>

            {/* AI Chat System */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">AI Chat Organization Service</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <span className="text-sm text-gray-400">Production</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  ML-powered chat routing system processing 1M+ messages with intelligent categorization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-sm">FastAPI</span>
                  <span className="bg-red-900 text-red-300 px-2 py-1 rounded text-sm">OpenAI API</span>
                </div>
              </div>
              <div className="p-6 bg-gray-900">
                <h4 className="font-semibold mb-2 text-sm text-gray-400">Key Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Natural language processing for intent detection</li>
                  <li>• Real-time sentiment analysis</li>
                  <li>• Automated response generation</li>
                  <li>• Performance analytics dashboard</li>
                </ul>
              </div>
            </div>

            {/* Public Facility Report */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Public Facility Report App</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                    <span className="text-sm text-gray-400">Beta</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  PWA with offline capabilities, geolocation services, and government API integrations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">Express</span>
                  <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-sm">MongoDB</span>
                  <span className="bg-orange-900 text-orange-300 px-2 py-1 rounded text-sm">MapBox</span>
                </div>
              </div>
              <div className="p-6 bg-gray-900">
                <h4 className="font-semibold mb-2 text-sm text-gray-400">Key Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Progressive Web App with offline functionality</li>
                  <li>• Geolocation-based incident reporting</li>
                  <li>• Image upload and compression</li>
                  <li>• Status tracking and notifications</li>
                </ul>
              </div>
            </div>

            {/* Photobooth Desktop App */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Photobooth Desktop App</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    <span className="text-sm text-gray-400">Production</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Cross-platform Electron app with hardware integration for professional photo booth operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">Electron</span>
                  <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-sm">SQLite</span>
                  <span className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded text-sm">Canvas API</span>
                </div>
              </div>
              <div className="p-6 bg-gray-900">
                <h4 className="font-semibold mb-2 text-sm text-gray-400">Key Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Camera hardware integration and control</li>
                  <li>• Real-time image processing and filters</li>
                  <li>• Direct printer communication</li>
                  <li>• Event management and customer database</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Collaborate</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Open to technical partnerships, code reviews, mentoring, and challenging project collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Partnerships</h3>
              <p className="text-gray-300 mb-4">
                Looking for developers to collaborate on complex projects. Particularly interested in fintech, AI, and civic tech.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Full-stack development projects</li>
                <li>• Architecture design and review</li>
                <li>• Performance optimization</li>
                <li>• Security audits</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Knowledge Sharing</h3>
              <p className="text-gray-300 mb-4">
                Active in code reviews, mentoring junior developers, and sharing best practices through technical discussions.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Code review and feedback</li>
                <li>• Technical mentoring</li>
                <li>• Best practices sharing</li>
                <li>• Workshop facilitation</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Open Source</h3>
              <p className="text-gray-300 mb-4">
                Contributing to open source projects and maintaining tools that help the developer community grow.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Contributing to existing projects</li>
                <li>• Maintaining developer tools</li>
                <li>• Creating educational content</li>
                <li>• Community building</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Great?</h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you have a challenging technical problem or want to collaborate on an innovative project, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Technical Proposal
              </a>
              <a
                href="https://calendly.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
              >
                Schedule Tech Discussion
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Let's discuss technical challenges, collaboration opportunities, or share knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Technical Channels</h3>
                <div className="space-y-4">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                    </svg>
                    GitHub Profile
                  </a>

                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                    LinkedIn Profile
                  </a>

                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    tech@your.email.com
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="mb-4">
                  For technical inquiries and collaboration proposals, I typically respond within 4-6 hours.
                </p>
                <p className="text-sm opacity-90">
                  Available for discussions: Monday - Friday, 9 AM - 8 PM EST
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    placeholder="Jane Developer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white">
                    <option>Technical Collaboration</option>
                    <option>Code Review / Consultation</option>
                    <option>Full-Stack Development</option>
                    <option>Mentoring / Knowledge Share</option>
                    <option>Open Source Contribution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Technical Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    placeholder="Describe the technical challenge, tech stack, timeline, and collaboration expectations..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Technical Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 text-green-400">&lt;/Developer&gt;</div>
            <p className="text-gray-400 mb-6">
              Building scalable solutions and fostering developer collaboration.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Business Portfolio
              </Link>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}