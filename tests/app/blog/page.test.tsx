import React from "react";
import { render, screen } from "@testing-library/react";

import Blog from "@/app/blog/page";

jest.mock("@/lib/posts", () => {
	const actualPostsModule = jest.requireActual("@/lib/posts");

	return {
		...actualPostsModule,
		getPostsSortedByTitle: jest.fn(() => {
			return [
				{
					id: "post-1",
					title: "Sample Post 1",
					category: "tech",
					publishedDate: new Date("2023-10-16"),
				},
				{
					id: "post-2",
					title: "Sample Post 2",
					category: "travel",
					publishedDate: new Date("2023-10-17"),
				},
			];
		}),
	};
});

describe("Blog", () => {
	beforeEach(() => {
		require.requireMock("@/lib/posts");
	});

	it("renders the 'Blog' page with a navigation bar and a list of post tiles", () => {
		render(<Blog />);

		const navbar = screen.getByTestId("blog-navbar");
		expect(navbar).toBeInTheDocument();

		const postTiles = screen.getAllByTestId("post-tile");
		expect(postTiles).toHaveLength(2);

		const postTitle1 = screen.getByText("Sample Post 1");
		const postTitle2 = screen.getByText("Sample Post 2");

		expect(postTitle1).toBeInTheDocument();
		expect(postTitle2).toBeInTheDocument();
	});
});
