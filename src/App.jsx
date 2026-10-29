import { useEffect, useRef } from 'react'
import Contact from './components/Contact'
import Experience from './components/Experience'
import GithubActivity from './components/GithubActivity'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const blobRef = useRef(null)

  useEffect(() => {
    function handleMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${x * 22}px, ${y * 22}px, 0)`
      }
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-stone-100 text-stone-900 dark:bg-[#16130f] dark:text-stone-100">
      <div
        ref={blobRef}
        className="pointer-events-none fixed inset-0 -z-30 overflow-hidden transition-transform duration-700 ease-out"
      >
        <div className="animate-blob-1 absolute top-[-10%] left-[5%] h-[34rem] w-[34rem] rounded-full bg-amber-200/50 blur-[120px] dark:bg-amber-500/20" />
        <div className="animate-blob-2 absolute top-[28%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-orange-200/45 blur-[120px] dark:bg-orange-500/20" />
        <div className="animate-blob-3 absolute bottom-[-12%] left-[28%] h-[28rem] w-[28rem] rounded-full bg-rose-200/35 blur-[120px] dark:bg-rose-500/15" />
      </div>
      <div className="bg-noise pointer-events-none fixed inset-0 z-40 opacity-[0.025] mix-blend-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <GithubActivity />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
