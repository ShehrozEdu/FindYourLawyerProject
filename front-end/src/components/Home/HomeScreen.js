import React from "react";
// import NavBar from "../components/Navbar";
import BgImg from "./BgImg";
import TrustedPartners from "./TrustedPartners";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import TopLawyers from "./TopLawyers";
import NewsFeed from "./NewsFeed";

function HomeScreen() {
  return (
    <>
      <BgImg />
      <TopLawyers />
      <NewsFeed />
      <Services />
      <TrustedPartners />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default HomeScreen;
