/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors : {
      'light' : {
        'bg' : '#fcfcfc',
        'fg' : '#555',
        'primary' : '#2978b5'
      }
    },
    fontFamily : {
      'poppins' : ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
