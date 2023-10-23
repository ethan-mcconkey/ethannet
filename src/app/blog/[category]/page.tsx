import { Metadata } from "next";
import { categories, getPostsByCategory } from "@/lib/posts";
import { toSentenceCase } from "@/lib/string";

export function generateMetadata({
	params,
}: {
	params: { category: string };
}): Metadata {
	return {
		title: toSentenceCase(params.category),
	};
}

export function generateStaticParams() {
	return categories.map((category: string) => {
		return { category: category };
	});
}

export default function Category({
	params,
}: {
	params: { category: string };
}): JSX.Element {
	const posts = getPostsByCategory(params.category);

	return (
		<>
			<header></header>
			<main></main>
		</>
	);
}
