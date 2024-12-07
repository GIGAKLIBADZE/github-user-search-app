import filters from 'tailwindcss-filters';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1440px"
      },
      boxShadow: {
        custom: "0 16px 30px -10px rgba(70, 96, 187, 0.2)"
      },
      colors: {
        hoverSvg: '#697c9a', 
      }
    },
  },
  plugins: [filters],
}
