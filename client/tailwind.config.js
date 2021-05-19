module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        dark: '#000101',
        altDark: '#191918',
        hoverBlackBg: '#ffffff1a',
        hoverLightBg: ''
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
