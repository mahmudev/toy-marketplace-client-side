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
          primary: "#b2e2f7",

          secondary: "#fc94e4",

          accent: "#f4b7e5",

          neutral: "#1B1A29",

          "base-100": "#F2EFF6",

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
