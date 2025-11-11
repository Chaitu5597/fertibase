/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',  // your brand green
        secondary: '#8BC34A',
        accent: '#FFB300',
        text: {
          base: '#2C2C2C',
          light: '#6B7280',
        },
        bg: {
          light: '#FFFFFF',
          dark: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
