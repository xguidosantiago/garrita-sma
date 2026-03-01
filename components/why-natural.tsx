import Image from "next/image"
import { Sparkles, Heart, Star, Bone, SmilePlus } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Ingredientes reales",
    description:
      "Sin quimicos, sin conservantes artificiales, sin ultraprocesados. Solo comida de verdad.",
  },
  {
    icon: Heart,
    title: "Mejor digestion",
    description:
      "Alimentos naturales = pancitas mas sanas y mejor absorcion de nutrientes.",
  },
  {
    icon: Star,
    title: "Pelo brillante y piel sana",
    description: "Los nutrientes naturales fortalecen desde adentro.",
  },
  {
    icon: Bone,
    title: "Huesos y articulaciones fuertes",
    description: "Mas colageno, vitaminas y minerales reales.",
  },
  {
    icon: SmilePlus,
    title: "Mas sabor, mas felicidad",
    description:
      "Lo natural es mas rico, mas fresco y lo disfrutan mucho mas.",
  },
]

export function WhyNatural() {
  return (
    <section id="por-que-natural" className="py-20 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
            Bienestar real
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl text-balance">
            Por que elegir natural para tu animal?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Porque su salud empieza por lo que come.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
          {/* Special card */}
          <div className="flex items-center justify-center rounded-2xl bg-primary p-8 text-primary-foreground">
            <p className="text-center text-lg font-bold leading-relaxed text-pretty">
              Elegir natural es elegir bienestar, salud y calidad de vida para
              tu perri o michi
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
