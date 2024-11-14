/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-bg':'#2596be',
        'border-color':'#eff1f1',
        'button-color':'#1a3737',
        
      },
    },
  },
  plugins: [],
}

