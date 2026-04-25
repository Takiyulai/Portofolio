import React from 'react'
import { motion } from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { language, t } = useLanguage()
  const isFrench = language === 'fr'

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
        <h2 className='text-3xl font-bold text-center mb-4'>
          {t('about_title')?.split(' ')[0]} <span className='text-coral-600'>{t('about_title')?.split(' ')[2] || t('about_title')?.split(' ')[1]}</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          {t('about_subtitle')}
        </p>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          
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

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-[55%] text-gray-300 space-y-6"
          >
            <h3 className='text-2xl font-semibold text-white'>
              {t('about_philosophy_title')}
            </h3>

            <p>{t('about_philosophy_p1')}</p>
            <p>{t('about_philosophy_p2')}</p>
            <p>{t('about_philosophy_p3')}</p>

            {/* MINI CARDS BILINGUES */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
              {aboutInfo.map((data, i) => (
                <div
                  key={i}
                  className='bg-dark-300 rounded-xl p-4 hover:-translate-y-1 transition border border-dark-400 text-center shadow-md'
                >
                  <div className='text-coral-500 text-3xl mb-2 flex justify-center'>
                    <data.icon />
                  </div>
                  <h4 className='font-semibold text-white text-sm'>
                    {isFrench ? data.titleFr : data.titleEn}
                  </h4>
                  <p className='text-gray-400 text-xs'>
                    {isFrench ? data.descriptionFr : data.descriptionEn}
                  </p>
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