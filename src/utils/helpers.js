// Utility functions for the portfolio

export const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

export const generateProjectId = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substr(0, maxLength) + '...'
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const getRandomColor = () => {
  const colors = [
    'from-purple-500 to-blue-500',
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-500',
    'from-indigo-500 to-purple-600',
    'from-blue-600 to-purple-600',
    'from-pink-500 to-rose-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}
