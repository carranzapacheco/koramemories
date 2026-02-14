import { Dvideo } from "@/components/Converse/Dvideo";
import { Header } from "@/components/Converse/Header";
import { Pfrecuentes } from "@/components/Converse/Pfrecuentes";
import Reveal from "@/components/Reveal";


export default function Contacto() {
  return (
    <main className="pt-20 flex flex-col">
      <Reveal>  
        <Header/>
      </Reveal>

      <Reveal>
        <Pfrecuentes/>
      </Reveal>

      <Reveal>
        <Dvideo/>
      </Reveal>
    </main>
  )
}
