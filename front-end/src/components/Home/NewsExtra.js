import React from "react";

export default function NewsExtra() {
  return (
    <>
      <section className="px-5  dark:bg-gray-800 dark:text-gray-100 mb-32 ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl lg:text-5xl font-bold title-font mb-4  text-slate-600 underline  Crimson">
            <i class="bx bx-news d-flex align-middle mr-3 "></i>Latest News
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
            Grab the top trending Legal News
          </p>
        </div>
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
            <div className="flex flex-col space-y-8 md:space-y-12">
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Exclusive
                  </span>
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="https://www.sentinelassam.com/national-news/nitish-kumar-allies-question-liquor-ban-rjd-targets-bjp-for-weakening-jdu-605251"
                  className="font-serif hover:underline"
                >
                  Nitish Kumar allies question liquor ban, RJD targets BJP for
                  weakening JD(U)
                </a>
                <p className="text-xs dark:text-gray-400">
                  47 minutes ago by
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline dark:text-violet-400"
                  >
                    &nbsp; Rahul Sharma
                  </a>
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Exclusive
                  </span>
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="https://www.thehindu.com/news/international/cardinal-ranjith-says-perpetrators-of-2019-easter-sunday-attacks-still-engaged-in-politics-employed-with-sri-lanka-police-forces/article65710056.ece"
                  className="font-serif hover:underline"
                >
                  Perpetrators of 2019 Easter Sunday attacks still engaged in
                  politics, employed with Sri Lanka&#039;s police force
                </a>
                <p className="text-xs dark:text-gray-400">
                  2 hours ago by
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline dark:text-violet-400"
                  >
                    &nbsp; Leroy Jenkins
                  </a>
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Exclusive
                  </span>
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="https://www.sentinelassam.com/national-news/trinamool-workers-worried-after-mamata-dumped-partha-says-bjp-605255"
                  className="font-serif hover:underline"
                >
                  'Trinamool workers worried after Mamata dumped Partha' Says
                  BJP
                </a>
                <p className="text-xs dark:text-gray-400">
                  4 hours ago by
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline dark:text-violet-400"
                  >
                    &nbsp; Sriraman Balla
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
                <div className="w-1/2 h-full dark:bg-violet-400"></div>
              </div>
              <a
                rel="noopener noreferrer"
                href="https://www.feedspot.com/infiniterss.php?_src=feed_title&followfeedid=5130745&q=site:https%3A%2F%2Fwww.legalbites.in%2Ffeed%2F"
                className="flex items-center justify-between w-full"
              >
                <span className="text-xs font-bold tracking-wider uppercase">
                  See more exclusives
                </span>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 strokeCurrent dark:text-violet-400"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative flex col-span-12 bg-center newsBack bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">
              Law, Legal
            </span>
            <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
              <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
                <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
                  <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
                </span>
                <span className="text-sm font-bold">Live</span>
              </span>
              <h1
                rel="noopener noreferrer"
                href="#"
                className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100"
              >
                Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec
                venenatis?
              </h1>
            </a>
          </div>
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400"
              >
                Latest
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-700">
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/244x324"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Aenean ac tristique lorem, ut mollis dui.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    5 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      Politics
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/245x325"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Nulla consectetur efficitur.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    14 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      Sports
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/246x326"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Vitae semper augue purus tincidunt libero.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    22 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      World
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/247x327"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Suspendisse potenti.
                  </a>
                  <p className="mt-auto text-xs dark:text-gray-400">
                    37 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                    >
                      Business
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
