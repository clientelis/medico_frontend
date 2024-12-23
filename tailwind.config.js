/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'm-purple':'#843b80',
        'm-green':'#6b8e23',
        'm-purple-1':'rgba(247, 235, 254, 0.24)',
        'm-grey':'rgba(192, 184, 196, 0.24)'
      }
    },
  },
  plugins: [],
}

