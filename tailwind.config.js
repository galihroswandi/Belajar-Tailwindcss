/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontFamily: {
        Inter: ['Inter']
      },
      colors: {
        primary: "#bada55",
        kopi: "C0FFE"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'waving-hand': 'wave 2s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
    }
  },
  plugins: [],
}
