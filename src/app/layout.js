import './globals.css'

export const metadata = {
  title: 'Araf - Full-Stack Developer',
  description: 'Portfolio of Araf, a passionate Full-Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and more.',
  keywords: 'Full-Stack Developer, React, Next.js, Node.js, MongoDB, JavaScript, Web Developer, Portfolio',
  author: 'Araf',
  viewport: 'width=device-width, initial-scale=1',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
