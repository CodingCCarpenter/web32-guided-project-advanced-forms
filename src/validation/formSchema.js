// Here goes the schema for the form
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    username: Yup
      .string()
      .min(3, "Username must be at least 6 characters long.")
      .required("Username is Required"),
    role: Yup
      .string()
      .oneOf(['Instructor', 'Student', 'TL', 'Alumni'], "Please select a role"),
      // required isn't required for checkboxes.
    civil: Yup
      .string()
      .oneOf(['Married', 'Single'], "Please select your civil status"),
  });
  
  
export default formSchema