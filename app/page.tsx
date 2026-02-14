
import Reveal from "@/components/Reveal";
import { Contacto } from "@/components/Hero/contacto";
import { Creaqr } from "@/components/Hero/Creaqr";
import { Eleccion } from "@/components/Hero/Eleccion";
import { Esp } from "@/components/Hero/Esp";
import { Pasoscua } from "@/components/Hero/Pasoscua";
import { Perfilejem } from "@/components/Hero/Perfilejem";
import { Video } from "@/components/Hero/Video";

export default function Home() {
  return (
    <main className="pt-20 flex flex-col">
      <Reveal>
        <Video />
      </Reveal>

      <Reveal>
        <Creaqr />
      </Reveal>

      <Reveal>
        <Esp />
      </Reveal>

      <Reveal>
        <Pasoscua />
      </Reveal>

      <Reveal>
        <Eleccion />
      </Reveal>

      <Reveal>
        <Perfilejem />
      </Reveal>

      <Reveal>
        <Contacto />
      </Reveal>
    </main>
  );
}
