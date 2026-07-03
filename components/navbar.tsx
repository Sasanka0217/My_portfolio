"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact Me", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const cvUrl = "/Sasanka_Pathirana_CV.pdf"
  const cvFileName = "Sasanka_Pathirana_CV.pdf"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCv = async () => {
    try {
      const response = await fetch(cvUrl)

      if (!response.ok) {
        throw new Error(`CV download failed with status ${response.status}`)
      }

      const blob = await response.blob()
      const objectUrl = window.URL.createObjectURL(blob)
      const link = document.createElement("a")

      link.href = objectUrl
      link.download = cvFileName
      link.rel = "noopener noreferrer"
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(objectUrl)
    } catch {
      toast({
        title: "CV unavailable",
        description: "The CV PDF could not be found. Please check public/SASANKA - CV.pdf.",
        variant: "destructive",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Home">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:scale-110">
            <span className="text-sm font-bold text-primary-foreground">SP</span>
            <div className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">sasanka</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-accent"
                  : "text-muted-foreground hover:text-accent"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={handleDownloadCv}
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
          >
            Download CV
            <Download className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="relative z-50 flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`text-3xl font-serif font-bold text-foreground transition-all duration-500 hover:text-primary ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={handleDownloadCv}
            className={`mt-4 flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-500 hover:bg-accent hover:text-accent-foreground ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Download CV
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
