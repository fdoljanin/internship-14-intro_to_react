export const getNewId = (list) => {
    return list.reduce((accumulator, current) => Math.max(accumulator, current.id), 0) + 1;
}
