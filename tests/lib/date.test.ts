import { formatDate } from "@/lib/date";

describe("formatDate", () => {
	it("formats a date into the 'dd monthName yyyy' format", () => {
		const testDate = new Date("2023-10-16T12:00:00Z");
		const expectedFormattedDate = "16 October 2023";
		const formattedDate = formatDate(testDate);

		expect(formattedDate).toEqual(expectedFormattedDate);
	});
});
