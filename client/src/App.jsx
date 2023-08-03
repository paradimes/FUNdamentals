import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIndicator from "./components/LoadingIndicator";
import LandingPage from "./pages/LandingPage";
import AllCourses from "./pages/AllCourses";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("user", user);
  console.log("isAuthenticated", isAuthenticated);
  // console.log("isLoading", isLoading);

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
          <Route
            index
            element={
              <ProtectedRoute>
                <Home isAuthenticated={isAuthenticated} user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="welcome"
            element={<LandingPage isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="courses"
            element={<AllCourses isAuthenticated={isAuthenticated} />}
          />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
