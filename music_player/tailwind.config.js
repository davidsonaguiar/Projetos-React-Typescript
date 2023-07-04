/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primay: "#2A2141",
        text: "#E1E1E6",
        textSecondary: "#C4C4CC"
      }
    },
  },
  plugins: [],
}