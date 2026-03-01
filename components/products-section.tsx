"use client"

import { useState } from "react"
import { products, categories } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="productos" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
            Nuestros productos
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl text-balance">
            Snacks hechos con amor y real
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Cada producto esta elaborado de forma artesanal con ingredientes
            naturales. Sin conservantes, sin colorantes, sin cosas raras.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No hay productos en esta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
