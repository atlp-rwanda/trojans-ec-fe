const newFormData = new FormData();

export   const submitProductForm = (formData, dispatch, submitForm) => {
    formData.image.forEach((image) => {
      newFormData.append("image", image);
    });
    newFormData.append("name", formData.name);
    newFormData.append("price", parseInt(formData.price));
    newFormData.append("bonus", parseInt(formData.bonus));
    newFormData.append("categoryId", parseInt(formData.categoryId));
    newFormData.append("expiryDate", formData.expiryDate);
    newFormData.append("quantity", parseInt(formData.quantity));
    dispatch(submitForm(newFormData));
  };