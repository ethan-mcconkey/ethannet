export const formatDate = (date: Date) => {
	return date.toLocaleDateString("en-za", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
};
