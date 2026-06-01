"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ArrowUpRight } from "lucide-react"

const experiences = [
 {
    period: "2025 - 2026",
    role: "Full Stack Developer",
    company: "Freelance / Independent",
    companyUrl: "#",
    description:
      "Working on full stack web applications using Java Spring Boot, Node.js, and modern frontend frameworks. Delivering end-to-end solutions from database design to deployment.",
    skills: ["Java", "Express.js", "Node.js", "MySQL", "MongoDB"],
  },
  {
    period: "2023 - 2025",
    role: "Frontend & Mobile App Developer / UI/UX Designer",
    company: "Academic Projects",
    companyUrl: "#",
    description:
      "Built responsive web applications, mobile apps, and UI/UX designs. Focused on creating user-friendly and visually appealing interfaces using HTML, CSS, JavaScript, React, and Figma.",
    skills: ["HTML/CSS", "JavaScript", "React", "Figma", "Mobile App Development"],
  },
  {
    period: "2023 - Present",
    role: "Student & LEO Club Member",
    company: "SLIIT & Community Work",
    companyUrl: "https://www.sliit.lk/",
    description:
      "Joined SLIIT for BSc in IT while actively participating in LEO Club activities, community service, and leadership programs, strengthening teamwork and problem-solving skills.",
    skills: ["Leadership", "Teamwork", "Event Management", "Problem Solving", "Software Development"],
  },
  {
    period: "2020 - 2023",
    role: "Advanced Level Student",
    company: "Physical Science Stream",
    companyUrl: "#",
    description:
      "Completed Advanced Level (A/L) in the Physical Science stream ",
    skills: ["Physics", "Combined Mathematics", "Chemistry"],
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.05)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-card noise-bg"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Career Path
          </p>
          <h2
            className={`mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-balance">Experience</span>
          </h2>
          <div
            className={`mt-4 h-1 w-16 bg-accent rounded-full transition-all duration-700 ${
              inView ? "opacity-100 scale-x-100 origin-left" : "opacity-0 scale-x-0 origin-left"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block md:left-48" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`group relative transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  {/* Period */}
                  <div className="md:w-48 flex-shrink-0">
                    <p className="text-sm font-medium text-muted-foreground md:text-right">
                      {exp.period}
                    </p>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden md:flex absolute left-48 top-1.5 -translate-x-1/2 items-center justify-center">
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-background transition-colors group-hover:bg-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:shadow-lg md:ml-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                        <a
                          href={exp.companyUrl}
                          className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                        >
                          {exp.company}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
