import NavItem from "@/components/NavItem";

export default function Navbar(props: {
    currentPage: string;
    redirectPage?: string;
}) {
    return (
        <nav className="navbar">
            <NavItem
                pageTitle="HOME"
                pageLink="/"
                isActive={props.currentPage === "home"}
            />
            <NavItem
                pageTitle="BLOG"
                pageLink="/blog"
                isActive={props.currentPage === "blog"}
            />
            <NavItem
                pageTitle="ABOUT"
                pageLink="/about"
                isActive={props.currentPage === "about"}
            />
        </nav>
    );
}
