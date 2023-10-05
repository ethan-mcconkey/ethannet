import PostTitle from "./post-title";

type PostHeaderProps = {
	id: string;
	title: string;
	publishedDate: Date;
	editedDate: Date;
};

export default function PostHeader(props: PostHeaderProps): JSX.Element {
	const formatDate = (date: Date) => {
		return date.toLocaleDateString("en-za", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};
	return (
		<div id={props.id + "-header"}>
			<PostTitle>{props.title}</PostTitle>
			<div id={props.id + "-dates"}>
				<p>{formatDate(props.publishedDate)}</p>
				<p>{formatDate(props.editedDate)}</p>
			</div>
		</div>
	);
}
