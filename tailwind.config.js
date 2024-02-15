/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "0px",
        xs: "390px",
        mobile:"545px"
      },
    },
  },
  plugins: [require("daisyui")],
};
