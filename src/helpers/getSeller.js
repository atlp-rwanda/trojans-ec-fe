export const getSeller = (array, id) => {
  const seller = array.find((seller) => {
    return seller.id === id;
  });
  if (seller) {
    return seller;
  } else {
    return { name: "Anonymous" };
  }
};
