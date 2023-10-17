import { useAuth0 } from "@auth0/auth0-react";

// eslint-disable-next-line react/prop-types
const LoginButtonAuth0 = ({ paddingY }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={`text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 ${paddingY} text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButtonAuth0;
