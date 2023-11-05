import { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {},
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
} satisfies Config
