import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import logo from "../../../img/logo.png";
import { logoutAction } from "../../../redux/slices/userSlice";

export default function LawyerNavBar() {
  const [navbar, setNavbar] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <nav className="w-full bg-white dark:bg-gray-600 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <img src="img/logo.png" className="logo" alt="" />
              </Link>
              <h2 className="ml-3 text-xl text-black dark:">
                Find Your Lawyer
              </h2>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-700 dark:text-white  font-bold hover:text-indigo-600 dark:hover:text-yellow-300 ">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-700 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-yellow-300 ">
                  <Link to="/mybookings">My Bookings</Link>
                </li>
                <li className="text-gray-700 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-yellow-300 ">
                  <Link to="/blogs">Blogs</Link>
                </li>

                <li
                  onClick={() => dispatch(logoutAction())}
                  className="text-gray-700 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-yellow-300 "
                >
                  <Link to="/">Logout</Link>
                </li>
                <label
                  htmlFor="default-toggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className=" sr-only peer"
                  />
                  <div className=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Dark Mode
                  </span>
                </label>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
