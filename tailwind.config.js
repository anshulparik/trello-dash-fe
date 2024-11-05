/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#3179ba",
        "dark-blue": "#255c8e",
        "medium-blue": "#29669c",
        "off-white": "#f1f2f4",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
