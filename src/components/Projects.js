'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import projectsData from '../data/projects.json'
import { useTheme } from '../contexts/ThemeContext'

const Projects = () => {
  const { isDark } = useTheme()
  const projects = projectsData.projects
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [dragStart, setDragStart] = useState(null)
  const containerRef = useRef(null)

  // Get items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3 // xl screens
      if (window.innerWidth >= 768) return 2  // md screens
      return 1 // mobile
    }
    return 3 // default for SSR
  }

  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(getItemsPerView())
    }

    if (typeof window !== 'undefined') {
      updateItemsPerView()
      window.addEventListener('resize', updateItemsPerView)
      return () => window.removeEventListener('resize', updateItemsPerView)
    }
  }, [])

  const maxIndex = Math.max(0, projects.length - itemsPerView)

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating, maxIndex])

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => Math.max(prev - 1, 0))
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating])

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setDragStart(e.clientX)
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!dragStart) return
    
    const dragDistance = e.clientX - dragStart
    const threshold = 50 // minimum distance to trigger slide
    
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        handlePrev()
      } else if (dragDistance < 0 && currentIndex < maxIndex) {
        handleNext()
      }
      setDragStart(null)
    }
  }, [dragStart, currentIndex, maxIndex, handlePrev, handleNext])

  const handleMouseUp = useCallback(() => {
    setDragStart(null)
  }, [])

  useEffect(() => {
    if (!dragStart) return

    const handleGlobalMouseMove = (e) => handleMouseMove(e)
    const handleGlobalMouseUp = () => handleMouseUp()

    document.addEventListener('mousemove', handleGlobalMouseMove)
    document.addEventListener('mouseup', handleGlobalMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [dragStart, handleMouseMove, handleMouseUp])

  const getVisibleProjects = () => {
    return projects.slice(currentIndex, currentIndex + itemsPerView)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A showcase of my recent work and side projects, demonstrating various technologies and design patterns
          </p>
        </motion.div>

        {/* Projects Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              disabled={currentIndex === 0 || isAnimating}
              className={`p-3 rounded-full glass transition-all duration-300 ${
                currentIndex === 0 || isAnimating
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-purple-500/20 hover:scale-110'
              }`}
            >
              <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            </motion.button>
            
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <motion.div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'bg-purple-500 w-8' 
                      : `w-2 ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={currentIndex >= maxIndex || isAnimating}
              className={`p-3 rounded-full glass transition-all duration-300 ${
                currentIndex >= maxIndex || isAnimating
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-purple-500/20 hover:scale-110'
              }`}
            >
              <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            </motion.button>
          </div>

          {/* Project Cards Container */}
          <div 
            ref={containerRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            style={{ height: '520px' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`grid gap-6 h-full ${
                  itemsPerView === 1 ? 'grid-cols-1' : 
                  itemsPerView === 2 ? 'grid-cols-2' : 'grid-cols-3'
                }`}
              >
                {getVisibleProjects().map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="glass rounded-2xl overflow-hidden card-hover group h-full flex flex-col"
                    style={{ 
                      animationDelay: `${index * 0.1}s` 
                    }}
                  >
                    {/* Project Image - 50% of card height */}
                    <div className="relative h-1/2 overflow-hidden flex-shrink-0">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-purple-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2 flex-wrap">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-black/70 text-white text-xs rounded backdrop-blur-sm">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-black/70 text-white text-xs rounded backdrop-blur-sm">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Content - 50% of card height */}
                    <div className="p-6 h-1/2 flex flex-col">
                      <h3 className={`text-lg font-bold mb-2 transition-colors line-clamp-2 ${
                        isDark 
                          ? 'text-white group-hover:text-purple-400' 
                          : 'text-gray-900 group-hover:text-purple-600'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-4 flex-1 line-clamp-3 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-xs font-semibold">Live Demo</span>
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-xs font-semibold">Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-400 text-sm">
              {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, projects.length)} of {projects.length} projects
            </p>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Arafahmed1314"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
