import axios from "axios";
import React, { useState, useEffect } from "react";
import LawyersListBox from "./LawyerListBox";

export default function LawyersList() {
  let [lawyersList, setLawyersList] = useState([]);

  let getLawyersList = async () => {
    let URL = "http://localhost:5000/api/lawyersList";
    let response = await axios.get(URL);
    let { status, LawyersList } = response.data;
    // console.log(status);
    // console.log(Practice);
    try {
      if (status) {
        setLawyersList([...LawyersList]);
      } else {
        alert("Cannot fetch Lawyers, please Refresh");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getLawyersList();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {lawyersList.map((list) => {
              return <LawyersListBox list={list} key={list._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
