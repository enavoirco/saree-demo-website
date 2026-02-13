"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The Kanjivaram silk saree I ordered was absolutely stunning. The quality was beyond my expectations, and the WhatsApp ordering process was so convenient!",
    rating: 5,
  },
  {
    name: "Anitha Reddy",
    location: "Hyderabad",
    text: "I have been ordering from Vasthram for over a year now. Their collection is exquisite, and the personal attention they give to every order is remarkable.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    location: "Chennai",
    text: "Found the most beautiful cotton handloom saree for my daughter's wedding. The team helped me choose the perfect piece with wonderful styling advice.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center">
            <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Testimonials
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Loved by Women Across India</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 200}>
              <div className="h-full rounded-lg border border-border bg-card p-8">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="mt-5 font-body text-sm leading-relaxed text-muted-foreground">
                  {`"${testimonial.text}"`}
                </p>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-serif text-base font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
