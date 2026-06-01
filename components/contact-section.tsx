"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { toast } from "@/hooks/use-toast"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.05)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        const errorData = (await response.json().catch(() => null)) as
          | { error?: string }
          | null
        const errorMessage =
          errorData?.error || response.statusText || "Unknown error"
        throw new Error(errorMessage)
      }

      toast({
        title: "Message sent successfully",
        description: "Thanks for reaching out. I will get back to you soon.",
      })

      setFormState({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      const errorDetails =
        error instanceof Error ? error.message : "Please try again in a moment."

      toast({
        title: "Failed to send message",
        description: errorDetails,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 noise-bg"
    >
      {/* Decorative */}
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 text-center">
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Get In Touch
          </p>
          <h2
            className={`mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-balance">{"Let's work together"}</span>
          </h2>
          <div
            className={`mt-4 mx-auto h-1 w-16 bg-accent rounded-full transition-all duration-700 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
          <p
            className={`mt-6 mx-auto max-w-xl text-base leading-relaxed text-muted-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {"Have a project in mind? I'd love to hear about it. Drop me a message and let's create something exceptional."}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "sasankamp01@gmail.com",
                href: "mailto:sasankamp01@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+94 718 747 536",
                href: "tel:+94718747536",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Sri Lanka",
                href: "#",
              },
            ].map((info) => {
              const Icon = info.icon
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="mt-1 text-base font-medium text-foreground group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              )
            })}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "Twitter", "Stack Overflow"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:bg-foreground hover:text-primary-foreground hover:border-foreground hover:scale-110"
                    aria-label={social}
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Project inquiry"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-[0.1em] uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
