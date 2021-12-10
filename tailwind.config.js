module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '900px',
      'md': '1400px',
      'lg': '1880px'
    },
    extend: {
      fontFamily: {
        header: ['Lora'],
        primary: ['Epilogue']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
