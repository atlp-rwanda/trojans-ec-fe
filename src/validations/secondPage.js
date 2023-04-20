import * as Yup from "yup"

export const secondPageSchema= Yup.object().shape({
    expiryDate: Yup.date().typeError("this field is required").min(new Date(), "Date must not be in the past"),
    bonus: Yup.string("must be a number").required("this field can't be empty").matches(/^[0-9]+$/, 'bonus must be a number'),
    image: Yup.array().typeError("this field can't be empty").required("this field can't be empty").min(4, "you need to provide at least 4 images").max(8, "you need to provide 8 images maximum")
})