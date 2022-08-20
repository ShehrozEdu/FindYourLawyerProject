import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { GoogleLogin } from "@react-oauth/google";

//Slice

// import { loginUserAction } from "../redux/slices/userSlice";
import Footer from "./Home/Footer";

//----------------------------------------------------------------
//FormSchema
// ---------------------------------------------------------------

const formSchema = Yup.object({
  Email: Yup.string().required("Email is required"),
  Password: Yup.string().required("Password is required"),
});
const Login = ({ success, error }) => {
  let [showModal, setShowModal] = useState(false);
  // const dispatch = useDispatch();
  // const formik = useFormik({
  //   initialValues: {
  //     Email: "",
  //     Password: "",
  //   },
  //   onSubmit: (values) => {
  //     //dispatch the action

  //     // dispatch(loginUserAction(values));

  //     console.log(values);
  //   },
  //   validationSchema: formSchema,
  // });

  //Navigate

  // const store = useSelector((state) => state?.users);
  // const { userAuth, loading, serverErr, appErr } = store;
  // if (userAuth) return <Navigate to="/bookings" />;

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center practices-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-300 dark:bg-gray-600">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-700">
                {/* -------------------- */}
                {/*header*/}
                {/* ------------------------------------- */}
                <div className="flex practices-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h1
                    className="text-center text-4xl text-amber-600 font-display font-semibold  xl:text-5xl
                      xl:text-bold underline Crimson "
                  >
                    Sign in
                  </h1>
                </div>
                {/*MODAL body*/}
                <>
                  <div className="lg:flex dark:bg-gray-800">
                    <div className="lg:w-1/2 xl:max-w-screen-sm">
                      <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12 dark:bg-gray-800"></div>
                      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl ">
                        <div className="flex flex-col items-center mt-8">
                          <GoogleLogin
                            onSuccess={(credentialResponse) => {
                              success(credentialResponse);
                            }}
                            onError={() => {
                              error();
                            }}
                          />
                          {/* <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
  
                      <span className="ml-4">Sign Up with Facebook</span>
                    </button> */}
                        </div>
                        {/* <div className="my-12 border-b text-center">
                          <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or
                          </div>
                        </div>
                        <div className="mt-12">
                          <form onSubmit={formik.handleSubmit}>
                            <div>
                              <div className="text-sm font-bold text-gray-700 tracking-wide dark:text-white">
                                Email Address
                              </div>
                              <input
                                value={formik.values.Email}
                                onChange={formik.handleChange("Email")}
                                onBlur={formik.handleBlur("Email")}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type=""
                                placeholder="mike@gmail.com"
                                disabled
                              />
                              <div className="text-red-400 mb-2">
                                {formik.touched.Email && formik.errors.Email}
                              </div>
                            </div>
                            <div className="mt-8">
                              <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide dark:text-white">
                                  Password
                                </div>
                                {/* <div>
                        <a
                          className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                          cursor-pointer"
                        >
                          Forgot Password?
                        </a>
                      </div> */}
                        {/* </div>
                              <input
                                value={formik.values.Password}
                                onChange={formik.handleChange("Password")}
                                onBlur={formik.handleBlur("Password")}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="password"
                                placeholder="Enter your password"
                                disabled
                              />
                              <div className="text-red-400 mb-2">
                                {formik.touched.Password &&
                                  formik.errors.Password}
                              </div>
                            </div>
                            <div className="mt-10">
                              <button
                                type="submit"
                                className="bg-slate-500 text-stone-300 p-4 w-full rounded-full tracking-wide
                                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-slate-600
                                  shadow-lg"
                              >
                                Log In
                              </button>
                            </div>
                          </form>
                          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account ?{" "}
                            <Link
                              to="/signup"
                              className="cursor-pointer text-amber-600 hover:text-amber-600"
                            >
                              Sign up
                            </Link>
                          </div>
                        </div> */}{" "}
                        */} )
                      </div>
                    </div>

                    {/* <div className="flex-1 bg-gray-200 dark:bg-gray-800 text-center hidden lg:flex">
                      <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat ">
                        <img src="img/login-img.jpg" alt="" />
                      </div>
                    </div> */}
                  </div>
                  <Footer />
                </>
                {/*footer*/}
                <div className="flex practices-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;
<div className="mt-12">
  <form onSubmit={formik.handleSubmit}>
    <div>
      <div className="text-sm font-bold text-gray-700 tracking-wide dark:text-white">
        Email Address
      </div>
      <input
        value={formik.values.Email}
        onChange={formik.handleChange("Email")}
        onBlur={formik.handleBlur("Email")}
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type=""
        placeholder="mike@gmail.com"
        disabled
      />
      <div className="text-red-400 mb-2">
        {formik.touched.Email && formik.errors.Email}
      </div>
    </div>
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <div className="text-sm font-bold text-gray-700 tracking-wide dark:text-white">
          Password
        </div>
        {/* <div>
                      <a
                        className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                      >
                        Forgot Password?
                      </a>
                    </div> */}
      </div>
      <input
        value={formik.values.Password}
        onChange={formik.handleChange("Password")}
        onBlur={formik.handleBlur("Password")}
        className="w-full text-lg py-2 border-b border-0 focus:outline-none focus:border-indigo-500"
        type="password"
        placeholder="Enter your password"
        disabled
      />
      <div className="text-red-400 mb-2">
        {formik.touched.Password && formik.errors.Password}
      </div>
    </div>
    <div className="mt-10">
      <button
        type="submit"
        className="bg-slate-500 text-stone-300 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-slate-600
                                shadow-lg mb-3"
      >
        Log In
      </button>
    </div>
  </form>
  {/* <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                Don't have an account ?{" "}
                                <Link
                                  to="/signup"
                                  className="cursor-pointer text-amber-600 hover:text-amber-600"
                                >
                                  Sign up
                                </Link>
                              </div> */}
</div>;
