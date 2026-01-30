/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Essentials
                bg: '#F5F5F7', // Soft Gray
                surface: '#FFFFFF',

                // Palette
                primary: '#3E517A', // Deep Blue
                secondary: '#B5C0EF', // Periwinkle
                accent: '#FA7E52', // Orange

                // Text
                'text-main': '#1D1D1F',
                'text-dim': '#86868B',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            boxShadow: {
                'soft': '0 8px 30px rgba(0,0,0,0.04)',
            }
        },
    },
    plugins: [],
}
