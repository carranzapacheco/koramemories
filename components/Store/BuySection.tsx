"use client";

import { useState } from "react";
import BuyModal from "./BuyModal";

interface Props {
  productName: string;
  productPrice: string;
}

export default function BuySection({
  productName,
  productPrice,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-6 bg-[#C48B9F] hover:bg-[#C2A46D] text-white font-semibold py-4 rounded-xl transition"
      >
        Comprar ahora
      </button>

      {open && (
        <BuyModal
          productName={productName}
          productPrice={productPrice}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
