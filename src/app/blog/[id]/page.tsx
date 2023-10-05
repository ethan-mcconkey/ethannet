import {
	getPostById,
	getPostsSortedByTitle,
	type PostMarkdownMetadata,
} from "@/components/Posts";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";

export function generateStaticParams() {
	const posts = getPostsSortedByTitle();

	return posts.map((post) => ({
		id: post.id,
	}));
}

export default function BlogPost({
	params,
}: {
	params: PostMarkdownMetadata;
}): JSX.Element {
	const post = getPostById(params.id);

	return (
		<>
			<PostHeader
				id={params.id}
				title={post.title}
				publishedDate={post.publishedDate}
				editedDate={post.editedDate}
			/>
			<PostBody id={params.id} content={post.content} />
		</>
	);
}
