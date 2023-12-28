import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemap: MetadataRoute.Sitemap = [
        {
            url: 'https://www.ethannet.me',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]

    return sitemap
}
