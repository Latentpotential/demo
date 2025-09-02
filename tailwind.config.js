/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#14A751',
        'secondary': '#E1FFF0',
        'third': '#12572F',
        'gray-100': '#E0E5ED',
        'gray-200': '#DBDBDB',
        'gray-300': '#F8FAFD',
        'gray-400': '#A5AEBC',
        'gray-500': '#363435',
      },      
    },
  },
  plugins: [],
}