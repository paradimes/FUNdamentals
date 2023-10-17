/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopicSearchV2 from "../components/TopicSearchV2";

export default function SearchV2({ isAuthenticated, user = {} }) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 ">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow bg-white dark:bg-gray-900 ">
        <TopicSearchV2 isAuthenticated={isAuthenticated} user={user} />
      </div>
      <Footer />
    </div>
  );
}
