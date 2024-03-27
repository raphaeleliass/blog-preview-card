/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)'
      },
      fontSize: {
        paragraph: '16px'
      },
      fontFamily: {
        Figtree: ['Figtree', 'sans-serif']
      },
      fontWeight: {
        minor: '500',
        major: '800'
      },
      width:{
        box: '384px'
      },
      height: {
        box: '518px'
      }
    },
  },
  plugins: [],
}

