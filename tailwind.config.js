/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        'Abril': ['Belleza', 'Georgia'],
       'Georgia': ['Belleza', 'Times New Roman']
      }
    },
  },
  plugins: [],
}

