/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Futuristic HUD Dark Theme
                bg: '#020617', // Deep Midnight
                surface: '#0F172A', // Slate 900
                'surface-light': '#1E293B', // Slate 800

                // HUD Accents (Glow colors)
                primary: '#22c55e', // Neon Green
                secondary: '#3b82f6', // Cyber Blue
                accent: '#06b6d4', // Teal/Cyan
                'accent-pink': '#d946ef', // HUD Pink for warnings

                // Text
                'text-main': '#F8FAFC', // Near White
                'text-dim': '#94A3B8',  // Slate 400
                'text-light': '#64748B', // Slate 500
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'hud': '0 0 15px rgba(34, 197, 94, 0.15)',
                'hud-blue': '0 0 15px rgba(59, 130, 246, 0.15)',
                'glow-strong': '0 0 30px rgba(34, 197, 94, 0.4)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            backgroundImage: {
                'hud-gradient': 'linear-gradient(180deg, rgba(34, 197, 94, 0.05) 0%, rgba(34, 197, 94, 0) 100%)',
                'cyber-gradient': 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
            },
            animation: {
                'scanline': 'scanline 6s linear infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'border-flow': 'border-flow 4s linear infinite',
                'blob': 'blob 10s infinite',
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4', filter: 'brightness(1)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1.5)' },
                },
                'border-flow': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
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

