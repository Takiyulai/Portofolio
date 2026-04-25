import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../assets/assets'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
  const { t, language } = useLanguage()
  const isFrench = language === 'fr'

  // Ajoute la description traduite à chaque projet
  const projectsWithTranslation = projects.map(project => ({
    ...project,
    description: isFrench ? project.descriptionFr : project.descriptionEn
  }))

  return (
    <section id="projects" className="py-20 bg-dark-100">
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>
          {t('projects_title')?.split(' ')[0]} <span className='text-coral-600'>{t('projects_title')?.split(' ')[1]}</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-14 text-sm md:text-base'>
          {t('projects_subtitle')}
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {projectsWithTranslation.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects