"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const faqs = [
  {
    question: "¿Cómo funciona el medallón QR?",
    answer:
      "Cada medallón incorpora un código QR único. Al escanearlo con la cámara del teléfono, el perfil conmemorativo se abre automáticamente en el navegador, sin necesidad de instalar aplicaciones.",
  },
  {
    question: "¿Qué incluye el medallón?",
    answer:
      "Incluye un medallón con código QR exclusivo y un perfil digital personalizado. Dependiendo del producto elegido en la tienda, puedes tener biografía, fotografías, videos y comentarios.",
  },
  {
    question: "¿Cuánto demora la entrega?",
    answer:
      "Una vez confirmado el pedido, el proceso de producción y envío tarda entre 4 y 5 días hábiles.",
  },
  {
    question: "¿Puedo actualizar el perfil después?",
    answer:
      "Sí. Puedes modificar la biografía, agregar nuevas fotos, videos o comentarios cuando lo necesites. El perfil permanece activo y siempre actualizable.",
  },
  {
    question: "¿El perfil puede ser privado?",
    answer:
      "Sí. Tú decides si mantenerlo público o compartirlo únicamente con familiares y personas cercanas mediante el enlace del QR. Solo los que escaenan el QR pueden ver el perfil.",
  },
];

export const Pfrecuentes = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);


  return (
    <section className="bg-[#F5F1EC] py-20 px-5">
      <div className="max-w-4xl mx-auto">

        {/* Título */}
        <div ref={titleRef} className="text-center mb-14">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false }}
             transition={{ duration: 0.6 }}
             className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] mb-16 leading-tight"
           >
             Preguntas Frecuentes
           </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#2E2E2E] text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Queremos acompañarte en cada paso. Aquí resolvemos las dudas más
            comunes sobre el medallón QR y el perfil digital conmemorativo.
          </motion.p>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-[#C2A46D]/30 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 md:py-6 text-left group transition-all duration-300"
                >
                  <span className="text-[#2E2E2E] font-medium text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-[#C2A46D] transition-colors">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={22}
                      className="text-[#C48B9F]"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-6 pb-6 md:pb-8 text-[#1f1f1f] text-sm md:text-base leading-relaxed border-t border-[#C2A46D]/20"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Texto inferior emocional */}
        <div className="mt-16 text-center">
          <p className="text-[#2E2E2E] text-base md:text-lg font-serif leading-relaxed max-w-2xl mx-auto">
            Si tienes otra pregunta o necesitas orientación personalizada,
            estamos aquí para escucharte y acompañarte. Envía tu consulta al gmail o whatsapp.
          </p>

          <div className="h-[2px] bg-[#C2A46D] w-24 mx-auto mt-6 rounded-full" />
        </div>

      </div>
    </section>
  );
};
