'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

interface PricingCardProps {
  title: string
  description: string
  oldPrice: string
  newPrice: string
  imageSrc: string
  link: string
  isPopular?: boolean
}

/* 🔹 Animaciones */
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
      ease: [0.16, 1, 0.3, 1], // easeOut PRO
    },
  },
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  oldPrice,
  newPrice,
  imageSrc,
  link,
  isPopular = false,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12 }} // 👈 mejora tu hover
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative flex flex-col items-center bg-white p-8 rounded-[40px] shadow-xl
        ${isPopular ? 'border-2 border-[#C2A46D]' : ''}`}
    >
      {isPopular && (
        <span className="absolute -top-5 bg-[#C2A46D] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md">
          Más elegido
        </span>
      )}

      {/* Imagen */}
      <div className="w-full mb-6 flex justify-center">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </div>

      <h3 className="text-[#2E2E2E] font-serif font-bold text-2xl mb-4 text-center">
        {title}
      </h3>

      <p className="text-[#1f1f1f] text-sm text-center mb-8 leading-relaxed max-w-[260px]">
        {description}
      </p>

      {/* Precios */}
      <div className="flex flex-col items-center mb-10">
        <span className="text-[#2E2E2E]/30 line-through text-lg italic">
          {oldPrice}
        </span>
        <span className="text-[#C2A46D] text-2xl font-bold text-center">
          {newPrice}
        </span>
      </div>

      {/* CTA */}
      <Link
        href={link}
        className="bg-[#C48B9F] text-white font-medium py-3 px-10 rounded-xl
                   hover:bg-[#C2A46D] transition-colors"
      >
        Ir a la tienda
      </Link>
    </motion.div>
  )
}

export const Eleccion: React.FC = () => {
  const products: PricingCardProps[] = [
  {
    title: 'Medallón de Recuerdo',
    description:
      'Un medallón QR que abre un perfil lleno de fotos y momentos inolvidables, para mantener cerca la memoria de tu ser querido.',
    oldPrice: 'S/.230',
    newPrice: 'S/.190',
    imageSrc: '/Kora Memories.png',
    link: '/tienda',
  },
  {
    title: 'Medallón de Vida',
    description:
      'Un perfil completo con fotos, videos, biografía y mensajes que celebran la esencia de tu ser querido, para sentirlo presente en cada recuerdo.',
    oldPrice: 'S/.400',
    newPrice: 'S/.350',
    imageSrc: '/Kora Memories.png',
    link: '/tienda',
    isPopular: true,
  },
  {
    title: 'Medallón Familiar',
    description:
      'Incluye un medallón a tu elección y 5 llaveros para compartir los recuerdos con quienes más quieres, creando un lazo que trasciende el tiempo.',
    oldPrice: '',
    newPrice: 'Depende de la elección',
    imageSrc: '/image.png',
    link: '/tienda',
  },
];


  return (
    <section className="bg-[#F5F1EC] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] mb-16 leading-tight"
        >
          Elige el Medallón Perfecto
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end"
        >
          {products.map((product, index) => (
            <PricingCard key={index} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
