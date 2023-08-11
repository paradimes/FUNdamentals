import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const currentBaseUrl = window.location.origin;
  const dynamicRedirectUri = `${currentBaseUrl}/welcome`;

  return (
    <button
      className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() => logout({ logoutParams: { returnTo: dynamicRedirectUri } })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
