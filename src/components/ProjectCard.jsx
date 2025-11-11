import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-3 transition-all duration-300 cursor-pointer shadow-xl group'>
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className='w-full h-56 object-cover group-hover:scale-110 transition duration-500' />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4 text-sm'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-6'>
          {tech.map((item, i) => (
            <span key={i} className='px-3 py-1 bg-coral-500/20 text-coral-400 rounded-full text-xs'>
              {item}
            </span>
          ))}
        </div>
        <div className='flex gap-3'>
          <a href={demo} target="_blank" className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-coral-600 text-white rounded-lg hover:bg-coral-500 transition'>
            <FaExternalLinkAlt /> Démo
          </a>
          <a href={code} target="_blank" className='flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-coral-500 text-coral-500 rounded-lg hover:bg-coral-500/10 transition'>
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard