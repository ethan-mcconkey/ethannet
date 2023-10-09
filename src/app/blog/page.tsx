import Navbar from "@/components/nav-bar";

const page: string = "blog";

export default function Blog() {
	return (
		<main className={page} id={page}>
			<Navbar page={page} />
			<h1>{page}</h1>
		</main>
	);
}
