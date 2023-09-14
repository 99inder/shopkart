/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "poppins"],
      "work-sans": ['"Work Sans"'],
      syne: ["Syne"],
    },
    extend: {
      maxWidth: {
        maxContent: "1440px",
      },
      colors: {
        orange: "#F07E15",
        grey: {
          form: "rgba(255, 255, 255, 0.50)"
        },
        black: {
          black: "#000",
          header: "#1A1A1A",
          "header-text": "#626262",
          "hero": "#0B0B0A"
        },
      },
    },
    plugins: [],
  }
}
