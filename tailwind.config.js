/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ee4d2d", // cam Shopee
        secondary: "#fef5f5",
        dark: "#222",
        light: "#f5f5f5",
        ratingStar: "#ffce3d",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        shopee: ["'Roboto'", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 6px rgba(0,0,0,0.08)",
      },
      transitionProperty: {
        scale: "transform",
      },
      scale: {
        102: "1.02",
        105: "1.05",
      },
    },
  },
  plugins: [],
};
