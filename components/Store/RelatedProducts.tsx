"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Product {
  slug: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  relatedSlugs: string[];
}

interface Props {
  products: Product[];
  currentSlug: string;
}

// Animación fade + lift suave
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function RelatedProducts({ products, currentSlug }: Props) {
  const currentProduct = products.find((p) => p.slug === currentSlug);
  if (!currentProduct) return null;

  const relatedProducts = products.filter(
    (item) =>
      item.slug !== currentSlug &&
      currentProduct.relatedSlugs.includes(item.slug)
  );
  if (!relatedProducts.length) return null;

  return (
    <section className="mt-16 pb-20 bg-[#EFE7DD]">
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: [40, -8, 0] }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#C48B9F] 
                    mb-10 pb-3 text-center relative"
        >
          Productos relacionados

          {/* Línea dorada animada */}
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-[#C2A46D] rounded-full"
          />
        </motion.h2>

        {/* Grid de productos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-15 md:gap-30">
          {relatedProducts.map((item, i) => (
            <motion.div
              key={item.slug}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href={`/store/${item.slug}`}
                className="group cursor-pointer"
              >
                {/* Cuadro del producto */}
                <div className="bg-[#F5F1EC] border border-[#E8E1D8] rounded-2xl p-4 flex flex-col items-center justify-center 
                                transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C2A46D]/30">
                  <div className="aspect-square w-full flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-32 md:max-h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Info del producto */}
                  <div className="text-center mt-3">
                    <h4 className="font-semibold text-[#2E2E2E] text-base md:text-sm mb-1">
                      {item.name}
                    </h4>

                    <div className="flex justify-center gap-2 items-baseline">
                      <span className="text-[#C2A46D] font-bold text-sm md:text-xs">
                        {item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="text-[#1f1f1f] line-through text-xs md:text-[0.65rem]">
                          {item.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
