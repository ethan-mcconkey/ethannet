import NavItem from "./nav-item";

type NavbarParams = {
	page: string;
};

export default function Navbar(params: NavbarParams) {
	return (
		<nav id={"navbar-" + params.page} className="navbar">
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
