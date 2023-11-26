import 'tailwindcss/colors'
import colors from 'tailwindcss/colors'
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'light-300': colors.slate[300],
                'light-400': colors.slate[400],
                'light-500': colors.slate[500],
                'light-900': colors.black,
                'dark-50': colors.white,
                'dark-600': colors.slate[600],
                'dark-700': colors.slate[700],
                'dark-800': colors.slate[800],
            },
            typography: {
                DEFAULT: {
                    css: {
                        margin: 0,
                        pre: false,
                        code: false,
                        'pre code': false,
                        'code::before': false,
                        'code::after': false,
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
