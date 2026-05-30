/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1F1F1F",
        surface: "#2A2A2A",
        brand: {
          orange: "#FA520F",
          cream: "#fffaeb",
          gray: {
            400: "#A1A1AA",
            500: "#71717A",
            600: "#52525B",
            700: "#3F3F46",
            800: "#27272A",
            900: "#18181B",
          }
        },
        primary: {
          DEFAULT: "#fffaeb",
          foreground: "#1F1F1F",
        },
        border: "rgba(255, 250, 235, 0.1)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(250, 82, 15, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 82, 15, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
    },
  },
  plugins: [],
}
