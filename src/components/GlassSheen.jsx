function GlassSheen({ inset = 'inset-x-6' }) {
  return (
    <span
      className={`pointer-events-none absolute top-0 ${inset} h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/25`}
    />
  )
}

export default GlassSheen
