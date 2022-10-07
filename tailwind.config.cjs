/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      cyan: "hsl(180, 66%, 49%)",
      light_cyan: "rgb(155, 227, 226)",
      dark_violet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(230, 25%, 95%)",
      grayish_violet: "hsl(257, 7%, 63%)",
      very_dark_blue: "hsl(255, 11%, 22%)",
      very_dark_violet: "hsl(260, 8%, 14%)",
    },
  },
  plugins: [],
};
