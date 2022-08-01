import React from "react";
// import Testimonial1 from "../img/elon.jpg";
// import Testimonial2 from "../img/ratan.jpg";
// import Testimonial3 from "../img/amazon.jpg";
export default function Testimonials() {
  return (
    <>
      <section className="text-gray-600 body-font color5">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold title-font mb-4 text-slate-600 underline decoration-indigo-300 text">
              Testimonials
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Best Ratings!
            </p>
          </div>
          <div className="flex flex-wrap -m-4  ">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 bg-gray-100">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-16 h-20 mb-8  object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="img/elon.jpg"
                />
                <p className="leading-relaxed text-stone-600">
                  "Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware."
                </p>

                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Elon Musk
                </h2>
                <p className="text-gray-900">CEO, SpaceX and Tesla</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 ">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-16 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="img/ratan.jpg"
                />
                <p className="leading-relaxed text-stone-600">
                  "Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Ratan Tata
                </h2>
                <p className="text-gray-900">Chairman, TATA Pvt Ltd</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-16 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="img/amazon.jpg"
                />
                <p className="leading-relaxed text-stone-600">
                  "Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Andy Jazzy
                </h2>
                <p className="text-gray-900">CEO, Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
