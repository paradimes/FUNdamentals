/* eslint-disable react/prop-types */
import React from "react";
import FeatureList from "../components/FeatureList";
import Navbar from "../components/Navbar";
import PricingCards from "../components/PricingCards";
import Footer from "../components/Footer";

function LandingPage({ isAuthenticated }) {
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      <FeatureList />
      <PricingCards />
      <Footer />
    </div>
  );
}

export default LandingPage;
