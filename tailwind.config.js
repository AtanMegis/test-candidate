/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                '4/3': '4 / 3',
            },
            textColor: {
                green: '#0BB885',
                gray: '#8A92A6',
                orange: '#FF814A',
                lightGrey: '#6C747D',
            },
            backgroundColor: {
                green: '#0BB885',
            },
        },
    },
    plugins: [],
}
