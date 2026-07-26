import { motion } from 'framer-motion'
import {
  SiPython, SiMysql, SiHtml5, SiCss, SiBootstrap, SiC,
} from 'react-icons/si'
import { TbLayoutGridFilled, TbRobot } from 'react-icons/tb'

/* Map skill name → { Icon, color, label } */
const SKILL_META = {
  'python':        { Icon: SiPython,          color: '#3b82f6', label: 'Python'       },
  'c':             { Icon: SiC,               color: '#60a5fa', label: 'C'            },
  'sql':           { Icon: SiMysql,           color: '#06b6d4', label: 'SQL'          },
  'html':          { Icon: SiHtml5,           color: '#f97316', label: 'HTML'         },
  'css':           { Icon: SiCss,             color: '#3b82f6', label: 'CSS'          },
  'bootstrap':     { Icon: SiBootstrap,       color: '#a855f7', label: 'Bootstrap'    },
  'flexbox / grid':{ Icon: TbLayoutGridFilled,color: '#8b5cf6', label: 'Flexbox/Grid' },
  'generative ai': { Icon: TbRobot,           color: '#10b981', label: 'Generative AI'},
}

function getSkillMeta(name = '') {
  return SKILL_META[name.toLowerCase()] ?? {
    Icon: null,
    color: '#6366f1',
    label: name,
  }
}

export default function Skills({ skills = [] }) {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-28 bg-[#070d1a] relative">
      {/* Right-side glow blob */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,26,0.06) 0%, transparent 70%)' }}
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
          <p className="label mb-3">What I Know</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">Skills</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {skills.map((skill, i) => {
            const meta = getSkillMeta(skill.name)
            const { Icon, color, label } = meta
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: Math.min(i * 0.07, 0.5), ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="glass rounded-2xl p-6 flex flex-col items-center gap-4 cursor-default group
                           hover:border-orange-500/35 transition-colors duration-300"
                style={{
                  '--skill-color': color,
                } }
              >
                {/* Icon or letter fallback */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                             group-hover:scale-110"
                  style={{
                    background: `${color}18`,
                    boxShadow: `0 0 0 1px ${color}28`,
                  }}
                >
                  {Icon ? (
                    <Icon style={{ color, fontSize: '1.9rem' }} />
                  ) : (
                    <span
                      className="text-2xl font-bold"
                      style={{ color }}
                    >
                      {label[0]}
                    </span>
                  )}
                </div>

                <span className="text-sm font-semibold text-slate-300 text-center leading-tight">
                  {label}
                </span>

                {/* Bottom glow on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
