import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingsBox from "./BookingsBox";

export default function Bookings() {
  let [booking, setBooking] = useState([]);

  let BookingsData = async () => {
    let URL = "http://localhost:5000/api/practices";
    let response = await axios.get(URL);
    let { status, Practice } = response.data;
    console.log(status);
    console.log(Practice);
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

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600 underline decoration-indigo-300 text">
              Book according to the need!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text">
              We Promise you the best and at cheaper price!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {booking.map((book) => {
              return <BookingsBox book={book} key={book._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
