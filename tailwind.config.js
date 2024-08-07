/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        pastel: {
          pink: '#FFD1DC',
          blue: '#BFEAF5',
          yellow: '#FFFFD1',
          green: '#D0F0C0',
          purple: '#E6E6FA',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["pastel"],
  }
};
