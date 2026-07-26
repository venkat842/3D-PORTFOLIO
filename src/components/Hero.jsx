import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import gsap from 'gsap'

/* ─────────────────────────────────────────────────────────────
   THREE.JS scene: TorusKnot wireframe + particles + rings
───────────────────────────────────────────────────────────── */
function useThreeHero(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof THREE === 'undefined') return

    /* Renderer */
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const setSize = () => {
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight
      camera.updateProjectionMatrix()
    }

    /* Camera */
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
    camera.position.z = 5.5
    setSize()

    /* Scene */
    const scene = new THREE.Scene()

    /* TorusKnot wireframe — main focal piece */
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.3, 0.42, 200, 24, 2, 3)
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0xFF6B1A,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    })
    const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat)
    scene.add(torusKnot)

    /* Outer glow ring — purple accent */
    const ringGeo = new THREE.TorusGeometry(2.6, 0.01, 8, 120)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xFFB84D, transparent: true, opacity: 0.22 })
    const ring1 = new THREE.Mesh(ringGeo, ringMat)
    ring1.rotation.x = Math.PI / 3.5
    scene.add(ring1)

    /* Second inner ring — blue */
    const ring2Geo = new THREE.TorusGeometry(2.0, 0.008, 8, 100)
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xFB923C, transparent: true, opacity: 0.15 })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.x = -Math.PI / 4
    ring2.rotation.z = Math.PI / 6
    scene.add(ring2)

    /* Particle field */
    const COUNT = 380
    const positions = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pMat = new THREE.PointsMaterial({ color: 0xFDBA74, size: 0.042, transparent: true, opacity: 0.55 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    /* Mouse parallax */
    let mx = 0, my = 0
    const onMouse = e => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 0.45
      my = (e.clientY / window.innerHeight - 0.5) * 0.45
    }
    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('resize', setSize)

    /* Animation loop */
    let rafId
    const animate = t => {
      rafId = requestAnimationFrame(animate)
      const time = t * 0.001

      torusKnot.rotation.x = time * 0.16
      torusKnot.rotation.y = time * 0.27

      ring1.rotation.z = time * 0.07
      ring2.rotation.z = -time * 0.05

      particles.rotation.y = time * 0.03
      particles.rotation.x = time * 0.015

      // Smooth parallax
      camera.position.x += (mx - camera.position.x) * 0.06
      camera.position.y += (-my - camera.position.y) * 0.06

      renderer.render(scene, camera)
    }
    animate(0)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', setSize)
      renderer.dispose()
      torusKnotGeo.dispose(); torusKnotMat.dispose()
      pGeo.dispose(); pMat.dispose()
    }
  }, [canvasRef])
}

/* ─────────────────────────────────────────────────────────────
   GSAP word-stagger on hero name
───────────────────────────────────────────────────────────── */
function useNameAnimation(ref, ready) {
  useEffect(() => {
    if (!ready || !ref.current) return
    const words = ref.current.querySelectorAll('.hero-word')
    gsap.fromTo(
      words,
      { opacity: 0, y: 48, rotateX: -80, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.12,
        ease: 'back.out(1.5)',
        delay: 0.55,
      }
    )
  }, [ref, ready])
}

/* ─────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────── */
export default function Hero({ data }) {
  const canvasRef  = useRef(null)
  const nameRef    = useRef(null)
  const [imgError, setImgError] = useState(false)

  useThreeHero(canvasRef)
  useNameAnimation(nameRef, !!data)

  const words    = data?.name?.split(' ') ?? []
  const initials = words.slice(0, 2).map(w => w[0]).join('')

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js canvas — full background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" aria-hidden />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,26,0.07) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 w-full
                      grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col gap-4 sm:gap-5 order-1 md:order-1 text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-mono text-orange-400 text-xs tracking-widest uppercase text-center md:text-left"
          >
            👋 Hey there, I'm
          </motion.p>

          {/* Animated name */}
          <div ref={nameRef} className="perspective overflow-hidden py-1">
            <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 justify-center md:justify-start">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block text-[2.1rem] xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gradient-white leading-tight"
                  style={{ opacity: 0, willChange: 'transform, opacity, filter' }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-400"
          >
            {data?.tagline}
          </motion.p>

          {/* One-liner */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0"
          >
            {data?.hero_description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.38, duration: 0.6 }}
            className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 items-stretch xs:items-center justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="text-center px-7 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white text-sm font-semibold
                         hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 min-h-[48px] flex items-center justify-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-center px-7 py-4 rounded-xl glass text-slate-300 text-sm font-semibold
                         hover:text-white hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 min-h-[48px] flex items-center justify-center"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center order-2 md:order-2 pt-2 md:pt-0"
        >
          <div className="relative">
            {/* Pulsing outer glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-400/20 blur-2xl animate-pulse-slow" />

            {/* Gradient ring border */}
            <div className="relative p-[3px] rounded-full bg-gradient-to-br from-orange-500 via-amber-400 to-orange-400 shadow-orange-500/20">
              {/* Inner container */}
              <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
                              rounded-full overflow-hidden border-2 border-orange-500/30 bg-[#0e0a07]">
                {data?.profileImage && !imgError ? (
                  <img
                    src={data.profileImage}
                    alt={data.name}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback — gradient initials */
                  <div className="w-full h-full bg-gradient-to-br from-orange-950/60 to-amber-950/60 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gradient">{initials}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating orbit dots */}
            <div
              className="absolute -top-3 -right-3 w-7 h-7 rounded-full border border-orange-500/40 bg-orange-500/10 animate-float"
              style={{ animationDelay: '0s' }}
            />
            <div
              className="absolute bottom-4 -left-5 w-5 h-5 rounded-full border border-amber-400/40 bg-amber-400/10 animate-float"
              style={{ animationDelay: '1.2s' }}
            />
            <div
              className="absolute top-1/2 -right-8 w-3 h-3 rounded-full bg-orange-400/30 animate-float"
              style={{ animationDelay: '2.1s' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-orange-500"
          />
        </div>
      </motion.div>
    </section>
  )
}
