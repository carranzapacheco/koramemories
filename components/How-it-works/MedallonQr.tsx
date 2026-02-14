'use client'

import React from 'react'
import { motion, Variants, easeOut } from 'framer-motion'

const textVariant: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const MedallonQr: React.FC = () => {
  const title = "¿Qué significa el medallón QR?";
  const words = title.split(" ");

  return (
    <section className="w-full bg-[#EFE7DD] text-[#2E2E2E] font-sans">
      {/* Contenedor centrado con márgenes iguales */}
      <div className="max-w-7xl mx-auto px md:px-12 py-16">

        {/* Título */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] leading-tight mb-6 flex flex-wrap justify-center md:justify-start gap-2">
          {words.map((word, wordIndex) => {
              const isMedallón = word.toLowerCase() === "medallón";

              if (isMedallón) {
                return (
                  <span
                    key={wordIndex}
                    className="flex"
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: [20, -6, 0], opacity: 1 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{
                          delay: wordIndex * 0.2 + charIndex * 0.05,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="inline-block shine"
                      >
                        {char}
                      </motion.span>
                    ))}
                    &nbsp;
                  </span>
                );
              }

              return (
                <motion.span
                  key={wordIndex}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: [30, -6, 0], opacity: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{
                    delay: wordIndex * 0.2,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              );
            })}
        </h2>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda */}
          <motion.div
            className="flex flex-col space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            {/* Texto */}
            <div className="space-y-6 max-w-lg mx-auto md:ml-auto">
              <p className="text-lg leading-relaxed text-center md:text-left">
                El medallón es un puente entre el presente y los recuerdos,  
                que te permite sentir cerca a tu ser querido y mantener viva su esencia.
              </p>

              <p className="text-lg leading-relaxed font-medium text-center md:text-left">
                En su interior guarda un código QR único que abre un perfil digital,  
                donde cada foto, video y mensaje revive su historia y los momentos que atesoras.
              </p>
            </div>

            {/* Imagen pequeña */}
            <div className="max-w-sm mx-auto md:ml-auto rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Kora Memories.png"
                alt="Medallón QR en lápida"
                className="w-full max-w-[250px] h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            className="flex flex-col items-center md:items-end space-y-4"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {/* Imagen grande con narrativa */}
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/fondoperfil.jpg"
                alt="Cementerio rodeado de árboles"
                className="w-full h-full object-cover"
              />

              {/* Overlay emocional */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#EFE7DD]/70 via-transparent to-transparent" />
            </div>

            {/* Texto narrativo */}
            <p className="text-sm italic text-[#6B6B6B] max-w-md text-center md:text-right">
              Un lugar de calma donde los recuerdos permanecen,
              incluso cuando no estamos.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
