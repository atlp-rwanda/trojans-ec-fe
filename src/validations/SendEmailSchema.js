import * as Yup from 'yup'
const sendEmailSchema = Yup.object().shape({
    email: Yup.string().required().email(),
})
export default sendEmailSchema;