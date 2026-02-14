
import { Contacto } from "@/components/About/contacto"
import {Inicio} from "@/components/About/Inicio"
import  {Proposito}  from "@/components/About/Proposito"
import Reveal from "@/components/Reveal"

export default function Nosotros() {
  return (
    <main className="pt-20 flex flex-col">
      <Reveal>
        <Inicio />
      </Reveal>

      <Reveal>
        <Proposito />
      </Reveal>

      <Reveal>
        <Contacto />
      </Reveal>

    </main>
  )
}
