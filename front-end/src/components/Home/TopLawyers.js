import React from "react";

export default function TopLawyers() {
  return (
    <>
      <section className="text-gray-600 body-font dark:bg-gray-800 ">
        <div className="container px-4 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className=" text-3xl lg:text-5xl font-bold underline title-font mb-2 text-amber-800 Crimson ">
                Our Top Lawyers
                <i class="bx bxs-to-top d-flex align-middle"></i>
              </h1>
            </div>
            <p className="lg:w-1/2 w-full text-slate-700 leading-relaxed dark:text-white Crimson">
              In India, the legal profession is not only known for attractive
              packages but it is known for legal reformations for the people of
              India. Whether making amendments for fast-track court trials for
              special cases, fighting for the rights of minority communities,
              or, crucial discussions in the passing of bills and acts, the
              contributions cannot be overlooked
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 ">
              <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-400">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/img/TopLawyer1.jpeg"
                  alt="content"
                />

                <h2 className="text-lg text-gray-900 font-bold Crimson title-font mb-4">
                  Soli Sorabjee
                </h2>
                <p className="leading-relaxed text-base">
                  Some important cases fought by him include - Maneka Gandhi,
                  Keshavananda Bharati, IR Coelho, SR Bommai, BP Singhal, etc.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-400">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/img/TopLawyer2.jpeg"
                  alt="content"
                />

                <h2 className="text-lg text-gray-900 font-bold Crimson title-font mb-4">
                  Fali Sam Nariman
                </h2>
                <p className="leading-relaxed text-base">
                  High-profile cases fought by him include the infamous Bhopal
                  gas tragedy, Golak Nath, SP Gupta, TMA Pai Foundation, and the
                  likes.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-400">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-4"
                  src="/img/TopLawyer3.jpeg"
                  alt="content"
                />

                <h2 className="text-lg text-gray-900 font-bold Crimson title-font mb-2">
                  Ram Jethmalani
                </h2>
                <p className="leading-relaxed text-base">
                  Famous cases - KM Nanavati vs. State of Maharashtra, Jessica
                  Lall murder, defended Rajiv Gandhi and Indira Gandhi’s
                  killers, underworld don Haji Mastan’s etc
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-400">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="img/topLawyer4.jpeg"
                  alt="content"
                />

                <h2 className="text-lg text-gray-900 font-bold Crimson title-font mb-4">
                  Mukul Rohtagi
                </h2>
                <p className="leading-relaxed text-base">
                  Famous cases fought by him include Y K Sabharwal property
                  suit, Jharkhand Assembly floor test , 2002 Gujarat Riots,
                  Ambani brothers’ gas supply , etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}
