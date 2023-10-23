import Navbar from "@/components/NavBar";

const page: string = "home";

export default function Home() {
	return (
		<main className={page} id={page}>
			<Navbar page={page} />
			<h1>{page}</h1>
		</main>
	);
}
