/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        cursive: ["Caveat", "cursive"],
        subtitle: ["Raleway", "sans-serif"],
      },
      fontSize: {
        "10xl": "10.5vw",
        "11xl": "12rem",
        "12xl": "14rem",
        work: "7vw",
        title: "7vw",
      },
      borderRadius: {
        flex: "3vw",
      },
    },
    // extend: {},
  },
  plugins: [],
};
