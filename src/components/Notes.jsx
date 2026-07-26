import { motion } from 'framer-motion'
import { FiEdit3 } from 'react-icons/fi'

export default function Notes({ notes = [] }) {
  const hasNotes = notes && notes.length > 0

  return (
    <section id="notes" className="py-16 sm:py-24 md:py-28 bg-[#070d1a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="label mb-3">Thoughts & Experiments</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">Notes</h2>
        </motion.div>

        {hasNotes ? (
          /* Future: render note cards here */
          <div className="grid gap-5 md:grid-cols-2">
            {notes.map((note, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="glass rounded-2xl p-7"
              >
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{note.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{note.body}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Placeholder */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-sm mx-auto glass rounded-2xl p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-6">
              <FiEdit3 className="text-orange-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-slate-200 mb-3">Coming Soon</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              I'll be sharing notes, learnings, and project write-ups here.
              <br />Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
