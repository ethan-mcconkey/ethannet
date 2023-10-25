export const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-za", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};
