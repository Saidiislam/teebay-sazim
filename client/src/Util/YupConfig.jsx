import * as yup from "yup";

export const SignUpVal = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  address: yup.string().required("Please enter your current address"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  phone: yup.string().nullable(),
  password: yup.string().required("Please enter a strong password"),
});

export const SignInVal = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup.string().required("Please enter a strong password"),
});
