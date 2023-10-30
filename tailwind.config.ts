import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [require('@tailwindcss/typography')],
} satisfies Config
