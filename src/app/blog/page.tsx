import Navbar from "@/components/nav-bar";
import { Metadata } from "next";

const page: string = "blog";

export const metadata: Metadata = {
	title: "My Blog",
};

export default function Blog() {
	return (
		<main className={page} id={page}>
			<Navbar page={page} />
			<div className="post-tiles">
				{/* {posts.map((post) => {
					return (
						<PostTile
							key={post.id}
							id={post.id}
							category={post.category}
							title={post.title}
							publishedDate={post.publishedDate}
						/>
					);
				})} */}
			</div>
		</main>
	);
}
