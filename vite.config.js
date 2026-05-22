// ==============================================
// FILE: tailwind.config.js (Tailwind setup)
// ==============================================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0c12',
        'card-bg': '#0f1222',
        'border-dark': '#262b44',
        'accent-blue': '#3b4eff',
        'accent-light': '#5f7cff',
        'text-dim': '#cdd9ff',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-slide': 'fadeSlideDown 0.2s ease-out',
      },
    },
  },
  plugins: [],
}