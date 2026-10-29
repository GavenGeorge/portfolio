import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [pillRadius, setPillRadius] = useState(28)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const el = navRef.current
    if (!el) return
    const measure = () => {
      if (!open) setPillRadius(el.offsetHeight / 2)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [open])

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
        <motion.nav
          ref={navRef}
          animate={{ borderRadius: open ? 28 : pillRadius }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="glass-panel relative flex w-full max-w-4xl flex-col overflow-hidden px-5 text-sm"
        >
          <GlassSheen inset="inset-x-10" />

          <div
            className={`flex items-center justify-between transition-[padding] duration-300 ${
              scrolled ? 'py-2.5' : 'py-3'
            }`}
          >
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
                aria-expanded={open}
                className="relative flex h-9 w-9 items-center justify-center"
              >
                <span className="relative h-3.5 w-5">
                  <span
                    className={`absolute left-0 h-0.5 w-5 rounded-full bg-stone-800 transition-all duration-300 dark:bg-stone-100 ${
                      open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-0.5 w-5 rounded-full bg-stone-800 transition-all duration-300 dark:bg-stone-100 ${
                      open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="mobile-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.35, ease: 'easeInOut' },
                  opacity: { duration: 0.2, delay: open ? 0.1 : 0 },
                }}
                className="overflow-hidden md:hidden"
              >
                <ul className="flex flex-col gap-2 pt-1 pb-3">
                  {links.map((link) => {
                    const id = link.href.slice(1)
                    const isActive = active === id
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`block rounded-2xl px-4 py-3 text-center font-medium transition-colors ${
                            isActive
                              ? 'bg-stone-900/8 text-stone-950 dark:bg-white/10 dark:text-white'
                              : 'bg-stone-900/5 text-stone-700 hover:bg-stone-900/8 dark:bg-white/5 dark:text-stone-200 dark:hover:bg-white/10'
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
    </>
  )
}

export default Navbar
