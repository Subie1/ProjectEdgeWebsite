/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './src/**/*.{jsx,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },
    },
  },
  plugins: [],
}

