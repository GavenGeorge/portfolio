import { motion } from 'framer-motion'
import { professionalSkills, technicalSkills } from '../data/skills'
import GlassSheen from './GlassSheen'
import TiltCard from './TiltCard'

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Skills
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
            What I work with
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {technicalSkills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <TiltCard
                tiltRange={4}
                glowSize={300}
                className="glass-panel glass-panel-sm relative h-full overflow-hidden rounded-2xl p-6"
              >
                <GlassSheen />
                <h3 className="text-base font-medium text-stone-900 dark:text-white">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-700 dark:text-amber-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: technicalSkills.length * 0.06 }}
          className="mt-6"
        >
          <TiltCard
            tiltRange={3}
            glowSize={360}
            className="glass-panel glass-panel-sm relative overflow-hidden rounded-2xl p-6 sm:p-8"
          >
            <GlassSheen />
            <h3 className="text-base font-medium text-stone-900 dark:text-white">
              Professional Skills
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {professionalSkills.map((skill) => (
                <div key={skill.label}>
                  <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">
                    {skill.label}
                  </p>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
