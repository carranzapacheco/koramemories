'use client'

import React from "react";
import { Heart, Pencil, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const Beneficios: React.FC = () => {
  const benefits = [
  {
    title: "Un recuerdo que nunca se apaga",
    description:
      "El medallón convierte los momentos y recuerdos en algo eterno. No se trata solo de una lápida o un día especial: guarda historias, fotos y emociones para que las futuras generaciones sigan sintiendo su presencia.",
    icon: Heart,
  },
  {
    title: "Cercanía sin importar la distancia",
    description:
      "Con solo escanear el QR, familiares y amigos pueden sentirse cerca, aunque estén lejos. Es una manera de compartir amor y recuerdos, manteniendo los lazos vivos sin importar dónde estén.",
    icon: Pencil,
  },
  {
    title: "Un homenaje lleno de vida",
    description:
      "Cada perfil digital es único y refleja la esencia de la persona que amamos. Es un espacio íntimo donde todos podemos recordar, celebrar y sentir su presencia cada día.",
    icon: Users,
  },
];


  // Variantes para animación scroll + stagger
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Las cards salen una por una
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 px-4 bg-[#F5F1EC]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] mb-16 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Beneficios
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#F5F1EC] rounded-[40px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center border border-[#C2A46D] cursor-pointer"
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 50px rgba(0,0,0,0.15)" }}
              >
                {/* Contenedor del Icono */}
                <motion.div
                  className="w-32 h-32 bg-[#C48B9F] rounded-full flex items-center justify-center mb-8 transition-colors duration-300"
                  whileHover={{ backgroundColor: "#C2A46D" }} // Cambia color al pasar mouse
                >
                  <Icon className="w-16 h-16 text-[#2E2E2E] stroke-[1.5]" />
                </motion.div>

                {/* Texto */}
                <h3 className="text-xl font-serif font-bold text-[#2E2E2E] mb-4 px-2 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-[#1f1f1f] leading-relaxed text-[15px]">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

