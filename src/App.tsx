import { useEffect } from 'react'
import AOS from 'aos'
import Gallery from './components/Gallery'
import logo from '../public/urotera.png'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <div className="bg-robot-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-robot-gray-900/95 backdrop-blur-sm border-b border-robot-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md flex items-center justify-center">
                {/* <svg className="w-6 h-6 text-robot-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg> */}
                <img src={logo} alt="Urotera" className="w-10 h-10 rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-wider font-display">UROTERA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-robot-gray-300 hover:text-robot-yellow-500 transition-colors font-medium">
                HOME
              </a>
              <a href="#features" className="text-robot-gray-300 hover:text-robot-yellow-500 transition-colors font-medium">
                FEATURES
              </a>
              <a href="#projects" className="text-robot-gray-300 hover:text-robot-yellow-500 transition-colors font-medium">
                PROJECTS
              </a>
              <a href="#community" className="text-robot-gray-300 hover:text-robot-yellow-500 transition-colors font-medium">
                COMMUNITY
              </a>
              <a href="https://instagram.com/uro.itera" className="bg-robot-yellow-500 text-robot-gray-900 px-6 py-2 rounded-md font-bold text-sm hover:bg-robot-yellow-400 transition-colors">
                JOIN NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-robot-yellow-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display"
            data-aos="fade-up"
          >
            BUILD THE FUTURE
            <br />
            <span className="text-robot-yellow-500">TOGETHER</span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-robot-gray-300 mb-10 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join a thriving community of robotics enthusiasts, engineers, and innovators 
            pushing the boundaries of automation and artificial intelligence.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="bg-robot-yellow-500 text-robot-gray-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-robot-yellow-400 transition-colors">
              Join Community
            </button>
            <button className="bg-robot-gray-700 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-robot-gray-600 transition-colors">
              Explore Projects
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-robot-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-display"
            data-aos="fade-up"
          >
            Why Join <span className="text-robot-yellow-500">Our Community</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-robot-gray-700 p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-robot-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-robot-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Collaborative Network</h3>
              <p className="text-robot-gray-300">
                Connect with thousands of robotics experts, share knowledge, and collaborate on cutting-edge projects.
              </p>
            </div>

            <div 
              className="bg-robot-gray-700 p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-robot-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-robot-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Learning Resources</h3>
              <p className="text-robot-gray-300">
                Access tutorials, workshops, and documentation to level up your robotics skills from beginner to expert.
              </p>
            </div>

            <div 
              className="bg-robot-gray-700 p-8 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-robot-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-robot-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Open Innovation</h3>
              <p className="text-robot-gray-300">
                Contribute to open-source robotics projects and help shape the future of automation technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Stats Section */}
      <section className="bg-robot-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-5xl font-bold text-robot-yellow-500 mb-2 font-display">5,000+</div>
              <div className="text-robot-gray-400 text-lg">Active Members</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl font-bold text-robot-yellow-500 mb-2 font-display">1,200+</div>
              <div className="text-robot-gray-400 text-lg">Projects Shared</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-5xl font-bold text-robot-yellow-500 mb-2 font-display">350+</div>
              <div className="text-robot-gray-400 text-lg">Workshops Hosted</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="text-5xl font-bold text-robot-yellow-500 mb-2 font-display">50+</div>
              <div className="text-robot-gray-400 text-lg">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-robot-yellow-500 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold text-robot-gray-900 mb-6 font-display"
            data-aos="fade-up"
          >
            Ready to Start Building?
          </h2>
          <p 
            className="text-xl text-robot-gray-800 mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join our community today and get access to exclusive resources, events, and networking opportunities.
          </p>
          <button 
            className="bg-robot-gray-900 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-robot-gray-800 transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-robot-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold text-robot-yellow-500 mb-4 font-display">UROTERA</h3>
              <p className="text-robot-gray-400">
                Building the future of robotics, one community member at a time.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-robot-gray-400">
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Members</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Forum</a></li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-robot-gray-400">
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">API</a></li>
              </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-robot-gray-400">
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-robot-yellow-500 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div 
            className="border-t border-robot-gray-700 pt-8 text-center text-robot-gray-400"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p>&copy; 2025 UROTERA Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
