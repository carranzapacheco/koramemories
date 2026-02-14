"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Truck, Globe, ShieldAlert } from "lucide-react";

interface BuyModalProps {
  productName: string;
  productPrice: string;
  onClose: () => void;
}

export default function BuyModal({
  productName,
  productPrice,
  onClose,
}: BuyModalProps) {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [entrega, setEntrega] = useState<"fisica" | "virtual" | "">("");
  const [direccion, setDireccion] = useState("");
  const [distrito, setDistrito] = useState("");
  const [confirmZona, setConfirmZona] = useState(false);
  const [error, setError] = useState("");

  const handleEnviar = () => {
    if (!nombre.trim()) {
      setError("Ingresa tu nombre completo.");
      return;
    }

    if (!/^\d{8}$/.test(dni)) {
      setError("El DNI debe tener 8 números.");
      return;
    }

    if (!entrega) {
      setError("Selecciona un tipo de entrega.");
      return;
    }

    if (entrega === "fisica") {
      if (!direccion.trim() || !distrito.trim()) {
        setError("Completa tu dirección y distrito.");
        return;
      }

      if (!confirmZona) {
        setError(
          "Debes confirmar que te encuentras en La Libertad - Trujillo."
        );
        return;
      }
    }

    const mensaje = `
Hola, quiero comprar:

Producto: ${productName}
Precio: ${productPrice}

Nombre: ${nombre}
DNI: ${dni}
Tipo de entrega: ${
      entrega === "fisica" ? "Entrega Física" : "Entrega Virtual"
    }

${entrega === "fisica" ? `Dirección: ${direccion}
Distrito: ${distrito}` : ""}
`;

    window.open(
      `https://wa.me/51914824316?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
      >
        <h2 className="text-2xl font-serif text-[#C48B9F] mb-6 text-center">
          Completa tus datos
        </h2>

        <div className="flex flex-col gap-4">
          {/* Nombre */}
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C2A46D] transition"
          />

          {/* DNI */}
          <input
            type="text"
            placeholder="DNI (8 números)"
            value={dni}
            maxLength={8}
            onChange={(e) => setDni(e.target.value.replace(/\D/g, ""))}
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C2A46D] transition"
          />

          {/* Tipo de entrega */}
          <div>
            <p className="text-sm font-medium mb-3">
              Tipo de entrega
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setEntrega("fisica")}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  entrega === "fisica"
                    ? "bg-[#C2A46D] text-white shadow-md scale-[1.02]"
                    : "hover:border-[#C2A46D]"
                }`}
              >
                <Truck size={18} />
                Física
              </button>

              <button
                type="button"
                onClick={() => setEntrega("virtual")}
                className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                  entrega === "virtual"
                    ? "bg-[#C2A46D] text-white shadow-md scale-[1.02]"
                    : "hover:border-[#C2A46D]"
                }`}
              >
                <Globe size={18} />
                Virtual
              </button>
            </div>
          </div>

          {/* Sección Entrega Física Animada */}
          <AnimatePresence>
            {entrega === "fisica" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3 overflow-hidden"
              >
                <div className="bg-yellow-50 border border-yellow-300 p-3 rounded-xl text-sm text-yellow-800 flex gap-2 items-start">
                  <ShieldAlert size={16} className="mt-1" />
                  Solo realizamos entregas físicas en
                  La Libertad - Trujillo.
                </div>

                <input
                  type="text"
                  placeholder="Dirección completa"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C2A46D]"
                />

                <input
                  type="text"
                  placeholder="Distrito"
                  value={distrito}
                  onChange={(e) => setDistrito(e.target.value)}
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C2A46D]"
                />

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={confirmZona}
                    onChange={() => setConfirmZona(!confirmZona)}
                  />
                  Confirmo que me encuentro en
                  La Libertad - Trujillo
                </label>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-500 text-center">
              {error}
            </p>
          )}

          {/* Botón principal */}
          <button
            onClick={handleEnviar}
            className="bg-[#C2A46D] hover:bg-[#b3935e] text-white py-3 rounded-xl font-semibold transition shadow-lg"
          >
            Enviar por WhatsApp
          </button>

          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700 transition"
          >
            Cancelar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
