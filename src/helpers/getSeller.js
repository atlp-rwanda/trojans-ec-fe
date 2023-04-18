export const getSeller = (array, id) => {
  const seller = array.find((seller) => {
    return seller.id === id;
  });
  return seller;
};
