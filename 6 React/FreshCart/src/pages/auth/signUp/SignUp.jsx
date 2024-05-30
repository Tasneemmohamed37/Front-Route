import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function SignUp() {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const nameRegex = /^[a-z0-9_-]{3,15}$/;

  const validateSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .matches(
        nameRegex,
        "user name must be greater than 3 chars and less than 15"
      ),
    phone: Yup.number()
      .required("Phone is required")
      .min(18, "Age must be older than 18")
      .max(60, "Age must be less than 60"),
    email: Yup.string()
      .required("Email is required")
      .email("email must contain @"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must contain at least one capital letter and one special character"
      ),
    rePassword: Yup.string()
      .required("rePassword is required")
      .matches(passwordRegex, "rePassword must be similar to Password"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <section>
        <h2 className="text-mainColor text-2xl">
          <i className="fa-regular fa-circle-user me-3"></i>
          <span>Register Now</span>
        </h2>
        <form
          className="flex flex-col gap-3 p-5"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            placeholder="username"
            name="name"
            className="form-control"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="error">* {formik.errors.name}</div>
          ) : (
            ""
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error">* {formik.errors.email}</div>
          ) : (
            ""
          )}
          <input
            type="tel"
            placeholder="phone"
            name="Phone"
            className="form-control"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="error">* {formik.errors.phone}</div>
          ) : (
            ""
          )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="error">* {formik.errors.password}</div>
          ) : (
            ""
          )}
          <input
            type="password"
            placeholder="rePassword"
            name="rePassword"
            className="form-control"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="error">* {formik.errors.rePassword}</div>
          ) : (
            ""
          )}
          <button type="submit" className="btn-primary w-fit">
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}
