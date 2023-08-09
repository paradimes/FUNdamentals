/* eslint-disable react/prop-types */
import React from "react";
import FeatureList from "../components/FeatureList";
import Navbar from "../components/Navbar";
import PricingCards from "../components/PricingCards";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

export default function About({ isAuthenticated }) {
  return (
    <div className="bg-white dark:bg-slate-900 ">
      <Navbar isAuthenticated={isAuthenticated} />
      <section className=" flex flex-col items-center justify-center">
        <div className="mx-20 px-32 py-16 rounded-xl dark:bg-slate-800">
          <h1 className="pb-5 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to FUNdamentals
          </h1>
          <p className="font-bold text-lg">
            The aim of this website is to help you build your understanding from
            the ground up. Not everyone learns at the same rate, and if you
            missed even one chain in the link, you may have a gap in your
            understanding.
            <br />
            <br />
            The following quote by Naval Ravikant serves as inspiration:
          </p>
          <Quote />
        </div>
      </section>
      <Footer />
    </div>
  );
}