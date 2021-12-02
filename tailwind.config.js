module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '550px',
      'md': '810px',
      'lg': '1200px',
      'xl': '1600px'
    },
    extend: {
      fontFamily: {
        header: ['Lora'],
        primary: ['Epilogue']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
