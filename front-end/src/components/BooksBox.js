import React from "react";

export default function BooksBox(props) {
  let { books } = props;
  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h1 className="text-2xl text-gray-900 font-medium title-font mb-2">
            {books.title}
          </h1>
          <p className="leading-relaxed text-base">{books.author}</p>
        </div>
      </div>
    </>
  );
}
