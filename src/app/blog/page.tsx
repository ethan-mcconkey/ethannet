import Navbar from "@/components/nav-bar";
import PostTile from "@/components/post-tile";
import { getPostsSortedByTitle } from "@/lib/posts";
import { Metadata } from "next";

const page: string = "blog";

export const metadata: Metadata = {
	title: "My Blog",
};

export default function Blog() {
	const posts = getPostsSortedByTitle();

	return (
		<main>
			<Navbar page={page} />
			<div className="post-tiles">
				{posts.map((post) => {
					return (
						<PostTile
							key={post.id}
							id={post.id}
							category={post.category}
							title={post.title}
							publishedDate={post.publishedDate}
						/>
					);
				})}
			</div>
		</main>
	);
}
