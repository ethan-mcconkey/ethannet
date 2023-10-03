import Navbar from "@/components/Navbar";
import {
	getPostsSortedByTitle,
	PostMarkdownMetadata,
} from "@/components/Posts";

const page: string = "blog";

export async function generateStaticParams() {
	const allPostsData = getPostsSortedByTitle();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Blog(allPostsData: PostMarkdownMetadata[]) {
	return (
		<main className={page} id={page}>
			<Navbar currentPage={page} />
			<h1>{page}</h1>
			<div>
				{allPostsData.map()}
			</div>
		</main>
	);
}

// return (
// 	<div key={post.id} id={post.id}>
// 		<h1>{post.title}</h1>
// 		<p>{post.publishedDate}</p>
// 		<p>{post.editedDate}</p>
// 	</div>
// );