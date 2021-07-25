module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet : {
          dark : "rgba(59, 48, 84, 1)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

