import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='experience'
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>
          Expérience <span className='text-coral-600'>Professionnelle</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Mon parcours professionnel jusqu'à aujourd'hui
        </p>
        
        <div className='max-w-3xl mx-auto'>
          <div className='space-y-12'>
            {workData.map((data, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0.5 before:h-full before:bg-coral-500"
              >
                <div className="absolute left-[-0.75rem] top-0 w-6 h-6 rounded-full bg-coral-500 border-4 border-dark-100"></div>
                <div className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-1 transition">
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='text-xl font-semibold text-white'>{data.role}</h3>
                    <span className='px-3 py-1 bg-coral-500/20 text-coral-400 rounded-full text-xs'>
                      {data.duration}
                    </span>
                  </div>
                  <p className='text-coral-400 font-medium mb-2'>{data.company}</p>
                  <p className='text-gray-300 text-sm'>{data.desciption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work