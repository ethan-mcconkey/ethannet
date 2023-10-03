import Link from "next/link";

export default function Navbar(props: { currentPage: string }): JSX.Element {
	return (
		<nav className="nav-bar">
			<Link
				className={
					props.currentPage === "home"
						? "current-page-nav-link"
						: "nav-link"
				}
				href="/"
			>
				Home
			</Link>
			<Link
				className={
					props.currentPage === "about"
						? "current-page-nav-link"
						: "nav-link"
				}
				href="/about"
			>
				About
			</Link>
			<Link
				className={
					props.currentPage === "blog"
						? "current-page-nav-link"
						: "nav-link"
				}
				href="/blog"
			>
				Blog
			</Link>
		</nav>
	);
}
