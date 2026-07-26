import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function TimelineItem({ item, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10"
    >
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="absolute left-0 top-[10px] w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-400"
        style={{
          boxShadow: '0 0 0 4px #0e0a07, 0 0 16px rgba(255,107,26,0.5)',
        }}
      />

      {/* Card */}
      <div
        className="glass rounded-xl p-6 mb-1
                   hover:border-orange-500/30 hover:shadow-neon-card hover:translate-x-1
                   transition-all duration-300"
      >
        {item.years && (
          <p className="font-mono text-[11px] tracking-widest text-orange-400 uppercase mb-2">
            {item.years}
          </p>
        )}
        <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-1">
          {item.level}
        </h3>
        <p className="text-slate-400 text-sm">{item.institution}</p>
        {item.note && (
          <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium
                           bg-orange-500/10 border border-orange-500/20 text-orange-300">
            {item.note}
          </span>
        )}
      </div>

      {/* Spacer between items */}
      <div className="h-6" />
    </motion.div>
  )
}

export default function Education({ education = [] }) {
  return (
    <section id="education" className="py-16 sm:py-24 md:py-28 bg-[#070d1a] relative overflow-hidden">
      {/* Left glow blob */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,184,77,0.06) 0%, transparent 70%)' }}
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
          <p className="label mb-3">My Journey</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">Education</h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative pl-8 sm:pl-10">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute left-[7px] top-3 w-[2px] timeline-line origin-top"
            style={{ height: 'calc(100% - 32px)' }}
          />

          {education.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
