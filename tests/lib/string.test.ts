import { toSentenceCase } from "@/lib/string";

describe("toSentenceCase", () => {
    it("should convert a string to sentence case", () => {
        expect(toSentenceCase("hello")).toBe("Hello");

        expect(toSentenceCase("hello world")).toBe("Hello World");

        expect(toSentenceCase("ThIs Is A TeSt")).toBe("This Is A Test");

        expect(toSentenceCase("")).toBe("");

        expect(toSentenceCase("  leading spaces trailing spaces  ")).toBe(
            "Leading Spaces Trailing Spaces",
        );
    });
});
