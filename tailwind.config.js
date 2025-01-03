/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('src/assets/bgImage.jpg')",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"], // Corrected to sans-serif
        fjalla: ['"Fjalla One"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        plex: ['"IBM Plex Sans"', "sans-serif"],
        instrument: ['"Instrument Serif"', "serif"],
        lancelot: ["Lancelot", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
