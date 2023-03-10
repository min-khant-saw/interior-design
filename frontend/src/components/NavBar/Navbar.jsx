import React, { useMemo, useRef, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { Link, NavLink } from "react-router-dom";
import axiosClient from "../Api/axioClient";

const Navbar = ({ subscribeLog, setSubscribelog }) => {
    const [error, setError] = useState("");
    // State variable to track if the menu is open or closed
    const [isOpen, setIsOpen] = useState(true);
    const subscribe = useRef();
    const closeSubscribeMsg = () => {
        subscribe.current.style.transform = "translateY(-122px)";
        subscribe.current.style.height = "0px";
        return setSubscribelog("");
    };
    useMemo(() => {
        axiosClient
            .get("/user")
            .then((res) => res)
            .catch((err) => setError(err.message));
    }, [localStorage.getItem("token")]);
    return (
        <React.Fragment>
            <div
                className={`text-center flex justify-center items-center gap-x-1 transition-all -translate-y-28 h-0 sticky top-0 left-0
                     ${
                         subscribeLog === "Request failed with status code 422"
                             ? "bg-red-200"
                             : "bg-green-200"
                     }`}
                style={
                    !subscribeLog.length
                        ? { transform: "translateY(-122px)", height: "0px" }
                        : { transform: "translateY(0px)", height: "auto" }
                }
                ref={subscribe}
            >
                <span
                    className="absolute top-0 right-0 m-1 cursor-pointer"
                    onClick={closeSubscribeMsg}
                >
                    <CloseRoundedIcon fontSize="medium" color="warning" />
                </span>
                <span className="text-lg font-bold text-opacity-80 p-3">
                    {subscribeLog === "Request failed with status code 422"
                        ? "Email already exist."
                        : "Successful send."}
                </span>
                <span>
                    {subscribeLog === "Request failed with status code 422" ? (
                        <CloseRoundedIcon fontSize="medium" color="error" />
                    ) : (
                        <DoneRoundedIcon fontSize="medium" color="success" />
                    )}
                </span>
            </div>
            {/* Navbar */}
            <div className="w-full flex justify-between items-baseline pt-1 px-3 shadow-md sticky top-0 left-0 flex-col bg-stone-100 z-10">
                <div>
                    <Link to="/">
                        <img
                            src="/house-tool.png"
                            alt="logo"
                            className="w-20 h-20 rounded inline"
                        />
                        <span
                            className="text-lg font-bold"
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                            }}
                        >
                            Interior Design
                        </span>
                    </Link>
                </div>

                {/* Hamburger menu icon */}
                <div
                    className="block cursor-pointer absolute top-6 right-7 active:bg-gray-200 active:rounded-full p-1 transition-all"
                    onClick={() => setIsOpen((prev) => (prev = false))}
                >
                    {/* Open button */}
                    <div>
                        <MenuRoundedIcon />
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div
                className="block ml-auto bg-slate-100 w-96 transition-all ease-in-out duration-300 h-screen overflow-hidden fixed top-0 max-md:w-full py-4 shadow-lg z-20"
                style={
                    !isOpen
                        ? { right: "0px" } // If menu is open, hide the sidebar by moving it out of view
                        : {
                              right: "-100%", // If menu is closed, show the sidebar by moving it into view
                          }
                }
            >
                {/* Close button */}
                <div
                    className="block cursor-pointer active:bg-gray-200 active:rounded-full transition-all w-max ml-8 mt-1 z-20"
                    onClick={() => setIsOpen((prev) => (prev = true))}
                >
                    <div>
                        <CloseRoundedIcon />
                    </div>
                </div>
                <ul className="flex justify-center mx-auto text-end flex-col gap-3 w-full mt-5 border-t-2">
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Home
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Shop
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            About Us
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Contact us
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Services
                        </a>
                    </li>
                    <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                        <a href="" className="mr-14">
                            Blog
                        </a>
                    </li>
                    {error === "Request failed with status code 401" ? (
                        <>
                            <NavLink to="/login">
                                <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2 border-t-4">
                                    <span className="mr-14">Login</span>
                                </li>
                            </NavLink>
                            <NavLink to="/register">
                                <li className="text-black text-base font-medium relative transition-colors hover:bg-slate-200 w-full p-2">
                                    <span className="mr-14">Sing Up</span>
                                </li>
                            </NavLink>
                        </>
                    ) : null}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
