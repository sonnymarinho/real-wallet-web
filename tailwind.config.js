module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          900: '#000000',
          800: '#0D0D0D',
          700: '#2C2E2E',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
