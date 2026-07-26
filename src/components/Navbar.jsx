import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home',      href: '#home'      },
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
  { label: 'Notes',     href: '#notes'     },
]

export default function Navbar({ name }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('home')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const pos = window.scrollY + 130
      document.querySelectorAll('section[id]').forEach(sec => {
        if (sec.offsetTop <= pos) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Derive initials
  const initials = name
    ? name.split(' ').slice(0, 2).map(w => w[0]).join('')
    : 'VV'

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0e0a07]/88 backdrop-blur-2xl border-b border-orange-500/10 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => {
            const isActive = active === item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive ? 'text-orange-400' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {/* Animated active pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-orange-500/10 rounded-lg border border-orange-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-50"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`block w-6 h-[2px] bg-slate-300 rounded transition-all duration-300 ${
                menuOpen && i === 0 ? 'translate-y-[7px] rotate-45'  :
                menuOpen && i === 1 ? 'opacity-0 scale-x-0'          :
                menuOpen && i === 2 ? '-translate-y-[7px] -rotate-45':
                ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 mx-4 rounded-2xl glass border border-orange-500/15 overflow-hidden"
          >
            <ul className="flex flex-col py-2">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-3.5 text-sm font-medium transition-colors ${
                      active === item.href.slice(1)
                        ? 'text-orange-400 bg-orange-500/10'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
