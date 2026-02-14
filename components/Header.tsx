'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image"

const menuItems = [
  { name: 'Inicio', href: '/' },
  { name: '¿Cómo funciona?', href: '/how-it-works' },
  { name: 'Acerca de nosotros', href: '/about' },
  { name: 'Tienda', href: '/store' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F1EC]/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link href="/" className="flex items-center">

          {/* Logo completo – Desktop */}
          <Image
            src="/Logo-full.png"
            alt="Kora Memories"
            width={200}
            height={60}
            priority
            className="hidden md:block h-11 w-auto object-contain"
          />

          {/* Logo ícono – Mobile */}
          <Image
            src="/Logo-icon.png"
            alt="Kora Memories"
            width={48}
            height={48}
            priority
            className="block md:hidden h-10 w-10 object-contain"
          />

        </Link>
</motion.div>



        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const active = isActive(item.href)

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative transition-colors duration-200
                  ${active ? 'text-[#C2A46D]' : 'text-[#2E2E2E] hover:text-[#C2A46D]'}
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-[#C2A46D]
                  after:transition-all after:duration-300
                  ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {item.name}
              </Link>
            )
          })}

          <Link
            href="/converse"
            className="
              ml-4 border border-[#C48B9F] text-[#C48B9F]
              px-6 py-2 rounded-full font-medium
              transition-all duration-200
              hover:bg-[#C48B9F] hover:text-white
              hover:-translate-y-0.5
            "
          >
            Conversemos
          </Link>
        </nav>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Abrir menú"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="absolute w-6 h-0.5 bg-[#2E2E2E]"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute w-6 h-0.5 bg-[#2E2E2E]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className="absolute w-6 h-0.5 bg-[#2E2E2E]"
          />
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-[#F5F1EC] shadow-lg"
          >
            <nav className="flex flex-col px-6 py-6 gap-6 text-center">
              {menuItems.map((item) => {
                const active = isActive(item.href)

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`
                        relative inline-block text-lg transition-colors duration-200
                        ${active ? 'text-[#C2A46D]' : 'text-[#2E2E2E] hover:text-[#C2A46D]'}
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:bg-[#C2A46D]
                        after:transition-all after:duration-300
                        ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                      `}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}

              <Link
                href="/converse"
                onClick={() => setOpen(false)}
                className="
                  mt-4 border border-[#C48B9F] text-[#C48B9F]
                  py-3 rounded-full font-medium
                  transition-all duration-200
                  hover:bg-[#C48B9F] hover:text-white
                  hover:-translate-y-0.5
                "
              >
                Conversemos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
