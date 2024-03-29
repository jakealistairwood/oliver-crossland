/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-navy",
  ],
  theme: {
    container: {
      center: true,
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
