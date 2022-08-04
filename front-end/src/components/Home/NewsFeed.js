import React from "react";
import NewsBox from "./NewsBox";

export default function NewsFeed() {
  return (
    <>
      <section className="text-gray-600 body-font color2 ">
        <div class="container px-5 py-17 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold title-font mb-4 text-slate-600 underline  Crimson">
              Latest News
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Grab the top trending Legal News
            </p>
          </div>
          <NewsBox />
        </div>
      </section>
    </>
  );
}
