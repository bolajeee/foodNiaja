/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // ...],
  theme: {
    extend: {
      fontSize: {
        mammoth: "8rem"
      },
      colors :{
        primary: "#FF6363",
        secondary:  {
          100: "#e2e2d5",
          200: "#888883"
        }
      },
      fontFamily: {
        body: ["nunito"]
      }
    },
  },
  plugins: [],
};
