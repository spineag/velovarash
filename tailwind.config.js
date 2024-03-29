/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      gray: {
        900:'#111827',
        700:'#374151',
        400:'#9ca3af',
        300:'#d1d5db',
        200:'#e5e7eb',
        50:'#F8F7F4'
      },
      emerald:{
        600:'#059669'
      },
      white:'#ffffff',
      blue:'#0891B2',
      sky:{
        500:'#0ea5e9'
      },
      light_cream:'#F8F7F4',
      red:{
        500:'#ef4444'
      },
      amber:{
        500:'#f59e0b'
      }
    },
  },
  plugins: [],
  
}

