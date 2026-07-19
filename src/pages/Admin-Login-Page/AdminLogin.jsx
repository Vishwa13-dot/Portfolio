import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

const LoginSchema = Yup.object({

    email: Yup.string()

        .email("Invalid Email")

        .required("Email is required"),

    password: Yup.string()

        .min(6, "Minimum 6 characters")

        .required("Password is required"),

});

function AdminLogin() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] =
        useState(false);

    return (
        <section className="min-h-[calc(100vh-180px)] bg-slate-950 flex items-center justify-center px-6 pt-32 pb-24">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">

                    <h1 className="text-4xl font-bold text-white mt-6">
                        Welcome Back
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Sign in to access Admin Panel
                    </p>

                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

                    <Formik

                        initialValues={{
                            email: "",
                            password: "",
                        }}

                        validationSchema={LoginSchema}
                        onSubmit={(values) => {

                            console.log("Submitted", values);

                            if (
                                values.email === "admin@gmail.com" &&
                                values.password === "123456"
                            ) {

                                localStorage.setItem("adminLoggedIn", "true");

                                console.log("Correct Login");

                                navigate("/admin/dashboard");

                            } else {

                                console.log("Wrong Login");

                                alert("Invalid Email or Password");

                            }

                        }}
                    >

                        {({ isSubmitting }) => (

                            <Form className="space-y-6">

                                {/* Email */}

                                <div>

                                    <label className="block mb-2 text-slate-300 font-medium">
                                        Email Address
                                    </label>

                                    <div className="relative">

                                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="admin@gmail.com"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
                                        />

                                    </div>

                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="mt-2 text-sm text-red-400"
                                    />

                                </div>

                                {/* Password */}

                                <div>

                                    <label className="block mb-2 text-slate-300 font-medium">
                                        Password
                                    </label>

                                    <div className="relative">

                                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Enter password"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-12 pr-12 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                        >
                                            {showPassword ? (
                                                <FaEye />
                                            ) : (
                                                <FaEyeSlash />
                                            )}
                                        </button>

                                    </div>

                                    <ErrorMessage
                                        name="password"
                                        component="p"
                                        className="mt-2 text-sm text-red-400"
                                    />

                                </div>

                                {/* Remember */}

                                <div className="flex items-center justify-between">

                                    <label className="flex items-center gap-2 text-sm text-slate-400">

                                        <input
                                            type="checkbox"
                                            className="accent-blue-600"
                                        />

                                        Remember Me

                                    </label>

                                    <button
                                        type="button"
                                        className="text-sm text-blue-400 hover:underline"
                                    >
                                        Forgot Password?
                                    </button>

                                </div>

                                {/* Button */}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 disabled:opacity-60"
                                >
                                    {isSubmitting ? "Signing In..." : "Sign In"}
                                </button>

                            </Form>

                        )}

                    </Formik>

                </div>

            </div>

        </section>

    );

}

export default AdminLogin;