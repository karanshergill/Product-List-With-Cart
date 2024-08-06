/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Color-Red': 'hsl(14, 86%, 42%)',
        'Color-Green': 'hsl(159, 69%, 38%)',
        'Color-Rose-50': 'hsl(20, 50%, 98%)',
        'Color-Rose-100': 'hsl(13, 31%, 94%)',
        'Color-Rose-300': 'hsl(14, 25%, 72%)',
        'Color-Rose-400': 'hsl(7, 20%, 60%)',
        'Color-Rose-500': 'hsl(12, 20%, 44%)',
        'Color-Rose-900': 'hsl(14, 65%, 9%)'
      },
      fontFamily: {
        'Red Hat Text': ['Red Hat Text']
      }
    },
  },
  plugins: [],
}

