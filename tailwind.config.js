/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-navy",
    "bg-lighterNavy"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        xl: "0",
      },
      maxWidth: {
        sm: "100%"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      borderRadius: {
        '4xl': "40px",
      },
      colors: {
        offBlack: '#1a191c',
        offWhite: "#F6F6F6",
        ivory: "#F5F9FA",
        fire: "#FD6746",
        lime: "#D2FF50",
        navy: "#153243",
        lighterNavy: "#254151",
        lightBlue: "#BCE7FD", 
        paleSkyBlue: "#F0F9FD",
        black: "#2B313B",
        slateGrey: "#5F7580",
        peach: "#FE938C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
