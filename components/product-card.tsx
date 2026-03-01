"use client"

import Image from "next/image"
import { useState } from "react"
import { X, Check, PawPrint } from "lucide-react"
import type { Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex flex-col overflow-hidden rounded-2xl bg-card text-left transition-all hover:shadow-xl hover:-translate-y-1"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-primary-foreground backdrop-blur-sm">
              {product.category}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
              <PawPrint className="h-3 w-3" />
              {product.petType}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-1 text-lg font-bold text-foreground">
            {product.name}
          </h3>
          <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {product.tagline}
          </p>
          <span className="inline-flex items-center text-sm font-bold text-primary">
            Ver detalles
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </button>

      {/* Product modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card p-6 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-muted"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                {product.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                <PawPrint className="h-3 w-3" />
                {product.petType}
              </span>
            </div>

            <h3 className="mb-2 text-2xl font-extrabold text-foreground md:text-3xl">
              {product.name}
            </h3>
            <p className="mb-6 text-base text-muted-foreground">
              {product.tagline}
            </p>

            <div className="mb-4">
              <h4 className="mb-1 text-sm font-bold uppercase tracking-wide text-primary">
                Ingredientes
              </h4>
              <p className="text-sm text-foreground">{product.ingredients}</p>
            </div>

            <div className="mb-4">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                Beneficios
              </h4>
              <ul className="flex flex-col gap-2">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="mb-1 text-sm font-bold uppercase tracking-wide text-primary">
                Uso
              </h4>
              <p className="text-sm text-foreground">{product.usage}</p>
            </div>

            {product.conservation && (
              <div className="mb-6">
                <h4 className="mb-1 text-sm font-bold uppercase tracking-wide text-primary">
                  Conservacion
                </h4>
                <p className="text-sm text-foreground">
                  {product.conservation}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
              <a
                href="https://www.instagram.com/garrita.sma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Pedir por Instagram
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-border px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
