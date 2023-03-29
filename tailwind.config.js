/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode : 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors : {
      'light' : {
        'text' : '#fcfcfc',
        'fg' : 'black',
        'primary' : '#08a4a7',//#2978b5'
      },
      'dark' : {
        'bg': '#23283e',
        'fg': '#bdbddd',
      }
    },
    fontFamily : {
      'poppins' : ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
