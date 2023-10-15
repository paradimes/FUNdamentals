/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Construction from "../assets/Construction.svg";
import SavedItems from "../components/SavedItems";

function MyAccount({ isAuthenticated, user }) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow">
        <SavedItems userEmail={user.email} />
      </div>
      <Footer />
    </div>
  );
}

export default MyAccount;
