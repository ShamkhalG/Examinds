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
      backgroundImage: {
        'practice_bg-mobile': "url('@/assets/backgrounds/practice_bg.png')",
        'practice_bg-pc': "url('@/assets/backgrounds/practice_bg_pc.png')",
        'video-frame-small': "url('@/assets/images/practice/video_frame.png')",
        'video-frame-large': "url('@/assets/images/practice/video_frame_pc.png')",
        'dwnote_bg-small': "url('@/assets/images/practice/dwnote_bg.png')",
        'dwnote_bg-large': "url('@/assets/images/practice/dwnote_bg_pc.png')",
      },
      colors: {
        minds: '#F96F16'
      }
    },
  },
  plugins: [],
}
