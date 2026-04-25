import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaBootstrap, FaGithub, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import img0 from './takiyulai.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

export const assets = { profileImg: img0 }

// ABOUT INFO (bilingue)
export const aboutInfo = [
  { 
    icon: FaReact, 
    titleFr: "Expérience Moderne", 
    titleEn: "Modern Experience",
    descriptionFr: "Interfaces rapides et intuitives avec React.js",
    descriptionEn: "Fast & intuitive interfaces with React.js"
  },
  { 
    icon: FaPhp, 
    titleFr: "Backend Robuste", 
    titleEn: "Robust Backend",
    descriptionFr: "Architectures sécurisées et performantes",
    descriptionEn: "Secure & high-performance architectures"
  },
  { 
    icon: SiTailwindcss, 
    titleFr: "Design Sur Mesure", 
    titleEn: "Custom Design",
    descriptionFr: "Styles responsives et élégants",
    descriptionEn: "Responsive & elegant styles"
  },
]

// COMPÉTENCES
export const skills = [
  { icon: FaHtml5, title: "HTML5", description: "Structure sémantique", tags: ["SEO", "Accessibilité", "Performance"] },
  { icon: FaCss3Alt, title: "CSS3", description: "Styles modernes", tags: ["Flexbox", "Grid", "Animations"] },
  { icon: FaJs, title: "JavaScript", description: "Interactivité", tags: ["ES6+", "DOM", "API"] },
  { icon: FaReact, title: "React.js", description: "SPA & Composants", tags: ["Hooks", "Router", "État"] },
  { icon: FaPhp, title: "PHP", description: "Backend dynamique", tags: ["MySQL", "CRUD", "Sécurité"] },
  { icon: FaBootstrap, title: "Bootstrap", description: "Responsive rapide", tags: ["Grid", "UI", "Theming"] },
  { icon: SiTailwindcss, title: "Tailwind CSS", description: "Utility-first", tags: ["Design System", "Performance"] },
  { icon: FaGithub, title: "Git", description: "Versionning", tags: ["Git Flow", "Collaboration"] },
  { icon: FaDatabase, title: "API REST", description: "Intégration", tags: ["Fetch", "JSON", "Auth"] },
  { icon: FaDatabase, title: "MySQL", description: "Base de données", tags: ["CRUD", "JOIN", "Optimisation"] },
]

// PROJETS (descriptions bilingues)
export const projects = [
  {
    title: "KHALIS NATURE",
    descriptionFr: "Landing page bio pour épices artisanales.",
    descriptionEn: "Organic landing page for artisan spices.",
    image: img1,
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "https://khalisepices.vercel.app",
    code: "#"
  },
  {
    title: "Gestion Bar & Restaurant",
    descriptionFr: "Gestion des stocks, génération de reçus, dashboard CA.",
    descriptionEn: "Inventory management, receipt generation, revenue dashboard.",
    image: img2,
    tech: ["PHP", "MySQL", "Bootstrap", "JS"],
    demo: "https://bares.free.nf/login.php",
    code: "#"
  },
  {
    title: "YEE Club",
    descriptionFr: "Site bilingue pour club d'anglais.",
    descriptionEn: "Bilingual website for an English club.",
    image: img3,
    tech: ["HTML", "JS", "Bootstrap", "PHP"],
    demo: "https://yeeclub.free.nf",
    code: "#"
  },
]

// EXPÉRIENCE PROFESSIONNELLE (bilingue)
export const workData = [
  { 
    roleFr: "Développeur Full Stack", 
    roleEn: "Full Stack Developer",
    company: "Freelance", 
    duration: "2023 - Présent", 
    descriptionFr: "Sites vitrines, blogs, applications web sur mesure.",
    descriptionEn: "Showcase sites, blogs, custom web applications."
  },
  { 
    roleFr: "Stagiaire Développeur", 
    roleEn: "Developer Intern",
    company: "Agence Digitale", 
    duration: "Jan 2024 - Juin 2024", 
    descriptionFr: "E-commerce & refontes PHP.",
    descriptionEn: "E-commerce & PHP refactoring."
  },
  { 
    roleFr: "Développeur Junior", 
    roleEn: "Junior Developer",
    company: "Startup Tech - Parakou", 
    duration: "2022 - 2023", 
    descriptionFr: "Dashboards internes PHP & MySQL.",
    descriptionEn: "Internal dashboards with PHP & MySQL."
  },
]

// TÉMOIGNAGES (bilingues)
export const testimonials = [
  {
    name: "D. Suhaylah",
    roleFr: "Fondatrice de KHALIS ÉPICES",
    roleEn: "Founder of KHALIS NATURE",
    contentFr: "Travailler avec Takiyulai Dramane a été un vrai plaisir ! Il a compris exactement ma vision et a livré une landing page moderne qui a boosté mes ventes de plus de 40%.",
    contentEn: "Working with Takiyulai Dramane was a real pleasure! He understood my vision perfectly and delivered a modern landing page that boosted my sales by over 40%.",
    rating: 5,
  },
  {
    name: "Martin Lucas",
    roleFr: "Blogueur & Créateur de contenu",
    roleEn: "Blogger & Content Creator",
    contentFr: "J'ai adoré collaborer avec Takiyulai. Il est rigoureux, créatif et force de proposition. Mon site est clair, rapide et facile à gérer.",
    contentEn: "I loved working with Takiyulai. He is thorough, creative, and proactive. My site is clear, fast, and easy to manage.",
    rating: 5,
  },
  {
    name: "Juliano Edou",
    roleFr: "Club d'anglais – Parakou",
    roleEn: "English Club – Parakou",
    contentFr: "Takiyulai a réalisé un travail remarquable pour notre club. Disponible, réactif et passionné du début à la fin.",
    contentEn: "Takiyulai did a remarkable job for our club. Available, responsive, and passionate from start to finish.",
    rating: 5,
  },
]