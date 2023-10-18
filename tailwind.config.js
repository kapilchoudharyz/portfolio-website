/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_dark_bg: "#000000",
      },

      fontSize: {
        "5vw": "5vw",
        "7vw": "7vw",
      },
      height: {
        "200vw": "200vw",
      },
      width: {
        aboutWidth: "50rem",
      },
      screens: {
        smallerMobile: "425px",
        tablet: "640px",
        laptop: "1020px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
