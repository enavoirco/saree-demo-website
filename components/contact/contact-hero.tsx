import { AnimatedSection } from "@/components/animated-section"

export function ContactHero() {
  return (
    <section className="bg-card pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <AnimatedSection>
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Reach Out To Us
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-6xl">
            <span className="text-balance">Get In Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
            We would love to hear from you. Whether you have a question about our sarees,
            need styling advice, or want to place an order, we are here to help.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
