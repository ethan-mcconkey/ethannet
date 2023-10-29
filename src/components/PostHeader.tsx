import { formatDate } from "@/lib/date";

export default function PostHeader(params: {
    title: string;
    publishedDate: Date;
    editedDate: Date;
}): JSX.Element {
    return (
        <div data-testid="post-header">
            <h1 data-testid="post-title">{params.title}</h1>
            <p data-testid="post-dates">
                Published on: {formatDate(params.publishedDate)} | Edited on:{" "}
                {formatDate(params.editedDate)}
            </p>
            <hr />
        </div>
    );
}
