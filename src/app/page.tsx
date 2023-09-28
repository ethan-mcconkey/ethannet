import NavBar from "@/components/navbar/NavBar";

const page: string = "home";

export default function Home() {
	return (
		<main className={page} id={page}>
			<NavBar currentPage={page} />
			<h1>{page}</h1>
		</main>
	);
}
