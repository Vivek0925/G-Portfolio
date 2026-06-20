/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F0E7",
        paperDark: "#EFE6D6",
        forest: "#355B3E",
        forestDark: "#24402B",
        mustard: "#F5B82E",
        ink: "#111111",
        clay: "#B5552E",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        serifAccent: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widish: "0.18em",
        widest: "0.32em",
      },
    },
  },
  plugins: [],
};
