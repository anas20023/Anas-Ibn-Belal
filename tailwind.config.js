/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.{html,js}"],
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
