export const getDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const diffMs = endDate - startDate;
    return diffMs;
};