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
export const getProduct = (array, id) => {
  const product = array.find((product) => product.id === id);
  console.log(product);
  return product;
};
