import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "@/app/error";

describe("Error", () => {
	it("displays error information and a link to go home", () => {
		const mockError = {
			name: "SampleError",
			message: "This is a sample error message",
			cause: "Unknown",
		};

		render(<Error error={mockError} />);

		const errorHeading = screen.getByText("Something went wrong!");
		const errorMessage = screen.getByText("This is a sample error message");

		const errorLink = screen.getByRole("link", { name: "Go Home?" });

		expect(errorHeading).toBeInTheDocument();
		expect(errorMessage).toBeInTheDocument();
		expect(errorLink).toBeInTheDocument();
		expect(errorLink).toHaveAttribute("href", "/");
	});

	it("logs the error to the console", () => {
		const mockError = {
			name: "SampleError",
			message: "This is a sample error message",
			cause: "Unknown",
		};

		const consoleErrorSpy = jest
			.spyOn(console, "error")
			.mockImplementation(() => {});

		render(<Error error={mockError} />);

		expect(consoleErrorSpy).toHaveBeenCalledWith(
			'SampleError - "This is a sample error message" (Unknown)'
		);

		consoleErrorSpy.mockRestore();
	});
});
