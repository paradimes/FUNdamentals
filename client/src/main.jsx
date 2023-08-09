import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-turylcy4n5nqgkyp.us.auth0.com"
    clientId="iMu38THayXxSgNIX1qmloha9c6at7cj7"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/welcome",
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
