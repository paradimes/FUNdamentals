/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopicSearch from "../components/TopicSearch";

export default function Search({ isAuthenticated }) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 ">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow bg-white dark:bg-gray-900 ">
        <TopicSearch />
      </div>
      <Footer />
    </div>
  );
}
