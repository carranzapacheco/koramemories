'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const socialVariants = {
    hover: { scale: 1.2, color: '#C2A46D', transition: { duration: 0.3 } },
  }

  const linkVariants = {
    hover: { scale: 1.05, color: '#C48B9F', transition: { duration: 0.3 } },
  }

  return (
    <footer className="bg-[#E0D8C5] text-[#2E2E2E] py-14 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 items-center md:items-start">

        {/* Logo centrado */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Logo-full.png"
            alt="Kora Memories"
            width={400}
            height={200}
            priority
            className="mb-4 drop-shadow-xl p-4"
          />
        </div>

        {/* Contacto y redes */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-2 text-sm">
              <motion.li whileHover={{ scale: 1.05 }}>
                <a
                  href="https://wa.me/51914824316?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20el%20Medall%C3%B3n%20QR."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2E2E2E] justify-center md:justify-start transition-colors"
                >
                  <FaWhatsapp /> +51 914 824 316
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <a
                  href="mailto:carranzapacheco.f.a@gmail.com"
                  className="text-[#2E2E2E] transition-colors"
                >
                  carranzapacheco.f.a@gmail.com
                </a>
              </motion.li>
              <li>Trujillo - La Libertad, Perú</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <motion.a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                variants={socialVariants}
                whileHover="hover"
                className="text-[#C48B9F]"
              >
                <FaFacebookF size={20} />
              </motion.a>

              <motion.a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                variants={socialVariants}
                whileHover="hover"
                className="text-[#C48B9F]"
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                variants={socialVariants}
                whileHover="hover"
                className="bg-[#C48B9F] p-2 rounded-md text-white"
              >
                <FaTiktok size={15} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Enlaces</h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: 'Inicio', href: '/' },
              { name: 'Acerca de Nosotros', href: '/nosotros' },
              {
                name: 'Términos y Condiciones',
                href: '/terminos y condiciones.pdf',
                download: true,
              },
              { name: 'Preguntas Frecuentes', href: '/faq' },
            ].map((linkItem) => (
              <motion.li
                key={linkItem.href}
                variants={linkVariants}
                whileHover="hover"
              >
                {linkItem.download ? (
                  <a
                    href={linkItem.href}
                    download
                    className="transition-colors hover:text-[#C2A46D]"
                  >
                    {linkItem.name}
                  </a>
                ) : (
                  <Link
                    href={linkItem.href}
                    className="transition-colors hover:text-[#C2A46D]"
                  >
                    {linkItem.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </div>


      </div>
    </footer>
  )
}
