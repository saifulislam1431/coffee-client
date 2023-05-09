/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#E3B577",
        
"secondary": "#331A15",
        
"accent": "#13c436",
        
"neutral": "#3C393B",
        
"base-100": "#F5EEF6",
        
"info": "#3AB9E4",
        
"success": "#7CE9A4",
        
"warning": "#C0A20C",
        
"error": "#EA4744",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

