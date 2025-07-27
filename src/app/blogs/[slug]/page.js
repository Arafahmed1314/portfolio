'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share2, Heart, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import blogsData from '../../../data/blogs.json'
import blogContentData from '../../../data/blogContent.json'

const BlogDetailPage = ({ params }) => {
  // Get blog metadata from blogs.json
  const blog = blogsData.blogs.find(post => post.slug === params.slug)
  
  // Get blog content from blogContent.json
  const blogContent = blogContentData.blogContent[params.slug]

  if (!blog || !blogContent) {
    return notFound()
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Function to convert markdown-like content to HTML
  const formatContent = (content) => {
    return content
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mb-6">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-white mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-white mb-3 mt-6">$1</h3>')
      .replace(/^\*\*(.*)\*\*:/gim, '<h4 class="text-xl font-semibold text-purple-400 mb-3 mt-4">$1:</h4>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/^- (.*$)/gim, '<li class="text-gray-300 mb-2">$1</li>')
      .replace(/^(\d+)\. (.*$)/gim, '<li class="text-gray-300 mb-2">$2</li>')
      .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
      .replace(/^\*\*([^:]+)\*\*$/gim, '<h4 class="text-xl font-semibold text-purple-400 mb-3 mt-6">$1</h4>')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iNzAiIGN5PSIxNyIgcj0iMSIvPjxjaXJjbGUgY3g9IjE3IiBjeT0iMTciIHI9IjEiLz48Y2lyY2xlIGN4PSI0MyIgY3k9IjE3IiByPSIxIi8+PGNpcmNsZSBjeD0iNzAiIGN5PSI0MyIgcj0iMSIvPjxjaXJjbGUgY3g9IjE3IiBjeT0iNDMiIHI9IjEiLz48Y2lyY2xlIGN4PSI0MyIgY3k9IjQzIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
        </div>

        {/* Blog Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            {/* Category Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-semibold rounded-full border border-purple-500/30">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {formatDate(blog.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {blog.readTime}
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {blog.excerpt}
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg prose-invert prose-purple max-w-none"
          >
            <div 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: formatContent(blogContent.content)
              }}
            />
          </motion.article>

          {/* Share & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="border-t border-gray-700 pt-8 mt-16"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Read More Blogs */}
              <Link 
                href="/blogs"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                More Articles
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
