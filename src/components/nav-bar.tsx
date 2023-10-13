import NavItem from "@/components/nav-item";

export default function Navbar(params: { page: string }) {
	return (
		<nav className="navbar">
			<NavItem
				pageTitle="Home"
				pageLink="/"
				isActive={params.page === "home"}
			/>
			<NavItem
				pageTitle="Blog"
				pageLink="/blog"
				isActive={params.page === "blog"}
			/>
			<NavItem
				pageTitle="About"
				pageLink="/about"
				isActive={params.page === "about"}
			/>
		</nav>
	);
}
