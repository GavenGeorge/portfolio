import { motion } from 'framer-motion'
import profile from '../data/profile'
import GlassSheen from './GlassSheen'
import TiltCard from './TiltCard'
import { IconGithub, IconLinkedin, IconMail } from './icons'

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard
            tiltRange={3}
            glowSize={420}
            className="glass-panel relative overflow-hidden rounded-3xl p-10 sm:p-14"
          >
            <GlassSheen inset="inset-x-12" />
            <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-500/15" />

            <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Contact
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
              Let&apos;s build something together
            </p>
            <p className="mx-auto mt-4 max-w-md text-stone-600 dark:text-stone-300">
              Open to connecting about Linux infrastructure, automation, and AI integration work
              — reach out by email or LinkedIn.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-stone-900"
              >
                <IconMail className="h-4 w-4" />
                {profile.email}
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-6 text-stone-500 dark:text-stone-400">
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-stone-900 dark:hover:text-white">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-stone-900 dark:hover:text-white">
                <IconLinkedin className="h-5 w-5" />
              </a>
            </div>
          </TiltCard>
        </motion.div>

        <p className="mt-10 text-sm text-stone-500 dark:text-stone-500">
          © {new Date().getFullYear()} Gaven George. Built with React, Vite &amp; Tailwind.
        </p>
      </div>
    </section>
  )
}

export default Contact
