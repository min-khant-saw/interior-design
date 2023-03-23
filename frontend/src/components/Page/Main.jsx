// This is a React functional component named Main.
// It renders a subscription form and an image preview based on the state of the Redux store.
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

const Main = () => {
    // Define state variables for error and email
    const selector = useSelector((state) => state);
    return (
        <div className="w-full relative md:mt-auto">
            {/* Conditional rendering based on error state */}
            {selector.validUser === "Request failed with status code 401" ? (
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
                    {/* Render Subscribe component with custom font sizes */}
                    <Subscribe fz_1="text-3xl" fz_2="text-xl" />
                </div>
                {/* Render image preview */}
                <div className="bg-[url('/image/preview.png')] bg-no-repeat bg-cover bg-center w-1/2 ml-auto translate-x-60 h-600 max-lg:hidden"></div>
            </div>
        </div>
    );
};

export default Main;
