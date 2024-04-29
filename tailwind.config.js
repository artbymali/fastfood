/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E84242",
        secondary: "#F2F2F2",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
