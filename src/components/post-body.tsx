import { markdownToHtml } from "./Posts";

type PostBodyProps = {
	id: string;
	content: string;
};

export default async function PostBody(props: PostBodyProps) {
	const content = await markdownToHtml(props.content);

	return (
		<div
			id={props.id + "-body"}
			dangerouslySetInnerHTML={{ __html: content }}
		></div>
	);
}
