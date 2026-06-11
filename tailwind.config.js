/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pancake-dark': '#1a1a2e',
        'pancake-darker': '#0f0f1a',
        'pancake-gold': '#e6a817',
        'pancake-gold-hover': '#f0b820',
        'pancake-gray': '#2a2a3e',
        'pancake-light': '#e8e8e8',
        'pancake-code-bg': '#0f0f1a',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'sans-serif'],
        'body': ['"Source Sans 3"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(230, 168, 23, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 168, 23, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
