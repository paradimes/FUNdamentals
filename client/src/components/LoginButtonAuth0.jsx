import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

// eslint-disable-next-line react/prop-types
const LoginButtonAuth0 = ({ paddingY }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={`text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 ${paddingY} text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButtonAuth0;
