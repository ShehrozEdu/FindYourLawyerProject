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
      <div className="container px-5 py-17 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className=" text-3xl lg:text-5xl font-bold underline title-font mb-2 text-slate-600 Crimson lg:ml-2 ml-8">
              Our Other Services
              <i class="bx bxs-book-content ms-3 d-flex align-middle"></i>
            </h1>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 Crimson font-medium  lg:ml-0 ml-6">
            Along with our lawyers booking, we offer student friendly
            environment where one can get books related to law, IPCs & CRPCs and
            Read Blogs by our working professionals
          </p>
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
