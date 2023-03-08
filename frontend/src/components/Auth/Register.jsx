import React, { useEffect, useReducer, useState } from "react";
import axiosClient from "../Api/axioClient";

// This is a reducer function that takes in two arguments: a user object and an action object
const reducer = (user, action) => {
    // The switch statement checks the action type and returns a new user object with updated values based on the action
    switch (action.type) {
        // If the action type is "fname", update the user's fName property with the value from the action
        case "fname":
            return { ...user, fName: action.fName };
        // If the action type is "lname", update the user's lName property with the value from the action
        case "lname":
            return { ...user, lName: action.lName };
        // If the action type is "email", update the user's email property with the value from the action
        case "email":
            return { ...user, email: action.email };
        // If the action type is "password", update the user's password property with the value from the action
        case "password":
            return { ...user, password: action.password };
        // If the action type is "password_confirmation", update the user's password_confirmation property with the value from the action
        case "password_confirmation":
            return {
                ...user,
                password_confirmation: action.password_confirmation,
            };
        // If the action type doesn't match any of the cases above, return the original user object
        default:
            return { user };
    }
};

const Register = () => {
    // The useReducer hook is used to manage state and provide a way to update the state based on specific actions
    // In this case, the state is initialized with empty strings for fName, lName, email, password and password_confirmation
    const [user, setUser] = useReducer(reducer, {
        fName: "",
        lName: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // Declare a state variable to hold any errors from form submission
    const [err, setErr] = useState("");

    useEffect(() => {
        axiosClient
            .get("/user")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    });

    // Create a new instance of FormData to store form data
    const formData = new FormData();

    // Define a function to handle form submission
    const singUp = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Add form data to the formData object
        formData.append("name", user.fName + " " + user.lName);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("password_confirmation", user.password_confirmation);

        // Make a POST request to register the user with the server
        axiosClient
            .post("/register", formData)
            .then((res) => localStorage.setItem("token", res.data.token))
            // Catch any errors and set the error state variable
            .catch((error) => setErr(error.message));
    };

    return (
        <div className="flex justify-end">
            {/* Form */}
            <form className="w-1/2 mx-auto my-1" onSubmit={singUp}>
                <h1 className="text-2xl text-center text-blue-600 dark:text-blue-500 my-5">
                    Register
                </h1>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        {/* Label for the input field */}
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            First name
                        </label>
                        {/* Input field for the first name */}
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            value={user.fName}
                            // When the user enters text in the input field, setUser function is called to update the user's first name in the state
                            onChange={(e) =>
                                setUser({
                                    type: "fname",
                                    fName: e.target.value,
                                })
                            }
                            required
                        />
                    </div>

                    <div>
                        {/* Label for the input */}
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Last name
                        </label>
                        {/* Input field for last name */}
                        <input
                            type="text"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Doe"
                            value={user.lName}
                            onChange={(e) =>
                                setUser({
                                    type: "lname",
                                    lName: e.target.value, // set lName to the value of the input field
                                })
                            }
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    {/* Label for email input field */}
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email address
                    </label>
                    {/* Email input field */}
                    <input
                        type="email"
                        id="email"
                        // Add classes based on error status
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ${
                            err === "Request failed with status code 422"
                                ? "ring-red-500 border-red-500 dark:ring-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 text-red-500"
                                : ""
                        } focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
                        placeholder="john.doe@company.com"
                        // Bind value to user.email state
                        value={user.email}
                        // Update user state on change
                        onChange={(e) =>
                            setUser({
                                type: "email",
                                email: e.target.value,
                            })
                        }
                        required
                    />
                </div>
                <div className="mb-6">
                    {/* label for password input field */}
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    {/* password input field */}
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        value={user.password}
                        onChange={(e) =>
                            setUser({
                                type: "password",
                                password: e.target.value,
                            })
                        }
                        required
                    />
                </div>
                <div className="mb-6">
                    {/* Label for confirm password */}
                    <label
                        htmlFor="confirm_password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm password
                    </label>

                    {/* Input for confirm password */}
                    <input
                        type="password"
                        id="confirm_password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        value={user.password_confirmation}
                        onChange={(e) =>
                            setUser({
                                type: "password_confirmation",
                                password_confirmation: e.target.value,
                            })
                        }
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Sing Up
                </button>
            </form>
        </div>
    );
};

export default Register;
