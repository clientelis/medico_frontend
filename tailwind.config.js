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
        'm-green':'#6b8e23'
      }
    },
  },
  plugins: [],
}

