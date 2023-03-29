/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors : {
      'light' : {
        'fg' : 'black',
        'primary' : '		#08a4a7',//#2978b5'
      }
    },
    fontFamily : {
      'poppins' : ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
