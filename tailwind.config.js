/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--color-primary)",
        "secondary-color": "var(--color-secondary)",
        "color-dark": "var(--color-dark)"
      },
    },
  },
  plugins: [],
}

