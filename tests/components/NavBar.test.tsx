import { render } from "@testing-library/react";
import Navbar from "@/components/NavBar";

describe("Navbar", () => {
    it("renders the 'Home' link as active when 'page' is 'home'", () => {
        const { getByText } = render(<Navbar currentPage="home" />);

        const homeLink = getByText("Home");

        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveClass("active-nav-item");
    });

    it("renders the 'Blog' link as active when 'page' is 'blog'", () => {
        const { getByText } = render(<Navbar currentPage="blog" />);

        const blogLink = getByText("Blog");

        expect(blogLink).toBeInTheDocument();
        expect(blogLink).toHaveClass("active-nav-item");
    });

    it("renders the 'About' link as active when 'page' is 'about'", () => {
        const { getByText } = render(<Navbar currentPage="about" />);

        const aboutLink = getByText("About");

        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveClass("active-nav-item");
    });

    it("renders all other links as inactive", () => {
        const { getByText } = render(<Navbar currentPage="other" />);

        const homeLink = getByText("Home");
        const blogLink = getByText("Blog");
        const aboutLink = getByText("About");

        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveClass("nav-item");

        expect(blogLink).toBeInTheDocument();
        expect(blogLink).toHaveClass("nav-item");

        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveClass("nav-item");
    });
});
