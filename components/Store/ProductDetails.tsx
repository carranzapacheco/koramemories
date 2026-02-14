"use client";

import { motion, Variants } from "framer-motion";

interface ProductFeature {
  title: string;
  description: string;
}

interface ProductDetailsData {
  title: string;
  description: string;
  features: ProductFeature[];
  benefits: ProductFeature[];
}

interface Product {
  details: ProductDetailsData;
}

interface ProductDetailsProps {
  product: Product;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    boxShadow: "0 0 0 rgba(194,164,109,0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    boxShadow:
      "0 0 35px rgba(194,164,109,0.22), 0 18px 50px rgba(0,0,0,0.06)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { title, description, features, benefits } = product.details;

  return (
    <section className="mt-18 max-w-4xl mx-auto px-6 bg-[#]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative rounded-3xl bg-[#F5F1EC] border border-[#E8E1D8] overflow-hidden"
      >
        {/* Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(194,164,109,0.12), transparent 70%)",
          }}
        />

        {/* Header */}
        <div className="relative px-8 py-6 text-center border-b border-[#E8E1D8]">
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light tracking-wide text-[#C2A46D]"
          >
            Un recuerdo para toda la vida
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-14 h-[2px] bg-[#C2A46D] mx-auto mt-3"
          />
        </div>

        {/* Content */}
        <div className="relative px-8 py-10 space-y-10 text-[#2E2E2E] leading-relaxed">
          
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#C48B9F]">
              {title}
            </h3>

            <p className="text-base text-[#1f1f1f] font-light tracking-wide">
              {description}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium text-[#C48B9F] tracking-wide">
              Características importantes
            </h4>

            <ul className="space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={`${feature.title}-${i}`}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="pl-5 border-l-[2px] border-[#C2A46D] hover:border-[#C48B9F] transition-colors duration-300"
                >
                  <span className="block font-medium text-sm text-[#2E2E2E]">
                    {feature.title}
                  </span>
                  <span className="text-sm text-[#1f1f1f] font-light">
                    {feature.description}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium text-[#C48B9F] tracking-wide">
              Beneficios que acompañan
            </h4>

            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={`${benefit.title}-${i}`}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="pl-5 border-l-[2px] border-[#C2A46D] hover:border-[#C48B9F] transition-colors duration-300"
                >
                  <span className="block font-medium text-sm text-[#2E2E2E]">
                    {benefit.title}
                  </span>
                  <span className="text-sm text-[#1f1f1f] font-light">
                    {benefit.description}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
