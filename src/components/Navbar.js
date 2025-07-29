'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const router = useRouter()
  const pathname = usePathname()
  const { isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', route: '/' },
    { name: 'Skills', href: '#skills', route: '/' },
    { name: 'Projects', href: '#projects', route: '/' },
    { name: 'Blog', href: '#blog', route: '/' },
    { name: 'Contact', href: '#contact', route: '/' },
  ]

  const handleNavigation = (item) => {
    // If we're on a different page, navigate to home first
    if (pathname !== '/') {
      // Special case for Home - navigate to root without hash
      if (item.name === 'Home') {
        router.push('/')
      } else {
        router.push(`/${item.href}`)
      }
    } else {
      // If we're on the home page, scroll to section
      scrollToSection(item.href)
    }
    setIsOpen(false)
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80 // Account for fixed navbar height
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled 
          ? `glass py-2 ${isDark ? 'glass-dark' : 'glass-light'}` 
          : 'py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[64px]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer z-50 truncate max-w-[200px] sm:max-w-none"
            onClick={() => {
              if (pathname !== '/') {
                router.push('/')
              } else {
                scrollToSection('#home')
              }
            }}
          >
            Naimul Islam
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item)}
                className={`transition-colors duration-200 ${
                  isDark 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2 z-50">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-lg backdrop-blur-sm border transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isDark 
                  ? 'text-white bg-gray-800/50 border-gray-700/50' 
                  : 'text-gray-900 bg-white/50 border-gray-300/50'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={`md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-xl p-4 border shadow-2xl z-40 max-w-sm mx-auto ${
                isDark 
                  ? 'border-gray-700/50' 
                  : 'border-gray-300/50'
              }`}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavigation(item)}
                    className={`block w-full text-left py-3 px-4 transition-colors duration-200 rounded-lg text-base font-medium ${
                      isDark 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/30'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
