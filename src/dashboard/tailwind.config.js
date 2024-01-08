/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './src/**/*.{jsx,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(var(--text))',
        'background': 'rgb(var(--background))',
        'primary': 'rgb(var(--primary) / var(--tw-bg-opacity))',
        'secondary': 'rgb(var(--secondary))',
        'accent': 'rgb(var(--accent))',
      },
    },
  },
  plugins: [],
}

