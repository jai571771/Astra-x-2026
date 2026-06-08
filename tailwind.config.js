/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        red: "#E24B4A",
        blue: "#378ADD",
        purple: "#7F77DD",
        gold: "#EF9F27",
      },
    },
  },
  plugins: [],
}
