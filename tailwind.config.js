/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cv-background": "url('/cv-background.jpg')",
      },
      height: {
        128: "32rem",
      },
      screens: {
        lg: { raw: "print, (min-width: 1024px)" },
      },
    },
  },
  plugins: [],
};
