'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Perfilejem: React.FC = () => {
  return (
    <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Imagen de fondo con leve animación */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/fondoperfil.jpg"
          alt="Recuerdos que permanecen"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Tarjeta central */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-[90%] max-w-lg bg-[#F5F1EC] p-8 md:p-12 rounded-[40px] shadow-2xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-[#2E2E2E]"
        >
          La vida merece ser recordada con amor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm md:text-base font-medium mb-10 leading-relaxed text-[#1f1f1f]"
        >
        Un medallón que guarda su esencia para siempre. <br />
        Revive cada instante compartido: fotos, videos, mensajes y recuerdos que te acercan a ellos. <br />
        Siente su presencia, su risa y su amor, como si estuvieran contigo, hoy y siempre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="https://steffanomoya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C48B9F] text-white px-10 py-3 rounded-full
                      font-semibold text-sm shadow-md transition-all
                      hover:bg-[#b5965f] hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver perfil de ejemplo
          </a>

        </motion.div>
      </motion.div>
    </section>
  )
}
