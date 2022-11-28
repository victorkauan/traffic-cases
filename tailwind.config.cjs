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
      boxShadow: {
        inverted:
          '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px 1px rgb(0 0 0 / 0.1);',
      },
    },
  },
  plugins: [],
};
