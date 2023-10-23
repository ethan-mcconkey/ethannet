import Navbar from "@/components/NavBar";
import PostTile from "@/components/PostTile";
import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";

const page: string = "blog";

export const metadata: Metadata = {
	title: "My Blog",
};

export default function Blog() {
	const posts = getAllPosts();

	return (
		<>
			<Navbar page={page} />
			<header></header>
			<main>
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
		</>
	);
}
