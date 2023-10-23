import { render } from "@testing-library/react";
import NavItem from "@/components/nav-item";

describe("NavItem", () => {
	it("renders an inactive navigation item correctly", () => {
		const props = {
			pageTitle: "Example Page",
			pageLink: "/example",
			isActive: false,
		};

		const { getByRole } = render(<NavItem {...props} />);

		const link = getByRole("link");
		expect(link).toHaveTextContent("Example Page");
		expect(link).toHaveAttribute("href", "/example");
		expect(link).toHaveClass("nav-item");
	});

	it("renders an active navigation item correctly", () => {
		const props = {
			pageTitle: "Example Page",
			pageLink: "/example",
			isActive: true,
		};

		const { getByRole } = render(<NavItem {...props} />);

		const link = getByRole("link");
		expect(link).toHaveTextContent("Example Page");
		expect(link).toHaveAttribute("href", "/example");
		expect(link).toHaveClass("active-nav-item");
	});
});
