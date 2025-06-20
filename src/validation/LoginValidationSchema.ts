import * as Yup from "yup";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

export default LoginValidationSchema;
