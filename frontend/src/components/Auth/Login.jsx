import React, { useMemo, useReducer, useState } from "react";
import { redirect } from "react-router-dom";
import { Email } from "@mui/icons-material";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import axiosClient from "../Api/axioClient";

// Define a reducer function that takes in the current state and an action to perform on it
const reducer = (login, action) => {
    switch (action.type) {
        // If the action type is 'email', return a new 'login' object with updated email field
        case "email":
            return { ...login, email: action.email };
        // If the action type is 'password', return a new 'login' object with updated password field
        case "password":
            return { ...login, password: action.password };
        // If the action type does not match any cases, return the current 'login' object
        default:
            return login;
    }
};

const Login = () => {
    // Define initial state for the 'login' object, with empty email and password fields
    const [login, setLogin] = useReducer(reducer, { email: "", password: "" });

    // Set up state for toggling password visibility
    const [checkPass, setCheckPass] = useState(true);

    // This code is using the `useMemo` hook from React to memoize the function and avoid unnecessary re-renders.

    const formData = new FormData(); // Create a new instance of the FormData object.

    useMemo(() => {
        // Axios client is used to make HTTP requests to the server.
        // Here we are making a GET request to the `/user` endpoint.
        axiosClient
            .get("/user")
            .then((_) => redirect("/")) // If the request is successful, redirect the user to the home page.
            .catch((err) => err); // If there's an error, just return the error object.
    }, [localStorage.getItem("token")]); // This memoized function depends on the value of `localStorage.getItem("token")`. If the token changes, the function will be re-evaluated.

    const singIn = (e) => {
        e.preventDefault();

        // Add email and password to the FormData object.
        formData.append("email", login.email);
        formData.append("password", login.password);

        return axiosClient
            .post("/login", formData) // Make a POST request to the `/login` endpoint with the FormData object as the payload.
            .then((_) => redirect("/")) // If the request is successful, redirect the user to the home page.
            .catch((error) => error); // If there's an error, just return the error object.
    };

    return (
        <div className="w-full my-3">
            <form
                action=""
                method="post"
                className="w-1/2 mx-auto"
                onSubmit={singIn}
            >
                {/* Login header */}
                <h1 className="text-2xl text-center text-blue-600 dark:text-blue-500 my-2">
                    Login
                </h1>
                {/* Email input label */}
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your Email
                </label>
                {/* Email input field */}
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {/* Email icon */}
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns={<Email />}
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </div>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com"
                        value={login.email}
                        onChange={(e) =>
                            setLogin({ type: "email", email: e.target.value })
                        }
                        required
                    />
                </div>
                {/* Password input label */}
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password
                </label>
                {/* Password input field */}
                <div className="flex relative">
                    {/* Password icon */}
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <KeyRoundedIcon fontSize="small" />
                    </span>
                    <input
                        type={!checkPass ? "text" : "password"} // Toggle password visibility
                        id="password"
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="*****"
                        value={login.password}
                        onChange={(e) =>
                            setLogin({
                                type: "password",
                                password: e.target.value,
                            })
                        }
                        required
                    />
                    {/* Password visibility toggle button */}
                    <span
                        onClick={() => setCheckPass(!checkPass)}
                        className="absolute text-sm right-0 top-0 translate-y-2.5 -translate-x-2 cursor-pointer opacity-70"
                    >
                        {!checkPass ? (
                            <VisibilityOffRoundedIcon fontSize="small" />
                        ) : (
                            <RemoveRedEyeRoundedIcon fontSize="small" />
                        )}
                    </span>
                </div>
                <div className="mt-3 flex justify-center w-full">
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
