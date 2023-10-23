import { Metadata } from "next";
import { categories } from "@/lib/posts";
import { getPostIdsByCategory, getPost } from "@/lib/posts";
import { toSentenceCase } from "@/lib/string";
import PostHeader from "@/components/post-header";
import PostBody from "@/components/post-body";

export function generateMetadata({
	params,
}: {
	params: { id: string };
}): Metadata {
	return {
		title: toSentenceCase(params.id.replace("-", " ")),
	};
}

export function generateStaticParams() {
	type params = { category: string; id: string };
	let staticParams: params[] = [];
	categories.forEach((category: string) => {
		const postIds = getPostIdsByCategory(category);

		staticParams = staticParams.concat(
			postIds.map((id: string): params => {
				return { category: category, id: id };
			})
		);
	});
	return staticParams;
}

export default function Category({
	params,
}: {
	params: { category: string; id: string };
}): JSX.Element {
	const post = getPost(params.id, params.category);

	return (
		<>
			<header>
				<PostHeader
					title={post.title}
					publishedDate={post.publishedDate}
					editedDate={post.editedDate}
				/>
			</header>
			<main>
				<PostBody content={post.content} />
			</main>
		</>
	);
}
