/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#008A00",

          secondary: "#99D89D",

          accent: "#b2e2f7",

          neutral: "#1B1A29",

          "base-100": "#F3F5F6",

          info: "#76B4DB",

          success: "#1D9F56",

          warning: "#FBB441",

          error: "#E55C52",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
