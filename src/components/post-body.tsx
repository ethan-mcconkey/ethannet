import { markdownToHtml } from "@/lib/posts";

export default async function PostBody(params: {
	content: string;
}): Promise<JSX.Element> {
	const content = await markdownToHtml(params.content);

	return (
		<div
			className="post-body"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
}
