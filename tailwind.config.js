/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "caros-bold": ["Caros", "sans-serif"],  // Note: Use 'Caros' here, not 'caros-bold'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scroll-bar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          'font-family' : ""
        },
        '.hide-scroll-bar::-webkit-scrollbar': {
          'display': 'none',
        },
        '*':{
          boxSizing: "border-box",
           margin: '0',
           padding: "0",
        }
      });
    }
  ],
}

