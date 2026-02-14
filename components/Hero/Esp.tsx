"use client";

import Image from "next/image"
import { motion } from "framer-motion"

export const Esp= () =>{
  const title = "Un refugio donde vive su alma";
  const words = title.split(" ");

  return (
    <section className="bg-[#F5F1EC] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Lado Izquierdo: Texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] leading-tight mb-6 flex flex-wrap justify-center md:justify-start gap-2">
            {words.map((word, wordIndex) => {
              const isVive = word.toLowerCase() === "vive";

              if (isVive) {
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

          <p className="text-[#2E2E2E]/80 text-lg md:text-xl leading-relaxed">
            Creamos un espacio digital lleno de amor para tu ser querido, accesible con un 
            <span className="font-semibold text-[#2F2F2F]"> Medallón QR</span>.  
            Allí podrás guardar fotos, videos, canciones y recuerdos que abrazan el corazón,  
            para que tú y tu familia siempre sientan su cercanía y su presencia, más allá del tiempo y la distancia.
          </p>

        </div>

        {/* Lado Derecho: Imagen */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-[40px] overflow-hidden shadow-xl">

            <Image
              src="/esp.jpeg"
              alt="Preserva sus recuerdos"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay superior */}
            <div className="absolute top-6 inset-x-0 flex justify-center">
              <span
                className="bg-[#C2A46D] backdrop-blur-md px-6 py-2 rounded-full
                           text-[#2E2E2E] tracking-[0.25em] text-xs md:text-sm
                           font-medium uppercase shadow-sm"
              >
                Preserva sus recuerdos
              </span>
            </div>

            {/* Texto inferior */}
            <div className="absolute bottom-8 inset-x-0 text-center">
              <p className="text-white text-xs md:text-sm tracking-widest font-medium drop-shadow">
                ESCANEA · REVIVE · CONECTA
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}
