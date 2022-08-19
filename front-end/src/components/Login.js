import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
//Slice

import { loginUserAction } from "../redux/slices/userSlice";
import Footer from "./Home/Footer";

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
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    onSubmit: (values) => {
      //dispatch the action

      // dispatch(loginUserAction(values));

      console.log(values);
    },
    validationSchema: formSchema,
  });

  //Navigate

  // const store = useSelector((state) => state?.users);
  // const { userAuth, loading, serverErr, appErr } = store;
  // if (userAuth) return <Navigate to="/bookings" />;
  let [userLogin, setUserLogin] = useState(null);
  let onSuccess = (response) => {
    localStorage.setItem("auth_token", response.credential); //can be like token= response.cred..
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Successful!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => window.location.reload());
  };

  let onError = () => {
    alert("Login Failed");
  };

  let logout = () => {
    localStorage.removeItem("auth_token");
    window.location.reload();
  };
  useEffect(() => {
    let token = localStorage.getItem("auth_token");
    if (token) {
      let decoded = jwt_decode(token);
      setUserLogin(decoded);
    } else {
      setUserLogin(null);
    }
  }, []);
  return (
   
      <GoogleOAuthProvider clientId="263148022359-f2gtatcn7s3afukeqjf877ooee8rmgjg.apps.googleusercontent.com">
      <div className="lg:flex dark:bg-gray-800">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12 dark:bg-gray-800"></div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl ">
            <h1
              className="text-center text-4xl text-amber-600 font-display font-semibold  xl:text-5xl
                    xl:text-bold underline Crimson "
            >
              Sign in
            </h1>

            {/* display err */}
            {/* 
            {serverErr || appErr ? (
              <h2 className="text-red-500">
                {serverErr} - {appErr}
              </h2>
            ) : null} */}
            <div className="flex flex-col items-center mt-8">
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
            <div className="my-12 border-b text-center">
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
                  </div>
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
                    {formik.touched.Password && formik.errors.Password}
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
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 dark:bg-gray-800 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat ">
            <img src="img/login-img.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
      </GoogleOAuthProvider>
    </>
  );
};

export default Login;
