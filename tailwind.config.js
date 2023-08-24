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
                grey: '#8A92A6',
                orange: '#FF814A',
                lightGrey: '#6C747D',
            },
            backgroundColor: {
                green: '#0BB885',
                mainBg: '#151A2E',
                boxBg: '#1C243F',
                sideBar: '#171E37',
                lightGreen: '#98FFE0',
            },
        },
    },
    plugins: [],
}
