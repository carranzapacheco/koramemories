"use client";

import { motion } from "framer-motion";
import { Heart, Shield, MessageCircle } from "lucide-react";

export const Header = () => {
  const title = "Conversemos sobre el medallón QR";
  const words = title.split(" ");

  const pillars = [
    {
      icon: Heart,
      title: "Acompañamiento humano",
      text: "Estamos contigo en cada paso del proceso.",
      color: "#C48B9F",
    },
    {
      icon: Shield,
      title: "Confianza y seguridad",
      text: "Tus recuerdos están protegidos con total cuidado.",
      color: "#C48B9F",
    },
    {
      icon: MessageCircle,
      title: "Atención cercana",
      text: "Resolvemos tus dudas de manera clara y personalizada.",
      color: "#C48B9F",
    },
  ];

  return (
    <section className="relative bg-[#EFE7DD] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-3 md:px-12">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <span className="text-xs md:text-sm tracking-widest uppercase text-[#C2A46D]">
            Estamos para acompañarte
          </span>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="text-center md:text-left">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] leading-snug mb-6 flex flex-wrap justify-center md:justify-start gap-2">
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
                  >
                    {word}&nbsp;
                  </motion.span>
                );
              })}
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-[#C2A46D] mb-6 rounded-full mx-auto md:mx-0"
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[#2E2E2E] text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0"
            >
              Estamos aquí para acompañarte y resolver cualquier duda que tengas.
              Cada recuerdo merece ser preservado con respeto y cuidado.
            </motion.p>
          </div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
              className="relative w-full max-w-xs sm:max-w-sm"
            >
              <div className="absolute -inset-4 bg-[#C2A46D]/20 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-[#C2A46D] transition-all duration-500">
                <img
                  src="/converse.png"
                  alt="Acompañamiento Kora Memories"
                  className="rounded-2xl w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* BLOQUE EMOCIONAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-[#2E2E2E] text-lg md:text-2xl font-serif mb-12 max-w-2xl mx-auto leading-relaxed">
            En Kora Memories creemos que cada historia merece ser recordada con
            amor, respeto y permanencia.
          </p>

          {/* Pilares */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                  }}
                  whileHover={{ y: -6 }}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-[#C2A46D]/30 shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex justify-center mb-4">
                    <Icon
                      size={30}
                      style={{ color: item.color }}
                    />
                  </div>

                  <h4 className="font-semibold text-[#2E2E2E] mb-3 text-lg">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#1f1f1f] leading-relaxed">
                    {item.text}
                  </p>

                  <div className="h-[2px] bg-[#C2A46D] w-12 mx-auto mt-6 rounded-full" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
