import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function TiltCard({
  className = '',
  children,
  tiltRange = 7,
  glow = true,
  glowSize = 280,
  glowColor = 'rgba(196,120,30,0.16)',
  ...props
}) {
  const ref = useRef(null)
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const springX = useSpring(mvX, { stiffness: 220, damping: 22, mass: 0.6 })
  const springY = useSpring(mvY, { stiffness: 220, damping: 22, mass: 0.6 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [tiltRange, -tiltRange])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltRange, tiltRange])

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    mvX.set(px - 0.5)
    mvY.set(py - 0.5)
    ref.current.style.setProperty('--x', `${px * 100}%`)
    ref.current.style.setProperty('--y', `${py * 100}%`)
  }

  function handleMouseLeave() {
    mvX.set(0)
    mvY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group ${className}`}
      {...props}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(${glowSize}px circle at var(--x, 50%) var(--y, 50%), ${glowColor}, transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}

export default TiltCard
