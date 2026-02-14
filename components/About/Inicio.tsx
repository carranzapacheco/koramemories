"use client";

import { motion } from "framer-motion";

export const Inicio = () => {
  const title = "Honrando todas las memorias";
  const words = title.split(" ");

  return (
    <section
      className="py-10 px-6 bg-[#EFE7DD] flex flex-col items-center text-center"
    >
      {/* Título animado */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] leading-tight mb-6 flex flex-wrap justify-center md:justify-start gap-2">

        {words.map((word, wordIndex) => {
          const isMedallon = word.toLowerCase() === "memorias";

          if (isMedallon) {
            return (
              <span key={wordIndex} className="flex">
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
                    className="inline-block bg-gradient-to-r from-[#C2A46D] via-[#E7D3A3] to-[#C2A46D] bg-clip-text text-transparent shine"
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


      {/* Foto centrada con animación y visible completa */}
      <motion.img
        src="/nosotros.png"
        alt="Nosotros"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-64 h-auto mb-6 object-contain"
      />

      {/* Párrafo */}
      <p className="text-lg md:text-xl text-[#2E2E2E] max-w-3xl leading-relaxed">
        En Kora Memories creemos que el amor no desaparece, permanece en cada recuerdo.<br /><br />
        Creamos medallones con códigos QR que permiten conservar y compartir la historia,
        las palabras y los momentos de quienes han partido, para que su memoria siga
        acompañando a quienes más los aman.
        <br /><br />
        Nuestro propósito es brindar un homenaje respetuoso y eterno,
        un espacio donde el recuerdo viva y el vínculo nunca se pierda.
      </p>
    </section>
  );
};
