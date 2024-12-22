/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "catskill-white": {
                    50: "#f4f9fb",
                    100: "#edf4f7",
                    200: "#cee3e9",
                    300: "#a2cbd7",
                    400: "#71afbf",
                    500: "#4f96a8",
                    600: "#3c798d",
                    700: "#326172",
                    800: "#2c5360",
                    900: "#294651",
                    950: "#1b2e36",
                },
            },
        },
    },
    plugins: [],
};
