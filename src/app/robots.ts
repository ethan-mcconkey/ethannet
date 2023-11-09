import { staticRoutes } from '@/lib/posts'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const allowed = ['/', '/blog/']

    staticRoutes.forEach((route) => {
        allowed.push(`/blog/${route.category}/${route.id}/`)
    })

    return {
        rules: {
            userAgent: '*',
            allow: allowed,
        },
        sitemap: 'https://www.ethannet.me/sitemap.xml',
    }
}
