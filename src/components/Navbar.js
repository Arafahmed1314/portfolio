'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const router = useRouter()
  const pathname = usePathname()

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
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled ? 'glass-dark py-2' : 'py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer z-50"
            onClick={() => {
              if (pathname !== '/') {
                router.push('/')
              } else {
                scrollToSection('#home')
              }
            }}
          >
            Araf
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 glass-dark rounded-lg p-4 border border-gray-700/50 shadow-xl z-40"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left text-gray-300 hover:text-white py-3 px-2 transition-colors duration-200 hover:bg-gray-700/30 rounded-lg"
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
