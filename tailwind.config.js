/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Libre': ['Libre Baskerville', 'sans-serif'],
        'Oswald': ['Oswald', 'sans-serif'],
        'Lora': ['Lora', 'sans-serif']
      }
    },
  },
  plugins: [],
}