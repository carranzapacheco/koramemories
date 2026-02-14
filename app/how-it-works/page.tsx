
import { Beneficios } from "@/components/How-it-works/Beneficios"
import { Contacto } from "@/components/How-it-works/contacto"
import { MedallonQr } from "@/components/How-it-works/MedallonQr"
import { PasoAPaso } from "@/components/How-it-works/PasoAPaso"
import { Perfil } from "@/components/How-it-works/Perfil"
import Reveal from "@/components/Reveal"

export default function Funcionalidad() {
  return (
    <main className="pt-20 flex flex-col">
      <Reveal>
        <MedallonQr />
      </Reveal>

      <Reveal>
        <Beneficios />
      </Reveal>

      <Reveal>
        <Perfil />
      </Reveal>

      <Reveal>
        <PasoAPaso />
      </Reveal>

      <Reveal>
        <Contacto />
      </Reveal>

    </main>
  )
}
