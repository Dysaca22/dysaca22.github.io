/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"swamp-green": {
					"50": "#f4f7f2",
					"100": "#e7ebe0",
					"200": "#cdd7c3",
					"300": "#97ac85",
					"400": "#81996e",
					"500": "#607b4e",
					"600": "#49613a",
					"700": "#394d2f",
					"800": "#2e3e27",
					"900": "#263420",
					"950": "#151d11",
				}
			}
		},
	},
	plugins: [],
}
