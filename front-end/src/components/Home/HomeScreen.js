import React from "react";
// import NavBar from "../components/Navbar";
import BgImg from "./BgImg";
import TrustedPartners from "./TrustedPartners";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function HomeScreen() {
  return (
    <>
      <BgImg />
      <Services />
      <TrustedPartners />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default HomeScreen;
