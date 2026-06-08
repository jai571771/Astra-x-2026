/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#060608',
        'marvel-red': '#E23636',
        'reactor-blue': '#00D2FF',
        'cosmic-purple': '#8A2BE2',
        'infinity-gold': '#FFD700',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(226, 54, 54, 0.6)',
        'blue-glow': '0 0 15px rgba(0, 210, 255, 0.6)',
        'purple-glow': '0 0 15px rgba(138, 43, 226, 0.6)',
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.6)',
        'reactor-inner': 'inset 0 0 15px rgba(0, 210, 255, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow-pulse': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 2px rgba(0, 210, 255, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 12px rgba(0, 210, 255, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
