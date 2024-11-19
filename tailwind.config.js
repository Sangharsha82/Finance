/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "login.html"],

  theme: {
    extend: {
      colors: {
        charcoal: "#2F3E46",
        darkslategray: "#354F52",
        hookergreen: "#52796F",
        cambridgeblue: "#84A98C",
        ashgray: "#CAD2C5",
      },
    },
  },
  plugins: [],
};
