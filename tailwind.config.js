/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bar: '#000853',
        primary: '#b6e802',
        bg_menu: '#212121',
        accent: '#8ed8f8',
        accent2: '#0078ff'
      }
    }
  },
  plugins: []
}
