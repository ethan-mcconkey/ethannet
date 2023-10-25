import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("NotFound", () => {
    it("renders the 'Page Not Found' message and a link to go back home", () => {
        render(<NotFound />);

        const notFoundHeading = screen.getByText("404: Page Not Found");
        expect(notFoundHeading).toBeInTheDocument();

        const explanationText = screen.getByText(
            /The page you tried to access either does not exist, has been moved, or has been deleted./,
        );
        expect(explanationText).toBeInTheDocument();

        const goBackHomeLink = screen.getByRole("link", {
            name: "Go Back Home?",
        });
        expect(goBackHomeLink).toBeInTheDocument();
        expect(goBackHomeLink).toHaveAttribute("href", "/");
    });
});
