import { motion } from 'framer-motion'
import profile from '../data/profile'
import GlassSheen from './GlassSheen'
import TiltCard from './TiltCard'
import { IconArrowDown, IconExternal, IconGithub, IconLinkedin, IconMail } from './icons'

const chips = [
  { label: 'RHEL', position: 'top-6 -left-4 sm:-left-8' },
  { label: 'Ansible', position: 'top-1/4 -right-4 sm:-right-10' },
  { label: 'Python', position: 'bottom-1/4 -left-6 sm:-left-12' },
  { label: 'Azure AI', position: 'bottom-8 -right-2 sm:-right-6' },
]

function Hero() {
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="group relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-16"
      style={{ '--x': '50%', '--y': '50%' }}
    >
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="animate-blob-1 absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-500/20" />
        <div className="animate-blob-2 absolute top-1/3 right-0 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-500/15" />
        <div className="animate-blob-3 absolute bottom-0 left-0 h-72 w-72 rounded-full bg-stone-300/60 blur-3xl dark:bg-stone-500/10" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(520px circle at var(--x) var(--y), rgba(196,120,30,0.14), transparent 70%)',
        }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-12"
          >
            <GlassSheen inset="inset-x-10" />

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Currently @ Oshkosh Corporation
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-6xl">
              Hi, I&apos;m{' '}
              <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                Gaven George
              </span>
            </h1>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
              Server Engineer Associate · Platform Services (Linux)
            </p>
            <p className="mt-6 max-w-xl text-stone-600 dark:text-stone-400">
              I build AI-driven automation for enterprise Linux infrastructure — integrating
              Azure OpenAI and Event-Driven Ansible to patch, harden, and monitor 350+ RHEL
              servers, backed by CI/CD pipelines that keep every change traceable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-stone-900"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-900/15 bg-white/50 px-6 py-3 text-sm font-medium text-stone-900 backdrop-blur transition-transform hover:scale-105 dark:border-white/20 dark:bg-white/5 dark:text-white"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex gap-5 text-stone-500 dark:text-stone-400">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-stone-900 dark:hover:text-white">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-stone-900 dark:hover:text-white">
                <IconLinkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-stone-900 dark:hover:text-white">
                <IconMail className="h-5 w-5" />
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Resume" className="inline-flex items-center gap-1 text-sm transition-colors hover:text-stone-900 dark:hover:text-white">
                Resume
                <IconExternal className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="hidden w-full max-w-sm justify-self-center lg:block"
          >
            <TiltCard
              tiltRange={10}
              glowSize={340}
              className="glass-panel relative aspect-square w-full rounded-[2.5rem]"
            >
              <GlassSheen inset="inset-x-12" />

              <div className="absolute inset-10 flex items-center justify-center rounded-[2rem] border border-white/40 bg-white/20 dark:border-white/5 dark:bg-white/5">
                <span className="bg-linear-to-br from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-7xl font-bold text-transparent">
                  GG
                </span>
              </div>

              {chips.map((chip, i) => (
                <span
                  key={chip.label}
                  style={{ animationDelay: `${i * 0.7}s` }}
                  className={`animate-float-chip absolute ${chip.position} rounded-full border border-white/50 bg-white/70 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-stone-700 shadow-sm backdrop-blur-xl dark:border-white/15 dark:bg-stone-900/70 dark:text-stone-200`}
                >
                  {chip.label}
                </span>
              ))}
            </TiltCard>
          </motion.div>
        </div>

        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-xs text-stone-500 dark:text-stone-400"
          aria-label="Scroll to experience"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IconArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
