/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2cc1c9",

          secondary: "#f9ef93",

          accent: "#3c2d96",

          neutral: "#282A39",

          "base-100": "#E2E2EE",

          info: "#386ECC",

          success: "#75EBDD",

          warning: "#AE7304",

          error: "#E74072",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
