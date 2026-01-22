/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./*.html", "./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#BFFE66",
        secondary: "#BDB8FF",
      },
    },
  },
  plugins: [],
};
