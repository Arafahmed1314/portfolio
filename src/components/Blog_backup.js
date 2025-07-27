'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, ArrowRight, X, BookOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import blogsData from '../data/blogs.json'

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const router = useRouter()

  const blogPosts = blogsData.blogs

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog & Articles
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights, experiences, and knowledge about web development, university life, and career growth
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
              onClick={() => {
                if (post.slug) {
                  router.push(`/blogs/${post.slug}`)
                } else {
                  setSelectedBlog(post)
                }
              }}
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-semibold">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

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
            More Blogs
          </motion.button>
        </motion.div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedBlog(null)
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-dark rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-semibold rounded-full">
                        {selectedBlog.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(selectedBlog.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedBlog.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedBlog.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <div 
                  className="prose prose-invert prose-purple max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Blog
