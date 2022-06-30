/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        screen:"#F6F6F6"
      },
      fontFamily:{
       cardheading: [ 'Source Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
