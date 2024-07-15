/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:"#EEF5FF", // primary for light
        dark: "#151515", // dark for darkmode
        dark_card: "#1c2022", // for darkcard only 
        dark_header: "#96C9F480", // for darkheader
        zinc: "#27272A", // zinc use for common purpose
      },
      textColor: {
        secondary: "#9CA3AF", // text secondary is use for dark mode 
      },
      borderColor: {
        primary: "#5982f120", // borderPrimary for light mode 
        secondary: "#9CA3AF", // bordersecondary for dark mode
      },
    },
  },
  plugins: [],
};
