import * as Yup from "yup";

export const userSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    mobile: Yup.string().required("Mobile number is required"),
    address: Yup.string().required("Address is required"),
    roleId: Yup.number().required("Role is required"),
    createdBy: Yup.number().required("Created By is required"),
});

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});