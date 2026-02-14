'use client'

import React from "react";
import { motion, Variants } from "framer-motion";

export const Perfil: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // 👉 Clase reutilizable para todos los cards
  const cardBase =
    "bg-white/40 border border-[#C2A46D]/80 shadow-[0_0_0_1px_rgba(194,164,109,0.35)]";

  return (
    <section className="w-full py-16 bg-[#EFE7DD]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* TÍTULO */}
        <motion.h2
          className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] mb-16 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Qué incluye el Perfil
        </motion.h2>

        {/* GRID PRINCIPAL */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ================= COLUMNA IZQUIERDA ================= */}
          <div className="flex flex-col gap-6 items-center">
            {/* TEXTO */}
            <motion.div
              className={`${cardBase} rounded-[32px] p-6 w-full max-w-[360px] text-center`}
              variants={cardVariants}
            >
              <h2 className="text-[#2E2E2E] text-xl font-serif font-bold mb-3">
                Control Total de Privacidad
              </h2>
              <p className="text-[#1f1f1f] text-[14px] leading-relaxed">
                Agrega imágenes y momentos especiales que quieras conservar para siempre
                y comparte recuerdos con tus seres queridos.
              </p>
            </motion.div>

            {/* IMAGEN */}
            <motion.div
              className={`${cardBase} rounded-[28px] p-5 w-full max-w-[360px] flex justify-center cursor-pointer`}
              variants={cardVariants}
              whileHover={{ scale: 1.01, y: -6, rotate: -2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <img
                src="/perfil-full.png"
                alt="Recuerdos"
                className="w-full max-w-[199px] object-contain rounded-[20px]"
              />
            </motion.div>
          </div>

          {/* ================= COLUMNA DERECHA ================= */}
          <div className="flex flex-col gap-14 items-center">
            {/* BLOQUE 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <motion.div
                className={`${cardBase} rounded-[40px] p-8 w-full max-w-[360px]`}
                variants={cardVariants}
              >
                <h2 className="text-[#2E2E2E] text-xl text-center font-serif font-bold mb-3">
                  Biografía y Vida Plena
                </h2>
                <p className="text-[#1f1f1f] text-center text-[15px] leading-relaxed">
                  Comparte la historia completa de su vida: sus sueños, logros, pasiones y la huella que dejó en quienes lo rodearon. Un lugar donde su legado puede inspirar y tocar a todos.
                </p>
              </motion.div>

              <motion.div
                className={`${cardBase} rounded-[30px] p-5 w-full max-w-[360px] h-64 flex items-center justify-center cursor-pointer`}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -6, rotate: 2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <img
                  src="/perfil-bio.png"
                  alt="Mockup Biografía"
                  className="w-full max-w-[95px] h-full object-contain rounded-xl"
                />
              </motion.div>
            </div>

            {/* BLOQUE 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <motion.div
                className={`${cardBase} rounded-[40px] p-8 w-full max-w-[360px]`}
                variants={cardVariants}
              >
                <h2 className="text-[#2E2E2E] text-xl font-serif font-bold mb-3 text-center">
                  Control Absotulo de Privacidad
                </h2>
                <p className="text-[#1f1f1f] text-center text-[15px] leading-relaxed">
                  Tú decides quién accede al contenido. Ofrecemos opciones para mantener el perfil público o privado, según tus preferencia.
                </p>
              </motion.div>

              <motion.div
                className={`${cardBase} rounded-[30px] p-5 w-full max-w-[360px] h-64 flex items-center justify-center cursor-pointer`}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -6, rotate: -2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <img
                  src="/perfil-privacidad.png"
                  alt="Mockup Privacidad"
                  className="w-full max-w-[95px] h-full object-contain rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
