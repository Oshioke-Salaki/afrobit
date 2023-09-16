/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#f2a900",
        primaryDark: "#3a3a3a",
        secondaryDark: "#4d4d4e",
      },
      dropShadow: {
        textShadow: "0px 0px 5px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
