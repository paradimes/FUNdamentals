import React from "react";
import "./index.css";
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

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingIndicator />;
  }

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
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
