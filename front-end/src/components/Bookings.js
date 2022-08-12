import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BookingsBox from "./BookingsBox";

export default function Bookings() {
  let [booking, setBooking] = useState([]);
  let [sort, setSort] = useState("");
  // let PracticeRef = useRef();

  let BookingsData = async () => {
    let URL = "http://localhost:5000/api/practices";
    let response = await axios.get(URL);
    let { status, Practice } = response.data;
    // console.log(status);
    // console.log(Practice);
    try {
      if (status) {
        setBooking([...Practice]);
      } else {
        alert("Please Enter Valid Choice");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    BookingsData();
  }, []);

  // let getPracticeSort = async (event) => {
  //   let title = event.target.value;
  //   let url = "http://localhost:5000/api/getpracticebytitle?title=" + title;

  //   try {
  //     let response = await axios.get(url);

  //     let { title } = response.data;
  //     console.log(response.data);
  //     setSort({ ...title });

  //   } catch (error) {
  //     alert(error);
  //     // console.log(error);
  //   }
  // };
  // let test = (sort) => {
  //   sort = JSON.parse(sort);
  //   PracticeRef.current.value = `${sort.title}`;
  //   setSort({ ...sort });
  //   // setResDisable(false);
  //   setSort([]);
  // };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-600 underline Crimson">
              Book according to the need!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text">
              We Promise you the best and at cheaper price!
            </p>
          </div>
          {/* <!-- SearchComponent --> */}
          <div className="max-w-md mx-auto my-7 ">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-200 overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm bg-slate-200 text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search by practice"
                // ref={PracticeRef}
                onChange={(event) => {
                  setSort(event.target.value);
                }}
              />
            </div>
          </div>

          {/* //Mapping */}
          <div className="flex flex-wrap -m-4">
            {booking
              .filter((book) => {
                if (sort === "") {
                  return book;
                } else if (
                  book.title.toLowerCase().includes(sort.toLowerCase())
                ) {
                  return book;
                }
              })
              .map((book) => {
                return <BookingsBox book={book} key={book._id} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}
