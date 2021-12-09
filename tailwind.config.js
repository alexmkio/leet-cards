module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '500px',
      'md': '1100px',
      'lg': '1400px',
      'xl': '1880px'
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
