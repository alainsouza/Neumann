/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#282828',
        'gold': '#FEB300',
        'gold-light': '#FAC444',
        'off-white': '#F3EFE3',
      },
    },
  },
  plugins: [],
}
