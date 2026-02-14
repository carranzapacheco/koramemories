"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Store = () => {
  const router = useRouter();

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#EFE7DD] py-22 px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6}}
        className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] mb-16 leading-tight"
      >
        Productos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">

        {/* CARD 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onClick={() => router.push("/store/medallon-de-recuerdo")}
          className="group cursor-pointer bg-white rounded-xl shadow-sm 
          hover:shadow-lg transition-all duration-300 
          border border-transparent hover:border-[#C2A46D]
          p-4 w-40 md:w-44"
        >
          <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="/M_R.png"
              alt="Medallón de Recuerdo"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="mt-3 text-center text-sm font-semibold text-[#2E2E2E]">
            Medallón de Recuerdo
          </h3>

          <div className="text-center mt-1">
            <span className="text-xs text-[#1f1f1f] line-through">
              S/.230
            </span>
            <p className="text-sm font-bold text-[#C2A46D]">
              S/.190
            </p>
          </div>
        </motion.div>


        {/* CARD 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() => router.push("/store/medallon-de-recuerdo-plus")}
          className="group cursor-pointer bg-white rounded-xl shadow-sm 
          hover:shadow-lg transition-all duration-300 
          border border-transparent hover:border-[#C2A46D]
          p-4 w-40 md:w-44"
        >
          <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="/M_RP.png"
              alt="Medallón de Recuerdo Plus"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="mt-3 text-center text-sm font-semibold text-[#2E2E2E]">
            Medallón de Recuerdo Plus
          </h3>

          <div className="text-center mt-1">
            <span className="text-xs text-[#1f1f1f] line-through">
              S/.380
            </span>
            <p className="text-sm font-bold text-[#C2A46D]">
              S/.360
            </p>
          </div>
        </motion.div>


        {/* CARD 3 (Horizontal) */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onClick={() => router.push("/store/medallon-familiar")}
          className="group cursor-pointer bg-white rounded-xl shadow-sm 
          hover:shadow-lg transition-all duration-300 
          border border-transparent hover:border-[#C2A46D]
          p-4 w-40 md:w-44"
        >
          <div className="w-full aspect-[4/5] overflow-hidden rounded-lg flex items-center justify-center]">
            <img
              src="/image.png"
              alt="Medallón Familiar"
              className="max-h-full object-contain"
            />
          </div>

          <h3 className="mt-3 text-center text-sm font-semibold text-[#2E2E2E]">
            Medallón Familiar
          </h3>

          <div className="text-center mt-1">
            <p className="text-sm font-bold text-[#C2A46D]">
              A elección
            </p>
          </div>
        </motion.div>

      
        {/* CARD 4 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => router.push("/store/medallon-de-vida")}
          className="group cursor-pointer bg-white rounded-xl shadow-sm 
          hover:shadow-lg transition-all duration-300 
          border border-transparent hover:border-[#C2A46D]
          p-4 w-40 md:w-44"
        >
          <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="/M_V.png"
              alt="Medallón de Vida"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="mt-3 text-center text-sm font-semibold text-[#2E2E2E]">
            Medallón de Vida
          </h3>

          <div className="text-center mt-1">
            <span className="text-xs text-[#1f1f1f] line-through">
              S/.400
            </span>
            <p className="text-sm font-bold text-[#C2A46D]">
              S/.350
            </p>
          </div>
        </motion.div>

        
        {/* CARD 5 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          onClick={() => router.push("/store/medallon-de-vida-plus")}
          className="group cursor-pointer bg-white rounded-xl shadow-sm 
          hover:shadow-lg transition-all duration-300 
          border border-transparent hover:border-[#C2A46D]
          p-4 w-40 md:w-44"
        >
          <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="/M_VP.png"
              alt="Medallón de Vida Plus"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="mt-3 text-center text-sm font-semibold text-[#2E2E2E]">
            Medallón de Vida Plus
          </h3>

          <div className="text-center mt-1">
            <span className="text-xs text-[#1f1f1f] line-through">
              S/.700
            </span>
            <p className="text-sm font-bold text-[#C2A46D]">
              S/.670
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
