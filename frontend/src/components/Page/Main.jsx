import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../Api/axioClient";

const Main = ({ setSubscribelog }) => {
    // Define state variables for error and email
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    // Use the useMemo hook to perform a GET request when the token in local storage changes
    useMemo(() => {
        // Use the axiosClient instance to perform a GET request to the /user endpoint
        axiosClient
            .get("/user")
            .then((res) => res)
            .catch((err) => setError(err.message));
    }, [localStorage.getItem("token")]);

    // Create a new FormData object for the email subscription form data
    const formData = new FormData();

    // Define a function to handle the email subscription form submission
    const subscribe = (e) => {
        e.preventDefault();
        // Append the email to the FormData object
        formData.append("email", email);
        // Use the axiosClient instance to perform a POST request to the /subscribe endpoint with the form data
        axiosClient
            .post("/subscribe", formData)
            .then((res) => setSubscribelog(res.data.message))
            .catch((err) => setSubscribelog(err.message));
    };
    return (
        <div className="w-full relative md:mt-auto">
            {/** Conditional rendering based on error state */}
            {error === "Request failed with status code 401" ? (
                <div className="bg-indigo-300 w-full p-2 flex justify-center items-center gap-x-2 mb-auto">
                    <span className="text-gray-700">
                        Welcome to our website! Sign up now to get access to
                        exclusive content.
                    </span>
                    <Link to="/register">
                        <button className="bg-white p-2 rounded-lg focus:ring-4 dark:focus:ring-teal-700 transition-all truncate max-lg:px-4">
                            Sing Up
                        </button>
                    </Link>
                </div>
            ) : null}

            <div className="flex justify-around mx-auto items-center mt-1 max-lg:justify-center max-lg:mt-10">
                <div className="ml-auto -translate-x-10 max-lg:-translate-x-0 max-lg:m-0">
                    <form
                        action=""
                        method="post"
                        className="flex justify-center flex-col gap-y-2"
                        onSubmit={subscribe}
                    >
                        <h1 className="text-gray-600 text-3xl">
                            Join Our Community
                        </h1>
                        <p className="text-gray-500 text-xl">
                            Stay Updated with Us
                        </p>
                        <div className="flex justify-center gap-x-1 max-lg:flex-col max-lg:gap-y-1">
                            {/** Input field to capture email */}
                            <input
                                type="email"
                                placeholder="mail@gmail.com"
                                className="focus:ring-1 dark:focus:ring-indigo-400 placeholder:text-sm placeholder:text-opacity-60"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {/** Button to submit email subscription */}
                            <button
                                className="bg-indigo-500 px-2 text-white text-sm max-lg:py-2"
                                type="submit"
                            >
                                subscribe
                            </button>
                        </div>
                    </form>
                </div>
                {/** Image preview */}
                <div className="bg-[url('/image/preview.png')] bg-no-repeat bg-cover bg-center w-1/2 ml-auto translate-x-60 h-600 max-lg:hidden"></div>
            </div>
        </div>
    );
};

export default Main;
