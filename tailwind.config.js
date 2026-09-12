/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elden: {
          dark: '#0c0d0e',
          panel: '#151719',
          card: '#1c1f23',
          border: '#2c3138',
          gold: '#c8aa6e',
          'gold-light': '#e5c88b',
          'gold-dark': '#8a6e34',
          crimson: '#a32828',
          cerulean: '#2768a3',
          rune: '#d4af37',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Noto Serif JP"', 'Georgia', 'serif'],
        sans: ['"Cinzel"', '"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
