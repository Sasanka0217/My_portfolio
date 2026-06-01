"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "🏠 UniStay – Student Accommodation Management System",
    category: "Full Stack Application",
    description: "A modern MERN stack web application designed to simplify how students find and book accommodations near universities.",
    image: "/images/project-5.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    year: "2026",
    githubUrl: "https://github.com/detunu-wijeratne/unistay-sliit.git",
  },
  {
    title: "Online Project Management Mobile App",
    category: "Mobile Application (Android)",
    description: "This is a mobile application designed to support real-time project planning, collaboration, and task tracking. It enables teams to efficiently manage projects from creation to completion using their Android devices.",
    image: "/images/project-2.jpg",
    tags: ["Kotlin"],
    year: "2025",
  },
  {
    title: "FERNDALE - Tea Factory Management System",
    category: "Web Application (MERN Full Stack)",
    description: "A web-based application designed to streamline tea factory operations, including production management, inventory tracking, and workforce coordination through an efficient digital solution.",
    image: "/images/project-3.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    year: "2024",
    githubUrl: "https://github.com/Sasanka0217/ferndale-tea-factory_UP",
  },
  {
    title: "Smart Campus Operations Hub",
    category: "Full Stack Project",
    description: "A full-stack web platform for managing facility bookings, maintenance tickets, and campus resource operations.",
    image: "/images/project-6.jpg",
    tags: ["SpringBoot", "React", "Java", "MongoDB"],
    githubUrl: "https://github.com/detunu-wijeratne/it3030-paf-2026-smart-campus-group05.git",
   
  },
]

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.05)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-24 sm:py-32 bg-card noise-bg"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p
              className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Selected Work
            </p>
            <h2
              className={`mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="text-balance">Portfolio</span>
            </h2>
            <div
              className={`mt-4 h-1 w-16 bg-accent rounded-full transition-all duration-700 ${
                inView ? "opacity-100 scale-x-100 origin-left" : "opacity-0 scale-x-0 origin-left"
              }`}
              style={{ transitionDelay: "200ms" }}
            />
          </div>
          <a
            href="#"
            className={`flex items-center gap-2 text-sm font-medium text-foreground transition-all duration-700 hover:text-accent group ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === i ? "scale-105" : "scale-100"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-foreground/60 flex flex-col justify-end p-6 sm:p-8 transition-opacity duration-500 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-primary-foreground/60">{project.year}</span>
                    </div>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2 text-sm font-medium text-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-xl"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Info below image */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-primary-foreground transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
