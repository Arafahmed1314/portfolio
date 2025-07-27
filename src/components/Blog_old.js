'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import blogsData from '../data/blogs.json'

const BlogOld = () => {
    const [selectedBlog, setSelectedBlog] = useState(null)
    const router = useRouter()

    const blogPosts = blogsData.blogs;

    const handleReadMore = (slug) => {
        router.push(`/blogs/${slug}`)
    }

    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Blog Posts</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover insights, tips, and tutorials about web development, technology, and career growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 6).map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600/80 text-white text-sm font-medium rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {new Date(post.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleReadMore(post.slug)}
                                    className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => router.push('/blogs')}
                        className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                        View All Posts
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default BlogOld
