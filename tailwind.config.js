const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'zircon': '#F6F8FF',
      'kashmirBlue': '#4B6A9B',
      'ebonyClay': '#2B3442',
      'azureRadiance': '#0079FF',
      'malibu': '#60ABFF',
      'bigStone': '#141D2F',
      'cloudBurst': '#1E2A47',
    },
    extend: {},
  },
  plugins: [],
}