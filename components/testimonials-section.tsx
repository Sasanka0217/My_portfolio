"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
 

  {
    quote:
      "Sasanka's full stack skills are impressive. He handled everything from database design to frontend implementation with confidence and attention to detail.",
    author: "Fernando",
    role: "Senior Software Engineer at Tech Solutions",
    initials: "F",
  }
  
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.1)
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 noise-bg overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Testimonials
          </p>
          <h2
            className={`mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-balance">{"What people say"}</span>
          </h2>
          <div
            className={`mt-4 mx-auto h-1 w-16 bg-accent rounded-full transition-all duration-700 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Testimonial card */}
        <div
          className={`relative mx-auto max-w-3xl transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center relative">
            <Quote className="mx-auto mb-6 h-10 w-10 text-accent/30" />

            <div className="relative min-h-[120px] sm:min-h-[100px]">
              {testimonials.map((t, i) => (
                <p
                  key={i}
                  className={`absolute inset-0 text-lg sm:text-xl leading-relaxed text-foreground font-serif transition-all duration-500 ${
                    i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  {`"${t.quote}"`}
                </p>
              ))}
            </div>

            <div className="mt-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === current ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {i === current && (
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                        {t.initials}
                      </div>
                      <p className="mt-3 font-bold text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:bg-foreground hover:text-primary-foreground hover:border-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:bg-foreground hover:text-primary-foreground hover:border-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
