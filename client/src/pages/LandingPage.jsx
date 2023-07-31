import React from "react";
import FeatureList from "../components/FeatureList";
import Navbar from "../components/Navbar";
import PricingCards from "../components/PricingCards";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <FeatureList />
      <PricingCards />
      <Footer />
    </div>
  );
}

export default LandingPage;
