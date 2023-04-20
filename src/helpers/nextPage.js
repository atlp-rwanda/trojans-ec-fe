export const nextPage = (data,setFirstPage, setFormData,setSecondPage) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        price: parseInt(data.price),
        name: data.name,
        quantity: parseInt(data.quantity),
        categoryId: parseInt(data.categoryId),
      };
    });
    setFirstPage(false);
    setSecondPage(true);
  };