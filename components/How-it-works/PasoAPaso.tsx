'use client';

import { Package, Smartphone, Pencil, Users } from 'lucide-react';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const StepCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  const ref = useRef(null);
  const isActive = useInView(ref, {
    margin: '-30% 0px -30% 0px',
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="relative flex flex-col items-center p-8 bg-[#F5F1EC] rounded-[2.5rem]
        transition-all duration-500 w-full
        border border-[#C2A46D]/40 overflow-hidden"
      animate={{
        boxShadow: isActive
          ? '0 40px 90px rgba(194,164,109,0.45)'
          : '0 20px 40px rgba(0,0,0,0.06)',
        y: isActive ? -6 : 0,
      }}
      whileHover={{
        y: -10,
        boxShadow: '0 45px 100px rgba(194,164,109,0.55)',
      }}
    >
      {/* Glow interno */}
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.9,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 rounded-[2.5rem]
          bg-[radial-gradient(circle_at_center,rgba(194,164,109,0.35),transparent_65%)]
          pointer-events-none"
      />

      <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-[#C48B9F]/25">
        <Icon size={44} className="text-[#C2A46D] stroke-[1.5]" />
      </div>

      <h3 className="relative z-10 text-xl font-serif font-semibold text-[#2E2E2E] text-center mb-4 min-h-[3.5rem] flex items-center">
        {title}
      </h3>

      <p className="relative z-10 text-[#1f1f1f]/80 text-center leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export const PasoAPaso = () => {
const steps = [
  {
    icon: Package,
    title: 'Tu medallón, un lazo eterno',
    description:
      'Recibe un medallón con un código QR único, listo para guardar recuerdos y emociones. Puede llegar a tus manos de manera física o digital, según lo que prefieras.',
  },
  {
    icon: Pencil,
    title: 'Revive su historia',
    description:
      'Crea un perfil lleno de vida: añade su biografía, fotos, videos y recuerdos. Puedes hacerlo tú mismo o con nuestra ayuda para que cada detalle refleje su esencia.',
  },
  {
    icon: Smartphone,
    title: 'Conecta con su memoria',
    description:
      'Cualquier persona puede escanear el QR con su celular y sentirse cerca de esa persona querida, viendo y compartiendo momentos que perduran en el tiempo.',
  },
  {
    icon: Users,
    title: 'Comparte amor y recuerdos',
    description:
      'Accede desde cualquier lugar y comparte el perfil digital con familia y amigos, manteniendo vivo el legado y los recuerdos de quienes amamos a esa persona.',
  },
];


  return (
    <section className="py-18 px-4 bg-[#F5F1EC]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#C48B9F] mb-16 leading-tight"
        >
          Paso a paso
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
