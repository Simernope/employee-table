/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'bg-dark': '#313131',
        'bg-light': '#FFFFFF',
        'dark-gray': '#595959',
        'dark-gray-hover': '#616161',
        'green': '#217346',
        'green-hover': '#247F4C',
        'light-gray': '#CCCCCC',
        'light-gray-hover': '#C4C4C4',
      },
    },
  },
  plugins: [],
}