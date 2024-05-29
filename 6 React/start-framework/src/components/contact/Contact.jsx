import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function Contact() {
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
    age: Yup.number()
      .required("Age is required")
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
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <div className="max-w-screen-lg mx-auto text-slate-700 py-10">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-4xl uppercase">CONTACT SECTION</h1>
          <div className="flex justify-center items-center gap-2">
            <div className="font-bold text-3xl bg-slate-700 w-24 h-[3px]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="font-bold text-3xl bg-slate-700 w-24 h-[3px]"></div>
          </div>
          <form className="flex flex-col gap-5 w-2/3" onSubmit={formik.handleSubmit}>
          <input
              type="text"
              placeholder="userName"
              className="outline-none border-b border-gray-200 shadow-sm p-2"
              autoComplete="off"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="text-red-600 font-bold mt-1">
                * {formik.errors.name}
              </div>
            ) : (
              ""
            )}
            <input
              type="number"
              placeholder="userAge"
              className="outline-none border-b border-gray-200 shadow-sm p-2"
              autoComplete="off"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.age && formik.touched.age ? (
              <div className="text-red-600 font-bold mt-1">
                * {formik.errors.age}
              </div>
            ) : (
              ""
            )}
            <input
              type="email"
              placeholder="userEmail"
              className="outline-none border-b border-gray-200 shadow-sm p-2"
              autoComplete="off"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-600 font-bold mt-1">
                * {formik.errors.email}
              </div>
            ) : (
              ""
            )}
            <input
              type="password"
              placeholder="userPassword"
              className="outline-none border-b border-gray-200 shadow-sm p-2"
              autoComplete="off"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-600 font-bold mt-3">
                * {formik.errors.password}
              </div>
            ) : (
              ""
            )}
            <button
              type="submit"
              className="rounded-md px-4 py-1 self-start bg-teal-600 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
