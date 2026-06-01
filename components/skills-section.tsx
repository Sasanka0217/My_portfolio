"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 92 },
      { name: "JavaScript ", level: 88 },
      { name: "React", level: 90 },
      
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java ", level: 90 },
      { name: "Node.js ", level: 85 },
      { name: "REST API Design", level: 88 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 64 },
      { name: "MongoDB", level: 80 },
  
    ],
  },
  {
    category: "Tools ",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "npm", level: 88 },
      { name: "Postman", level: 78 },
  
    ],
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.05)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-card noise-bg"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 text-center">
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Skill Set
          </p>
          <h2
            className={`mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-balance">{"Technical proficiency"}</span>
          </h2>
          <div
            className={`mt-4 mx-auto h-1 w-16 bg-accent rounded-full transition-all duration-700 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Skills grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.category}
              className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${ci * 150 + 200}ms` }}
            >
              <h3 className="mb-6 text-lg font-bold text-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent inline-block" />
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.level}%` : "0%",
                          transitionDelay: `${ci * 150 + si * 100 + 400}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
