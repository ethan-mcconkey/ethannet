import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown);
	return result.toString();
}

export type PostMarkdownMetadata = {
	id: string;
	title: string;
	publishedDate: Date;
	editedDate: Date;
	content: string;
};

const postsDirectory = path.join(process.cwd(), "src/static/posts");
const fileNames = fs.readdirSync(postsDirectory);
const allPostsData: PostMarkdownMetadata[] = fileNames.map(
	(fileName): PostMarkdownMetadata => {
		const id = fileName.replace(/\.md$/, "");

		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const { data, content } = matter(fileContents);

		let title: string = data.title;
		title = title.toLowerCase();
		title = title.replace(" ", "-");

		return {
			id,
			title: title,
			publishedDate: new Date(data.publishedDate),
			editedDate: new Date(data.editedDate),
			content: content,
		};
	}
);

export function getPostsSortedByTitle() {
	return allPostsData.sort(
		(a: PostMarkdownMetadata, b: PostMarkdownMetadata) => {
			if (a.title > b.title) {
				return 1;
			} else {
				return -1;
			}
		}
	);
}

export function getPostById(id: string): PostMarkdownMetadata {
	const post = allPostsData.find((post) => id === post.id);

	if (typeof post !== "undefined") {
		return post;
	} else {
		throw new Error("ID of post does not exist.");
	}
}
