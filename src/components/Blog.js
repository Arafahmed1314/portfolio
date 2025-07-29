'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import blogsData from '../data/blogs.json'
import { useTheme } from '../contexts/ThemeContext'

const Blog = () => {
  const { isDark } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [dragStart, setDragStart] = useState(null)
  const containerRef = useRef(null)
  const router = useRouter()

  const blogPosts = blogsData.blogs

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

  const maxIndex = Math.max(0, blogPosts.length - itemsPerView)

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

  const getVisibleBlogs = () => {
    return blogPosts.slice(currentIndex, currentIndex + itemsPerView)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
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
    <section id="blog" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog & Articles
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Sharing insights, experiences, and knowledge about web development, university life, and career growth
          </p>
        </motion.div>

        {/* Blog Slider */}
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

          {/* Blog Cards Container */}
          <div 
            ref={containerRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            style={{ height: '480px' }}
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
                {getVisibleBlogs().map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={cardVariants}
                    className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer h-full flex flex-col"
                    style={{ 
                      animationDelay: `${index * 0.1}s` 
                    }}
                    onClick={() => {
                      if (post.slug) {
                        router.push(`/blogs/${post.slug}`)
                      }
                    }}
                  >
                    {/* Blog Image */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className={`flex items-center gap-4 text-sm mb-3 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className={`text-xl font-bold mb-3 transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-purple-400' 
                          : 'text-gray-900 group-hover:text-purple-600'
                      }`}>
                        {post.title}
                      </h3>

                      <p className={`text-sm leading-relaxed mb-6 flex-1 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {post.excerpt}
                      </p>

                      <div className={`flex items-center transition-colors mt-auto ${
                        isDark 
                          ? 'text-purple-400 group-hover:text-purple-300' 
                          : 'text-purple-600 group-hover:text-purple-700'
                      }`}>
                        <span className="text-sm font-semibold">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
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
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, blogPosts.length)} of {blogPosts.length} articles
            </p>
          </motion.div>
        </div>

        {/* More Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/blogs')}
            className="btn-secondary text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
