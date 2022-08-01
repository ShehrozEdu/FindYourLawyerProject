import React from "react";
import { Link } from "react-router-dom";
export default function ServiceBox(props) {
  let { service } = props;
  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4 ">
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
      </div>
    </>
  );
}
