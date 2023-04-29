/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        week: 'repeat(7, 1fr)'
      },
      animation: {
        'spin-slow': 'wiggle 3s linear infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 33%': { transform: 'translateX(0)' },
          '33%, 66%': { transform: 'translateX(+110%)' },
          '66%, 100%': { transform: 'rotate(0)' }
        }
      }
    }
  },
  plugins: []
}
