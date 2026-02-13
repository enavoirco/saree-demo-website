import { AnimatedSection } from "@/components/animated-section"

const features = [
  {
    title: "Handpicked Quality",
    description:
      "Every saree is carefully selected from master weavers across India, ensuring exceptional craftsmanship.",
  },
  {
    title: "Direct from Artisans",
    description:
      "We work directly with artisan families, preserving traditional weaving techniques passed down through generations.",
  },
  {
    title: "Personalized Service",
    description:
      "Order through WhatsApp for a personalized shopping experience with styling advice and fabric guidance.",
  },
]

export function AboutSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <AnimatedSection>
              <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Our Story
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
                <span className="text-balance">Where Tradition Meets Timeless Grace</span>
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
                Vasthram was born from a deep love for Indian textiles and a desire
                to bring the finest handwoven sarees to discerning women everywhere.
                We believe every saree tells a story — of the artisan who wove it,
                the tradition it carries, and the woman who wears it.
              </p>
            </AnimatedSection>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 200}>
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-serif text-lg font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
