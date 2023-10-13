import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.ethannet.me",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 1,
		},
		{
			url: "https://www.ethannet.me/blog",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 0.9,
		},
		{
			url: "https://www.ethannet.me/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.1,
		},
	];
}
