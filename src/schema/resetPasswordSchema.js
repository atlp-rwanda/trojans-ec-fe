import * as Yup from 'yup'

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(8, 'Password length should be at least 8 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'password must have at least one letter and one number',
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
})
export default resetPasswordSchema
