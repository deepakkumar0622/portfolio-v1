/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true, // Ensures horizontal centering
      padding: "10rem", // Adds default padding
    },
    animation: {
      "bounce-slight": "bounceSlight 2s ease-in-out infinite",
      float: "float 3s ease-in-out infinite",
    },
    keyframes: {
      bounceSlight: {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-12px)", // Slight bounce
        },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
    },
    boxShadow: {
      "mild-bottom": "0px 4px 10px rgba(0, 0, 0, 0.2)", // Custom shadow
    },
  },
  plugins: [],
};
