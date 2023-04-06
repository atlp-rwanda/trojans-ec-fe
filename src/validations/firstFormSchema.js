import * as Yup from "yup"

export const firstPageSchema = Yup.object().shape({
    name: Yup.string("must be a string").required("name can't be empty"),
    price: Yup.string("must be a number").required("Price can't be empty").matches(/^[0-9]+$/, 'price must be a number'),
    categoryId: Yup.string().required("you need to select a category"),
    quantity: Yup.string().required("this field can't be empty").matches(/^[0-9]+$/, 'Quantity must be a number'),
  });