import React from "react";
// import NavBar from "../components/Navbar";
import BgImg from "../components/BgImg";
import TrustedPartners from "../components/TrustedPartners";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


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
