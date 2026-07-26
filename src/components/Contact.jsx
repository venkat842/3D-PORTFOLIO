import { motion } from 'framer-motion'
import {
  HiOutlineMail, HiOutlinePhone,
} from 'react-icons/hi'
import { FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Contact({ data }) {
  const CONTACTS = [
    {
      label:    'Email',
      value:    data?.email,
      href:     `mailto:${data?.email}`,
      Icon:     HiOutlineMail,
      hoverClass: 'hover:border-red-400/50 hover:shadow-[0_0_20px_rgba(248,113,113,0.3)] hover:text-red-300',
    },
    {
      label:    'Phone',
      value:    `+91 ${data?.phone}`,
      href:     `tel:+91${data?.phone}`,
      Icon:     HiOutlinePhone,
      hoverClass: 'hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:text-green-300',
    },
    {
      label:    'Instagram',
      value:    '@venkat77s',
      href:     data?.instagram,
      Icon:     FiInstagram,
      external: true,
      hoverClass: 'hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] hover:text-pink-300',
    },
    {
      label:    'LinkedIn',
      value:    'vvenkatsn',
      href:     data?.linkedin,
      Icon:     FiLinkedin,
      external: true,
      hoverClass: 'hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.35)] hover:text-blue-300',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 relative overflow-hidden">
      {/* Centre glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,26,0.06) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-5"
        >
          <p className="label mb-3">Say Hello</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">Contact</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-400 max-w-md mx-auto mb-14 text-base"
        >
          Open to collaborations, internships, and interesting conversations. Reach out anytime!
        </motion.p>

        {/* Contact buttons */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto sm:max-w-none sm:flex sm:flex-wrap sm:justify-center sm:gap-5">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`
                flex items-center gap-4 px-5 sm:px-7 py-4 rounded-2xl glass text-slate-400 text-sm font-medium
                transition-all duration-300 min-h-[56px] w-full sm:w-auto ${c.hoverClass}
              `}
            >
              <c.Icon className="text-xl flex-shrink-0" />
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                  {c.label}
                </span>
                <span className="text-slate-200 font-semibold text-sm mt-0.5">{c.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
