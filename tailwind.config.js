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
        border: "rgba(255, 255, 255, 0.08)",
        primary: "#3B82F6", // Electric Blue (approx)
        secondary: "#8B5CF6", // Violet (approx)
        accent: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#9CA3AF", // Gray 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
    },
  },
  plugins: [],
}
