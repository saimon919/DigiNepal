/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Ultra Premium Apple-esque Light Theme
                bg: '#FAFAFC', // Crisp Off-White
                surface: '#FFFFFF',

                // Primary Palette
                primary: '#0F172A', // Very dark slate (near black)
                secondary: '#E2E8F0', // Soft cool gray
                accent: '#4F46E5', // Vibrant Indigo
                'accent-hover': '#4338CA',

                // Deep Gradients
                'gradient-start': '#E0E7FF',
                'gradient-end': '#F5F3FF',

                // Text
                'text-main': '#020617', // Slate 950
                'text-dim': '#64748B',  // Slate 500
                'text-light': '#94A3B8', // Slate 400
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0,0,0,0.03)',
                'glow': '0 0 40px -10px rgba(79, 70, 229, 0.15)',
                'hover': '0 20px 40px -4px rgba(0,0,0,0.08)',
                'premium': '0px 2px 40px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.05)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'mesh': 'radial-gradient(at 40% 20%, hsla(258,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,70%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(333,100%,70%,0.15) 0px, transparent 50%)',
            },
            animation: {
                'blob': 'blob 10s infinite',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
