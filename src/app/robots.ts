import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/blog'],
            disallow: '/blog/*',
        },
        sitemap: 'https://www.ethannet.me/sitemap.xml',
    }
}
