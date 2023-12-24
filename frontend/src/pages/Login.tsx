import React from "react";
import Header from "../components/reuseable/Header";
import Dashboard from "../components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  messageCleanUp,
  registerUser,
} from "../redux-store/auth/auth.slice";
import { selectAuthMessage } from "../redux-store/auth/auth.seletor";
import { AppDispatch } from "../redux-store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const disptach = useDispatch<AppDispatch>();
  const message = useSelector(selectAuthMessage);
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = React.useState({
    email: "",
    password: "",
  });

  // handleChange function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // handleSubmit function
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    disptach(messageCleanUp());
    disptach(loginUser(userCredentials));
  };

  React.useEffect(() => {
    if (message === "Login successfully") {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (message === "Email and password are required") {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (message === "User not found") {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (message === "Wrong password") {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (message === "Internal server error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else {
      return;
    }
  }, [message]);

  React.useEffect(() => {
    return () => {
      disptach(messageCleanUp());
    };
  }, []);

  return (
    <Dashboard>
      <Header />
      <div className="md:h-[87vh] h-[100vh] flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-[10px]">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default Login;
