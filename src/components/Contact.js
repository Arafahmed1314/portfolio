'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
    const { isDark } = useTheme()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // EmailJS configuration - Using environment variables
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

            // Check if EmailJS is properly configured
            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS not configured. Please check your environment variables.')
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Naimul Islam', // Your name
                to_email: 'nayemhasan1314@gmail.com', // Your email
                reply_to: formData.email
            }

            // Send email using EmailJS
            await emailjs.send(serviceId, templateId, templateParams, publicKey)

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000) // Clear status after 5 seconds
        }
    }

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            content: 'nayemhasan1314@gmail.com',
            link: 'mailto:nayemhasan1314@gmail.com'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            content: '+880 1923531755',
            link: 'tel:+8801923531755'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            content: 'Dhaka, Bangladesh',
            link: 'https://maps.google.com/?q=Dhaka,Bangladesh'
        }
    ]

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                        Get In Touch
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                        Let&apos;s create something amazing together!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className={`text-2xl font-bold mb-6 ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}>Let&apos;s Connect</h3>
                            <p className={`leading-relaxed ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                I&apos;m always interested in hearing about new opportunities,
                                collaborative projects, or just having a chat about technology and development.
                                Feel free to reach out through any of the channels below.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass rounded-xl p-6 flex items-center gap-4 card-hover group"
                                >
                                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold ${
                                            isDark ? 'text-white' : 'text-gray-900'
                                        }`}>{info.title}</h4>
                                        <p className={`transition-colors ${
                                            isDark 
                                                ? 'text-gray-400 group-hover:text-gray-300' 
                                                : 'text-gray-600 group-hover:text-gray-500'
                                        }`}>
                                            {info.content}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="pt-8"
                        >
                            <h4 className={`text-lg font-semibold mb-4 ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}>Follow Me</h4>
                            <div className="flex gap-4">
                                {[
                                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/md-naimul-islam-068b9018b/' },
                                    { name: 'GitHub', url: 'https://github.com/Arafahmed1314' },
                                    { name: 'Codeforces', url: 'https://codeforces.com/profile/Araf_ahmed' },
                                    { name: 'Facebook', url: 'https://www.facebook.com/Araf1314' }
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`glass rounded-lg px-4 py-2 transition-colors ${
                                            isDark 
                                                ? 'text-gray-300 hover:text-purple-400' 
                                                : 'text-gray-600 hover:text-purple-600'
                                        }`}
                                    >
                                        {social.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className={`text-2xl font-bold mb-6 ${
                            isDark ? 'text-white' : 'text-gray-900'
                        }`}>Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                                    isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-purple-500/20 ${
                                        isDark 
                                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500' 
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                                    }`}
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                                    isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:ring-2 focus:ring-purple-500/20 ${
                                        isDark 
                                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500' 
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                                    }`}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                                    isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className={`w-full px-4 py-3 border rounded-lg transition-colors resize-none focus:ring-2 focus:ring-purple-500/20 ${
                                        isDark 
                                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500' 
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                                    }`}
                                    placeholder="Tell me about your project or just say hello..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${isSubmitting
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'btn-primary hover:shadow-lg'
                                    } text-white`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>

                        {/* Status Messages */}
                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                                    }`}
                            >
                                {submitStatus === 'success' ? (
                                    <CheckCircle className="w-5 h-5" />
                                ) : (
                                    <AlertCircle className="w-5 h-5" />
                                )}
                                <span>
                                    {submitStatus === 'success'
                                        ? 'Message sent successfully! I\'ll get back to you soon.'
                                        : 'Failed to send message. Please try again or contact me directly.'
                                    }
                                </span>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
