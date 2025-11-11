import React from 'react'
import { motion } from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        {/* ===== TITLE ===== */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          À propos <span className='text-coral-600'>de moi</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Je conçois des solutions web sur mesure qui allient performance, design et croissance pour votre entreprise.
        </p>

        {/* ===== CONTENT ===== */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* ===== IMAGE À GAUCHE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-[45%] flex justify-center md:justify-start"
          >
            <img
              src={assets.profileImg}
              alt="Takiyulai DRAMANE, développeur web full stack" 
              className="w-[90%] md:w-[95%] h-auto rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* ===== TEXTE À DROITE ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-[55%] text-gray-300 space-y-6"
          >
            <h3 className='text-2xl font-semibold text-white'>
              Ma philosophie & ma vision
            </h3>

            <p>
              Chaque projet est pour moi un partenariat, pas une simple mission. 
              Mon objectif est de comprendre vos besoins, votre public et vos ambitions 
              afin de créer une solution digitale qui soutient durablement votre croissance.
            </p>

            <p>
              J’aide les entreprises, marques et startups à améliorer leur visibilité, 
              à générer davantage de ventes et à renforcer leur présence en ligne 
              grâce à des sites performants, modernes et orientés conversion.
            </p>

            <p>
              En combinant design soigné, rapidité d’exécution et stratégie orientée résultats, 
              je développe des interfaces intuitives et des systèmes fiables 
              qui contribuent directement à l’augmentation de votre chiffre d’affaires.
            </p>

            {/* ===== MINI CARDS ===== */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
              {aboutInfo.map((data, i) => (
                <div
                  key={i}
                  className='bg-dark-300 rounded-xl p-4 hover:-translate-y-1 transition border border-dark-400 text-center shadow-md'
                >
                  <div className='text-coral-500 text-3xl mb-2 flex justify-center'>
                    <data.icon />
                  </div>
                  <h4 className='font-semibold text-white text-sm'>{data.title}</h4>
                  <p className='text-gray-400 text-xs'>{data.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
