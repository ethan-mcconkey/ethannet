import NavBar from "@/components/navbar/NavBar";

const page: string = "about";

export default function About() {
	return (
		<main className={page} id={page}>
			<NavBar currentPage={page} />
			<h1>{page}</h1>
		</main>
	);
}
