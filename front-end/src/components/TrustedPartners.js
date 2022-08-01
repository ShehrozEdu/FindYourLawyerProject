import React from "react";
// import tata from "../img/tata.png";
// import amazon from "../img/amazon.png";
// import tesla from "../img/tesla.png";
// import icici from "../img/icici.png";
export default function TrustedPartners() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold underline decoration-indigo-300 title-font mb-4 text-slate-600 text">
              Our Partners
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div
              className="p-4 lg:w-1/4 md:w-1/2 .
            02`"
            >
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-50 h-56 object-cover object-center mb-4 mt-10 "
                  src="img/tata.png"
                />
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-50 h-56 object-cover object-center mb-4 mt-10 lg:ml-0 ml-14"
                  src="img/amazon.png"
                />
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-50 object-cover object-center mb-4"
                  src="img/tesla.png"
                />
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-47  object-cover object-center mb-4 ml-2 mr-3 icici"
                  src="img/icici.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
