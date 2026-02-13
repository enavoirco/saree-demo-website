import { AnimatedSection } from "@/components/animated-section"

export function CollectionHero() {
  return (
    <section className="bg-card pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <AnimatedSection>
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Explore Our Sarees
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-6xl">
            <span className="text-balance">The Collection</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
            Each piece is handpicked for its quality, craftsmanship, and timeless
            beauty. Tap any saree to order instantly via WhatsApp.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
