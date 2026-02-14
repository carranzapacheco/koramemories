'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppFloating() {
  return (
    <motion.a
      href="https://wa.me/51914824316?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20el%20Medall%C3%B3n%20QR."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14 md:w-16 md:h-16
        bg-[#25D366]
        rounded-full
        flex items-center justify-center
        shadow-[0_20px_40px_rgba(0,0,0,0.25)]
        cursor-pointer
        group
      "
    >
      {/* Tooltip */}
      <span
        className="
          absolute right-full mr-3
          px-3 py-1.5
          rounded-lg
          bg-[#2E2E2E]
          text-white text-xs md:text-sm
          whitespace-nowrap
          opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200
          pointer-events-none
          hidden md:block
        "
      >
        Escríbenos por WhatsApp
      </span>

      {/* Pulso */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />

      {/* Ícono */}
      <MessageCircle className="relative w-7 h-7 md:w-8 md:h-8 text-white" />
    </motion.a>
  )
}
