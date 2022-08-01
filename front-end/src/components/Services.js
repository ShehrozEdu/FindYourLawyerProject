import React from "react";
// import flag from "../img/IndianLaw.jpg";
// import blog from "../img/blog.jpg";
// import books from "../img/books.jpg";
import { Link } from "react-router-dom";
import SetDarkMode from "../hooks/setDarkMode";
export default function Services() {
  return (
    <section className="text-gray-600 body-font color2 " id="services">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" text-3xl lg:text-5xl font-bold title-font mb-4 text-slate-600 underline decoration-indigo-300 text">
            Our Other Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We Offer</p>
        </div>
        <div className="flex flex-wrap -m-4 ">
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <a href="#">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/img/IndianLaw.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-300  opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-stone-800 mb-1 underline decoration-pink-600">
                    INDIAN LAW
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                    IPC and CRPC
                  </h1>
                  <p className="leading-relaxed">
                    Read about the latest updates in the legal field and
                    downloadable IPC and CRC
                  </p>
                </div>
              </div>{" "}
            </a>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link to="/blogs">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="img/blog.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-300  opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-stone-800 mb-1 underline decoration-pink-600">
                    BLOGS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                    Explore
                  </h1>
                  <p className="leading-relaxed">
                    Read the blogs by our working Professionals dedicated
                    specifically to recent updates{" "}
                  </p>
                </div>
              </div>{" "}
            </Link>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Link to="/books">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="img/books.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-stone-800 mb-1 underline decoration-pink-600">
                    STUDENTS CORNER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                    Free Books and more
                  </h1>
                  <p className="leading-relaxed">
                    Get access to the free knowledge and keep yourself updated
                    with current happenings!
                  </p>
                </div>
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
