'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const roles = useMemo(() => ['Full-Stack Developer', 'React Developer', 'Node.js Developer', 'Problem Solver'], [])
    const [currentRole, setCurrentRole] = useState(0)
    const { isDark } = useTheme()

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
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-0 pt-24 sm:pt-28 md:pt-20 mt-4 sm:mt-0">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Profile Section - Left/Top */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="lg:w-1/3 flex flex-col items-center"
                    >
                        <div className="glass rounded-2xl p-6 sm:p-8 float-animation mb-6 max-w-sm mx-auto">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
                                    <Image
                                        src="/download.jpeg"
                                        alt="Naimul Islam - Full Stack Developer"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="text-left space-y-2">
                                <p className={`flex gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    🎯 <span>Problem Solver</span>
                                </p>
                                <p className={`flex  gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    💻 <span>Dedicated</span>
                                </p>
                                <p className={`flex   gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    🚀 <span>Hard Worker</span>
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
                            className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}
                        >
                            Hi, I&apos;m{' '}
                            <span className="gradient-text">Naimul Islam</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className={`text-lg sm:text-xl md:text-3xl mb-6 sm:mb-8 h-10 sm:h-12 ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
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
                            className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}
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
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center w-full sm:w-auto"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('#projects')}
                                className="btn-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                            >
                                View Projects
                                <ChevronDown size={18} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('#contact')}
                                className="btn-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                            >
                                Contact Me
                                <Mail size={18} />
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
                    className={`cursor-pointer ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    onClick={() => scrollToSection('#skills')}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
