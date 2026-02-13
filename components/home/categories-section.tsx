import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

const categories = [
  {
    title: "Silk Sarees",
    description: "Luxurious Banarasi and Kanjivaram silks with rich zari work",
    image: "/images/category-silk.jpg",
  },
  {
    title: "Cotton Handlooms",
    description: "Breathable handwoven cotton sarees for everyday elegance",
    image: "/images/category-cotton.jpg",
  },
  {
    title: "Designer Collection",
    description: "Contemporary designer sarees with modern embellishments",
    image: "/images/category-designer.jpg",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center">
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Our Collections
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Curated for the Modern Woman</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 200}>
              <Link href="/collection" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/30 transition-all duration-500 group-hover:bg-foreground/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                    <h3 className="font-serif text-2xl font-bold text-secondary md:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-secondary/80">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-block rounded-full border border-secondary/40 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-widest text-secondary transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary/10">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
