/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Primary-01": "#1B3764",
        "Primary-02": "#FFCA42",
        "Primary-03": "#F6F8FC",
        "Primary-04": "#F4F8FF",
        "Secondary-01": "#B4C7E7",
        "Secondary-02":  "#969AA0",
        "Secondary-03":  "#1B3764",
      },
      fontFamily: {
        Cardo: "Cardo",
      },
      
    },
  },
  plugins: [],
}

