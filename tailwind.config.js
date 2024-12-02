/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F8F8FB',
        primary_mng: '#1677ff',
        secondary: '#8b8b8b',
        orange: '#D45B13',
        green: '#2F903F',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
