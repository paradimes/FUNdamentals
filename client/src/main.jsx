import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;
const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const currentBaseUrl = window.location.origin;
const dynamicRedirectUri = `${currentBaseUrl}/welcome`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: dynamicRedirectUri,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
