const defaultTheme = require("tailwindcss/defaultTheme");

/ @type {import('tailwindcss').Config} */;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#23705D",
        secondary: "#397E6D",
        body: "#4F4F4F", // font
        neutral: "#F5F5F5", // input background
        muted: "#B0B0B0",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        milliard: ["Milliard", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "992px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
