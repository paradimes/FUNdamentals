/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableOfContents2 from "../components/TableOfContents2";
import { useLocation } from "react-router-dom";

export default function SavedItemDetailed({ isAuthenticated }) {
  let { state } = useLocation();
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      {/* <div className="flex-grow">hello</div> */}

      <div
        className="flex-grow p-12 min-h-fit flex flex-col items-center
            rounded-xl w-full gap-10 
          bg-indigo-500 dark:bg-indigo-600 text-black dark:text-white"
      >
        <h1
          className=" text-3xl font-bold bg-indigo-600 text-white dark:bg-indigo-800 px-8 py-2 rounded-xl flex text-center w-fit items-center justify-center
            dark:hover:bg-indigo-400 hover:bg-indigo-300
            "
        >
          Table of Contents:{" " + state.topic}
        </h1>
        {state.resources.map((section) => (
          <TableOfContents2 key={section.number} section={section} />
        ))}{" "}
      </div>
      <Footer />
    </div>
  );
}
