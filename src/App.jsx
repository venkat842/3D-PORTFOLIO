import { useEffect, useState } from 'react'
import Loader    from './components/Loader'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Education from './components/Education'
import Contact   from './components/Contact'
import Notes     from './components/Notes'

export default function App() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    fetch('/content.json')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(data => { setContent(data); setLoading(false) })
      .catch(err  => { setError(err.message); setLoading(false) })
  }, [])

  if (loading) return <Loader />

  if (error) return (
    <div className="min-h-screen bg-[#050812] flex items-center justify-center text-red-400">
      <p>⚠ Could not load content.json — {error}</p>
    </div>
  )

  return (
    <div className="bg-[#050812] text-slate-100 overflow-x-hidden">
      <Navbar name={content.name} />
      <Hero      data={content} />
      <About     data={content} />
      <Skills    skills={content.skills} />
      <Projects  projects={content.projects} />
      <Education education={content.education} />
      <Contact   data={content} />
      <Notes     notes={content.notes} />
      <footer className="py-8 text-center border-t border-blue-500/10">
        <p className="text-gradient font-semibold text-sm">{content.name}</p>
        <p className="text-slate-600 text-xs mt-1">Built with React · Tailwind · Three.js · GSAP</p>
      </footer>
    </div>
  )
}
