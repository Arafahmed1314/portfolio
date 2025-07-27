'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, ArrowLeft, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import blogsData from '../../data/blogs.json'

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const allBlogs = blogsData.blogs

  const categories = ['All', 'Career', 'Education', 'Programming', 'Technology']

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            All Blog Posts
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dive deeper into web development, career advice, and technology insights
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-gray-400">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'} found
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-semibold rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                <Link 
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                >
                  Read Full Article
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold mb-2">No posts found</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BlogsPage
