import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconMoon, IconSun } from './icons'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle color theme"
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full text-stone-600 transition-colors hover:bg-stone-900/5 dark:text-stone-300 dark:hover:bg-white/10 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? <IconSun className="h-4.5 w-4.5" /> : <IconMoon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
