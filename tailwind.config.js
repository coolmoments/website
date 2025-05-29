/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(115, 175, 172)',
        secondary: 'rgb(104, 112, 112)',
      }
    },
  },
  plugins: [],
};