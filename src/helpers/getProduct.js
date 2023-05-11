export const getProduct = (array, id) => {
    const product = array.find((prod) => prod.id === id);
    return product;
  };
  