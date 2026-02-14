"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export const Dvideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Parallax scroll
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const title = "Descubre cómo funciona el medallón";
  const words = title.split(" ");

  return (
    <section className="relative bg-[#EFE7DD] py-32 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        {/* TÍTULO ANIMADO */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-snug mb-8 flex flex-wrap justify-center gap-2">
          {words.map((word, wordIndex) => {
            const isMedallon = word.toLowerCase() === "medallón";

            if (isMedallon) {
              return (
                <span key={wordIndex} className="flex">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: [20, -6, 0], opacity: 1 }}
                      viewport={{ amount: 0.8 }}
                      transition={{
                        delay: wordIndex * 0.2 + charIndex * 0.05,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="inline-block bg-gradient-to-r from-[#C2A46D] via-[#E7D3A3] to-[#C2A46D] bg-clip-text text-transparent"
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
                viewport={{ amount: 0.8 }}
                transition={{
                  delay: wordIndex * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-[#C48B9F]"
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </h2>


        {/* CONTENEDOR CON PARALLAX */}
        <motion.div style={{ y }} className="relative group pt-15 md:pt-25">

          {/* Glow Dorado */}
          <div className="absolute -inset-6 bg-[#C2A46D]/20 blur-3xl rounded-3xl opacity-60 transition duration-700" />

          {/* Marco Premium */}
          <div className="relative bg-[#C2A46D] backdrop-blur-xl border-2 border-white rounded-3xl p-2 md:p-4 shadow-xl transition-all duration-500 group-hover:shadow-[0_15px_60px_rgba(194,164,109,0.35)]">

            <div className="relative rounded-2xl overflow-hidden">

              {/* Video */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                controls={isPlaying}
                className="w-full h-auto rounded-2xl"
                src="/video-explicativo.mp4"
              />
              {/* Overlay oscuro elegante */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center transition-all duration-500">

                  {/* Botón Play */}
                  <button
                    onClick={handlePlay}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full bg-[#C48B9F] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
                  >
                    <Play
                      size={20}
                      className="text-white ml-[2px] sm:ml-1"
                      fill="white"
                    />
                  </button>

                  {/* Texto */}
                  <p className="mt-4 text-sm sm:text-base md:text-2xl font-medium text-[#2E2E2E]">
                    Ver video
                  </p>

                </div>
              )}

            </div>
          </div>
        </motion.div>

        {/* Texto inferior */}
        <div className="md:mt-10 mt-5">
        <div className="flex justify-center">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C2A46D] to-transparent" />
        </div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-serif text-[#C48B9F] mt-12"
          >
            Un recuerdo que trasciende generaciones
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="text-[#2a2a2a] text-base md:text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            El medallón digital no es solo tecnología. 
            Es un puente entre el presente y la memoria. 
            Una forma discreta y elegante de preservar historias,
            fotografías y palabras que merecen permanecer.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="font-semibold text-[#2E2E2E] mb-2 text-lg">
                Seguridad privada
              </h4>
              <p className="text-sm text-[#1f1f1f]">
                Cada homenaje está protegido y accesible solo para quienes tú decidas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">📱</div>
              <h4 className="font-semibold text-[#2E2E2E] mb-2 text-lg">
                Acceso universal
              </h4>
              <p className="text-sm text-[#1f1f1f]">
                Compatible con cualquier dispositivo sin necesidad de aplicaciones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">✨</div>
              <h4 className="font-semibold text-[#1f1f1f] mb-2 text-lg">
                Diseño atemporal
              </h4>
              <p className="text-sm text-[#1f1f1f]">
                Estética sobria y elegante, pensada para honrar con respeto y distinción.
              </p>
            </motion.div>
          </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="https://steffanomoya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#C2A46D] via-[#C48B9F] to-[#C2A46D] text-white font-medium shadow-xl hover:scale-105 transition-all duration-300"
          >
            Medallón de ejemplo
          </a>
        </motion.div>

        </div>


      </div>
    </section>
  );
};
