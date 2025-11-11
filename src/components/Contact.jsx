import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const phone = "22969765556"
  const message = encodeURIComponent("Bonjour Takiyulai, je souhaite discuter d'un projet web.")

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      id='contact'
      className="py-20 bg-dark-100"
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Prenons <span className='text-coral-600'>Contact</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Un projet ? Écrivons-nous sur WhatsApp !
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <form action={`https://wa.me/${phone}?text=${message}`} method="get" target="_blank" className='space-y-6'>
            <input required placeholder="Votre nom" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-coral-500' />
            <input required type="email" placeholder="Email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-coral-500' />
            <textarea required placeholder="Votre message" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-coral-500'></textarea>
            <button type='submit' className='w-full px-6 py-4 bg-coral-600 rounded-lg font-medium hover:bg-coral-500 transition flex items-center justify-center gap-2 text-white'>
              <FaWhatsapp /> Envoyer sur WhatsApp
            </button>
          </form>

          <div className="space-y-8">
            <div className='flex items-start gap-4'>
              <FaMapMarkerAlt className="text-coral-500 text-2xl" />
              <div><h3 className='font-semibold'>Localisation</h3><p className='text-gray-400'>Parakou, Bénin</p></div>
            </div>
            <div className='flex items-start gap-4'>
              <FaEnvelope className="text-coral-500 text-2xl" />
              <div><h3 className='font-semibold'>Email</h3><p className='text-gray-400'>takiyulai0dramane@gmail.com</p></div>
            </div>
            <div className='flex items-start gap-4'>
              <FaPhone className="text-coral-500 text-2xl" />
              <div><h3 className='font-semibold'>Téléphone</h3><p className='text-gray-400'>+229 69 76 55 56</p></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact