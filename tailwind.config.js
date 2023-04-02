/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textUnderlineOffset: {
        12: '12px',
      }
    },
  },
  plugins: [],
}