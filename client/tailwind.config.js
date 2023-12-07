/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "darkRed" : "#8d0a0a",
        "taupeGrey" : "#867978",
        "onyx" : "#3f3f3f"

      }
    },
  },
  plugins: [],
}

