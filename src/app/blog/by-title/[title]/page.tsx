export function generateStaticParams() {
	return [];
}

export default function Post(params: { post: string }): JSX.Element {
	return (
		<main>
			<h1>{params.post}</h1>
		</main>
	);
}
