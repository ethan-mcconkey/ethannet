const page: string = "blog";

export async function generateStaticParams() {
	return [];
}

export default function Blog() {
	return <main className={page} id={page}></main>;
}
