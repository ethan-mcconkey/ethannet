import Link from "next/link";

export default function NavItem(params: {
	pageTitle: string;
	pageLink: string;
	isActive: boolean;
}) {
	return (
		<Link
			href={params.pageLink}
			className={params.isActive ? "active-nav-item" : "nav-item"}
		>
			{params.pageTitle}
		</Link>
	);
}
