/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", //"./**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,ts}", //".{js,cjs,mjs,ts,cts,mts}"
  ],
  darkMode: 'class', // Active le mode dark avec une classe
  theme: {
    extend: {
      colors: {
        dark: '#1f2937',
        light: '#f9fafb'
      }
    },
  },
  plugins: [],
}

