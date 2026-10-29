import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import GlassSheen from './GlassSheen'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400"
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6"
      >
        <nav
          className={`glass-panel relative flex w-full max-w-4xl items-center justify-between rounded-full px-5 text-sm transition-[padding] duration-300 ${
            scrolled ? 'py-2.5' : 'py-3'
          }`}
        >
          <GlassSheen inset="inset-x-10" />

          <a
            href="#home"
            className="font-semibold tracking-tight text-stone-900 dark:text-stone-50"
          >
            Gaven George<span className="text-amber-500">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`relative z-10 block rounded-full px-3.5 py-1.5 transition-colors ${
                      isActive
                        ? 'text-stone-950 dark:text-white'
                        : 'text-stone-600 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-stone-900/8 dark:bg-white/10"
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full border border-stone-900/10 bg-stone-900 px-4 py-1.5 text-white transition-transform hover:scale-105 dark:bg-white dark:text-stone-900"
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`h-0.5 w-5 bg-stone-800 transition-transform dark:bg-stone-100 ${
                  open ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-stone-800 transition-transform dark:bg-stone-100 ${
                  open ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-x-0 top-[calc(100%+12px)] rounded-2xl border border-white/40 bg-white/95 p-4 shadow-xl shadow-black/10 backdrop-blur-xl dark:border-white/15 dark:bg-stone-900/95 md:hidden"
              >
                <ul className="flex flex-col gap-1 text-center text-stone-700 dark:text-stone-200">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 hover:bg-stone-900/5 dark:hover:bg-white/10"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}

export default Navbar
