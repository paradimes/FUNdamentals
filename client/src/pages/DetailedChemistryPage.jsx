/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseTOC from "../components/CourseTOC";
import courseInfo from "../courseInfo.json";
import CourseCardDetailed from "../components/CourseCardDetailed";
import ChemistryCourse from "../assets/ChemistryCourse.svg";

const title = courseInfo["chemistryKhanAcademy"].title;
const description = courseInfo["chemistryKhanAcademy"].description;
const tableOfContents = courseInfo["chemistryKhanAcademy"].tableOfContents;

export default function DetailedChemistryPage({ isAuthenticated }) {
  return (
    <section className=" flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow items-center justify-center flex flex-col bg-white dark:bg-gray-900">
        <CourseCardDetailed
          courseImg={ChemistryCourse}
          heading={"Khan Academy"}
          title={title}
          description={description}
          link={"https://www.khanacademy.org/science/chemistry/"}
        />
        <CourseTOC tableOfContents={tableOfContents} />
      </div>
      <Footer />
    </section>
  );
}
