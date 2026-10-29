import { motion } from 'framer-motion'
import profile from '../data/profile'
import GlassSheen from './GlassSheen'
import { IconExternal, IconGithub } from './icons'

function GithubActivity() {
  const username = profile.githubUrl.split('/').pop()

  return (
    <section className="relative px-6 pb-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-panel glass-panel-sm relative overflow-hidden rounded-2xl p-6"
        >
          <GlassSheen />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-base font-medium text-stone-900 dark:text-white">
              <IconGithub className="h-5 w-5" />
              GitHub Activity
            </h3>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
            >
              View profile
              <IconExternal className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-4 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/f97316/${username}`}
              alt={`${username}'s GitHub contribution graph`}
              className="w-full min-w-[640px]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GithubActivity
