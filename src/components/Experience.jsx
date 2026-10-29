import { motion } from 'framer-motion'
import experience, { education } from '../data/experience'
import GlassSheen from './GlassSheen'
import TiltCard from './TiltCard'

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Experience
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
            Where I&apos;ve worked
          </p>
        </motion.div>

        <div className="relative space-y-6 border-l border-stone-900/10 pl-8 dark:border-white/15">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute top-7 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-amber-500" />

              <TiltCard
                tiltRange={3}
                glowSize={360}
                className="glass-panel glass-panel-sm relative overflow-hidden rounded-2xl p-6"
              >
                <GlassSheen />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-stone-900 dark:text-white">
                    {item.role} · <span className="text-stone-500 dark:text-stone-400">{item.company}</span>
                  </h3>
                  <span className="text-sm text-stone-500 dark:text-stone-400">{item.period}</span>
                </div>

                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-stone-600 dark:text-stone-300">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: experience.length * 0.08 }}
            className="relative"
          >
            <span className="absolute top-7 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-stone-400 dark:bg-stone-500" />

            <TiltCard
              tiltRange={3}
              glowSize={360}
              className="glass-panel glass-panel-sm relative overflow-hidden rounded-2xl p-6"
            >
              <GlassSheen />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-stone-900 dark:text-white">
                  {education.degree} · <span className="text-stone-500 dark:text-stone-400">{education.school}</span>
                </h3>
                <span className="text-sm text-stone-500 dark:text-stone-400">{education.period}</span>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
