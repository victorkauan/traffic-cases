/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#529DE3',
        'primary-dark-blue': '#3B71A3',
      },
      screens: { mm: '375px', mml: '400px', ml: '425px' },
    },
  },
  plugins: [],
};
