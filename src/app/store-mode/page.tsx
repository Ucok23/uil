import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Store — Ready-to-Use Apps & Templates",
  description:
    "Buy ready-to-deploy web applications, desktop software, and templates. Save time with professionally built solutions and premium support.",
  openGraph: {
    title: "Digital Store — Ready-to-Use Apps & Templates",
    description:
      "Buy ready-to-deploy web applications, desktop software, and templates. Save time with professionally built solutions and premium support.",
    images: ["/og-image-store.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Store — Ready-to-Use Apps & Templates",
    description:
      "Buy ready-to-deploy web applications, desktop software, and templates. Save time with professionally built solutions and premium support.",
    images: ["/og-image-store.svg"],
  },
};

export default function StoreMode() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors flex items-center space-x-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Store</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors">Products</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Services</a>
              <a href="#templates" className="text-gray-600 hover:text-green-600 transition-colors">Templates</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Support</a>
              <div className="flex items-center space-x-2">
                <Link href="/developer-mode" className="bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Dev</span>
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
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚠️ Store — Under development
            </div>
            <div className="mb-4 text-sm text-gray-700">
              We're still building the store. Sign up for updates or contact us for early access.
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Ready-to-Use
              <span className="block text-green-600">Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Skip the development time. Get professional applications, templates, and tools
              that you can customize and deploy immediately for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-gray-300 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Browse Products (coming soon)
              </a>
              <a
                href="#free-resources"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Free Resources
              </a>
              <a
                href="#contact"
                className="ml-4 inline-block border-2 border-yellow-500 text-yellow-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-white transition-colors"
              >
                Subscribe for Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete applications ready for deployment. No coding required - just customize and launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 - Insurance Management System */}
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-300 hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Insurance Management Suite</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">$2,499</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete insurance provider management system with policy tracking, client management, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Next.js</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">PostgreSQL</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Stripe</span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>✓ Policy management dashboard</li>
                  <li>✓ Client portal with self-service</li>
                  <li>✓ Payment processing integration</li>
                  <li>✓ Reporting and analytics</li>
                  <li>✓ 1 year of updates</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Purchase & Download
                </button>
              </div>
            </div>

            {/* Product 2 - AI Chat System */}
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-300 hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">AI Customer Support Kit</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">$1,899</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Smart customer support system with AI-powered responses, ticket management, and conversation analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">OpenAI</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">MongoDB</span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>✓ AI-powered auto responses</li>
                  <li>✓ Conversation categorization</li>
                  <li>✓ Performance analytics</li>
                  <li>✓ Multi-channel support</li>
                  <li>✓ Setup documentation</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Purchase & Download
                </button>
              </div>
            </div>

            {/* Product 3 - Photobooth Software */}
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-300 hover:shadow-lg transition-all">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Photobooth Pro Software</h3>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-semibold">$999</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional photo booth software with instant printing, custom branding, and event management features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Electron</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">SQLite</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Printer APIs</span>
                </div>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>✓ Camera integration & control</li>
                  <li>✓ Real-time filters & effects</li>
                  <li>✓ Instant printing support</li>
                  <li>✓ Event management tools</li>
                  <li>✓ Custom branding options</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Purchase & Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Custom Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Need something custom? I offer development services with different packages to fit your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$2,999</div>
                <p className="text-gray-600">Perfect for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Simple web application
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mobile responsive design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic database integration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2 weeks delivery
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3 months support
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white p-8 rounded-xl border-2 border-green-500 hover:border-green-600 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$7,999</div>
                <p className="text-gray-600">For growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complex web application
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced database design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  API integrations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  User authentication
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  4 weeks delivery
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  6 months support
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$15,999</div>
                <p className="text-gray-600">For large organizations</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enterprise-grade solution
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scalable architecture
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced security
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  8 weeks delivery
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  12 months support
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Code Templates & Starters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kickstart your projects with professionally built templates and boilerplates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Template 1 */}
            <div className="bg-gray-50 p-6 rounded-xl border hover:border-green-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800">Next.js SaaS Starter</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">$99</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Complete SaaS boilerplate with auth, payments, and dashboard.</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Stripe</span>
              </div>
              <button className="w-full bg-green-600 text-white py-2 px-3 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
                Buy Template
              </button>
            </div>

            {/* Template 2 */}
            <div className="bg-gray-50 p-6 rounded-xl border hover:border-green-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800">React Dashboard Kit</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">$79</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Modern admin dashboard with charts, tables, and components.</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Charts</span>
              </div>
              <button className="w-full bg-green-600 text-white py-2 px-3 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
                Buy Template
              </button>
            </div>

            {/* Template 3 */}
            <div className="bg-gray-50 p-6 rounded-xl border hover:border-green-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800">E-commerce Store</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">$149</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Full e-commerce solution with cart, checkout, and admin.</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">PayPal</span>
              </div>
              <button className="w-full bg-green-600 text-white py-2 px-3 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
                Buy Template
              </button>
            </div>

            {/* Template 4 */}
            <div className="bg-gray-50 p-6 rounded-xl border hover:border-green-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800">Landing Page Pack</h3>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">FREE</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Collection of 5 landing page templates for different industries.</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">HTML</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">CSS</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-3 rounded text-sm font-semibold hover:bg-blue-700 transition-colors">
                Download Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section id="free-resources" className="py-20 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Resources</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Valuable tools and resources to help you get started - completely free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Development Guides</h3>
              <p className="mb-6 opacity-90">
                Step-by-step tutorials for building modern web applications with best practices.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Access Guides
              </button>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Code Snippets</h3>
              <p className="mb-6 opacity-90">
                Reusable code snippets for common functionality in React, Node.js, and more.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Browse Snippets
              </button>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Analyzer</h3>
              <p className="mb-6 opacity-90">
                Free tool to analyze your project requirements and get development estimates.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Try Analyzer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Need Help?</h2>
            <p className="text-xl text-gray-600">
              Get support for your purchases or ask questions about our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">support@your.store.com</span>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-gray-600">Live Chat (9 AM - 5 PM EST)</span>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-gray-600">Documentation & Tutorials</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Purchase Guarantee</h3>
                <p className="mb-4">
                  30-day money-back guarantee on all products. If you're not satisfied, get a full refund.
                </p>
                <p className="text-sm opacity-90">
                  All purchases include lifetime updates and premium support.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Product Support</option>
                    <option>Custom Development Quote</option>
                    <option>Template Customization</option>
                    <option>General Inquiry</option>
                    <option>Refund Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
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
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-2xl font-bold">Store</span>
              </div>
              <p className="text-gray-400">
                Ready-to-use digital solutions for modern businesses.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Applications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desktop Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Resources</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Template Customization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Business
                </Link>
                <Link href="/developer-mode" className="text-gray-400 hover:text-white transition-colors">
                  Developer
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Your Store. All rights reserved. | 30-Day Money Back Guarantee
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}