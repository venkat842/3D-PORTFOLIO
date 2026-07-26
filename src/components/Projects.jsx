import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

/* Gradient index → background for logo fallback */
const FALLBACK_GRADIENTS = [
  'from-blue-600 to-purple-600',
  'from-purple-600 to-pink-600',
  'from-cyan-600 to-blue-600',
  'from-emerald-600 to-cyan-600',
]

function ProjectCard({ project, index }) {
  const [logoError, setLogoError] = useState(false)
  const gradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group glass rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden
                 hover:border-orange-500/35 hover:shadow-neon-card transition-all duration-400 cursor-default"
    >
      {/* Top accent line — slides in on hover */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500
                   scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      />

      {/* Project logo + name row */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div
          className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/10
                     group-hover:ring-orange-500/40 group-hover:shadow-neon-blue transition-all duration-300"
        >
          {project.logo && !logoError ? (
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="w-full h-full object-cover"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${gradient}
                          flex items-center justify-center text-white font-bold text-xl`}
            >
              {project.name?.[0] ?? '?'}
            </div>
          )}
        </div>

        {/* Name + tagline */}
        <div>
          <h3 className="text-lg font-bold text-slate-100">{project.name}</h3>
          <p className="text-sm font-medium text-orange-400">{project.tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {(project.tech ?? []).map(t => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium
                       bg-amber-500/10 border border-amber-500/20 text-amber-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Visit button */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                   bg-gradient-to-r from-orange-600 to-amber-500 text-white
                   hover:shadow-neon-blue hover:-translate-y-0.5 transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <FiExternalLink className="text-base" />
        Visit Live Site
      </a>
    </motion.article>
  )
}

export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-28 relative overflow-hidden">
      {/* Centre glow blob */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]
                   rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,26,0.05) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="label mb-3">What I've Built</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
