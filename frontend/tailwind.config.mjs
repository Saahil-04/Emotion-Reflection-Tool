/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: 'var(--color-bg)',
                text: 'var(--color-text)',
                primary: 'var(--color-primary)',
                accent: 'var(--color-accent)',
                box: 'var(--color-box)',
            },
        },
    },
    plugins: [],
}