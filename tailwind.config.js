/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://cinnamon.agency/images/noise.png')",
      }
    },
  },
  plugins: [],
}

