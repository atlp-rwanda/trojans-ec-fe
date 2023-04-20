import * as yup from 'yup';

const profileSchema = yup.object({
    country: yup.string().required().min(3),
    city: yup.string().required().min(3),
    province: yup.string().required().min(3),
    street: yup.string().required().min(3),
    postalCode: yup.string().required().min(5),
    preferredCurrency: yup.string().required(),
    preferredLanguage: yup.string().required().min(3)
}).required();

export default profileSchema;