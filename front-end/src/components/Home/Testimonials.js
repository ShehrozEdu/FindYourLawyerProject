import React from "react";
import { useState, useEffect } from "react";
import TestimonialBox from "./TestimonialBox";
import axios from "axios";
export default function Testimonials() {
  let [testimonial, setTestimonial] = useState([]);

  let TestimonialData = async () => {
    let URL = "http://localhost:5000/api/testimonials";
    let response = await axios.get(URL);
    let { status, Testimonials } = response.data;
    // console.log(status);
    try {
      if (status) {
        setTestimonial([...Testimonials]);
      } else {
        alert("No Testimonial received");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    TestimonialData();
  }, []);
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
            {testimonial.map((test) => {
              return <TestimonialBox test={test} key={test._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
