import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Post Not Found",
};

export default function NotFound() {
	return (
		<main>
			<h1>404 Post Not Found</h1>
		</main>
	);
}
