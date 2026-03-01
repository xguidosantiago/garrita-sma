import { MapPin, Leaf, Heart } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="bg-foreground py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">
              Pedidos y consultas
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-extrabold text-card md:text-5xl text-balance">
            Hace tu pedido por Instagram
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-card/70 text-pretty">
            Escribinos por mensaje directo a nuestro Instagram. Te asesoramos
            sobre los mejores snacks para tu perri o michi. Elaboracion
            artesanal, por encargo, con mucho amor.
          </p>

          <a
            href="https://www.instagram.com/garrita.sma"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <InstagramIcon className="h-6 w-6" />
            @garrita.sma
          </a>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-card/60">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">
                San Martin de los Andes, Neuquen
              </span>
            </div>
            <div className="flex items-center gap-2 text-card/60">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-medium">
                Elaboracion artesanal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  )
}
