/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
    },
    extend: {
      height: {
        128: '40rem'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      keyframes: {
        floating: {
          '0%': {transform: 'translateY(-15px)'},
          '50%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(-15px)'},
        },
        growing: {
          '0%': {transform: 'scale(0.7)'},
          '50%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(0.7)'},
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },

      animation: {
        floating: 'floating 2s infinite',
        growing: 'growing 2s infinite',
        fadeIn: 'fade 4s',
        fadeOut: 'fade 4s reverse',
      },

      colors: {
        brand: {
          '50': '#B0ECEC',
          '100': '#A0E8E8',
          '200': '#7FE1E1',
          '300': '#5ED9D9',
          '400': '#3DD1D1',
          '500': '#2CB9B9',
          '600': '#218C8C',
          '700': '#165E5E',
          '800': '#0C3131',
          '900': '#010404'          
        }
      }

    },
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
}
