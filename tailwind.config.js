// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      animation: {
        bounce200: 'bounce .8s infinite 300ms',
        bounce400: 'bounce .8s infinite 600ms',
      },
    },
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
