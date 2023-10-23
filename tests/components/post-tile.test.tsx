import { render, screen } from "@testing-library/react";
import PostTile from "@/components/post-tile";

describe("PostTile", () => {
	it("renders post information correctly", () => {
		const props = {
			id: "post-1",
			title: "Sample Post",
			category: "tech",
			publishedDate: new Date("2023-10-16"),
		};

		render(<PostTile {...props} />);

		const postTitle = screen.getByText("Sample Post");
		const postDate = screen.getByText("16 October 2023");

		expect(postTitle).toBeInTheDocument();
		expect(postDate).toBeInTheDocument();

		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", "blog/tech/post-1");
	});
});
