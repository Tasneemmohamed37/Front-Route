import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

export default function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    const validateSchema = Yup.object({
        email: Yup.string().required('Email is required').email('email must contain @'),
        password: Yup.string().required('Password is required').matches(passwordRegex,'Password must contain at least one capital letter and one special character')
    });

    // 1. create obj from formik 
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validateSchema,
        // validate: validateForm,
        onSubmit: handleSubmit
    });



    function validateForm(values) {
        const errors = {};

        if (!emailRegex.test(values.email))
            errors.email = 'Email is required, and must contain @';

        if (!passwordRegex.test(values.password))
            errors.password = 'Password is required, and must contain at least one capital letter and one special character';

        return errors;
    }

    function handleSubmit(values) {
        console.log(values);
    }

    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div className="container mx-auto pt-20 pb-10">
                    {/* 2. link form with formik using onSubmit */}
                    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                        
                            <input
                                type="email"
                                placeholder="email"
                                className="outline-none border border-gray-400 border-opacity-50 px-3 py-1"
                                autoComplete="off"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {(formik.errors.email && formik.touched.email) ? (
                                <div className="text-red-600 font-bold mt-3">
                                    * {formik.errors.email}
                                </div>
                            ):("")}
                            <input
                                type="password"
                                placeholder="password"
                                className="outline-none border border-gray-400 border-opacity-50 px-3 py-1"
                                autoComplete="off"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                                {(formik.errors.password && formik.touched.password) ? (
                                <div className="text-red-600 font-bold mt-3">
                                    * {formik.errors.password}
                                </div>
                            ):("")}


                        <button type="submit" className="rounded-md px-4 py-1 self-start bg-blue-600 text-white">Submit</button>
                    </form>
                </div>
            </div>

        </>
    );
}
