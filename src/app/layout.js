import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Araf - Full-Stack Developer',
  description: 'Portfolio of Araf, a passionate Full-Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and more.',
  keywords: 'Full-Stack Developer, React, Next.js, Node.js, MongoDB, JavaScript, Web Developer, Portfolio',
  author: 'Araf',
  openGraph: {
    title: 'Araf - Full-Stack Developer',
    description: 'Portfolio of Araf, a passionate Full-Stack Developer',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Araf - Full-Stack Developer',
    description: 'Portfolio of Araf, a passionate Full-Stack Developer',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
