import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const links = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#testimonials", label: "Témoignages" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <nav className='fixed w-full z-50 bg-dark-100/95 backdrop-blur-sm py-4 px-6 shadow-xl'>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className='text-2xl md:text-3xl font-bold text-white flex items-center gap-2'>
          Takiyulai <span className='text-coral-600'>DRAMANE</span>
          <div className="w-3 h-3 bg-coral-600 rounded-full"></div>
        </a>

        <div className="hidden md:flex space-x-8">
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
        </div>

        <button onClick={() => setShowMenu(!showMenu)} className='md:hidden text-2xl text-white'>
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
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