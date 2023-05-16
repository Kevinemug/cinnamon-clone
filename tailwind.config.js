/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://cinnamon.agency/images/noise.png')",
        'hero-circle': "url('https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeloitte-badge.1a6faa3a.png&w=384&q=100')",
      }
    },
    boxShadow: {
      '3xl': '0 35px 45px -15px #5135ff',
    },
  },
  plugins: [],
}

