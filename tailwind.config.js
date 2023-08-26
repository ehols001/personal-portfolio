/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '200px',
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#3ecfe2',
        tertiary: '#0d0d0d',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        'hero-pattern-sm': "url('/src/assets/herobg-sm.png')",
      }
    },
  },
  plugins: [],
};
