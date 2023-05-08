import * as Yup from "yup"

export const UpdateProductSchema = Yup.object().shape({
    name: Yup.string("Product name must be a string").required("Product name is required"),
    price: Yup.string("Price must be a number").required("Price can't be empty").matches(/^[0-9]+$/, 'Price must be a number'),
    categoryId: Yup.string().required("You need to select a category"),
    quantity: Yup.string("Quantity must be a number").required("Quantity can't be empty").matches(/^[0-9]+$/, 'Quantity must be a number'),
    expiryDate: Yup.date().typeError("This must be a valid date").min(new Date(), "Date must not be in the past"),
    bonus: Yup.string("Bonus must be a number").required("Bonus can't be empty").matches(/^[0-9]+$/, 'Bonus must be a number'),
    image: Yup.array().required("This field can't be empty").min(4, "You need to provide at least 4 images").max(8, "You can not provide more than 8 images")
  });