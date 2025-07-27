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

**Popular Frontend Frameworks**:
- **React**: Most popular library for building user interfaces
- **Vue.js**: Progressive framework that's easy to learn
- **Angular**: Full-featured framework for large applications
- **Svelte**: Emerging framework with great performance

### 2. Backend Development
**Server-Side Languages**:
- **Node.js**: JavaScript on the server
- **Python**: With frameworks like Django or Flask
- **PHP**: Still widely used, especially with Laravel
- **Java**: Enterprise-level applications
- **C#**: Microsoft stack development

**Databases**:
- **SQL**: PostgreSQL, MySQL, SQLite
- **NoSQL**: MongoDB, Firebase Firestore
- **Understanding of database design and optimization

### 3. Essential Tools and Technologies

**Version Control**:
- Git and GitHub/GitLab
- Branching strategies
- Collaborative workflows

**Development Tools**:
- VS Code or preferred editor
- Browser developer tools
- Package managers (npm, yarn)
- Build tools (Webpack, Vite)

**Deployment and Hosting**:
- Cloud platforms (AWS, Vercel, Netlify)
- Docker for containerization
- CI/CD pipelines
- Understanding of web servers

## Learning Path for Beginners

### Phase 1: Foundation (2-3 months)
1. **HTML & CSS Basics**
   - Structure and semantics
   - Styling and layouts
   - Responsive design
   - CSS frameworks (Bootstrap, Tailwind)

2. **JavaScript Fundamentals**
   - Variables, functions, and control flow
   - DOM manipulation
   - Event handling
   - Basic algorithms and data structures

### Phase 2: Intermediate Skills (3-4 months)
1. **Advanced JavaScript**
   - ES6+ features
   - Asynchronous programming
   - APIs and fetch
   - Local storage and state management

2. **Choose a Frontend Framework**
   - Start with React (most popular)
   - Build several projects
   - Understand component-based architecture

### Phase 3: Full-Stack Development (4-6 months)
1. **Backend Development**
   - Choose Node.js for JavaScript consistency
   - Learn Express.js framework
   - Database integration
   - API development

2. **Advanced Topics**
   - Authentication and security
   - Testing (unit, integration)
   - Performance optimization
   - Deployment strategies

## Building Your Portfolio

### Project Ideas by Skill Level

**Beginner Projects**:
- Personal portfolio website
- Todo list application
- Weather app using API
- Calculator application

**Intermediate Projects**:
- E-commerce website
- Social media dashboard
- Blog platform with CMS
- Real-time chat application

**Advanced Projects**:
- Full-stack web application
- PWA with offline functionality
- Microservices architecture
- Open source contributions

### Portfolio Best Practices
- **Quality over Quantity**: 3-5 well-built projects
- **Live Demos**: Deploy projects for easy viewing
- **Clean Code**: Well-organized and documented
- **Responsive Design**: Works on all devices
- **GitHub Activity**: Regular commits and contributions

## Job Search Strategy

### Building Your Professional Profile
1. **LinkedIn Optimization**
   - Professional headline
   - Detailed experience section
   - Skills endorsements
   - Regular content sharing

2. **GitHub Profile**
   - Complete profile with bio
   - Pinned repositories
   - Contribution graph activity
   - README files for projects

### Networking and Community
- **Join Developer Communities**
  - Stack Overflow
  - Dev.to
  - Reddit programming communities
  - Local meetups and conferences

- **Build Your Personal Brand**
  - Write technical blog posts
  - Share projects on social media
  - Contribute to open source
  - Speak at local events

### Job Application Process
1. **Resume Optimization**
   - Technical skills section
   - Project descriptions with impact
   - Relevant experience highlighted
   - ATS-friendly formatting

2. **Interview Preparation**
   - Technical coding challenges
   - System design questions
   - Behavioral interview questions
   - Portfolio presentation practice

## Staying Current in 2025

### Industry Trends to Watch
- **AI Integration**: AI-powered development tools
- **WebAssembly**: High-performance web applications
- **Progressive Web Apps**: Native-like web experiences
- **Edge Computing**: Distributed web architectures
- **Web3 and Blockchain**: Decentralized applications

### Continuous Learning Resources
- **Online Platforms**: freeCodeCamp, Codecademy, Udemy
- **Documentation**: MDN, official framework docs
- **YouTube Channels**: Technical tutorials and trends
- **Podcasts**: Industry insights and interviews
- **Books**: Deep-dive technical knowledge

## Common Mistakes to Avoid

1. **Tutorial Hell**: Building projects, not just following tutorials
2. **Perfection Paralysis**: Shipping imperfect code and iterating
3. **Ignoring Soft Skills**: Communication and teamwork matter
4. **Not Building a Network**: Relationships open opportunities
5. **Comparing to Others**: Everyone's journey is different

## Conclusion

Becoming a web developer in 2025 requires dedication, continuous learning, and practical application. The field offers incredible opportunities for those willing to invest in their skills and stay current with technology trends.

Remember that web development is a marathon, not a sprint. Focus on building a strong foundation, creating impressive projects, and connecting with the developer community. With persistence and the right approach, you can build a successful career in web development.

Start today, be consistent, and never stop learning. The web development community is welcoming and supportive – you're not alone on this journey.

**Ready to start your web development journey? Begin with HTML and CSS today, and take the first step toward your new career!**
      `
    },
    'tips-boost-cgpa-university': {
      id: 2,
      title: 'Tips to Boost Your CGPA in University',
      excerpt: 'Proven strategies and practical tips to improve your academic performance and achieve a higher CGPA throughout your university journey.',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      content: `
# Tips to Boost Your CGPA in University

Your Cumulative Grade Point Average (CGPA) is more than just a number – it's a reflection of your academic journey and can significantly impact your future opportunities. Whether you're looking to improve your current CGPA or maintain a high standard, these proven strategies will help you excel in your university studies.

## Understanding CGPA and Its Importance

### What is CGPA?
CGPA is the average of all your grade points across all semesters, providing a comprehensive measure of your academic performance throughout your degree program.

### Why CGPA Matters:
- **Graduate School Applications**: Higher CGPA opens doors to competitive programs
- **Scholarship Opportunities**: Many scholarships require minimum CGPA thresholds
- **Job Applications**: Employers often use CGPA as an initial screening criterion
- **Internship Programs**: Competitive internships prefer candidates with strong academic records
- **Personal Achievement**: A good CGPA reflects your dedication and hard work

## Time Management Strategies

### 1. Create a Study Schedule
**Weekly Planning**:
- Allocate specific time slots for each subject
- Include buffer time for unexpected assignments
- Balance study time with breaks and recreation
- Use digital calendars or planners for organization

**Daily Routine**:
- Start each day with a clear plan
- Prioritize challenging subjects during peak focus hours
- Break large tasks into smaller, manageable chunks
- Review and adjust schedule based on effectiveness

### 2. The Pomodoro Technique
- **25-minute focused study sessions**
- **5-minute breaks between sessions**
- **Longer 15-30 minute break after 4 sessions**
- **Helps maintain concentration and prevents burnout**

## Effective Study Techniques

### 1. Active Learning Methods

**The SQ3R Method**:
- **Survey**: Skim through the material first
- **Question**: Formulate questions about the content
- **Read**: Read actively, seeking answers to your questions
- **Recite**: Summarize what you've learned
- **Review**: Regularly revisit the material

**Feynman Technique**:
1. Choose a concept to learn
2. Explain it in simple terms
3. Identify gaps in your understanding
4. Simplify and create analogies

### 2. Note-Taking Strategies

**Cornell Note-Taking System**:
- Divide your page into three sections
- Notes section for main content
- Cue column for keywords and questions
- Summary section for key takeaways

**Mind Mapping**:
- Visual representation of information
- Shows relationships between concepts
- Particularly effective for visual learners
- Great for exam review and memorization

## Class Attendance and Participation

### Why Attendance Matters
- **Direct Learning**: Nothing replaces being present during lectures
- **Participation Points**: Many courses reward active participation
- **Clarification Opportunities**: Ask questions and clear doubts immediately
- **Relationship Building**: Connect with professors and classmates

### Maximizing Class Time
- **Prepare Before Class**: Read assigned materials beforehand
- **Ask Questions**: Don't hesitate to seek clarification
- **Take Notes**: Even if slides are provided, write your own notes
- **Engage Actively**: Participate in discussions and group activities

## Assignment and Project Management

### 1. Start Early
- **Break Down Large Projects**: Divide into smaller, manageable tasks
- **Set Intermediate Deadlines**: Create milestones throughout the project
- **Account for Revisions**: Allow time for multiple drafts and improvements
- **Avoid Last-Minute Rush**: Quality suffers when time is limited

### 2. Research and Writing Skills
**Research Tips**:
- Use academic databases and credible sources
- Take detailed notes with proper citations
- Organize research materials systematically
- Verify information from multiple sources

**Writing Best Practices**:
- Create an outline before writing
- Write clear, concise paragraphs
- Use proper grammar and formatting
- Proofread multiple times before submission

## Exam Preparation Strategies

### 1. Study Planning
**Long-term Preparation**:
- Start reviewing material from day one
- Create comprehensive study guides
- Form study groups with classmates
- Schedule regular review sessions

**Pre-Exam Week**:
- Focus on weak areas identified during semester
- Practice with past papers and sample questions
- Maintain healthy sleep and eating patterns
- Avoid cramming – it's ineffective for retention

### 2. Exam Day Performance
- **Arrive Early**: Reduce stress and settle in comfortably
- **Read Instructions Carefully**: Understand what's being asked
- **Time Management**: Allocate time based on question weightage
- **Review Answers**: Check for errors and completeness if time allows

## Building Relationships

### 1. Professor Relationships
**Office Hours**:
- Visit regularly, not just when struggling
- Prepare specific questions beforehand
- Show genuine interest in the subject
- Seek feedback on your progress

**Email Communication**:
- Use professional tone and formatting
- Be clear and concise in your requests
- Follow up appropriately on responses
- Express gratitude for assistance

### 2. Peer Learning
**Study Groups**:
- Form groups with serious, committed students
- Rotate leadership and teaching responsibilities
- Set clear goals and agendas for sessions
- Maintain focus and minimize distractions

**Peer Tutoring**:
- Help others to reinforce your own learning
- Seek help when struggling with concepts
- Create mutual support networks
- Share resources and study materials

## Technology and Tools

### 1. Digital Organization
**Apps and Tools**:
- **Notion**: All-in-one workspace for notes and planning
- **Google Calendar**: Schedule management and reminders
- **Forest**: Focus app that blocks distracting websites
- **Grammarly**: Writing assistance and grammar checking

**File Management**:
- Organize files in clearly labeled folders
- Use cloud storage for backup and access
- Maintain version control for important documents
- Regular cleanup of unnecessary files

### 2. Online Learning Resources
- **Khan Academy**: Free courses on various subjects
- **Coursera**: University-level courses and specializations
- **YouTube**: Educational channels for concept clarification
- **Course-specific websites**: Publisher resources and practice materials

## Health and Wellness

### 1. Physical Health
**Exercise Routine**:
- Regular physical activity improves cognitive function
- Even 30 minutes daily can make a significant difference
- Choose activities you enjoy to maintain consistency
- Use exercise as a stress relief method

**Nutrition**:
- Eat balanced meals to maintain energy levels
- Stay hydrated throughout the day
- Limit caffeine and avoid excessive sugar
- Consider brain-boosting foods like nuts and fish

### 2. Mental Health
**Stress Management**:
- Practice mindfulness and meditation techniques
- Maintain work-life balance
- Seek counseling services if available
- Build a support network of friends and family

**Sleep Hygiene**:
- Aim for 7-9 hours of quality sleep
- Maintain consistent sleep schedule
- Create a relaxing bedtime routine
- Avoid screens before bedtime

## Common Mistakes to Avoid

1. **Procrastination**: Putting off assignments until the last minute
2. **Perfectionism**: Spending too much time on minor details
3. **Isolation**: Not seeking help when struggling
4. **Poor Communication**: Not engaging with professors and classmates
5. **Neglecting Self-Care**: Sacrificing health for academic performance
6. **Inconsistent Effort**: Having periods of intense work followed by complete breaks

## Recovery Strategies for Low CGPA

### If Your CGPA is Below Expectations:
1. **Analyze Performance**: Identify specific areas of weakness
2. **Seek Academic Advising**: Get professional guidance on improvement
3. **Focus on Current Courses**: Make the most of remaining opportunities
4. **Consider Course Retakes**: If policies allow, retake failed courses
5. **Develop Strong Skills**: Build competencies that complement academic performance

## Advanced Tips for High Achievers

### Maintaining Excellence:
- **Challenge Yourself**: Take advanced courses and honors programs
- **Research Opportunities**: Engage in undergraduate research projects
- **Leadership Roles**: Participate in student organizations and activities
- **Networking**: Build relationships within your field of study
- **Continuous Improvement**: Always look for ways to enhance your approach

## Conclusion

Boosting your CGPA requires a holistic approach that combines effective study strategies, time management, healthy relationships, and personal wellness. Remember that academic success is not just about intelligence – it's about developing good habits, staying consistent, and being willing to adapt your approach based on what works best for you.

The key is to start implementing these strategies immediately, regardless of where you currently stand academically. Small, consistent improvements compound over time and can lead to significant positive changes in your CGPA.

Your university years are an investment in your future. By following these proven strategies and maintaining dedication to your academic goals, you can achieve the CGPA you desire while building valuable life skills that will serve you well beyond graduation.

**Remember: Every semester is a new opportunity to improve. Start today, stay consistent, and celebrate your progress along the way!**
      `
    },
    // Add more blog posts here...
  }

  const blog = blogPosts[params.slug]

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Blogs
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl overflow-hidden"
        >
          {/* Featured Image */}
          <div className="relative h-64 md:h-80">
            <Image 
              src={blog.image} 
              alt={blog.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-purple-500/80 text-white text-sm font-semibold rounded-full mb-3">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Title and Meta */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Article</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Like
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 glass hover:bg-gray-700/50 text-gray-300 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </motion.button>
              </div>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg prose-invert max-w-none">
              <div 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: blog.content.split('\n').map(paragraph => {
                    if (paragraph.trim() === '') return '<br/>'
                    if (paragraph.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold text-white mt-8 mb-4 gradient-text">${paragraph.slice(2)}</h1>`
                    }
                    if (paragraph.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold text-white mt-6 mb-3">${paragraph.slice(3)}</h2>`
                    }
                    if (paragraph.startsWith('### ')) {
                      return `<h3 class="text-xl font-semibold text-purple-400 mt-5 mb-2">${paragraph.slice(4)}</h3>`
                    }
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return `<p class="font-semibold text-purple-300 mt-4 mb-2">${paragraph.slice(2, -2)}</p>`
                    }
                    if (paragraph.startsWith('- ')) {
                      return `<li class="ml-4 mb-1">${paragraph.slice(2)}</li>`
                    }
                    if (paragraph.trim().length > 0) {
                      return `<p class="mb-4">${paragraph}</p>`
                    }
                    return ''
                  }).join('')
                }}
              />
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Continue Reading</h3>
          <div className="text-center">
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-2 btn-primary text-white px-6 py-3 rounded-lg font-semibold"
            >
              <BookOpen className="w-5 h-5" />
              View All Blog Posts
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogDetailPage
