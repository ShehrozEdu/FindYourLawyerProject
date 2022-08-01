  import React from "react";


export default function BgImg() {
  return (
    <>
      <div className="w-full p-4 bg-img1 ">
        <main
          role="main"
          className="w-full flex flex-col h-screen content-center justify-center"
        >
          <div className="w-full sm:w-1/2 lg:w-1/2 rounded-xl m-auto ">
            <div className="rounded px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
              <div className="sm:flex sm:items-start border">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                  <h3
                    className=" lg:text-4xl md:text-2xl sm:text-2xl mb-5 text textP leading-6 font-bold text-white mt-2"
                    id="modal-title"
                  >
                    "Find Your Lawyer"
                  </h3>
                  <div className="mt-2">
                    <q className="leading-relaxed p-5 font-medium text-2xl text-white textP">
                      Get the best consultation advice for your problems at just
                      a minimal cost,
                      <br />
                      <strong className="">Anywhere from the globe! </strong>
                      <br />
                      <br />
                      We provide the best solutions to your legal problems.
                    </q>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
