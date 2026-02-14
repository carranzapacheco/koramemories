'use client'

import React from 'react'

export const Contacto: React.FC = () => {
  return (
    <section className="w-full bg-[#EFE7DD] py-20 px-6 flex flex-col items-center text-center">
      
      {/* Título */}
      <h2 className="max-w-4xl text-[#2E2E2E] text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
        Sus recuerdos viven contigo
      </h2>

      {/* Descripción */}
      <p className="max-w-2xl text-[#1f1f1f] text-lg md:text-xl mb-10 leading-relaxed">
        Cada sonrisa, cada momento compartido sigue acompañándote. 
        Creamos un espacio donde su memoria se cuida con amor, y donde cada detalle es un abrazo que perdura.
      </p>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/51914824316?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20el%20Medall%C3%B3n%20QR.%20Este%20es%20el%20codigo%3A"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center
                   bg-[#C48B9F] hover:bg-[#C2A46D]
                   text-white px-10 py-4 rounded-full
                   font-bold text-lg shadow-lg
                   transition-all duration-300 transform hover:-translate-y-1"
      >
        Contáctanos por WhatsApp
      </a>

    </section>
  )
}
