import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import { FaGlobe } from 'react-icons/fa'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const links = [
    { href: "#home", label: t('nav_home') },
    { href: "#about", label: t('nav_about') },
    { href: "#skills", label: t('nav_skills') },
    { href: "#projects", label: t('nav_projects') },
    { href: "#testimonials", label: t('nav_testimonials') },
    { href: "#contact", label: t('nav_contact') }
  ]

  return (
    <nav className='fixed w-full z-50 bg-dark-100/95 backdrop-blur-sm py-4 px-6 shadow-xl'>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className='text-2xl md:text-3xl font-bold text-white flex items-center gap-2'>
          Takiyulai <span className='text-coral-600'>DRAMANE</span>
          <div className="w-3 h-3 bg-coral-600 rounded-full"></div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-white/80 hover:text-coral-500 transition duration-300 group"
            >
              <span>{link.label}</span>
              <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
          
          {/* Bouton langue */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-coral-500/20 text-coral-400 hover:bg-coral-500/30 transition"
          >
            <FaGlobe className="text-sm" />
            <span className="font-semibold text-sm">{language === 'fr' ? 'FR' : 'EN'}</span>
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-lg bg-coral-500/20 text-coral-400 text-xs font-semibold"
          >
            {language === 'fr' ? 'FR' : 'EN'}
          </button>
          <button onClick={() => setShowMenu(!showMenu)} className='text-2xl text-white'>
            {showMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className='md:hidden mt-4 bg-dark-200 rounded-xl p-6 shadow-xl'>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setShowMenu(false)} className='block py-3 text-white/80 hover:text-coral-500 transition'>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar