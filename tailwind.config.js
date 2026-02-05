/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a', // Deep dark
                surface: '#121212',
                roleBlue: '#3b82f6', // Bright blue for role text
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'glow-pulse': 'glow-pulse 3s infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px 0px rgba(139, 92, 246, 0.5)' }, // Violet glow
                    '50%': { boxShadow: '0 0 30px 5px rgba(139, 92, 246, 0.7)' },
                }
            }
        },
    },
    plugins: [],
}
