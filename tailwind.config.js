const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/bgImage.svg')",
        "mobile-bg": "url('/src/assets/mobile-bg.svg')",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        fjalla: ['"Fjalla One"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        plex: ['"IBM Plex Sans"', "sans-serif"],
        instrument: ['"Instrument Serif"', "serif"],
        lancelot: ["Lancelot", "cursive"],
        poiret: ['"Poiret One"', "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addVariablesForColors, // Adding the custom plugin for CSS variables
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
