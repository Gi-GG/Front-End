/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#42C83C",
        base: "#1C1B1B",
        secondary: "#D6D6D6",
        highlight: "#616161",
      },
      keyframes: {
        "progress-circle": {
          "0%": { "stroke-dashoffset": "283" },
          "100%": { "stroke-dashoffset": "0" },
        },
      },
      animation: {
        "progress-circle": "progress-circle 30s linear",
      },
    },
  },
  plugins: [],
};
