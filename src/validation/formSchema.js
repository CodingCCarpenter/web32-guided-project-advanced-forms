// Here goes the schema for the form
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  username: Yup
    .string()
    .min(3, "Usermame must be at least 3 characters long.")
    .required("Password is Required"),
  role: Yup
    .string()
    .oneOf(['Instructor', 'Student', 'TL', 'Alumni'], "Please select a role"),
  civil: Yup
    .string()
    .oneOf(["Single", "Married"], "Please select a civil status"),
})

export default formSchema