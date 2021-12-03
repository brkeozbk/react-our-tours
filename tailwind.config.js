module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      'brand-color': '#D1D5DB',
      'primary-brand-color': '#5d3ebc',
      'secondary-brand-color': '#7849f7',
      'brand-yellow': '#ffd300'
      
    }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
