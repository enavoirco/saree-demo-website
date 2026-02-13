"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: "12,500",
    description: "Rich maroon Banarasi silk with intricate gold zari work and traditional motifs.",
    image: "/images/saree-silk.jpg",
    category: "silk",
  },
  {
    id: 2,
    name: "Handloom Cotton Saree",
    price: "3,800",
    description: "Soft pastel blue cotton handloom with delicate white thread work.",
    image: "/images/saree-cotton.jpg",
    category: "cotton",
  },
  {
    id: 3,
    name: "Chiffon Embroidered Saree",
    price: "8,200",
    description: "Emerald green chiffon with intricate gold embroidery and lightweight drape.",
    image: "/images/saree-chiffon.jpg",
    category: "designer",
  },
  {
    id: 4,
    name: "Georgette Sequin Saree",
    price: "6,900",
    description: "Dusty rose georgette with delicate silver sequin work, perfect for celebrations.",
    image: "/images/saree-georgette.jpg",
    category: "designer",
  },
  {
    id: 5,
    name: "Kanjivaram Silk Saree",
    price: "18,500",
    description: "Royal blue Kanjivaram with rich gold zari border and traditional temple motifs.",
    image: "/images/saree-kanjivaram.jpg",
    category: "silk",
  },
  {
    id: 6,
    name: "Linen Handloom Saree",
    price: "4,200",
    description: "Soft mustard linen with minimalist geometric prints, modern and breathable.",
    image: "/images/saree-linen.jpg",
    category: "cotton",
  },
]

const filters = [
  { label: "All", value: "all" },
  { label: "Silk", value: "silk" },
  { label: "Cotton", value: "cotton" },
  { label: "Designer", value: "designer" },
]

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter)

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-full px-5 py-2 font-body text-sm font-medium transition-all duration-300",
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 100}>
              <div className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-300 hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {product.name}
                    </h3>
                    <span className="shrink-0 font-body text-base font-semibold text-primary">
                      {`₹${product.price}`}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-4">
                    <WhatsAppButton
                      message={`Hi, I'm interested in the ${product.name} (₹${product.price}). Please share more details.`}
                      label="Order on WhatsApp"
                      className="w-full text-center"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
