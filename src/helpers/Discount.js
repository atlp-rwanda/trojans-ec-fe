export const discount = (number, total) => {
  return `${((number / total) * 100).toFixed(2).replace(/\.00$/, "")}%`;
};
