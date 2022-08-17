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
import NewsExtra from "./NewsExtra";

function HomeScreen() {
  return (
    <>
      <BgImg />
      <TopLawyers />
      {/* <NewsFeed /> */}
      <NewsExtra />
      <Services />
      <TrustedPartners />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default HomeScreen;
