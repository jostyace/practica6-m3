/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'softOrange': 'hsl(35, 77%, 62%)',
        'softRed': 'hsl(5, 85%, 63%)',
        'offWhite': 'hsl(36, 100%, 99%)',
        'grayishBlue': 'hsl(233, 8%, 79%)',
        'darkGrayishBlue': 'hsl(236, 13%, 42%)',
        'veryDarkBlue': 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        'Barlow': ['Barlow', 'sans-serif'],
        'Fraunces': ['Fraunces', 'serif'],
      },
      screens: {
        'tablet': '700px',
        'desktop': '1440px',
      }
    },
  },
  plugins: [],
}