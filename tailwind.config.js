/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const { screens } = defaultTheme;
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        ...screens,
        sm: {
          ...screens.sm,
          min: '100px',
        },
      },
    },
  },
  plugins: [],
}