/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseList from "../components/CourseList";

export default function AllCourses({ isAuthenticated }) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow">
        <CourseList />
      </div>
      <Footer />
    </div>
  );
}
