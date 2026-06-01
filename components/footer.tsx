"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-card noise-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-foreground transition-transform duration-300 group-hover:scale-110">
              <span className="text-xs font-bold text-primary-foreground">SP</span>
              <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">sasanka</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {["Services", "Portfolio", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:bg-foreground hover:text-primary-foreground hover:border-foreground hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Sasanka Pathirana. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
