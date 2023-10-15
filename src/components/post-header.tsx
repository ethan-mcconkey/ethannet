import { formatDate } from "@/lib/date";

export default function PostHeader(params: {
	title: string;
	publishedDate: Date;
	editedDate: Date;
}): JSX.Element {
	return (
		<div className="post-header" data-testid="post-header">
			<h1 className="post-title" data-testid="post-title">{params.title}</h1>
			<p className="post-dates" data-testid="post-dates">
				Published on: {formatDate(params.publishedDate)} | Edited on:{" "}
				{formatDate(params.editedDate)}
			</p>
			<hr />
		</div>
	);
}
