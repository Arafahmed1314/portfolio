'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, ArrowRight, X, BookOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import blogsData from '../data/blogs.json'

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const router = useRouter()

  const blogPosts = blogsData.blogs
    {
      id: 1,
      title: 'How to become a Web Developer in 2025',
      excerpt: 'A comprehensive guide to starting your web development journey with the latest technologies and best practices.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Career',
      slug: 'how-to-become-web-developer-2025',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      content: `
        <h2>Introduction</h2>
        <p>Web development in 2025 is more exciting and accessible than ever before. With the rapid evolution of technologies and frameworks, there are multiple pathways to becoming a successful web developer.</p>
        
        <h2>Essential Technologies to Learn</h2>
        <h3>Frontend Development</h3>
        <ul>
          <li><strong>HTML5 & CSS3:</strong> The foundation of web development. Master semantic HTML and modern CSS features like Grid and Flexbox.</li>
          <li><strong>JavaScript (ES6+):</strong> The backbone of modern web development. Focus on async/await, destructuring, and modules.</li>
          <li><strong>React/Vue/Angular:</strong> Choose one modern framework. React has the largest job market in 2025.</li>
          <li><strong>TypeScript:</strong> Increasingly important for large-scale applications.</li>
        </ul>
        
        <h3>Backend Development</h3>
        <ul>
          <li><strong>Node.js:</strong> Perfect for JavaScript developers to build server-side applications.</li>
          <li><strong>Python (Django/FastAPI):</strong> Great for beginners with excellent documentation.</li>
          <li><strong>Database Management:</strong> Learn both SQL (PostgreSQL) and NoSQL (MongoDB) databases.</li>
        </ul>
        
        <h2>Learning Path</h2>
        <ol>
          <li><strong>Months 1-2:</strong> HTML, CSS, and basic JavaScript</li>
          <li><strong>Months 3-4:</strong> Advanced JavaScript and DOM manipulation</li>
          <li><strong>Months 5-6:</strong> Choose and master a frontend framework</li>
          <li><strong>Months 7-8:</strong> Backend development and databases</li>
          <li><strong>Months 9-12:</strong> Build projects and apply for jobs</li>
        </ol>
        
        <h2>Building Your Portfolio</h2>
        <p>Your portfolio is crucial for landing your first job. Include:</p>
        <ul>
          <li>3-5 diverse projects showcasing different skills</li>
          <li>Clean, responsive designs</li>
          <li>Source code on GitHub with good documentation</li>
          <li>Live demos deployed on platforms like Vercel or Netlify</li>
        </ul>
        
        <h2>Job Search Strategy</h2>
        <p>In 2025, the web development job market is competitive but rewarding:</p>
        <ul>
          <li>Build a strong online presence (LinkedIn, GitHub, Twitter)</li>
          <li>Contribute to open-source projects</li>
          <li>Network with other developers through meetups and online communities</li>
          <li>Consider freelancing to build experience</li>
          <li>Apply to startups and small companies first</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Becoming a web developer in 2025 requires dedication, continuous learning, and practical experience. Focus on building real projects, stay updated with industry trends, and don't hesitate to ask for help from the developer community. The journey is challenging but incredibly rewarding!</p>
      `
    },
    {
      id: 2,
      title: 'Tips to Boost Your CGPA in University',
      excerpt: 'Proven strategies and techniques to improve your academic performance and maintain a high CGPA throughout your university journey.',
      date: '2024-12-20',
      readTime: '6 min read',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      content: `
        <h2>Understanding the CGPA System</h2>
        <p>Your Cumulative Grade Point Average (CGPA) is a crucial metric that reflects your overall academic performance. Understanding how it's calculated and what factors influence it is the first step to improvement.</p>
        
        <h2>Effective Study Strategies</h2>
        <h3>1. Time Management</h3>
        <ul>
          <li>Create a weekly study schedule and stick to it</li>
          <li>Use techniques like the Pomodoro Technique for focused study sessions</li>
          <li>Prioritize tasks based on deadlines and importance</li>
          <li>Avoid procrastination by breaking large tasks into smaller ones</li>
        </ul>
        
        <h3>2. Active Learning Techniques</h3>
        <ul>
          <li><strong>Spaced Repetition:</strong> Review material at increasing intervals</li>
          <li><strong>Active Recall:</strong> Test yourself regularly without looking at notes</li>
          <li><strong>Feynman Technique:</strong> Explain concepts in simple terms</li>
          <li><strong>Mind Mapping:</strong> Visual representation of information</li>
        </ul>
        
        <h2>Course Selection Strategy</h2>
        <p>Smart course selection can significantly impact your CGPA:</p>
        <ul>
          <li>Balance challenging courses with easier ones each semester</li>
          <li>Research professors and their teaching styles</li>
          <li>Consider your workload and other commitments</li>
          <li>Take advantage of pass/fail options when available</li>
        </ul>
        
        <h2>Building Relationships</h2>
        <h3>With Professors</h3>
        <ul>
          <li>Attend office hours regularly</li>
          <li>Ask thoughtful questions in class</li>
          <li>Participate in class discussions</li>
          <li>Show genuine interest in the subject</li>
        </ul>
        
        <h3>With Peers</h3>
        <ul>
          <li>Form study groups with motivated classmates</li>
          <li>Join academic clubs and organizations</li>
          <li>Find study partners for challenging courses</li>
          <li>Teach others to reinforce your own learning</li>
        </ul>
        
        <h2>Exam Preparation</h2>
        <ol>
          <li><strong>Start Early:</strong> Begin studying weeks before exams</li>
          <li><strong>Create Study Guides:</strong> Summarize key concepts</li>
          <li><strong>Practice Problems:</strong> Work through past exams and assignments</li>
          <li><strong>Get Enough Sleep:</strong> Maintain a healthy sleep schedule</li>
          <li><strong>Stay Healthy:</strong> Eat well and exercise regularly</li>
        </ol>
        
        <h2>Utilizing University Resources</h2>
        <ul>
          <li>Tutoring centers and academic support services</li>
          <li>Library resources and study spaces</li>
          <li>Career counseling and academic advising</li>
          <li>Mental health and wellness services</li>
          <li>Writing centers for essay and report assistance</li>
        </ul>
        
        <h2>Recovery from Low Grades</h2>
        <p>If your CGPA is already low, don't panic:</p>
        <ul>
          <li>Focus on improving one course at a time</li>
          <li>Consider retaking courses if allowed</li>
          <li>Take summer courses to boost your GPA</li>
          <li>Seek academic counseling for personalized advice</li>
        </ul>
        
        <h2>Long-term Success Tips</h2>
        <ul>
          <li>Set realistic and achievable goals</li>
          <li>Track your progress regularly</li>
          <li>Celebrate small victories</li>
          <li>Stay motivated by remembering your long-term objectives</li>
          <li>Learn from failures and adjust your strategies</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Improving your CGPA requires consistent effort, smart strategies, and the right mindset. Remember that grades are important, but they're not everything. Focus on learning, building skills, and maintaining a healthy work-life balance. With dedication and the right approach, you can achieve your academic goals!</p>
      `
    },
    {
      id: 3,
      title: 'How to Start University Life as a CSE Student',
      excerpt: 'Essential advice for new Computer Science and Engineering students to navigate university life and build a successful career in tech.',
      date: '2024-11-10',
      readTime: '7 min read',
      category: 'Student Life',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      content: `
        <h2>Welcome to Computer Science & Engineering!</h2>
        <p>Starting university as a CSE student is an exciting journey filled with opportunities to learn, grow, and build the foundation for a successful tech career. Here's your comprehensive guide to making the most of your university experience.</p>
        
        <h2>Academic Foundation</h2>
        <h3>Core Subjects to Master</h3>
        <ul>
          <li><strong>Programming Fundamentals:</strong> Start with C/C++ or Python</li>
          <li><strong>Data Structures & Algorithms:</strong> The backbone of computer science</li>
          <li><strong>Mathematics:</strong> Discrete math, calculus, and statistics</li>
          <li><strong>Computer Networks:</strong> Understanding how computers communicate</li>
          <li><strong>Database Systems:</strong> Data storage and management</li>
          <li><strong>Software Engineering:</strong> Building large-scale applications</li>
        </ul>
        
        <h3>Study Strategies for CSE</h3>
        <ul>
          <li><strong>Practice Coding Daily:</strong> Consistency is key in programming</li>
          <li><strong>Understand Concepts:</strong> Don't just memorize, understand the 'why'</li>
          <li><strong>Work on Projects:</strong> Apply theoretical knowledge practically</li>
          <li><strong>Collaborate:</strong> Work on group projects and pair programming</li>
        </ul>
        
        <h2>Building Your Skill Set</h2>
        <h3>Programming Languages to Learn</h3>
        <ol>
          <li><strong>First Year:</strong> C/C++ for fundamentals, Python for versatility</li>
          <li><strong>Second Year:</strong> Java for object-oriented programming</li>
          <li><strong>Third Year:</strong> JavaScript for web development</li>
          <li><strong>Fourth Year:</strong> Specialized languages based on your interests</li>
        </ol>
        
        <h3>Essential Tools and Technologies</h3>
        <ul>
          <li><strong>Version Control:</strong> Git and GitHub</li>
          <li><strong>IDEs:</strong> VS Code, IntelliJ IDEA, or Eclipse</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React</li>
          <li><strong>Cloud Platforms:</strong> AWS, Google Cloud, or Azure</li>
        </ul>
        
        <h2>Extracurricular Activities</h2>
        <h3>Programming Competitions</h3>
        <ul>
          <li>Join your university's programming club</li>
          <li>Participate in ACM ICPC</li>
          <li>Regular practice on Codeforces, LeetCode, HackerRank</li>
          <li>Attend hackathons and coding contests</li>
        </ul>
        
        <h3>Projects and Portfolio</h3>
        <ul>
          <li><strong>Year 1:</strong> Simple console applications and basic web pages</li>
          <li><strong>Year 2:</strong> Web applications with databases</li>
          <li><strong>Year 3:</strong> Full-stack applications and mobile apps</li>
          <li><strong>Year 4:</strong> Advanced projects and contribution to open source</li>
        </ul>
        
        <h2>Networking and Community</h2>
        <h3>Building Professional Networks</h3>
        <ul>
          <li>Join student organizations and tech clubs</li>
          <li>Attend tech meetups and conferences</li>
          <li>Connect with seniors and alumni</li>
          <li>Build an online presence (LinkedIn, GitHub, Twitter)</li>
          <li>Participate in online communities (Reddit, Stack Overflow)</li>
        </ul>
        
        <h3>Finding Mentors</h3>
        <ul>
          <li>Approach professors for research opportunities</li>
          <li>Connect with industry professionals</li>
          <li>Join mentorship programs</li>
          <li>Engage with senior students</li>
        </ul>
        
        <h2>Career Preparation</h2>
        <h3>Internships and Work Experience</h3>
        <ul>
          <li><strong>Summer of 1st Year:</strong> Focus on learning and basic projects</li>
          <li><strong>Summer of 2nd Year:</strong> Apply for internships at local companies</li>
          <li><strong>Summer of 3rd Year:</strong> Aim for internships at major tech companies</li>
          <li><strong>Final Year:</strong> Full-time job preparation and applications</li>
        </ul>
        
        <h3>Interview Preparation</h3>
        <ul>
          <li>Practice data structures and algorithms daily</li>
          <li>Work on system design concepts</li>
          <li>Prepare for behavioral interviews</li>
          <li>Build a strong portfolio of projects</li>
          <li>Practice mock interviews with peers</li>
        </ul>
        
        <h2>Personal Development</h2>
        <h3>Soft Skills</h3>
        <ul>
          <li><strong>Communication:</strong> Learn to explain technical concepts clearly</li>
          <li><strong>Teamwork:</strong> Collaborate effectively on group projects</li>
          <li><strong>Problem-solving:</strong> Develop analytical thinking skills</li>
          <li><strong>Time Management:</strong> Balance academics, projects, and personal life</li>
          <li><strong>Leadership:</strong> Take initiative in projects and organizations</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Focusing only on grades and ignoring practical skills</li>
          <li>Not starting projects early</li>
          <li>Avoiding mathematics and theoretical concepts</li>
          <li>Not participating in coding competitions</li>
          <li>Procrastinating on assignments and projects</li>
          <li>Not seeking help when struggling</li>
        </ul>
        
        <h2>Resources for Success</h2>
        <h3>Online Learning Platforms</h3>
        <ul>
          <li>Coursera and edX for specialized courses</li>
          <li>YouTube channels like CS50, FreeCodeCamp</li>
          <li>Documentation and tutorials for technologies</li>
          <li>GitHub for exploring open-source projects</li>
        </ul>
        
        <h3>Books to Read</h3>
        <ul>
          <li>"Clean Code" by Robert C. Martin</li>
          <li>"Introduction to Algorithms" by CLRS</li>
          <li>"Design Patterns" by Gang of Four</li>
          <li>"The Pragmatic Programmer" by Hunt and Thomas</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Your journey as a CSE student is unique and full of opportunities. Focus on building a strong foundation, stay curious, and don't be afraid to experiment with new technologies. Remember that success in CSE requires both technical skills and soft skills. Stay persistent, keep learning, and most importantly, enjoy the process of discovery and creation that defines computer science!</p>
        
        <p>Good luck with your university journey, and welcome to the exciting world of Computer Science and Engineering!</p>
      `
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog & Articles
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights, experiences, and knowledge about web development, university life, and career growth
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
              onClick={() => {
                if (post.slug) {
                  router.push(`/blogs/${post.slug}`)
                } else {
                  setSelectedBlog(post)
                }
              }}
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-semibold">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* More Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/blogs')}
            className="btn-secondary text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            More Blogs
          </motion.button>
        </motion.div>
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedBlog(null)
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-dark rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-semibold rounded-full">
                        {selectedBlog.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(selectedBlog.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedBlog.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedBlog.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <div 
                  className="prose prose-invert prose-purple max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Blog
