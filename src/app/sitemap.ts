import { getPostMetadata, staticRoutes } from '@/lib/posts'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemap: MetadataRoute.Sitemap = [
        {
            url: 'https://www.ethannet.me',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.ethannet.me/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]

    staticRoutes.forEach((route) => {
        sitemap.push({
            url: `https://www.ethannet.me/blog/${route.category}/${route.id}`,
            lastModified: getPostMetadata(route.id, route.category).date,
            changeFrequency: 'never',
            priority: 0.1,
        })
    })

    return sitemap
}
