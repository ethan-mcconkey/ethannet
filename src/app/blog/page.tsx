import NavBar from "@/components/navbar/NavBar";

const page: string = "blog";

export default function Blog() {
	return (
		<main className={page} id={page}>
			<NavBar currentPage={page} />
			<h1>{page}</h1>
		</main>
	);
}
