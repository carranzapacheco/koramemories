"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Creaqr = () => {
  const title = "Su esencia vive en cada recuerdo";
  const words = title.split(" ");

  return (
    <section className="bg-[#EFE7DD] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] leading-tight mb-6 flex flex-wrap justify-center md:justify-start gap-2">
            {words.map((word, wordIndex) => {
              const isRecuerdo = word.toLowerCase() === "recuerdo";

              if (isRecuerdo) {
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
                        className="inline-block bg-clip-text text-transparent"
                        style={{
                          backgroundImage: "linear-gradient(90deg, #C2A46D, #D4B97D, #C2A46D)",
                          backgroundSize: "200% auto",
                          animation: "shine 2.5s linear infinite",
                        }}
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

          {/* Texto descriptivo */}
          <p className="text-[#2E2E2E] text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
            Escanea el medallón de tu ser querido y deja que los recuerdos vuelvan a cobrar vida: fotografías, videos y momentos inolvidables que podrás revivir desde cualquier lugar. <br />
            Es un homenaje lleno de amor para esa persona tan especial que marcó nuestras vidas, una forma de mantener viva su memoria, su esencia y el vínculo que nos une para siempre, incluso más allá del tiempo y la distancia.
          </p>

          <Link
            href="/store"
            className="inline-block bg-[#C48B9F] hover:bg-[#C2A46D] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-300"
          >
            Crear mi Medallón
          </Link>
        </div>

        {/* QR */}
        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://steffanomoya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white p-1 rounded-[50px] shadow-2xl max-w-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/Kora Memories.png"
                alt="Código QR Kora Moments"
                width={380}
                height={380}
                className="rounded-[30px]"
              />
            </div>
          </a>

          <a
            href="https://steffanomoya.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5"
          >
            <p className="text-sm text-[#2E2E2E]/70 tracking-wide hover:text-[#C2A46D] transition">
              Ver ejemplo de recuerdo
            </p>
          </a>
        </div>

      </div>

      {/* Estilos para el brillo animado */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
};
