import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ModalPop from "./ModalPop";

export default function PracticeOverview() {
  let [practice, setPractice] = useState([]);
  let [lawyer, setLawyer] = useState([]);
  let [showModal, setShowModal] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  let [subTotal, setSubTotal] = useState(0);
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
  let getLawyerData = async () => {
    let URL = "http://localhost:5000/api/lawyersList/?lid=" + params.id;
    // console.log(params.id);

    try {
      let response = await axios.get(URL);
      let { status, LawyersList } = response.data;
      // console.log(response.data);
      if (status) {
        setLawyer([...LawyersList]);
      } else {
        alert("Sorry,can't find any lawyer for this");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getLawyerData();
    // console.log(getLawyerData);
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-100 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center heightOverview w-full"
                src={practice.image}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-4/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  {practice.title}
                </h2>
                <p className="leading-relaxed text-lg mb-4">
                  {practice.description}
                </p>

                <button
                  className=" text-black bg-pink-300 hover:bg-pink-500  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none flex mx-auto mt-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Book your Lawyer
                </button>
                {/* --------------------------------------------------------------------------------- */}
                {/* <MODAL STARTS> */}
                {/* --------------------------------------------------------------------------------- */}
                {showModal ? (
                  <>
                    <div className="justify-center practices-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/* -------------------- */}
                          {/*header*/}
                          {/* ------------------------------------- */}
                          <div className="flex practices-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              {practice.title}
                            </h3>
                          </div>
                          {/*MODAL body*/}
                          {lawyer.map((adv, index) => {
                            return (
                              <div
                                className="relative p-6 flex-auto"
                                key={index}
                              >
                                <section className="text-gray-600 body-font">
                                  <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
                                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                      <h3 className="title-font sm:text-2xl text-xl mb-2 font-medium text-gray-900">
                                        {adv.name},
                                      </h3>
                                      <span className="mb-2   leading-relaxed">
                                        {adv.state}
                                      </span>
                                      <p className="mb-2   leading-relaxed">
                                        {adv.email}
                                      </p>
                                      <span className="mb-2   leading-relaxed">
                                        Ratings: {adv.ratings}
                                      </span>
                                      <span className="mb-2   leading-relaxed">
                                        Amount: {adv.amount}
                                      </span>

                                      <div className="flex justify-center">
                                        <button className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">
                                          Book
                                        </button>
                                      </div>
                                    </div>
                                    <div className="lg:max-w-lg lg:w-44 md:w-44 w-44 ml-6">
                                      <img
                                        className="object-cover object-center rounded"
                                        alt="hero"
                                        src={"/img/" + adv.image}
                                      />
                                    </div>
                                  </div>
                                </section>
                              </div>
                            );
                          })}
                          {/*footer*/}
                          <div className="flex practices-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
