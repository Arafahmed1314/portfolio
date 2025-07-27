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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link 
            href="/blogs"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>

          <article className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>

            <div className="p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
              
              <div className="flex items-center text-gray-400 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-6">{formatDate(blog.date)}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{blog.readTime}</span>
              </div>

              <div className="text-gray-300 leading-relaxed">
                {blogContent?.content && (
                  <div dangerouslySetInnerHTML={{ __html: blogContent.content }} />
                )}
              </div>
            </div>
          </article>

          <div className="mt-8 flex justify-center gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Heart className="w-4 h-4 mr-2" />
              Like
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blogs"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              View All Blog Posts
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogDetailPage
