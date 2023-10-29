export function toSentenceCase(str: string): string {
    const returnArray: string[] = [];
    const split = str.split(" ");
    split.forEach((part: string) => {
        if (part !== undefined && part !== "") {
            returnArray.push(
                part[0].toUpperCase() + part.substring(1).toLowerCase(),
            );
        }
    });

    return returnArray.join(" ");
}
