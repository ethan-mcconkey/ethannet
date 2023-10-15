import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page Not Found",
};

export default function NotFound() {
	return (
		<main className="flex flex-col justify-center items-center w-screen h-screen">
			<h1 className="text-9xl p-4 mb-4">404: Page Not Found</h1>
			<p className="text-4xl p-2 m-2">
				The page you tried to access either does not exist, has been
				moved, or has been deleted.
			</p>
			<Link
				className="underline underline-offset-2 p-2 m-2 font-bold text-[30px]"
				href="/"
			>
				Go Back Home?
			</Link>
		</main>
	);
}
