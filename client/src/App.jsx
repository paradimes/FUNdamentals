import "./index.css";
import "./custom.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIndicator from "./components/LoadingIndicator";
import LandingPage from "./pages/LandingPage";
import AllCourses from "./pages/AllCourses";
import DetailedPhysicsPage from "./pages/DetailedPhysicsPage";
import DetailedMathPage from "./pages/DetailedMathPage";
import DetailedBiologyPage from "./pages/DetailedBiologyPage";
import DetailedChemistryPage from "./pages/DetailedChemistryPage";
import About from "./pages/About";
import MyAccount from "./pages/MyAccount";
import Search from "./pages/Search";
import SearchV2 from "./pages/SearchV2";
import SavedItemDetailed from "./pages/SavedItemDetailed";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to={"/welcome"} />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Navigate to="/welcome" />} />

          <Route
            // index
            path="account"
            element={
              <ProtectedRoute>
                <MyAccount isAuthenticated={isAuthenticated} user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="welcome"
            element={<LandingPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="about"
            element={<About isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="search"
            element={<Search isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="searchv2"
            element={<SearchV2 isAuthenticated={isAuthenticated} user={user} />}
          />
          <Route
            path="courses"
            element={<AllCourses isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="courses/detailed/classical-mechanics"
            element={<DetailedPhysicsPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="courses/detailed/math"
            element={<DetailedMathPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="courses/detailed/bio"
            element={<DetailedBiologyPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="courses/detailed/chem"
            element={
              <DetailedChemistryPage isAuthenticated={isAuthenticated} />
            }
          />
          <Route
            path="saved/detailed"
            element={<SavedItemDetailed isAuthenticated={isAuthenticated} />}
          />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
