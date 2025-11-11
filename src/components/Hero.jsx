import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r 
      from-dark-100 via-dark-200 to-dark-100'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12'>

        {/* ==== Texte principal ==== */}
        <div className="md:w-1/2">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-4xl md:text-6xl font-bold mb-4 text-white'
          >
            Salut, je suis <span className='text-coral-600'>Takiyulai DRAMANE</span>
          </motion.h1>

          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-2xl md:text-4xl font-semibold mb-6 typewriter text-coral-500'
          >
            Développeur Full Stack
          </motion.h2>

          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='text-lg text-gray-300 mb-8 max-w-xl leading-relaxed'
          >
            Je conçois des expériences web modernes, performantes et élégantes, avec une attention particulière à l’expérience utilisateur.
          </motion.p>

          {/* ==== Boutons CTA ==== */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a 
              href="#projects" 
              className='px-8 py-3 bg-coral-600 rounded-lg font-semibold hover:bg-coral-500 transition-all duration-300 text-white shadow-lg hover:shadow-coral-600/40'
            >
              Voir mes projets
            </a>

            <a 
              href="#contact" 
              className='px-8 py-3 border-2 border-coral-600 rounded-lg font-semibold text-coral-500 hover:bg-coral-600 hover:text-white transition-all duration-300'
            >
              Me contacter
            </a>
          </motion.div>

          {/* ==== Réseaux sociaux ==== */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 text-2xl"
          >
            <a href="https://facebook.com/takiyulai.dramane" target="_blank" rel="noreferrer" className="text-coral-500 hover:text-coral-400 transition">
              <FaFacebook />
            </a>
            <a href="https://wa.me/22969765556" target="_blank" rel="noreferrer" className="text-coral-500 hover:text-coral-400 transition">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/Takiyulai" target="_blank" rel="noreferrer" className="text-coral-500 hover:text-coral-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/takiyulai-dramane-313462a" target="_blank" rel="noreferrer" className="text-coral-500 hover:text-coral-400 transition">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* ==== Image ==== */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          className='md:w-1/2 flex justify-center'
        >
          <div className='relative w-72 h-72 md:w-96 md:h-96'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-coral-500 to-coral-600 opacity-50 animate-pulse'></div>
            <motion.img
              src={assets.profileImg}
              alt="Takiyulai DRAMANE, développeur web full stack" 
              className="relative w-full h-full object-cover rounded-full border-8 border-dark-200 shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
