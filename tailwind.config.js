/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#42C83C",
        base: {
          dark: "#1C1B1B",
          light: "#FBFBFB",
        },
        secondary: {
          dark: "#D6D6D6",
          light: "#000",
        },
        highlight: {
          dark: "#E6E6E6",
          light: "#A1A1A1",
        },
      },
    },
  },
  plugins: [],
};
