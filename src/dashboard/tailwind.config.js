/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{jsx,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				text: "var(--text)",
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
			},
			fontFamily: {
				cang: ["Long Cang", "cursive"],
				rubik: ["Rubik", "sans-serif"],
				doodle: ["Rubik Doodle Shadow", "system-ui"],
				rowdies: ["Rowdies", "sans-serif"]
			},
		},
	},
	plugins: [],
};
