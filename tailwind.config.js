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
        
"primary": "#ef77c7",
        
"secondary": "#54d850",
        
"accent": "#13c436",
        
"neutral": "#151D23",
        
"base-100": "#F5EEF6",
        
"info": "#3AB9E4",
        
"success": "#7CE9A4",
        
"warning": "#C0A20C",
        
"error": "#E85E73",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

