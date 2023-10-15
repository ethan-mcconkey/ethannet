import { formatDate } from "src/lib/date";

describe("formatDate", () => {
	it("should format date", () => {
		const date = new Date("2023-01-01");

        expect(formatDate(date)).toEqual("01 January 2023");
	});
});
