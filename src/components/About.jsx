import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const STATS = [
  { value: '2+',  label: 'Live Projects'  },
  { value: '8+',  label: 'Skills Learned' },
  { value: '2nd', label: 'Year Student'   },
  { value: 'AI',  label: 'Enthusiast'     },
]

export default function About({ data }) {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 relative overflow-hidden">
      {/* Subtle purple glow blob */}
      <div
        className="absolute -left-64 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,184,77,0.06) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="label mb-3">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* Bio card */}
          <motion.div {...fadeUp(0.1)} className="glass p-6 sm:p-8 md:p-10 rounded-2xl">
            <p className="text-slate-300 text-base sm:text-lg leading-[1.85]">
              {data?.about}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: '🎓', label: 'B.Tech Data Science' },
                { icon: '📍', label: 'Aditya University'   },
                { icon: '⚡', label: 'Full-Stack + AI'     },
              ].map(b => (
                <span
                  key={b.label}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
                             bg-orange-500/10 border border-orange-500/20 text-orange-300"
                >
                  <span>{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(0.15 + i * 0.07)}
                className="glass p-6 rounded-2xl text-center group cursor-default
                           hover:shadow-neon-card hover:-translate-y-1 transition-all duration-300"
              >
                <span className="block text-4xl font-bold text-gradient mb-2">
                  {s.value}
                </span>
                <span className="text-slate-500 text-xs tracking-wide">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
