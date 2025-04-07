/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "main" :"#8B5E35"
      }
    },
  },
  darkMode:'useClass',
  plugins: [],
}

