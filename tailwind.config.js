/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary1: "#FFFFFF",
        primary2: "#8C8C8C",
        primary3: "#3A3A3A",
        primary4: "#9C9C9C",       
        primary7: "#CB0000",
        primary8: "#0C4DF3",
        primary9: "#1BD017",
        secondary1: {
          100: "#1B4ED2 50%",
          200: "rgba(181, 65, 162, 0.93) 100%",
        },
        secondary2: {
          100: "#EA5718 0%",
          200: "#C70F0F 100%"
        },
        secondary3: {
          100: "#056ECF 0%",
          200: "#180878 65%"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screen: {
        sm: "640px",
        md: "840px",
        lg: "1024px",
        xlg: "1040px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
