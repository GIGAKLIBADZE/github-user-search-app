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
      filter: {
        back: "invert(39%) sepia(24%) saturate(922%) hue-rotate(177deg) brightness(95%) contrast(90%)"
      }
    },
  },
  plugins: [filters],
}
