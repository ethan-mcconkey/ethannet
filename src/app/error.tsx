"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
	error,
}: {
	error: Error & { digest?: string };
}) {
	useEffect(() => {
		console.error(`${error.name} - "${error.message}" (${error.cause})`);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<p>{error.message}</p>
			<Link href="/">Go Home?</Link>
		</div>
	);
}
