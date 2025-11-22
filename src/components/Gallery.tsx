import { useState } from 'react'

interface GalleryItem {
  id: number
  title: string
  description: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Autonomous Navigation Robot',
    description: 'AI-powered robot with advanced obstacle detection and path planning capabilities.',
    category: 'Automation',
  },
  {
    id: 2,
    title: 'Robotic Arm Assembly',
    description: 'Precision 6-axis robotic arm for industrial manufacturing and assembly tasks.',
    category: 'Industrial',
  },
  {
    id: 3,
    title: 'Swarm Intelligence System',
    description: 'Coordinated multi-robot system demonstrating collective behavior and task distribution.',
    category: 'Research',
  },
  {
    id: 4,
    title: 'Humanoid Assistant',
    description: 'Social robot designed for human interaction, customer service, and education.',
    category: 'Service',
  },
  {
    id: 5,
    title: 'Agricultural Drone',
    description: 'Autonomous drone for crop monitoring, precision spraying, and field analysis.',
    category: 'Agriculture',
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="bg-robot-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-display"
          data-aos="fade-up"
        >
          Featured <span className="text-robot-yellow-500">Projects</span>
        </h2>
        <p 
          className="text-center text-robot-gray-400 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore innovative robotics projects built by our community members
        </p>

        {/* Gallery Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Main Slide */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="min-w-full">
                  <div className="bg-robot-gray-800 rounded-lg p-8 md:p-12">
                    {/* Placeholder Image Area */}
                    <div className="bg-robot-gray-700 rounded-lg mb-6 h-64 md:h-96 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-24 h-24 mx-auto text-robot-yellow-500 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                        <div className="text-robot-gray-500 text-sm">Project #{item.id}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <span className="inline-block bg-robot-yellow-500 text-robot-gray-900 px-3 py-1 rounded-md text-xs font-bold mb-4">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 font-display">
                        {item.title}
                      </h3>
                      <p className="text-robot-gray-300 text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-robot-gray-700 hover:bg-robot-yellow-500 text-white hover:text-robot-gray-900 p-3 rounded-full transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-robot-gray-700 hover:bg-robot-yellow-500 text-white hover:text-robot-gray-900 p-3 rounded-full transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-robot-yellow-500 w-8'
                  : 'bg-robot-gray-600 hover:bg-robot-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

