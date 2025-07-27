'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const roles = useMemo(() => ['Full-Stack Developer', 'React Developer', 'Node.js Developer', 'Problem Solver'], [])
    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const typeWriter = () => {
            const currentText = roles[currentRole]
            let index = 0

            const typing = setInterval(() => {
                if (index <= currentText.length) {
                    setDisplayText(currentText.slice(0, index))
                    index++
                } else {
                    clearInterval(typing)
                    setTimeout(() => {
                        const deleting = setInterval(() => {
                            if (index > 0) {
                                setDisplayText(currentText.slice(0, index))
                                index--
                            } else {
                                clearInterval(deleting)
                                setCurrentRole((prev) => (prev + 1) % roles.length)
                            }
                        }, 50)
                    }, 2000)
                }
            }, 100)
        }

        typeWriter()
    }, [currentRole, roles])

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Profile Section - Left/Top */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="lg:w-1/3 flex flex-col items-center"
                    >
                        <div className="glass rounded-2xl p-8 float-animation mb-6">
                            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
                                    <Image
                                        src="/download.jpeg"
                                        alt="Araf - Full Stack Developer"
                                        fill
                                        className="object-cover"
                                        sizes="192px"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <p className="flex items-center justify-center gap-2 text-gray-300">
                                    🎯 <span>Problem Solver</span>
                                </p>
                                <p className="flex items-center justify-center gap-2 text-gray-300">
                                    💻 <span>Clean Code Enthusiast</span>
                                </p>
                                <p className="flex items-center justify-center gap-2 text-gray-300">
                                    🚀 <span>Always Learning</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content - Right/Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3 text-center lg:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        >
                            Hi, I&apos;m{' '}
                            <span className="gradient-text">Araf</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl md:text-3xl text-gray-300 mb-8 h-12"
                        >
                            <span>A </span>
                            <span className="gradient-text-secondary font-semibold">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            Passionate about creating innovative web solutions with modern technologies.
                            I build scalable applications using React, Next.js, Node.js, and more.
                            Welcome to my digital showcase where creativity meets functionality!
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('#projects')}
                                className="btn-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                            >
                                View Projects
                                <ChevronDown size={20} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('#contact')}
                                className="btn-secondary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                            >
                                Contact Me
                                <Mail size={20} />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-gray-400 cursor-pointer"
                    onClick={() => scrollToSection('#skills')}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
