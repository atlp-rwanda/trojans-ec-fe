import * as yup from "yup";

 export const UserDetailSchema = yup
  .object({
    names: yup.string().required(),
    email: yup.string().required().email(),
    gender: yup.string().required(),
    password: yup
      .string()
      .required()
      .min(8, "Password length should be at least 8 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"password must have at least one letter and one number"),
    cpassword: yup
      .string()
      .required("Comfirm password is a required field")
      .oneOf([yup.ref("password")], "Passwords do not match"),
    dob: yup
      .string("Date of birth must be a string")
      .required("Date of birth is a required field")
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    languange: yup.string().required(),
    currency: yup.string().required(),
  })
  .required();

export const billingSchema = yup
  .object({
    city: yup.string().required(),
    country: yup.string().required(),
    postalcode: yup.string().required(),
    province: yup.string().required(),
    street: yup.string().required(),
  })
  .required();