/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,css}',          // Fichiers à la racine
    './pages/**/*.{html,js,css}', // Tous les fichiers dans pages/
    './src/**/*.{html,js,css}',   // Tous les fichiers dans src/
    './dist/**/*.{html,js,css}'  // Tous les fichiers dans dist/
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

