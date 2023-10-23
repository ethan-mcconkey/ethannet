export function toSentenceCase(str: string): string {
	let returnArray: string[] = [];
	const split = str.split(" ");
	split.forEach((part: string) => {
		returnArray.push(part[0].toUpperCase() + part.substring(1));
	});

	return returnArray.join(" ");
}
