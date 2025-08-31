/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black01: "#010617",
        whiteFA: "#FAFAFA",
        whiteF5: "#F5F5F5",
        grey98: "#989898",
        meCat: "#545454",
        babyCorn: "#FFEA79",
      },
      fontFamily: {
        roboto: ["Roboto"],
        lifeSavers: ["Life Savers"],
      },
    },
  },
  plugins: [],
};
