import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../assets/assets'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="testimonials"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Ce qu'en disent <span className="text-coral-600">mes clients</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Des retours authentiques sur mes réalisations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{t.content}"</p>
              <div>
                <p className="font-semibold text-coral-500">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials