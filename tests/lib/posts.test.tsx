import { markdownToHtml } from "src/lib/posts";
import fs from "node:fs";
import path from "path";

describe("markdownToHTML", () => {
	it("should parse h1 markdown", async () => {
		const html: string = await markdownToHtml("# Heading");

		expect(html).toEqual<string>(
			"<h1>Heading</h1>\n"
		);
	});
});
