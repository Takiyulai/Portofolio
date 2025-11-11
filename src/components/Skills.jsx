import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='skills'
      className="py-16 bg-dark-100"
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-3'>
          Mes <span className='text-coral-600'>Compétences</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base'>
          Technologies que je maîtrise pour donner vie à vos projets
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className='bg-dark-300 rounded-xl p-5 hover:-translate-y-2 transition duration-300 border border-dark-400 shadow-sm'
            >
              <div className='flex items-center gap-3 mb-3'>
                <skill.icon className='w-8 h-8 text-coral-500' />
                <h3 className='text-lg font-semibold text-white'>{skill.title}</h3>
              </div>
              <p className='text-gray-400 mb-3 text-xs md:text-sm leading-relaxed'>
                {skill.description}
              </p>
              <div className='flex flex-wrap gap-1.5'>
                {skill.tags.map((tag, j) => (
                  <span
                    key={j}
                    className='px-2.5 py-0.5 bg-coral-500/20 text-coral-400 rounded-full text-[11px]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
