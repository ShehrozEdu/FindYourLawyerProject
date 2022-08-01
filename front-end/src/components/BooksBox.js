import React from "react";

export default function BooksBox(props) {
  let { books } = props;
  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"></div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Shooting Stars
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waist co, subway tile poke
            farm.
          </p>
        </div>
      </div>
    </>
  );
}
