import Image from "next/image"
import { MapPin, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pets.jpg"
          alt="Perro y gato felices"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">
              100% Natural y Artesanal
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-card md:text-7xl">
            <span className="text-balance">Garrita</span>
          </h1>

          <p className="mb-4 text-xl font-semibold text-card/90 md:text-2xl text-pretty">
            Snacks naturales para perros y gatos
          </p>
          <p className="mb-8 text-lg text-card/70 text-pretty">
            Hecho con ingredientes reales. Sin conservantes, sin colorantes, sin
            ultraprocesados. Solo comida de verdad para tu mejor amigo.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://www.instagram.com/garrita.sma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Hacer mi pedido
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-card/30 px-8 py-4 text-base font-bold text-card transition-colors hover:border-card/60"
            >
              Ver productos
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-card/60">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">
              San Martin de los Andes, Neuquen, Argentina
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
