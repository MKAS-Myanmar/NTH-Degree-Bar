/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1537px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "home1": "url('/home1.jpg')",
      },
      fontFamily: {
        header: ['Roboto', 'sans-serif'],
        para: ['Montserrat', 'sans-serif'],
      },
      colors: {
        //light theme
        'light-bg': '#fafafa',
        'white': '#fafafa',


        'black-opacity-50': '#000',





        //dark theme
        'dark-bg': '#121212',
        'dark': '#121212'
      },
    },
  },
  plugins: [],
}

