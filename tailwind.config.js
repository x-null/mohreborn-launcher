const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // purge: [
  //      './public/**/*.html',
  //      './src/**/*.vue',
  // ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  // theme: {
  //   extend: {},
  // },
  variants: {
    extend: {},
  },
  plugins: [],
};
