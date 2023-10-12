export default function PostHeader(params: {
	title: string;
	publishedDate: Date;
	editedDate: Date;
}): JSX.Element {
	const formatDate = (date: Date) => {
		return date.toLocaleDateString("en-za", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};
	return (
		<div className="post-header">
			<h1 className="post-title">{params.title}</h1>
			<p className="post-dates">
				Published on: {formatDate(params.publishedDate)} | Edited on:{" "}
				{formatDate(params.editedDate)}
			</p>
			<hr />
		</div>
	);
}
