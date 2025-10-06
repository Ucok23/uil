import Link from "next/link";

export default function BlogMode() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors flex items-center space-x-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span>DevBlog</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#latest" className="text-gray-600 hover:text-purple-600 transition-colors">Latest</a>
              <a href="#categories" className="text-gray-600 hover:text-purple-600 transition-colors">Categories</a>
              <a href="#tutorials" className="text-gray-600 hover:text-purple-600 transition-colors">Tutorials</a>
              <a href="#newsletter" className="text-gray-600 hover:text-purple-600 transition-colors">Newsletter</a>
              <div className="flex items-center space-x-2">
                <Link href="/developer-mode" className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Dev</span>
                </Link>
                <Link href="/store-mode" className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Store</span>
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✍️ Tech Insights & Tutorials
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Building Better
            <span className="block text-purple-600">Software Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Practical insights, tutorials, and lessons learned from building real-world applications.
            From code to deployment, let's explore the journey of software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#newsletter"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Subscribe for Updates
            </a>
            <a
              href="#latest"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Read Latest Posts
            </a>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Article</h2>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden text-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">Tutorial</span>
                  <span className="text-purple-200">Oct 5, 2025</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Building Scalable Insurance Management Systems with Next.js
                </h3>
                <p className="text-purple-100 mb-6 text-lg">
                  A comprehensive guide to architecting and building production-ready insurance applications.
                  Learn about database design, API security, and real-time features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">PostgreSQL</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">Authentication</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm">Real-time</span>
                </div>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Read Full Article
                </button>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center p-12">
                <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
                  <svg className="w-24 h-24 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">15 min read</div>
                    <div className="text-purple-200">In-depth tutorial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="latest" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh insights and practical tutorials from the trenches of software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AI Development</span>
                  <span className="text-gray-500 text-sm">Oct 3, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Implementing AI Chat Systems: Lessons from Production
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-world challenges and solutions when building AI-powered customer support systems that handle millions of conversations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">8 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Civic Tech</span>
                  <span className="text-gray-500 text-sm">Oct 1, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Building Public Facility Reporting Apps: A Technical Deep Dive
                </h3>
                <p className="text-gray-600 mb-4">
                  From geolocation services to offline functionality - technical decisions that make civic apps actually useful for communities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">12 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Desktop Apps</span>
                  <span className="text-gray-500 text-sm">Sep 28, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Electron Apps for Business: Performance & Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Building production-ready desktop applications with Electron. Performance optimization, security, and deployment strategies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">10 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Performance</span>
                  <span className="text-gray-500 text-sm">Sep 25, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Next.js Performance: From 3s to 300ms Load Times
                </h3>
                <p className="text-gray-600 mb-4">
                  A detailed case study of optimizing a real-world Next.js application. Image optimization, code splitting, and caching strategies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">15 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 5 */}
            <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Security</span>
                  <span className="text-gray-500 text-sm">Sep 22, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  JWT Authentication in Production: Security Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Implementing secure authentication systems. Token management, refresh strategies, and common security pitfalls to avoid.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">11 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>

            {/* Article 6 */}
            <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Database</span>
                  <span className="text-gray-500 text-sm">Sep 20, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  PostgreSQL vs MongoDB: Choosing the Right Database for Your Project
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-world comparison based on actual project requirements. When to use SQL vs NoSQL with practical examples.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">9 min read</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find articles tailored to your interests and skill level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Frontend Development</h3>
              <p className="text-gray-600 text-sm mb-3">React, Next.js, TypeScript, and modern UI/UX practices.</p>
              <span className="text-blue-600 text-sm font-semibold">12 articles</span>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 hover:border-green-400 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Backend & APIs</h3>
              <p className="text-gray-600 text-sm mb-3">Node.js, databases, authentication, and API design.</p>
              <span className="text-green-600 text-sm font-semibold">8 articles</span>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Desktop Apps</h3>
              <p className="text-gray-600 text-sm mb-3">Electron, cross-platform development, and native integration.</p>
              <span className="text-purple-600 text-sm font-semibold">6 articles</span>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 hover:border-yellow-400 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Performance & DevOps</h3>
              <p className="text-gray-600 text-sm mb-3">Optimization, deployment, monitoring, and scaling.</p>
              <span className="text-yellow-600 text-sm font-semibold">9 articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Step-by-Step Tutorials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete guides to build real applications from scratch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-purple-300 transition-all">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Tutorial Series</span>
                  <span className="text-purple-200">6 parts</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Build a SaaS Application</h3>
                <p className="text-purple-100">Complete Next.js SaaS with authentication, payments, and dashboard.</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Part 1: Project Setup & Authentication</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Part 2: Database Design & API Routes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <span className="text-gray-500">Part 3: Stripe Payment Integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs">4</span>
                    </div>
                    <span className="text-gray-400">Part 4: Dashboard & Analytics</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Tutorial
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-purple-300 transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Tutorial Series</span>
                  <span className="text-blue-200">4 parts</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Chat Application</h3>
                <p className="text-blue-100">Build an intelligent customer support system with OpenAI integration.</p>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Part 1: Chat Interface & WebSockets</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <span className="text-gray-500">Part 2: OpenAI API Integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs">3</span>
                    </div>
                    <span className="text-gray-400">Part 3: Message Classification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-600 text-xs">4</span>
                    </div>
                    <span className="text-gray-400">Part 4: Analytics Dashboard</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Tutorial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest tutorials, insights, and development tips delivered to your inbox.
            No spam, just valuable content for developers.
          </p>

          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-purple-200 text-sm mt-4">
              Join 2,500+ developers. Unsubscribe anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Weekly</div>
              <div className="text-purple-200">New articles and tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-purple-200">Developer subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">No Spam</div>
              <div className="text-purple-200">Only valuable content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span className="text-2xl font-bold">DevBlog</span>
              </div>
              <p className="text-gray-400">
                Practical insights and tutorials for modern software development.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Frontend Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Backend & APIs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desktop Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tutorial Series</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Code Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter Archive</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Business
                </Link>
                <Link href="/developer-mode" className="text-gray-400 hover:text-white transition-colors">
                  Developer
                </Link>
                <Link href="/store-mode" className="text-gray-400 hover:text-white transition-colors">
                  Store
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 DevBlog. All rights reserved. | Made with ❤️ for the developer community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}