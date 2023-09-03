/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Play: ["Playfair Display", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1150px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "905px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
