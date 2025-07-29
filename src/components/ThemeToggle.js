'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-3 rounded-full transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 hover:text-yellow-300' 
          : 'bg-gray-200 hover:bg-gray-300 text-purple-600 hover:text-purple-700'
        }
        border-2 ${isDark ? 'border-gray-700' : 'border-gray-300'}
        shadow-lg hover:shadow-xl
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0.8 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-6 h-6"
      >
        {isDark ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-full blur-md -z-10
          ${isDark ? 'bg-yellow-400/20' : 'bg-purple-600/20'}
        `}
        animate={{ 
          opacity: isDark ? 0.6 : 0.4,
          scale: isDark ? 1.2 : 1.1 
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

export default ThemeToggle
