/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          trans: "rgba(102, 96, 200, 0.6)",
          50: "#E7E6FB",
          100: "#DAD8F7",
          300: "#C2BFF4",
          400: "#9D99E4",
          500: "#8E87FA",
          600: "#6D67D0",
        },
        yellow: {
          100: "#E5BB46",
          200: "#FBDB60",
          300: "#FBDB60"
        },
        green: {
          500: "#87EBCD"
        }
      },
    },
    fontFamily: {
      "sans-serif": ["Lato", "arial", "sans-serif"],
    },
    plugins: [],
  }
}
