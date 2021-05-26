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
      boxShadow: {
        input: "0 0 0 3px rgb(52, 211, 153,0.3)"
      },
      stroke: theme => ({
        'iconTheme': '#fff'
      }),
      zIndex: {
        nav: '3870814',
        dropdown: '-1'
      },
      screens: {
        'sm': {'max':'640px'},
        // => @media (min-width: 640px) { ... }
  
        'md': {'max':'768px'},
        // => @media (min-width: 768px) { ... }
  
        'lg': {'max':'1024px'},
        // => @media (min-width: 1024px) { ... }
  
        'xl': {'max':'1280px'},
        // => @media (min-width: 1280px) { ... }
  
        '2xl': {'max':'1536px'},
        // => @media (min-width: 1536px) { ... }
      }
    }
    
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
