import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-saree.jpg"
          alt="Elegant Indian saree collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <AnimatedSection>
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-secondary/80">
              Handcrafted with love
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h1 className="mt-4 font-serif text-5xl font-bold leading-tight text-secondary md:text-7xl lg:text-8xl">
              <span className="text-balance">Timeless Elegance, Woven in Every Thread</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-secondary/80 md:text-lg">
              Discover our curated collection of premium Indian sarees,
              from rich Kanjivaram silks to delicate handloom weaves.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                label="Shop via WhatsApp"
                message="Hi, I'd love to explore your saree collection!"
              />
              <Link
                href="/collection"
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/40 px-6 py-3 font-body text-sm font-medium text-secondary transition-all duration-300 hover:border-secondary hover:bg-secondary/10"
              >
                View Collection
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
