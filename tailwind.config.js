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
                highlight: "#E6E6E6",
            },
        },
    },
    plugins: [],
};
