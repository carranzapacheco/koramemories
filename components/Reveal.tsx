"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }} // más rápido en celular
      transition={{ duration: 0.4, ease: "easeOut" }} // animación más rápida
    >
      {children}
    </motion.div>
  );
}
