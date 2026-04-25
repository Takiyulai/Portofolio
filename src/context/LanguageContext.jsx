import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// Traductions
export const translations = {
  fr: {
    // Navbar
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_testimonials: "Témoignages",
    nav_contact: "Contact",
    
    // Hero
    hero_greeting: "Salut, je suis",
    hero_title: "Développeur Full Stack",
    hero_desc: "Je conçois des expériences web modernes, performantes et élégantes, tout en aidant les entreprises et organisations à renforcer leur présence numérique et à développer leur impact en ligne.",
    hero_btn_projects: "Voir mes projets",
    hero_btn_contact: "Me contacter",
    
    // About
    about_title: "À propos de moi",
    about_subtitle: "Je conçois des solutions web sur mesure qui allient performance, design et croissance pour votre entreprise.",
    about_philosophy_title: "Ma philosophie & ma vision",
    about_philosophy_p1: "Chaque projet est pour moi un partenariat, pas une simple mission. Mon objectif est de comprendre vos besoins, votre public et vos ambitions afin de créer une solution digitale qui soutient durablement votre croissance.",
    about_philosophy_p2: "J'aide les entreprises, marques et startups à améliorer leur visibilité, à générer davantage de ventes et à renforcer leur présence en ligne grâce à des sites performants, modernes et orientés conversion.",
    about_philosophy_p3: "En combinant design soigné, rapidité d'exécution et stratégie orientée résultats, je développe des interfaces intuitives et des systèmes fiables qui contribuent directement à l'augmentation de votre chiffre d'affaires.",
    
    // Skills
    skills_title: "Mes Compétences",
    skills_subtitle: "Technologies que je maîtrise pour donner vie à vos projets",
    
    // Projects
    projects_title: "Mes Projets",
    projects_subtitle: "Voici trois de mes projets récents que j'ai conçus et développés avec passion pour mes clients.",
    projects_demo: "Démo",
    projects_code: "Code",
    
    // Stats
    stats_projects: "Projets Réalisés",
    stats_clients: "Clients Satisfaits",
    stats_experience: "Expérience",
    stats_technologies: "Technologies Maîtrisées",
    
    // Work
    work_title: "Expérience Professionnelle",
    work_subtitle: "Mon parcours professionnel jusqu'à aujourd'hui",
    
    // Testimonials
    testimonials_title: "Ce qu'en disent mes clients",
    testimonials_subtitle: "Des retours authentiques sur mes réalisations",
    
    // FAQ
    faq_title: "Questions Fréquentes",
    faq_subtitle: "Tout ce que vous voulez savoir sur mon travail",
    faq_q1: "Quels sont vos tarifs ?",
    faq_a1: "Mes tarifs varient selon la complexité du projet. Je propose des devis gratuits et personnalisés après avoir analysé vos besoins. Contactez-moi pour en discuter !",
    faq_q2: "Combien de temps prend la création d'un site ?",
    faq_a2: "Un site vitrine prend généralement 2 à 4 semaines. Un site plus complexe (e-commerce, application web) peut prendre 6 à 8 semaines. Je m'engage à respecter les délais convenus.",
    faq_q3: "Proposez-vous un suivi après la livraison ?",
    faq_a3: "Oui, absolument ! J'offre une période de maintenance gratuite de 30 jours après la livraison, puis des formules d'entretien mensuel sont disponibles selon vos besoins.",
    faq_q4: "Quelles technologies utilisez-vous ?",
    faq_a4: "Je maîtrise React.js, Tailwind CSS, PHP, MySQL, et l'intégration d'API REST. Je choisis la stack technique la plus adaptée à votre projet.",
    
    // Contact
    contact_title: "Prenons Contact",
    contact_subtitle: "Un projet ? Écrivons-nous !",
    contact_name: "Votre nom",
    contact_email: "Email",
    contact_message: "Votre message",
    contact_send: "Envoyer le message",
    contact_sending: "Envoi en cours...",
    contact_success: "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
    contact_error: "Erreur lors de l'envoi. Veuillez réessayer.",
    contact_location: "Localisation",
    contact_location_value: "Parakou, Bénin",
    contact_email_label: "Email",
    contact_phone: "Téléphone",
    
    // Footer
    footer_copyright: "© 2025 Takiyulai Dramane – Développeur Web Full Stack à Parakou, Bénin.",
    footer_rights: "Tous droits réservés.",
    
    // Nouveau projet Bar/Restaurant
    project_bar_title: "Gestion de Bar & Restaurant",
    project_bar_desc: "Gestion des stocks de boissons, génération de reçus, tableau de bord chiffre d'affaires.",
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    
    // Hero
    hero_greeting: "Hi, I'm",
    hero_title: "Full Stack Developer",
    hero_desc: "I craft modern, performant, and elegant web experiences, helping businesses and organizations strengthen their digital presence and grow their online impact.",
    hero_btn_projects: "View my projects",
    hero_btn_contact: "Contact me",
    
    // About
    about_title: "About me",
    about_subtitle: "I create custom web solutions combining performance, design, and growth for your business.",
    about_philosophy_title: "My philosophy & vision",
    about_philosophy_p1: "Every project is a partnership to me, not just a mission. My goal is to understand your needs, your audience, and your ambitions to create a digital solution that sustainably supports your growth.",
    about_philosophy_p2: "I help businesses, brands, and startups improve their visibility, generate more sales, and strengthen their online presence with high-performance, modern, conversion-oriented websites.",
    about_philosophy_p3: "By combining refined design, execution speed, and results-oriented strategy, I develop intuitive interfaces and reliable systems that directly contribute to increasing your revenue.",
    
    // Skills
    skills_title: "My Skills",
    skills_subtitle: "Technologies I master to bring your projects to life",
    
    // Projects
    projects_title: "My Projects",
    projects_subtitle: "Here are three of my recent projects I designed and developed with passion for my clients.",
    projects_demo: "Demo",
    projects_code: "Code",
    
    // Stats
    stats_projects: "Projects Done",
    stats_clients: "Happy Clients",
    stats_experience: "Experience",
    stats_technologies: "Technologies Mastered",
    
    // Work
    work_title: "Professional Experience",
    work_subtitle: "My career journey so far",
    
    // Testimonials
    testimonials_title: "What my clients say",
    testimonials_subtitle: "Authentic feedback on my work",
    
    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Everything you want to know about my work",
    faq_q1: "What are your rates?",
    faq_a1: "My rates vary depending on project complexity. I offer free, personalized quotes after analyzing your needs. Contact me to discuss!",
    faq_q2: "How long does it take to build a website?",
    faq_a2: "A showcase site typically takes 2-4 weeks. More complex sites (e-commerce, web app) may take 6-8 weeks. I'm committed to meeting agreed deadlines.",
    faq_q3: "Do you offer post-launch support?",
    faq_a3: "Yes, absolutely! I provide a free 30-day maintenance period after delivery, then monthly maintenance plans are available based on your needs.",
    faq_q4: "What technologies do you use?",
    faq_a4: "I master React.js, Tailwind CSS, PHP, MySQL, and REST API integration. I choose the most suitable tech stack for your project.",
    
    // Contact
    contact_title: "Let's Connect",
    contact_subtitle: "Got a project? Write to me!",
    contact_name: "Your name",
    contact_email: "Email",
    contact_message: "Your message",
    contact_send: "Send message",
    contact_sending: "Sending...",
    contact_success: "Message sent successfully! I'll get back to you shortly.",
    contact_error: "Error sending message. Please try again.",
    contact_location: "Location",
    contact_location_value: "Parakou, Benin",
    contact_email_label: "Email",
    contact_phone: "Phone",
    
    // Footer
    footer_copyright: "© 2025 Takiyulai Dramane – Full Stack Web Developer in Parakou, Benin.",
    footer_rights: "All rights reserved.",
    
    // New Bar/Restaurant project
    project_bar_title: "Bar & Restaurant Management",
    project_bar_desc: "Beverage inventory management, receipt generation, revenue dashboard.",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };
  
  const t = (key) => translations[language][key] || key;
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};