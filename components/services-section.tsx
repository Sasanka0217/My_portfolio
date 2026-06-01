"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Code, Palette, Smartphone, Globe, Layers, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with Java Spring Boot backends and responsive frontend interfaces.",
    tags: ["MERN Stack", "REST APIs"],
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Creating responsive, pixel-perfect user interfaces with modern HTML, CSS, and JavaScript frameworks.",
    tags: ["HTML/CSS", "React", "Next.js"],
  },
  {
    icon: Layers,
    title: "Backend Engineering",
    description: "Designing robust server-side architectures with Node.js and Express, handling complex business logic.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Building RESTful APIs and microservices that are scalable, well-documented, and easy to integrate.",
    tags: ["REST"],
  },
  {
    icon: Smartphone,
    title: "Database Design",
    description: "Designing efficient database schemas and queries for both SQL and NoSQL databases.",
    tags: ["MySQL", "MongoDB"],
  },
  
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.05)

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 sm:py-32 noise-bg"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What I Do
          </p>
          <h2
            className={`mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-balance">Services & Expertise</span>
          </h2>
          <div
            className={`mt-4 h-1 w-16 bg-accent rounded-full transition-all duration-700 ${
              inView ? "opacity-100 scale-x-100 origin-left" : "opacity-0 scale-x-0 origin-left"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 hover-lift cursor-default ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
