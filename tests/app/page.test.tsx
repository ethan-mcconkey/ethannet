import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
	it("renders the 'Home' page with a navigation bar and heading", () => {
		render(<Home />);

		const navbar = screen.getByText("home");
		expect(navbar).toBeInTheDocument();

		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent("home");
	});
});
