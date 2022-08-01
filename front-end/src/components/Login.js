import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
//Slice

import { loginUserAction } from "../redux/slices/userSlice";

//imgs

// import loginimg from "../img/login-img.jpg";

//----------------------------------------------------------------
//FormSchema
// ---------------------------------------------------------------

const formSchema = Yup.object({
  Email: Yup.string().required("Email is required"),
  Password: Yup.string().required("Password is required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values) => {
      //dispatch the action

      dispatch(loginUserAction(values));

      console.log(values);
    },
    validationSchema: formSchema,
  });

  //Navigate

  const store = useSelector((state) => state?.users);
  const { userAuth, loading, serverErr, appErr } = store;
  if (userAuth) return <Navigate to="/" />;
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12"></div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold underline decoration-indigo-300"
            >
              Sign in
            </h2>

            {/* display err */}

            {serverErr || appErr ? (
              <h2 className="text-red-500">
                {serverErr} - {appErr}
              </h2>
            ) : null}

            <div className="mt-12">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    value={formik.values.Email}
                    onChange={formik.handleChange("Email")}
                    onBlur={formik.handleBlur("Email")}
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="mike@gmail.com"
                  />
                  <div className="text-red-400 mb-2">
                    {formik.touched.Email && formik.errors.Email}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <a
                        className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <input
                    value={formik.values.Password}
                    onChange={formik.handleChange("Password")}
                    onBlur={formik.handleBlur("Password")}
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <div className="text-red-400 mb-2">
                    {formik.touched.Password && formik.errors.Password}
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?{" "}
                <Link
                  to="img/signup"
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img src="/login-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;