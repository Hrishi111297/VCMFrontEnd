/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: {
          500: "oklch(0.72 0.11 178)", // Using the color variable you defined
        },
        blackrock: {
          DEFAULT: "#010127",
          500: "#010127", // Base color
          600: "#00001f", // Darker shade
          400: "#22224a", // Lighter shade
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"], // Custom class font-poppins,
        roboto: ["Roboto", "sans-serif"], // Use class "font-roboto"
        lato: ["Lato", "sans-serif"],
      },
      animation: {
        "marquee-left-right": "marqueeLeftRight 20s linear infinite",
      },
      keyframes: {
        marqueeLeftRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
