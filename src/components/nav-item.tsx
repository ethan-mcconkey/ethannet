import Link from "next/link";

type NavItemParams = {
	pageTitle: string;
	pageLink: string;
	isActive: boolean;
};

export default function NavItem(params: NavItemParams) {
	return (
		<Link
			href={params.pageLink}
			className={params.isActive ? "active-nav-item" : "nav-item"}
		>
			{params.pageTitle}
		</Link>
	);
}
