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
      },
      animation: {
        fade : "fade 1.5s linear"
      },
      keyframes:{
        fade:{
          "0%" : {opacity: .4},
          "50%" : {opacity: .7},
          "100%" : {opacity: 1}
        }
      }
    },
  },
  plugins: [],
};
