module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        teal: { "600_4c": "#0080804c" },
        blue: { A400: "#2f77f7", A700: "#236df2", A200: "#517ff4" },
        gray: { 900: "#04062a" },
        red: { 800: "#d32525" },
        indigo: { 200: "#86a5de", "200_01": "#86a6de" },
        yellow: { A700: "#ffd700" },
        black: { 900: "#000000", "900_01": "#000615" },
        blue_gray: { "100_4c": "#d9d9d94c" },
        white: { A700_01: "#fdfdfd", A700: "#ffffff" },
      },
      fontFamily: {
        raleway: "Raleway",
        inter: "Inter",
        roboto: "Roboto",
        cabin: "Cabin",
        ibmplexsans: "IBM Plex Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
