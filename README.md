# Araf's Developer Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion, showcasing my skills, projects, and experiences as a Full-Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects and smooth animations
- **Responsive Layout**: Optimized for all devices - desktop, tablet, and mobile
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimizations
- **Interactive Components**: Animated project cards, skill progress bars, and smooth scrolling
- **Contact Form**: Functional contact form with EmailJS integration
- **Blog Section**: Expandable blog posts with detailed content
- **Performance Focused**: Fast loading with Next.js optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Language**: JavaScript (ES6+)

## 📱 Sections

### 🏠 Hero Section

- Dynamic typing animation with role rotation
- Gradient backgrounds with floating elements
- Call-to-action buttons
- Professional profile card

### 🧠 Skills Section

- Categorized skill sets (Frontend, Backend, Tools)
- Animated progress bars
- Competitive programming statistics
- Platform links and achievements

### 🧩 Projects Section

- Responsive project grid (4/3/2/1 columns)
- Animated card shuffling with navigation
- Live demo and GitHub links
- Technology tags and categories

### 📝 Blog Section

- Article previews with categories
- Expandable full-content modals
- Reading time estimates
- Professional writing samples

### 📬 Contact Section

- Functional contact form
- EmailJS integration
- Contact information cards
- Social media links

### 🔗 Footer

- Quick navigation links
- Social media presence
- Professional contact details
- Back-to-top functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/araf/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up EmailJS:

   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the credentials in `src/components/Contact.js`:
     ```javascript
     const serviceId = "your_service_id";
     const templateId = "your_template_id";
     const publicKey = "your_public_key";
     ```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Blog.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   └── utils/
│       └── helpers.js
├── public/
├── .github/
│   └── copilot-instructions.md
└── package.json
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/app/layout.js` - SEO metadata
- `src/components/Hero.js` - Name and introduction
- `src/components/Skills.js` - Your skills and competitive programming stats
- `src/components/Projects.js` - Your project portfolio
- `src/components/Blog.js` - Your blog articles
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Social links and contact details

### Styling

- Modify CSS variables in `src/app/globals.css`
- Update Tailwind classes in component files
- Customize animations in Framer Motion configurations

### Content

- Replace placeholder project data in `Projects.js`
- Update blog content in `Blog.js`
- Modify skill categories and levels in `Skills.js`
- Update competitive programming statistics

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the generated files to your hosting provider

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Built-in bundle analyzer
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: ARIA labels and semantic HTML
- **Core Web Vitals**: Optimized for Google's performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Araf** - Full-Stack Developer

- Email: araf@example.com
- LinkedIn: [linkedin.com/in/araf](https://www.linkedin.com/in/md-naimul-islam-068b9018b/)
- GitHub: [github.com/araf](https://github.com/Arafahmed1314)
- Portfolio: [araf-portfolio.vercel.app](https://www.naimul.me/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Lucide](https://lucide.dev/) for the clean icon set
- [EmailJS](https://www.emailjs.com/) for email functionality

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
