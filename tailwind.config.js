/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aquamarine: '#64FFDA',
        navy: '#0A192F',
        'light-navy': '#112240',
        slate: '#8892B0',
        'light-slate': '#CCD6F6',
        pomegranate: '#F43030',
      },
    },
  },
  plugins: [],
};
