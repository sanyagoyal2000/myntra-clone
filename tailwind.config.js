const { grey } = require('@material-ui/core/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': ['"Fira Sans"', 'sans-serif'],
        'inter':["Inter",'sans-serif'],
        'rubik':["Rubik",'sans-serif'],
        'zen':["Zen Kurenaido",'sans-serif'],
        'incon':['Inconsolata', 'monospace'],
        'recur':["Recursive",'sans-serif'],
        'pt':["PT Sans Narrow",'sans-serif'],
        'lato':["Lato",'sans-serif'],
      },
      keyframes: {
        wave: {
            '0%': { transform: 'rotate(0.0deg)' },
            '15%': { transform: 'rotate(14.0deg)' },
            '30%': { transform: 'rotate(-8.0deg)' },
            '40%': { transform: 'rotate(14.0deg)' },
            '50%': { transform: 'rotate(-4.0deg)' },
            '60%': { transform: 'rotate(10.0deg)' },
            '70%': { transform: 'rotate(0.0deg)' },
            '100%': { transform: 'rotate(0.0deg)' },
        }
    },
    colors: {
      
      cyan: colors.cyan,
      indigo: colors.indigo,
      teal:colors.teal,
      slate:colors.slate,
      orange:colors.orange,
      white: colors.white,
      custom:'#22303C',
    },
    animation: {
        wave: 'wave 1.5s infinite'
    }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
  },
  },
  plugins: [],
}