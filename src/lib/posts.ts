import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export async function markdownToHtml(markdown: string) {
	const result = await remark().use(remarkHtml).process(markdown);
	return result.toString();
}

type Post = {
	id: string;
	title: string;
	category: string;
	publishedDate: Date;
	editedDate: Date;
	content: string;
};

const postsDirectory = path.join(process.cwd(), "static/posts");
const fileNames = fs.readdirSync(postsDirectory);
const allPostsData: Post[] = fileNames.map((fileName): Post => {
	const { data, content } = matter(
		fs.readFileSync(path.join(postsDirectory, fileName), "utf8")
	);

	return {
		id: fileName.replace(/\.md$/, "").toLowerCase().replace(" ", "-"),
		title: data.title,
		category: data.category.toLowerCase().replace(" ", "-"),
		publishedDate: new Date(data.publishedDate),
		editedDate: new Date(data.editedDate),
		content: content,
	};
});

export function getPostsSortedByTitle() {
	return allPostsData.sort((a: Post, b: Post) => {
		if (a.title > b.title) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getPostById(id: string): Post {
	const post = allPostsData.find((post) => id === post.id);

	if (typeof post !== "undefined") {
		return post;
	} else {
		throw new Error("ID of post does not exist.");
	}
}
