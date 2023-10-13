import { Metadata } from "next";

import { getPostById, getPostsSortedByTitle } from "@/lib/posts";
import Navbar from "@/components/nav-bar";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";

export function generateStaticParams() {
	const posts = getPostsSortedByTitle();

	return posts.map((post) => ({
		id: [post.category, post.id],
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { id: string[] };
}): Promise<Metadata> {
	const post = getPostById(params.id[1]);
	return {
		title: post.category.toUpperCase() + ": " + post.title,
	};
}

export default function BlogPost({
	params,
}: {
	params: { id: string[] };
}): JSX.Element {
	const post = getPostById(params.id[1]);

	return (
		<main>
			<Navbar page="blog" />
			<div className="p-8">
				<PostHeader
					title={post.title}
					publishedDate={post.publishedDate}
					editedDate={post.editedDate}
				/>
				<PostBody content={post.content} />
			</div>
		</main>
	);
}
