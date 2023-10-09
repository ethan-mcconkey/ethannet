import Navbar from "@/components/nav-bar";

const page: string = "about";

export default function About() {
	return (
		<main className={page} id={page}>
			<Navbar page={page} />
			<h1>{page}</h1>
		</main>
	);
}
