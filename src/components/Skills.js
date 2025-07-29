'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Globe, Trophy, ExternalLink, Star, Award, Target, Zap } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Skills = () => {
  const { isDark } = useTheme()
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 80, icon: '▲' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'Tailwind CSS', level: 85, icon: '🎨' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '💫' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 75, icon: '🚀' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'MySQL', level: 75, icon: '🐬' },
        { name: 'REST APIs', level: 80, icon: '📡' },
        { name: 'JWT Auth', level: 75, icon: '🔐' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 80, icon: '🌿' },
        { name: 'VS Code', level: 90, icon: '💙' },
        { name: 'Figma', level: 65, icon: '🎯' },
        { name: 'Postman', level: 80, icon: '📮' },
        { name: 'Canva', level: 90, icon: '🐳' },
        { name: 'Latex', level: 75, icon: '☁️' },
      ]
    }
  ]

  const competitiveProgramming = [
    {
      platform: 'Codeforces',
      problemsSolved: 133,
      link: 'https://codeforces.com/profile/Araf_ahmed',
      color: 'from-blue-500 to-indigo-600',
      icon: '🔵'
    },
    {
      platform: 'LeetCode',
      problemsSolved: 36,
      link: 'https://leetcode.com/u/Arafahmed1314/',
      color: 'from-yellow-500 to-orange-600',
      icon: '🟡'
    },
    {
      platform: 'CodeChef',
      problemsSolved: 55,
      link: 'https://www.codechef.com/users/nayemhasan1314',
      color: 'from-orange-500 to-red-600',
      icon: '🟠'
    },
    {
      platform: 'Beecrowd',
      problemsSolved: 102,
      link: 'https://judge.beecrowd.com/en/profile/619337',
      color: 'from-green-500 to-teal-600',
      icon: '🟢'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Skills & Expertise
            </h2>
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Cutting-edge technologies and problem-solving prowess
          </p>
        </motion.div>

        {/* Modern Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card */}
              <div className="glass rounded-3xl p-8 h-full card-hover border-2 border-transparent group-hover:border-purple-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < 4 ? 'text-yellow-500 fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillCardVariants}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="relative"
                    >
                      <div className={`rounded-xl p-4 border transition-all duration-300 ${
                        isDark 
                          ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50'
                          : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-300/50 hover:border-purple-500/50'
                      }`}>
                        <div className="text-center">
                          <div className="text-2xl mb-2">{skill.icon}</div>
                          <div className={`text-sm font-semibold mb-2 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>{skill.name}</div>

                          {/* Circular Progress */}
                          <div className="relative w-12 h-12 mx-auto">
                            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                              <circle
                                cx="24"
                                cy="24"
                                r="18"
                                stroke="rgb(75 85 99)"
                                strokeWidth="4"
                                fill="none"
                              />
                              <motion.circle
                                cx="24"
                                cy="24"
                                r="18"
                                stroke="url(#gradient)"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: skill.level / 100 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                strokeDasharray="113"
                                strokeDashoffset="113"
                              />
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#8b5cf6" />
                                  <stop offset="100%" stopColor="#06b6d4" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className={`text-xs font-bold ${
                                isDark ? 'text-purple-400' : 'text-purple-600'
                              }`}>{skill.level}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive Programming - Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h3 className="text-3xl md:text-4xl font-bold gradient-text-secondary">
                Competitive Programming
              </h3>
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <p className={`text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Problem-solving mastery across global platforms
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {competitiveProgramming.map((platform, index) => (
              <motion.div
                key={platform.platform}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
                onClick={() => window.open(platform.link, '_blank')}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

                {/* Card */}
                <div className="relative glass rounded-2xl p-6 border-2 border-transparent group-hover:border-purple-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{platform.icon}</div>
                    <ExternalLink className={`w-5 h-5 transition-colors ${
                      isDark 
                        ? 'text-gray-400 group-hover:text-purple-400' 
                        : 'text-gray-600 group-hover:text-purple-600'
                    }`} />
                  </div>

                  <h4 className={`text-xl font-bold mb-4 transition-colors ${
                    isDark 
                      ? 'text-white group-hover:text-purple-400' 
                      : 'text-gray-900 group-hover:text-purple-600'
                  }`}>
                    {platform.platform}
                  </h4>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Problems</span>
                      <span className="text-2xl font-bold gradient-text">{platform.problemsSolved}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className={`w-full rounded-full h-2 overflow-hidden ${
                      isDark ? 'bg-gray-700' : 'bg-gray-300'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min((platform.rating / 2000) * 100, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${platform.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 border-2 border-purple-500/20"
        >
          <div className="text-center mb-8">
            <Target className="w-8 h-8 text-purple-500 mx-auto mb-4" />
            <h3 className={`text-2xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Achievement Overview</h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Quantified excellence in development and problem-solving</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '400+', label: 'Problems Solved', color: 'text-blue-400' },
              { value: '10+', label: 'Technologies', color: 'text-green-400' },
              { value: '4', label: 'Platforms', color: 'text-purple-400' },
              { value: '2+', label: 'Years Experience', color: 'text-orange-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
