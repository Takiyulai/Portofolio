import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const phone = "22969765556";
  const message = encodeURIComponent("Bonjour Takiyulai, je souhaite discuter d'un projet web.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      aria-label="Contact WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-200 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;