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
      },
      fontFamily: {
        Cardo: "Cardo",
      },
      
    },
  },
  plugins: [],
}
