import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";

import { registerUserAction } from "../redux/slices/userSlice";
import Footer from "./Home/Footer";

//FormSchema
const formSchema = Yup.object({
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  Email: Yup.string().required("Email is required"),
  Password: Yup.string().required("Password is required"),
  // ContactNo: Yup.number().required("Number is required").positive().integer(),
});
export default function Signup() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      // ContactNo: "",
    },
    onSubmit: (values) => {
      //dispath the action
      dispatch(registerUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });
  //State collection from Store
  const storeData = useSelector((store) => store?.users);
  const { serverErr, appErr, registered } = storeData;
  console.log(storeData);

  //Redirecting after Signup
  if (registered) {
    return <Navigate to="/bookings" />;
  }
  return (
    <>
      <div
        className="min-h-screen bg-gray-100 text-gray-900 flex justify-center dark:bg-gray-800"
        id="signup"
      >
        <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1 dark:bg-gray-700">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-3xl xl:text-4xl font-extrabold text-amber-600 underline  Crimson">
                Sign upto begin
                {appErr || serverErr ? (
                  <div className="text-red-300 text-center">
                    {(serverErr, appErr)}
                  </div>
                ) : null}
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign Up with Google</span>
                  </button>
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                    <svg
                      className="w-6 h-6 text-blue-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>

                    <span className="ml-4">Sign Up with Facebook</span>
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or
                  </div>
                </div>
                <div className="mx-auto max-w-xs">
                  <form onSubmit={formik.handleSubmit}>
                    <input
                      value={formik.values.FirstName}
                      onChange={formik.handleChange("FirstName")}
                      onBlur={formik.handleBlur("FirstName")}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-3"
                      type="text"
                      placeholder="First Name"
                    />
                    <div className="text-red-400 mb-1">
                      {formik.touched.FirstName && formik.errors.FirstName}
                    </div>
                    <input
                      value={formik.values.LastName}
                      onChange={formik.handleChange("LastName")}
                      onBlur={formik.handleBlur("LastName")}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-3"
                      type="text"
                      placeholder="Last Name"
                    />
                    <div className="text-red-400 mb-2">
                      {formik.touched.LastName && formik.errors.LastName}
                    </div>
                    <input
                      value={formik.values.Email}
                      onChange={formik.handleChange("Email")}
                      onBlur={formik.handleBlur("Email")}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="Email"
                      placeholder="Email"
                    />{" "}
                    <div className="text-red-400 mb-2">
                      {formik.touched.Email && formik.errors.Email}
                    </div>
                    <input
                      value={formik.values.Password}
                      onChange={formik.handleChange("Password")}
                      onBlur={formik.handleBlur("Password")}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                      type="Password"
                      placeholder="Password"
                    />
                    <div className="text-red-400 mb-2">
                      {formik.touched.Password && formik.errors.Password}
                    </div>
                    {/* <input
                      value={formik.values.ContactNo}
                      onChange={formik.handleChange("ContactNo")}
                      onBlur={formik.handleBlur("ContactNo")}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                      type="number"
                      placeholder="Contact No"
                    />{" "}
                    <div className="text-red-400 mb-2">
                      {formik.touched.ContactNo && formik.errors.ContactNo}
                    </div> */}
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold btnSumbit bg-slate-200 text-stone-600 w-full py-4 rounded-lg hover:bg-slate-400 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none shadow-lg"
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign Up</span>
                    </button>
                  </form>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by
                    <Link
                      to="https://www.termsandcondiitionssample.com/live.php?token=RB3m6eqZvXmSK9KyeB0ovYOHcvZMhycl"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </Link>
                    and its
                    <Link
                      to="https://www.theloremipsumco.com/privacy-policy/"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-200 text-center hidden lg:flex dark:bg-gray-700">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center  bg-no-repeat">
              <img src="img/test.jpg" className="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
