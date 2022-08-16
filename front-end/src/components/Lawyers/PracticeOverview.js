import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PracticeOverview() {
  let [practice, setPractice] = useState([]);
  const params = useParams();
  let getPracticeID = async () => {
    let URL = "http://localhost:5000/api/getpracticebyid/" + params.id;
    try {
      let response = await axios.get(URL);

      let { status, Practice } = response.data;

      // console.log(result);
      if (status === true) {
        setPractice({ ...Practice });
      } else {
        setPractice([]);
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  useEffect(() => {
    getPracticeID();
  }, []);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={practice.image}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-4/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  {practice.title}
                </h2>
                <p class="leading-relaxed text-lg mb-4">
                  {practice.description}
                </p>
                <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded Crimson">
                  Click to book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
