import Navbar from "@/components/NavBar";
import { Metadata } from "next";

const page: string = "about";

export const metadata: Metadata = {
	title: "About Me",
};

export default function About() {
	return (
		<main className={page} id={page}>
			<Navbar page={page} />
			<h1>{page}</h1>
		</main>
	);
}
