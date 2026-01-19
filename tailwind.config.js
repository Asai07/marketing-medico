/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Aquí conectamos las variables que definimos en layout.jsx
                'serif-display': ['var(--font-playfair)', 'serif'], // Playfair Display
                'massive': ['var(--font-syne)', 'sans-serif'],      // Syne
                'sans-body': ['var(--font-jakarta)', 'sans-serif'], // Plus Jakarta Sans
            },
        },
    },
    plugins: [],
};