/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',],
  theme: {
    colors: {
      white: '#FFFFFF',
      red: '#FF3939',
      borders: '#D9D9D9',
      transparent: '#00000000',
      purple: {
        DEFAULT: '#633CFF',
        hover: '#BEADFF',
        light: '#EFEBFF',
      },
      gray: {
        DEFAULT: '#737373',
        dark: '#333333',
        light: '#FAFAFA',
      },
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    fontFamily: {
      "instrument-sans" : ["'Instrument Sans'", "sans serif"],
    }
  },
  plugins: [],
}

