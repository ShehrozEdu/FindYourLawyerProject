import React from "react";
import { Link } from "react-router-dom";

export default function BookingsBox(props) {
  let { book } = props;
  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4 shadow ">
        <Link to="/bookyourlawyer" className="cursor-pointer">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={book.image}
            />

            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                {book.subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900  mb-3">
                {book.title}
              </h1>
              <p className="leading-relaxed">{book.description}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
