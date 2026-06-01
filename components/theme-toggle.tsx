'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme =
    mounted && theme === 'system' ? resolvedTheme ?? 'light' : theme ?? 'light'

  return (
    <button
      type="button"
      onClick={() => setTheme(activeTheme === 'dark' ? 'light' : 'dark')}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-foreground transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground active:scale-95"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {mounted ? activeTheme === 'dark' ? (
        <Sun className="h-4 w-4 transition-transform duration-300" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300" />
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  )
}