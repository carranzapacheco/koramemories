"use client";

import { motion, type Variants, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";   
import { Eye, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const item: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const Proposito = () => {
  const title = "Nuestro propósito de corazón";
  const words = title.split(" ");

  // Hook global de scroll
  const { scrollYProgress } = useScroll(); // scroll de toda la página

  // Transforms para animaciones 3D y nubes
  const cloudLeftY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const cloudRightY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const goldOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.35]);
  const haloScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="py-20 px-6 bg-[#F5F1EC] flex justify-center overflow-hidden relative">
      <motion.div
        className="max-w-6xl w-full"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }} // <-- clave para móviles
      >
        {/* TÍTULO ANIMADO */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] leading-tight mb-20 flex flex-wrap justify-center md:justify-start gap-2">
          {words.map((word, wordIndex) => {
            const isEterno = word.toLowerCase() === "corazón";

            if (isEterno) {
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
                      viewport={{ once: false, amount: 0 }}
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
                viewport={{ once: false, amount: 0 }}
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

        {/* MISIÓN / VISIÓN / VALORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
          {[{
            icon: Heart,
            title: "Misión",
            text: "Acompañar a las familias en el recuerdo de sus seres queridos, creando homenajes que preserven el amor más allá del tiempo."
          }, {
            icon: Eye,
            title: "Visión",
            text: "Ser un puente entre la memoria y el presente, donde cada historia pueda seguir siendo contada."
          }, {
            icon: Sparkles,
            title: "Valores",
            text: "Respeto, empatía, sensibilidad y compromiso con cada memoria que nos es confiada."
          }].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#C2A46D]/70 rounded-2xl p-8 text-center shadow-sm"
            >
              <Icon className="mx-auto mb-4 text-[#C2A46D]" size={32} />
              <h3 className="text-2xl font-serif text-[#2E2E2E] mb-3">{title}</h3>
              <p className="text-[#1f1f1f] leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* SOBRE MÍ */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        >
          <motion.div variants={item}>
            <h3 className="text-3xl font-serif text-[#2E2E2E] mb-5 text-center md:text-start">
              Sobre mí
            </h3>
            <p className="text-[#1f1f1f] text-lg leading-relaxed">
              Kora Memories nace desde una experiencia personal y una necesidad profunda
              de mantener viva la memoria de quienes amamos.
              <br /><br />
              Creo que recordar es una forma de amar, y que cada historia merece ser
              cuidada con respeto, sensibilidad y tiempo.
              Este proyecto es mi manera de acompañar a otras familias en ese mismo camino.
              <br /><br />
              Perdí a un hermano que significó y significa mucho para mí.
              Su recuerdo es la base de mi inspiración y dedicación en Kora Memories.
              Por eso, el ejemplo de perfil personalizado que comparto está dedicado a él:
              Steffano, a quien con cariño llamamos Fano.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex justify-center">
            <div className="relative w-[280px] md:w-[420px] aspect-[4/5]">
              <Image
                src="/sobremi.png"
                alt="Creador de Kora Memories"
                fill
                sizes="(max-width: 768px) 280px, 420px"
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RECUERDO PERSONAL */}
        <div className="relative w-full">
          <motion.div
            variants={item}
            style={{ perspective: 1200 }}
            className="relative mt-24 w-full flex justify-center py-28 min-h-[500px] md:min-h-[600px] overflow-visible"
          >
            {/* NUBES */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">

              {/* NUBE IZQUIERDA */}
              <motion.div
                style={{ y: cloudLeftY }}
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 3, ease: EASE }}
                className="absolute left-[-80px] top-[-20px] md:left-[-150px] md:top-1/2 md:-translate-y-1/2"
              >
                <motion.img
                  src="/cloud-left.png"
                  alt=""
                  className="w-[320px] md:w-[520px] opacity-80"
                  animate={{ x: [0, 40, 0] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* NUBE DERECHA */}
              <motion.div
                style={{ y: cloudRightY }}
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 0.5, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 3.5, ease: EASE }}
                className="absolute right-[-80px] bottom-[-20px] md:right-[-150px] md:top-1/2 md:bottom-auto md:-translate-y-1/2"
              >
                <motion.img
                  src="/cloud-right.png"
                  alt=""
                  className="w-[320px] md:w-[520px] opacity-70"
                  animate={{ x: [0, -40, 0] }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* HALO DORADO */}
              <motion.div
                style={{ opacity: goldOpacity, scale: haloScale }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#C2A46D] blur-[140px] rounded-full"
              />
            </div>

            {/* CONTENIDO 3D */}
            <motion.div
              style={{ rotateY, y: floatY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="relative w-56 md:w-64 aspect-square mb-4" style={{ transform: "translateZ(40px)" }}>
                <Image
                  src="/hermanos.png"
                  alt="Recuerdo junto a mi hermano Steffano"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="rounded-xl object-cover shadow-xl"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: EASE }}
                className="text-sm md:text-base text-[#1f1f1f] max-w-xs leading-relaxed"
              >
                Un recuerdo junto a mi hermano Steffano (Fano),
                <span className="text-[#C2A46D] font-medium"> presente en cada paso </span>
                de este proyecto.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

