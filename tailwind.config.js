/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          "0%": { transform: "TranslateX(0)" },
          "50%": { transform: "TranslateX(10px)" },
          "100%": { transform: "TranslateX(0)" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        primary: "#67dbda",
      },
    },
  },
  plugins: [],
};
