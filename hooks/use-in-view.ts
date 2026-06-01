"use client"

import { useEffect, useState, type RefObject } from "react"

export function useInView(ref: RefObject<HTMLElement | null>, threshold = 0.1) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])

  return inView
}
