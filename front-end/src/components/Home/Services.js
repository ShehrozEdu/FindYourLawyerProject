import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceBox from "./Servicebox";
export default function Services() {
  let [ser, setSer] = useState([]);

  let servicesData = async () => {
    let URL = "http://localhost:5000/api/services";

    try {
      let response = await axios.get(URL);
      let { status, Services } = response.data;
      // console.log(Services);
      if (status) {
        setSer([...Services]);
      } else {
        alert("Unknown Service detected");
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    servicesData();
  }, []);
  return (
    <section className="text-gray-600 body-font color2 " id="services">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" text-3xl lg:text-5xl font-bold title-font mb-4 text-slate-600 underline decoration-indigo-300 text">
            Our Other Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We Offer</p>
        </div>
        <section className="text-gray-600 body-font">
          {ser.map((service) => {
            return <ServiceBox service={service} key={service._id} />;
          })}
        </section>
      </div>
    </section>
  );
}
