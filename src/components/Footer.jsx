import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 bg-dark-200 border-t border-dark-300">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://facebook.com/takiyulai.dramane.1" target="_blank" className="text-coral-400 hover:text-coral-500 text-2xl"><FaFacebook /></a>
          <a href="https://wa.me/22969765556" target="_blank" className="text-coral-400 hover:text-coral-500 text-2xl"><FaWhatsapp /></a>
          <a href="https://github.com/Takiyulai" target="_blank" className="text-coral-400 hover:text-coral-500 text-2xl"><FaGithub /></a>
          <a href="https://linkedin.com/in/takiyulai-dramane-313462a" target="_blank" className="text-coral-400 hover:text-coral-500 text-2xl"><FaLinkedin /></a>
        </div>
        <p className="text-gray-400">© 2025 Takiyulai Dramane – Développeur Web Full Stack à Parakou, Bénin.</p>
        <p className="text-gray-400">Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer