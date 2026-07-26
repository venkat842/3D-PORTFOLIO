/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        bgDark: '#0C0C0C',
        textLight: '#D7E2EA',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
=======
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          900: '#050812',
          800: '#070d1a',
          700: '#0a1228',
          card: '#0a0f23',
        },
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'spin-slow':     'spin 25s linear infinite',
        'pulse-slow':    'pulse 3s ease-in-out infinite',
        'gradient-x':    'gradientX 5s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'neon-blue':   '0 0 20px rgba(255,107,26,0.55), 0 0 60px rgba(255,107,26,0.18)',
        'neon-purple': '0 0 20px rgba(255,184,77,0.55), 0 0 60px rgba(255,184,77,0.18)',
        'neon-card':   '0 0 0 1px rgba(255,107,26,0.2), 0 8px 32px rgba(0,0,0,0.6)',
        'neon-card-hover': '0 0 0 1px rgba(255,107,26,0.45), 0 0 30px rgba(255,107,26,0.15), 0 16px 48px rgba(0,0,0,0.7)',
>>>>>>> e738f99f58e714eb1d75922404adb1ad706fcfa9
      },
    },
  },
  plugins: [],
}
