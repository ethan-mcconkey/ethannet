import { formatDate } from "@/lib/date";
import Link from "next/link";

export default function PostTile(params: {
	id: string;
	title: string;
	category: string;
	publishedDate: Date;
}) {
	return (
		<div data-testid="post-tile">
			<Link href={"blog/" + params.category + "/" + params.id}>
				<div className="post-tile">
					<h1 className="post-tile-title">{params.title}</h1>
					<p className="post-tile-date">
						{formatDate(params.publishedDate)}
					</p>
				</div>
			</Link>
		</div>
	);
}
