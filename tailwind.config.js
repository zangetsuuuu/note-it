/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interphases: ['TT Interphases Pro', 'sans-serif'],
      },
      colors: {
        'black': '#0e0e10',
        'white': '#f7f7f8',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}