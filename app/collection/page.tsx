import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CollectionHero } from "@/components/collection/collection-hero"
import { ProductGrid } from "@/components/collection/product-grid"

export const metadata: Metadata = {
  title: "Collection - Vasthram | Premium Indian Sarees",
  description:
    "Browse our curated collection of premium silk, cotton, and designer sarees. Order directly via WhatsApp.",
}

export default function CollectionPage() {
  return (
    <>
      <Navbar />
      <main>
        <CollectionHero />
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
