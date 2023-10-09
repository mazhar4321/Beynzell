/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '1rem',
          '2xl': '0rem',
        },
      },
      colors:{
        textColor:"#101828",
        textLight:"#667085",
        SkyColor:"#0068B3",
        dangerColor:"#D92D20",
        textGrey: "#344054",
        colorPrimary:"#0068B3",
        borderColor:"#EAECF0",
        Grey600:"#475467",
        yellowColor:"#FFD37A",
        successColor:"#027A48",
        backgroundColor:"#F9FAFB"
      }
    },
  },
  plugins: [],
};
