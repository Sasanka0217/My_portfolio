"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, 0.1)

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 noise-bg"
    >
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p
            className={`text-sm font-medium tracking-[0.2em] uppercase text-accent transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Me
          </p>
          <h2
            className={`mt-3 font-serif text-4xl sm:text-5xl font-bold text-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-balance">
              {"BSc (Hons) IT | Passionate Developer"}
            </span>
          </h2>
          <div
            className={`mt-4 h-1 w-16 bg-accent rounded-full transition-all duration-700 ${
              inView ? "opacity-100 scale-x-100 origin-left" : "opacity-0 scale-x-0 origin-left"
            }`}
            style={{ transitionDelay: "200ms" }}
          />

          <div
            className={`mt-8 space-y-4 text-base leading-relaxed text-muted-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p>
              {"I'm Sasanka Pathirana, an IT undergraduate at SLIIT (Sri Lanka Institute of Information Technology) and an aspiring software developer from Sri Lanka. I’m currently building my skills in software development, system administration, and UI/UX design while gaining practical experience through academic and personal projects."}
            </p>
            <p>
              {"I enjoy learning how systems work, solving technical problems, and turning ideas into functional digital solutions. Over time, I’ve worked with technologies such as web development tools, basic backend concepts, databases, and design tools like Figma. I’m especially interested in creating clean, user-friendly applications and continuously improving my technical and problem-solving skills."}
            </p>
            <p>
              {"I consider myself a motivated learner who is always open to new challenges and technologies. My goal is to grow as a well-rounded IT professional and contribute to meaningful projects that make a real impact."}
            </p>
          </div>

          {/* Skills tags */}
          <div
            className={`mt-8 flex flex-wrap gap-2 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {["Java", "React", "Node.js", "Express.js", "JavaScript", "HTML/CSS", "MongoDB", "REST APIs"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
