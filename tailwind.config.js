/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        info: '#2f80ed',
        success: '#27AE60',
        warning: '#E2b93b',
        error: '#eb5757',
        primary: '#195A00',
        secondary: '#af872f',
      },
      fontFamily: {
        miniver: ['Miniver', 'cursive'],
      },
    },
  },
  plugins: [],
};
