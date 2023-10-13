import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page Not Found",
};

export default function NotFound() {
	return (
		<main>
			<h1>404 Page Not Found</h1>
		</main>
	);
}
