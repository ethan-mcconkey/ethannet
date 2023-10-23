import fs, { readdirSync } from "fs";
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
	category: string;
	title: string;
	publishedDate: Date;
	editedDate: Date;
	content: string;
};

const postsDirectory = path.join(process.cwd(), "static/posts");
export const categories = fs.readdirSync(postsDirectory);

export function getPostIdsByCategory(category: string): string[] {
	const categoryDirectory = path.join(postsDirectory, category);
	const postFilenames = readdirSync(categoryDirectory);

	return postFilenames.map((postFilename: string): string => {
		return postFilename
			.replace(/\.md$/, "")
			.toLowerCase()
			.replace(" ", "-");
	});
}

export function getPost(id: string, category: string): Post {
	const currentDirectory = path.join(postsDirectory, category);

	const { data, content } = matter(
		fs.readFileSync(path.join(currentDirectory, id + ".md"), "utf8")
	);

	return {
		id: id,
		title: data.title,
		category: category,
		publishedDate: new Date(data.publishedDate),
		editedDate: new Date(data.editedDate),
		content: content,
	};
}

export function getPostsByCategory(category: string): Post[] {
	const currentDirectory = path.join(postsDirectory, category);

	const postFilenames = fs.readdirSync(currentDirectory);

	return postFilenames.map((postFilename: string): Post => {
		const { data, content } = matter(
			fs.readFileSync(path.join(currentDirectory, postFilename), "utf8")
		);

		return {
			id: postFilename
				.replace(/\.md$/, "")
				.toLowerCase()
				.replace(" ", "-"),
			title: data.title,
			category: category,
			publishedDate: new Date(data.publishedDate),
			editedDate: new Date(data.editedDate),
			content: content,
		};
	});
}

export function getAllPosts(): Post[] {
	let allPosts: Post[] = [];
	const categories = fs.readdirSync(postsDirectory);
	categories.forEach((category: string) => {
		const allPostIds = getPostIdsByCategory(category);

		allPostIds.forEach((postId: string) => {
			allPosts.push(getPost(postId, category));
		});
	});
	return allPosts;
}
