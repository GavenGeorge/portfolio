import { motion } from 'framer-motion'
import projects from '../data/projects'
import GlassSheen from './GlassSheen'
import TiltCard from './TiltCard'
import { IconExternal, IconGithub } from './icons'

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Projects
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
            Things I&apos;ve built
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard
                tiltRange={5}
                glowSize={300}
                className="glass-panel glass-panel-sm relative h-full overflow-hidden rounded-2xl p-6"
              >
                <GlassSheen />

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium text-stone-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.github || project.demo ? (
                    <div className="flex shrink-0 gap-3 text-stone-500 dark:text-stone-400">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="transition-colors hover:text-stone-900 dark:hover:text-white">
                          <IconGithub className="h-5 w-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="transition-colors hover:text-stone-900 dark:hover:text-white">
                          <IconExternal className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="shrink-0 rounded-full border border-stone-900/10 bg-stone-900/5 px-2.5 py-1 text-[11px] font-medium text-stone-500 dark:border-white/10 dark:bg-white/5 dark:text-stone-400">
                      Internal
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-700 dark:text-amber-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
