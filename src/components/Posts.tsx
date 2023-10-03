import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMarkdownMetadata = {
	id: string;
	title: string;
	publishedDate: string;
	editedDate: string;
};

const postsDirectory = path.join(process.cwd(), "src/static/posts");

const fileNames = fs.readdirSync(postsDirectory);
const allPostsData: PostMarkdownMetadata[] = fileNames.map(
	(fileName): PostMarkdownMetadata => {
		const id = fileName.replace(/\.md$/, "");

		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const matterResult = matter(fileContents);
		const matterData = matterResult.data;

		return {
			id,
			title: matterData.title,
			publishedDate: matterData.publishedDate,
			editedDate: matterData.editedDate,
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

export function getPostsSortedByDate() {
	return allPostsData.sort(
		(a: PostMarkdownMetadata, b: PostMarkdownMetadata) => {
			if (a.publishedDate > b.publishedDate) {
				return 1;
			} else {
				return -1;
			}
		}
	);
}
