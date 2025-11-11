import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaBootstrap, FaGithub, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import img0 from './takiyulai.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

export const assets = { profileImg: img0}

export const aboutInfo = [
  { icon: FaReact, title: "Expérience Moderne", description: "Interfaces rapides et intuitives avec React.js" },
  { icon: FaPhp, title: "Performance Back-End", description: "Architectures robustes et sécurisées en PHP" },
  { icon: SiTailwindcss, title: "Design Personnalisé", description: "Styles sur mesure et responsive avec Tailwind" },
]


export const skills = [
  { icon: FaHtml5, title: "HTML5", description: "Structure sémantique", tags: ["SEO", "Accessibilité", "Performance"] },
  { icon: FaCss3Alt, title: "CSS3", description: "Styles modernes", tags: ["Flexbox", "Grid", "Animations"] },
  { icon: FaJs, title: "JavaScript", description: "Logique interactive", tags: ["ES6+", "DOM", "API REST"] },
  { icon: FaPhp, title: "PHP", description: "Sites dynamiques", tags: ["MySQL", "CRUD", "Sécurité"] },
  { icon: FaReact, title: "React", description: "Composants & SPA", tags: ["Hooks", "Router", "State management"] },
  { icon: FaBootstrap, title: "Bootstrap", description: "Responsive rapide", tags: ["Grid System", "UI Components", "Custom Themes"] },
  { icon: SiTailwindcss, title: "Tailwind CSS", description: "Utility-first", tags: ["Design System", "Performance", "Prototypage rapide"] },
  { icon: FaGithub, title: "GitHub", description: "Contrôle de version", tags: ["Git Flow", "Collaboration", "CI/CD"] },
  { icon: FaGithub, title: "API REST", description: "Intégration de services", tags: ["Fetch", "Axios", "JSON", "Auth"] },
  { icon: FaDatabase, title: "MySQL", description: "Bases relationnelles", tags: ["CRUD", "JOIN", "Indexation"] },
  { icon: FaDatabase, title: "SQL", description: "Requêtes avancées", tags: ["Optimisation", "Triggers", "Vues"] },
]


export const projects = [
  {
    title: "KHALIS ÉPICES",
    description: "Landing page bio pour épices artisanales.",
    image: img1,
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "https://khalisepices.vercel.app",
    code: "#"
  },
  {
    title: "BioharvestAfrica Blog",
    description: "Blog agricole avec filtres et commentaires.",
    image: img2,
    tech: ["PHP", "MySQL", "Bootstrap"],
    demo: "https://bioharvest.wuaze.com",
    code: "#"
  },
  {
    title: "YEE Club",
    description: "Site bilingue pour club d'anglais.",
    image: img3,
    tech: ["HTML", "JavaScript", "Bootstrap", "PHP"],
    demo: "https://yeeclub.free.nf",
    code: "#"
  },
]



export const workData = [
  { role: "Développeur Full Stack", company: "Freelance", duration: "2023 - Présent", desciption: "Sites vitrines, blogs, landing pages." },
  { role: "Stagiaire Développeur", company: "Agence Digitale", duration: "Jan 2024 - Juin 2024", desciption: "E-commerce & refontes PHP." },
  { role: "Développeur Junior", company: "Startup Tech - Parakou", duration: "2022 - 2023", desciption: "Dashboards internes avec PHP & MySQL." },
]

export const testimonials = [
  {
    name: "D. Suhaylah",
    role: "Fondatrice de KHALIS ÉPICES",
    content:
      "Travailler avec Takiyulai Dramane a été un vrai plaisir ! Il a compris exactement ma vision et a livré une landing page moderne qui a boosté mes ventes de plus de 40%. Sérieux, patient et très à l’écoute.",
    rating: 5,
  },
  {
    name: "Martin Lucas",
    role: "Blogueur & Créateur de contenu",
    content:
      "J’ai adoré collaborer avec Takiyulai Dramane. Il est rigoureux, créatif et force de proposition. Mon site est clair, rapide et facile à gérer, exactement ce qu’il me fallait.",
    rating: 5,
  },
  {
    name: "Juliano Edou",
    role: "Club d’anglais – Parakou",
    content:
      "Takiyulai Dramane a réalisé un travail remarquable pour notre club. Il a conçu un site bilingue qui reflète parfaitement notre esprit. Disponible, réactif et passionné du début à la fin.",
    rating: 5,
  },
]

