import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIndicator from "./components/LoadingIndicator";
import LandingPage from "./pages/LandingPage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("user", user);
  console.log("isAuthenticated", isAuthenticated);

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ children }) => {
    if (isLoading) {
      return <LoadingIndicator />;
    }

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
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="welcome" element={<LandingPage />} />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
