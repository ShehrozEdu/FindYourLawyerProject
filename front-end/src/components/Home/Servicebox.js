import React from "react";
import { Link } from "react-router-dom";
export default function ServiceBox(props) {
  let { service } = props;
  return (
    <>
      <div className="container flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-16">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={service.image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-2 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-rose-900 hex">
            {service.title}
          </h1>
          <p className="mb-8 text-stone-600 text-2xl leading-relaxed Crimson">
            {service.description}
          </p>
        </div>
      </div>

      {/* <div className="lg:w-1/3 sm:w-1/2 p-4 ">
        <Link to="#">
          <div className="flex relative">
            <img
              alt="Services"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={service.image}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-slate-300  opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-stone-800 mb-1 underline decoration-pink-600">
                {service.title}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                {service.subtitle}
              </h1>
              <p className="leading-relaxed">{service.description}</p>
            </div>
          </div>{" "}
        </Link>
      </div> */}
    </>
  );
}
