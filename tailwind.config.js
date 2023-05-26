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
         'card-one' : "url('https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F2jr7RHJsFwOn3kEiUGEqAN%2F44d035a93444856bd117f168f348f59b%2FHero_Img__1_.png&w=1200&q=80')",
      }
    },
    boxShadow: {
      '3xl': '0 35px 45px -15px #5135ff',
    },
    fontFamily:{
      'heavy' :'MontHeavy'
    },
  },
  plugins: [],
}

