/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logos from "../components/Logos";
import HomePageHero from "../components/HomePageHero";
import Person3 from "../assets/Person3.svg";
import Person4 from "../assets/Person4.svg";
import Person5 from "../assets/Person5.svg";

function LandingPage({ isAuthenticated }) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="flex-grow bg-white dark:bg-gray-900">
        <HomePageHero />
        <Logos />
        <div className="flex py-5 items-center justify-center bg-white dark:bg-gray-900 w-full overflow-hidden">
          <img className="w-32 sm:w-48" src={Person3} />
          <img className="w-32 sm:w-48" src={Person5} />
          <img className="w-32 sm:w-48" src={Person4} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
