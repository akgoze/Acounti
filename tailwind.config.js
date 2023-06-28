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
      'yellow': {
          DEFAULT: '#FFBD12',
          50: '#FFF0CA',
          100: '#FFEAB5',
          200: '#FFDF8C',
          300: '#FFD464',
          400: '#FFC83B',
          500: '#FFBD12',
          600: '#D99C00',
          700: '#A17400',
          800: '#694C00',
          900: '#312300',
          950: '#150F00'
      },
      'green': {
        DEFAULT: '#00C6AE',
        50: '#7FFFEF',
        100: '#6AFFED',
        200: '#41FFE8',
        300: '#19FFE3',
        400: '#00EFD2',
        500: '#00C6AE',
        600: '#008E7D',
        700: '#00564B',
        800: '#001E1A',
        900: '#18191F',
        950: '#18191F'
      },
      'orange': {
        DEFAULT: '#F95A2C',
        50: '#FEE6DF',
        100: '#FED6CB',
        200: '#FCB7A3',
        300: '#FB987B',
        400: '#FA7954',
        500: '#F95A2C',
        600: '#E63907',
        700: '#B02B05',
        800: '#791E03',
        900: '#431002',
        950: '#270A01'
      },
      'blue': {
        DEFAULT: '#1947E5',
        50: '#BECBF8',
        100: '#ABBCF6',
        200: '#879FF2',
        300: '#6281EE',
        400: '#3D64EA',
        500: '#1947E5',
        600: '#1337B2',
        700: '#0E2880',
        800: '#08184D',
        900: '#03081B',
        950: '#18191F'
      },
      'dark': {
        DEFAULT: '#18191F',
        50: '#CECFD9',
        100: '#C2C4D0',
        200: '#ABAEBE',
        300: '#9497AC',
        400: '#7D819A',
        500: '#686C86',
        600: '#565A6F',
        700: '#454758',
        800: '#333541',
        900: '#21222A',
        950: '#18191F'
      },
      'pink': {
          DEFAULT: '#FF89BB',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFDBEA',
          400: '#FFB2D3',
          500: '#FF89BB',
          600: '#FF519B',
          700: '#FF197A',
          800: '#E0005F',
          900: '#A80047',
          950: '#8C003B'
      },
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
