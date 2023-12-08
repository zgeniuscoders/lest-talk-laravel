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
        "indigo": "#6C30F2",
        "gray": "#707070"
      },
      borderColor: {
        "indigo": "#6C30F2"
      }, ringColor: {
        "indigo": "#6C30F2"
      }
      , gridTemplateColumns: {
        "page": "350px auto 350px",
        "postBox": "80px auto 80px"
      }
    },
  },
  plugins: [],
}
