/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        interRegular: ['Inter-Regular', 'sans-serif'],
        interSemiBold: ['Inter-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
