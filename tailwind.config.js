/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          main: '#6F00FF',
          sub:'#9747FF',
          light:'#DFCDF6'
        },
      },
      spacing:{
        '25vh':'25vh',
        '30vh':'30vh',
        '50vh':'50vh',
        '75vh':'75vh',
        '60vh':'60vh'
      },
    },
    fontFamily:{
      raleway:["Raleway","sans-serif"],
    },
  },
  plugins: [],
}

