import * as Yup from "yup"

export const priceValidation = Yup.object().shape({
    min: Yup.string("must be a number").required("required").matches(/^[0-9]+$/, 'must be a number'),
    max:  Yup.string("must be a number").required("required").matches(/^[0-9]+$/, ' must be a number'),
})