import Link from "next/link";

export type NavBarProps = {
	currentPage: string;
};

export default function NavBar(props: NavBarProps): JSX.Element {
	return (
		<nav className="nav-bar">
			<Link
				className={
					props.currentPage === "home"
						? "active-nav-item"
						: "nav-item"
				}
				href="/"
			>
				Home
			</Link>
			<Link
				className={
					props.currentPage === "about"
						? "active-nav-item"
						: "nav-item"
				}
				href="/about"
			>
				About
			</Link>
			<Link
				className={
					props.currentPage === "blog"
						? "active-nav-item"
						: "nav-item"
				}
				href="/blog"
			>
				Blog
			</Link>
		</nav>
	);
}
