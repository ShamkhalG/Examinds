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
        interMedium: ['Inter-Medium', 'sans-serif'],
        interSemiBold: ['Inter-SemiBold', 'sans-serif'],
        interBold: ['Inter-Bold', 'sans-serif'],
        interExtraBold: ['Inter-ExtraBold', 'sans-serif'],
        geologicaMedium: ['Geologica-Medium', 'sans-serif'],
        geologicaBold: ['Geologica-Bold', 'sans-serif']
      },
      colors: {
        minds: '#F96F16'
      }
    },
  },
  plugins: [],
}
