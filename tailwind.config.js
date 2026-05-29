/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#111827",
        primary: {
          DEFAULT: "#3B82F6", // Electric Blue
          foreground: "#FFFFFF",
        },
        violet: {
          DEFAULT: "#8B5CF6",
        },
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
