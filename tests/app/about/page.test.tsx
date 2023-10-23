import React from "react";
import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

describe("About", () => {
	it("renders the 'About' page with a navigation bar and heading", () => {
		render(<About />);

		const navbar = screen.getByText("about");
		expect(navbar).toBeInTheDocument();

		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("about");
	});
});
