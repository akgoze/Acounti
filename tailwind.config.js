/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'dark',
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      ...defaultTheme.screens,
    },
    colors: {
      'yellow': '#ffbd12',
      'green': '#00c6ae',
      'orange': '#f95a2c',
      'blue': '#1947e5',
      'grey': '#9e9e9e',
      'dark': '#18191f',
      'pink': '#ff89bb',
    },

    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
  },
  plugins: [
    plugin(function ({addVariant}) {
      addVariant('third', '&:nth-child(3)')      
    })
  ],
}
