/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        romantic: {
          dark: '#1a0a0f',
          deeper: '#0f0510',
          bg: '#12080c',
          rose: '#be4d6b',
          blush: '#e8b4bc',
          gold: '#d4a574',
          wine: '#6b2d3e',
          pink: '#f8a5b8',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.2s ease-in-out infinite',
        'heart-float': 'heartFloat 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 24px rgba(232, 180, 188, 0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(232, 180, 188, 0.55)' },
        },
        heartFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.05)' },
        },
      },
      boxShadow: {
        'romantic-glow': '0 0 30px rgba(232, 180, 188, 0.25), 0 0 60px rgba(190, 77, 107, 0.15)',
        'romantic-soft': '0 0 20px rgba(232, 180, 188, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
