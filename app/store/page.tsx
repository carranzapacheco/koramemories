
import Reveal from "@/components/Reveal"
import {Store} from "@/components/Store/Store"

export default function Tienda() {
  return (
    <main className="pt-20 flex flex-col">
      <Reveal>
        <Store />
      </Reveal>
    </main>
  )
}
