/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        softPink: "rgb(255, 123, 108)",
        darkerPink: "rgb(217, 102, 99)",
        blueCard: "rgb(92, 85, 165)",
        submitGreen: "rgb(55, 204, 138)",
        submitGreenShadow: "rgb(51, 183, 126)"
      },
      backgroundImage: {
        'desktop': "url('./src/assets/images/bg-intro-desktop.png')",
        'mobile': "url('./src/assets/images/bg-intro-mobile.png')"
      }
    },
  },
  plugins: [],
}

