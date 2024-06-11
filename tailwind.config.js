/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        bgyell: "linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)",
      },
    },
  },
  plugins: [],
};
