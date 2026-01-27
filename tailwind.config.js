/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#d57b07",
        "copper": "#B87333",
        "midnight": "#101820",
      },
    },
  },
  plugins: [],
}