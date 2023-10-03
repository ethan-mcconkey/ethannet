export type Post = {
	title: string;
	content: string;
	publishedDate: Date;
	updatedDate: Date;
};

export default function Post(params: Post): JSX.Element {
	return (
		<div>
			<h1>{params.title}</h1>
			<p>{params.content}</p>
			<p>{params.publishedDate.getDate()}</p>
			<p>{params.updatedDate.getDate()}</p>
		</div>
	);
}
