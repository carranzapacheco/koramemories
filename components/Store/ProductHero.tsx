"use client"

import {ShieldCheck, RefreshCcw, Clock, MapPin, Globe} from "lucide-react";
import BuySection from "@/components/Store/BuySection";
import { motion } from "framer-motion";

interface Product {
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  description: string[];
}

interface Props {
  product: Product;
}


export default function ProductHero({ product }: Props) {
  const words = product.name.split(" ");

  return (
    <section className="bg-[#EFE7DD]">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto">

        {/* ===== IMAGEN DESKTOP (STICKY) ===== */}
        <div className="hidden md:block relative pb-24">
          <div className="sticky top-32 h-fit">
            <div className="flex justify-center pt-32">
              <div className="group cursor-zoom-in">
                <div className="overflow-hidden rounded-4xl shadow-md transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(194,164,109,0.25)] p-10 border-1 border-[#C2A46D]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[230px] max-h-[60vh] object-contain transition-transform duration-700 ease-out group-hover:scale-120"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PANEL DERECHO ===== */}
        <div className="px-15 md:px-16 pt-20 md:pt-15 pb-24 text-[#2E2E2E] md:border-l md:border-[#C2A46D]">

          {/* TÍTULO ANIMADO */}
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-16 flex flex-wrap justify-center gap-3">
            {words.map((word, wordIndex) => {
              const isMedallon = word.toLowerCase().includes("medallón");

              if (isMedallon) {
                return (
                  <span key={wordIndex} className="flex">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ y: 35, opacity: 0 }}
                        whileInView={{ y: [35, -10, 4, 0], opacity: 1 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{
                          delay: wordIndex * 0.15 + charIndex * 0.04,
                          duration: 1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block text-[#C2A46D]"
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
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: [40, -8, 3, 0], opacity: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{
                    delay: wordIndex * 0.18,
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[#C48B9F]"
                >
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </h2>

          {/* ===== IMAGEN MOBILE (DEBAJO DEL TÍTULO) ===== */}
          <div className="md:hidden flex justify-center my-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-[70%] max-w-[240px] object-contain"
            />
          </div>

          {/* PRECIO */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-2 mb-8">
            <span className="text-2xl font-semibold text-[#2E2E2E]">
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-lg text-[#2E2E2E]/50 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>

          {/* DESCRIPCIÓN */}
          <ul className="list-disc pl-5 space-y-3 text-[#1f1f1f] mb-12">
            {product.description.map((feature: string, i: number) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {/* BLOQUE INFORMATIVO */}
          <div className="bg-white border border-[#C2A46D]/30 rounded-xl p-6 shadow-sm mb-12">
            <p className="leading-relaxed text-sm md:text-base text-[#2E2E2E]">
              Colóquelo en la lápida o en el lugar que prefiera, permitiendo que familiares y amigos puedan recordar y así´celebrar la vida de su ser querido accediendo de forma sencilla y especial a su perfil en
              <span className="font-semibold text-[#C48B9F]">
                {" "}Kora Memories
              </span>.
            </p>
          </div>

          {/* VENTAJAS */}
          <div className="space-y-6 border-t border-[#C2A46D]/20">

            <Feature 
              icon={<Clock size={20} />} 
              title="Listo en 4 a 5 días hábiles" 
              desc="El medallón se prepara con todos los detalles antes de su entrega."
            />

            <Feature 
              icon={<MapPin size={20} />} 
              title="Entrega en Trujillo" 
              desc="Envío físico disponible solo en Trujillo con costo adicional." 
            />

            <Feature 
              icon={<Globe size={20} />} 
              title="Envío digital en todo el Perú" 
              desc="Envió y acceso al perfil digital desde cualquier ciudad." 
            />

            <Feature 
              icon={<ShieldCheck size={20} />} 
              title="Pago seguro" 
              desc="Transacciones protegidas y varios métodos de pago disponibles." 
            />

            <Feature 
              icon={<RefreshCcw size={20} />} 
              title="Garantía" 
              desc="Reembolso disponible en caso de inconvenientes." 
            />

          </div>

          {/* BUY SECTION */}
          <div className="pt-12">
            <BuySection
              productName={product.name}
              productPrice={product.price}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-[#F5F1EC] p-3 rounded-full text-[#C2A46D] shadow-sm">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-[#2E2E2E]">{title}</p>
        <p className="text-sm text-[#1f1f1f]">{desc}</p>
      </div>
    </div>
  );
}
