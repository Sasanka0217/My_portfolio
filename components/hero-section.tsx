"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden noise-bg flex flex-col"
    >
      {/* Decorative gradient blobs */}
      <div
        className="absolute left-[5%] top-[20%] h-64 w-64 rounded-full bg-primary opacity-20 blur-3xl blob-animate"
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      />
      <div
        className="absolute right-[10%] top-[60%] h-80 w-80 rounded-full bg-accent opacity-15 blur-3xl blob-animate"
        style={{
          animationDelay: "2s",
          transform: `translateY(${parallaxOffset * 0.15}px)`,
        }}
      />
      <div
        className="absolute right-[30%] bottom-[10%] h-48 w-48 rounded-full bg-accent opacity-10 blur-3xl blob-animate"
        style={{
          animationDelay: "4s",
          transform: `translateY(${parallaxOffset * 0.1}px)`,
        }}
      />

      {/* Decorative arc outlines */}
      <svg
        className="absolute left-[3%] bottom-[15%] h-48 w-48 lg:h-64 lg:w-64 opacity-20"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M 20 180 A 160 160 0 0 1 180 180"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground"
        />
      </svg>
      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-6 pt-28 pb-12 lg:px-8">
        {/* Social links - left side */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden flex-col gap-6 lg:flex">
          {[
            { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/Sasanka0217" },
            { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/sasanka-pathirana-52b373372" },
            { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
          ].map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className={`text-muted-foreground transition-all duration-500 hover:text-foreground hover:scale-110 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${i * 150 + 600}ms` }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Right-side rotating badge */}
        <div
          className={`absolute right-[5%] top-[15%] z-30 hidden sm:block transition-all duration-700 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="relative h-32 w-32 lg:h-40 lg:w-40">
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <svg className="animate-spin-slow h-[78%] w-[78%] lg:h-[80%] lg:w-[80%]" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                  />
                </defs>
                <text className="text-[11px] font-medium uppercase tracking-[0.35em] fill-foreground">
                  <textPath href="#circlePath">
                    {"Come on let's talk \u00B7 "}
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="h-4 w-4 lg:h-5 lg:w-5 rounded-full bg-accent/40" />
              </div>
            </div>
          </div>
        </div>
 
        {/* Portrait + decorative elements */}
        <div className="relative mb-8 lg:mb-10">
          {/* Portrait image */}
          <div
            className={`relative z-10 h-64 w-56 sm:h-80 sm:w-72 md:h-96 md:w-80 lg:h-[420px] lg:w-[350px] rounded-[2rem] bg-gradient-to-br from-primary/75 via-primary/40 to-accent/70 p-[2px] shadow-[0_18px_44px_-24px_rgba(0,127,115,0.4)] transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{
              transform: `translateY(${inView ? -parallaxOffset * 0.08 : 12}px)`,
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-2px)] bg-background/95">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Portrait of Sasanka Pathirana"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 350px"
              />
            </div>
          </div>

        </div>

        {/* Name and title */}
        <div className="relative z-10 text-center">
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight gradient-text transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="text-balance">Sasanka Pathirana</span>
          </h1>
          <p
            className={`mt-3 text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground font-medium transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {'--Full Stack Developer //-- '}
          </p>
        </div>

        {/* Mobile social links */}
        <div className="mt-8 flex gap-6 lg:hidden">
          {[
            { icon: <GitHubIcon />, label: "GitHub", href: "#" },
            { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/sasanka-pathirana-52b373372" },
            { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Client logos marquee */}
      <div className="relative z-10 border-t border-border bg-card/50 py-6 sm:py-8">
        <div className="overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 md:gap-20 whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <span
                key={i}
                className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground/50 select-none flex-shrink-0"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const clientLogos = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Express",
  "JavaScript",
  "MERN Stack",
  "MongoDB",
]

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
