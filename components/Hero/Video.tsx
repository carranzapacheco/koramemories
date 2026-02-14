"use client"

import { motion } from "framer-motion"

export function Video() {
  return (
    <section
      id="inicio"
      className="relative h-[65vh] md:h-[85vh] pt-24 px-6 overflow-hidden bg-black"
    >
      {/* Video con efecto zoom lento */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </motion.video>

      {/* Overlay degradado cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif font-bold text-white"
        >
          <span className="text-[#C48B9F]">Kora</span> {""}
          <span
            className="
              relative
              text-[#2E2E2E]
              [text-shadow:0_0_3px_rgba(255,255,255,0.4)]
              [text-shadow:0_0_8px_rgba(194,164,109,1)]
              [text-shadow:0_0_22px_rgba(194,164,109,0.75)]
            "
          >
            Memories
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed"
        >
          Honramos la memoria de quienes amamos.  
          Los recuerdos no se pierden, viven con nosotros.
        </motion.p>
      </motion.div>
    </section>
  )
}
