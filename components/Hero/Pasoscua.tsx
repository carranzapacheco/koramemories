'use client'

import React from 'react'
import { ShoppingCart, UserCheck, CreditCard, QrCode } from 'lucide-react'
import { motion,Variants } from 'framer-motion'

interface StepProps {
  icon: React.ReactNode
  title: string
  description: string
}

/* 🔹 Variantes de animación */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}


const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // 👈 easeOut real (cubic-bezier)
    },
  },
}


const StepCard: React.FC<StepProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg w-full max-w-xs text-center min-h-[380px]"
    >
      <motion.div
        whileHover={{ rotate: 6, scale: 1.1 }}
        className="bg-[#F5F1EC] p-5 rounded-full mb-8 text-[#C2A46D]"
      >
        {icon}
      </motion.div>

      <h3 className="text-[#2E2E2E] font-semibold text-xl mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-[#1f1f1f] text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export const Pasoscua: React.FC = () => {
  const steps: StepProps[] = [
    {
      icon: <ShoppingCart size={38} strokeWidth={1.5} />,
      title: 'Elige tu Medallón',
      description:
        'Selecciona el medallón que guardará la esencia de tu ser querido y realiza tu compra de forma segura. Cada elección es el primer paso para mantener su memoria viva.',
    },
    {
      icon: <UserCheck size={38} strokeWidth={1.5} />,
      title: 'Construimos tu perfil de recuerdos',
      description:
        'Nos encargamos de crear un perfil lleno de vida: fotos, videos, canciones y mensajes que reflejen su historia. Solo envíanos el material por WhatsApp y nosotros le damos forma con todo el amor que merece.',
    },
    {
      icon: <CreditCard size={38} strokeWidth={1.5} />,
      title: 'Recíbe el medallón y siente su cercanía',
      description:
        'Tu medallón llega a tus manos, físico o digital, listo para conectarte con sus recuerdos. Un símbolo tangible que mantiene su presencia cerca, incluso cuando no está físicamente. (Envíos físicos solo en Trujillo – La Libertad).',
    },
    {
      icon: <QrCode size={38} strokeWidth={1.5} />,
      title: 'Escanea y revive momentos',
      description:
        'Con un simple escaneo, accede a su perfil digital y deja que los recuerdos vuelvan a abrazarte. Cada foto, cada video y cada mensaje te conectan con su esencia, compartida con todos los que escaneen el medallón.',
    },
  ];


  return (
    <section className="bg-[#EFE7DD] py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] mb-16 leading-tight"
        >
          4 Pasos para honrar su memoria
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center"
        >
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
