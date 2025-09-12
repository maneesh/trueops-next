"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

import Notifier from "@/utils/notify";
import { userSchema } from "@/utils/schema";

import { createRegisterClient } from "../../api/clientAction";

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        id="signup-form"
        className="bg-[#f3eada] rounded-lg w-full max-w-md p-6 shadow-lg"
      >
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            password: "",
            mobile: "",
            address: "",
            roleId: 1,
            createdBy: 1,
          }}
          validationSchema={userSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await createRegisterClient(values);

              if (res.success) {
                const msg = res.data?.message;

                if (msg === "OTP sent to email") {
                  Notifier.success("Please check your email to verify your account");
                  localStorage.setItem("signupData", JSON.stringify(values));
                  router.push(`/verify-otp?email=${values.email}`);
                } else {
                  Notifier.success(msg || "Signup successful!");
                }
              } else {
                Notifier.error(res.message || "Registration failed!");
              }
            } catch (err: unknown) {
              if (err instanceof Error) {
                Notifier.error(err.message);
              } else {
                Notifier.error("Something went wrong!");
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-[#f3eada] p-4 rounded-lg w-full">
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <Field
                  type="text"
                  name="fullname"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Address (City) */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">City</label>
                <Field
                  as="select"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select your city</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Delhi-NCR">Delhi-NCR</option>
                  <option value="Gorakhpur">Gorakhpur</option>
                  <option value="Kushinagar">Kushinagar</option>
                </Field>
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Field
                  type="tel"
                  name="mobile"
                  maxLength={10}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="1234567890"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div className="mb-4 relative">
                <label className="block text-sm font-medium mb-1">Password</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {showPassword ? <IoMdEyeOff size={20} /> : <FaRegEye size={20} />}
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-bold text-xl bg-green-700 hover:bg-green-500 hover:text-white text-white w-1/2 block mx-auto px-10 py-3 rounded-lg transition-all duration-200"
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>

              {/* Footer */}
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:underline"
                  onClick={() => router.push("/truops-login")}
                >
                  Sign In
                </button>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
