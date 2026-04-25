import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/takiyulai0dramane@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio - Message de ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      })

      if (response.ok) {
        setStatus({ type: 'success', message: t('contact_success') })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: t('contact_error') })
      }
    } catch (error) {
      setStatus({ type: 'error', message: t('contact_error') })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }

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
          {t('contact_title')?.split(' ')[0]} <span className='text-coral-600'>{t('contact_title')?.split(' ')[1]}</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          {t('contact_subtitle')}
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          
          {/* Formulaire avec FormSubmit */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact_name')}
                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-coral-500 text-white placeholder-gray-500'
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact_email')}
                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-coral-500 text-white placeholder-gray-500'
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t('contact_message')}
                rows="5"
                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-coral-500 text-white placeholder-gray-500 resize-none'
              ></textarea>
            </div>
            
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full px-6 py-4 bg-coral-600 rounded-lg font-medium hover:bg-coral-500 transition flex items-center justify-center gap-2 text-white disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> {t('contact_sending')}</>
              ) : (
                <><FaPaperPlane /> {t('contact_send')}</>
              )}
            </button>

            {/* Message de status */}
            {status.message && (
              <div className={`flex items-center gap-2 p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                <span className="text-sm">{status.message}</span>
              </div>
            )}
          </form>

          {/* Infos contact */}
          <div className="space-y-8">
            <div className='flex items-start gap-4 group'>
              <div className='p-3 bg-coral-500/20 rounded-xl group-hover:bg-coral-500/30 transition'>
                <FaMapMarkerAlt className="text-coral-500 text-xl" />
              </div>
              <div>
                <h3 className='font-semibold text-white'>{t('contact_location')}</h3>
                <p className='text-gray-400'>{t('contact_location_value')}</p>
              </div>
            </div>
            <div className='flex items-start gap-4 group'>
              <div className='p-3 bg-coral-500/20 rounded-xl group-hover:bg-coral-500/30 transition'>
                <FaEnvelope className="text-coral-500 text-xl" />
              </div>
              <div>
                <h3 className='font-semibold text-white'>{t('contact_email_label')}</h3>
                <a href="mailto:takiyulai0dramane@gmail.com" className='text-gray-400 hover:text-coral-500 transition'>
                  takiyulai0dramane@gmail.com
                </a>
              </div>
            </div>
            <div className='flex items-start gap-4 group'>
              <div className='p-3 bg-coral-500/20 rounded-xl group-hover:bg-coral-500/30 transition'>
                <FaPhone className="text-coral-500 text-xl" />
              </div>
              <div>
                <h3 className='font-semibold text-white'>{t('contact_phone')}</h3>
                <a href="tel:+22969765556" className='text-gray-400 hover:text-coral-500 transition'>
                  +229 69 76 55 56
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact