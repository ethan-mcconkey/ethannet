import { render, screen } from "@testing-library/react";

import PostHeader from "src/components/post-header";

describe("PostHeader", () => {
	const title = "test-title";
	const date = new Date();
	render(<PostHeader title={title} publishedDate={date} editedDate={date} />);
	it("renders all components", () => {
		expect(screen.getByTestId("post-header")).toBeInTheDocument();
		expect(screen.getByTestId("post-title")).toBeInTheDocument();
		expect(screen.getByTestId("post-dates")).toBeInTheDocument();
	});
});
