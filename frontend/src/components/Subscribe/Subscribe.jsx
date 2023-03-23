import React, { useState } from "react";
import { Email } from "@mui/icons-material";
import axiosClient from "../Api/axioClient";
import { useDispatch, useSelector } from "react-redux";
import { setSubscribe } from "../Store/SubscribeStore/subscribe";

const Subscribe = ({ fz_1, fz_2 }) => {
    const setSubscribelog = useDispatch();
    const [email, setEmail] = useState("");

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
            .then((res) => setSubscribelog(setSubscribe(res.data.message)))
            .catch((err) => setSubscribelog(setSubscribe(err.message)));
    };
    return (
        <form
            action=""
            method="post"
            className="flex justify-center flex-col gap-y-2"
            onSubmit={subscribe}
        >
            <h1 className={"text-gray-600 " + fz_1}>Join Our Community</h1>
            <p className={"text-gray-500 " + fz_2}>Stay Updated with Us</p>
            <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
                {/** Input field to capture email */}
                <div className="relative">
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="mail@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button
                    className="bg-indigo-500 px-2 text-white text-sm max-lg:py-2 rounded"
                    type="submit"
                >
                    subscribe
                </button>
                {/** Button to submit email subscription */}
            </div>
        </form>
    );
};

export default Subscribe;
