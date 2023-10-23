import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

describe("RootLayout", () => {
	it("renders children within a basic HTML structure", () => {
		render(
			<RootLayout>
				<div data-testid="test-child">Test Content</div>
			</RootLayout>
		);

		const htmlElement = screen.getByTestId("layout-html");
		const bodyElement = screen.getByTestId("layout-body");

		const testChild = screen.getByTestId("test-child");

		expect(htmlElement).toBeInTheDocument();
		expect(bodyElement).toBeInTheDocument();
		expect(testChild).toBeInTheDocument();
	});
});
