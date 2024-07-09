/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#151515",
        card: "#1c2022",
        header: "#96C9F480",
        zinc: "#27272A",
      },
      textColor: {
        primary: "#9CA3AF",
      },
      borderColor: {
        primary: "#5982f120",
        secondary: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
