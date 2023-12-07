/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.ts",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "gray": "#F7F4F4",
        "indigo": "#6C30F2"
      },
      textColor: {
        "indigo": "#6C30F2"
      },
      borderColor: {
        "indigo": "#6C30F2"
      }, ringColor: {
        "indigo": "#6C30F2"
      }
    },
  },
  plugins: [],
}
